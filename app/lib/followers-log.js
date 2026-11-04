import { mkdir, readFile, writeFile } from "fs/promises";
import path from "path";

export const LOG_PATH = path.join(process.cwd(), "data", "followers.txt");

const LINE =
  /^(?<stamp>\d{4}-\d{2}-\d{2}T[^\s]+)\s+x=(?<x>\d+)\s+linkedin=(?<linkedin>\d+)\s*$/;

export function parseLog(text) {
  return text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line && !line.startsWith("#"))
    .map((line) => {
      const match = line.match(LINE);
      if (!match?.groups) return null;
      const at = new Date(match.groups.stamp);
      if (Number.isNaN(at.getTime())) return null;
      return {
        stamp: match.groups.stamp,
        date: match.groups.stamp.slice(0, 10),
        x: Number(match.groups.x),
        linkedin: Number(match.groups.linkedin),
      };
    })
    .filter(Boolean);
}

export async function readEntries() {
  try {
    const text = await readFile(LOG_PATH, "utf8");
    return parseLog(text);
  } catch (error) {
    if (error.code === "ENOENT") return [];
    throw error;
  }
}

export function formatStamp(date = new Date()) {
  const offset = -date.getTimezoneOffset();
  const sign = offset >= 0 ? "+" : "-";
  const hh = String(Math.floor(Math.abs(offset) / 60)).padStart(2, "0");
  const mm = String(Math.abs(offset) % 60).padStart(2, "0");
  const local = new Date(date.getTime() - date.getTimezoneOffset() * 60000)
    .toISOString()
    .slice(0, 19);
  return `${local}${sign}${hh}:${mm}`;
}

export async function appendEntry({ date, x, linkedin }) {
  const day = String(date).slice(0, 10);
  const now = new Date();
  const [year, month, dayNum] = day.split("-").map(Number);
  const stamped = new Date(
    year,
    month - 1,
    dayNum,
    now.getHours(),
    now.getMinutes(),
    now.getSeconds()
  );
  const stamp = formatStamp(stamped);
  const line = `${stamp}  x=${x}  linkedin=${linkedin}\n`;

  await mkdir(path.dirname(LOG_PATH), { recursive: true });
  let existing = "";
  try {
    existing = await readFile(LOG_PATH, "utf8");
  } catch (error) {
    if (error.code !== "ENOENT") throw error;
    existing = "# timestamp  x=count  linkedin=count\n";
  }
  if (existing && !existing.endsWith("\n")) existing += "\n";
  await writeFile(LOG_PATH, existing + line, "utf8");
  return { stamp, date: day, x, linkedin };
}
