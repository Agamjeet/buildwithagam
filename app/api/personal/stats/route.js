import { appendEntry, readEntries } from "../../../lib/followers-log";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

function latestForDate(entries, date) {
  return [...entries].reverse().find((entry) => entry.date === date) ?? null;
}

export async function GET() {
  const entries = await readEntries();
  const latest = entries.at(-1) ?? null;
  return Response.json({
    entries,
    latest,
    today: latestForDate(entries, new Date().toISOString().slice(0, 10)),
  });
}

export async function POST(request) {
  const body = await request.json().catch(() => ({}));
  const x = Number(String(body.x ?? "").replace(/,/g, ""));
  const linkedin = Number(String(body.linkedin ?? "").replace(/,/g, ""));
  const date = String(body.date ?? "").slice(0, 10);

  if (!/^\d{4}-\d{2}-\d{2}$/.test(date)) {
    return Response.json({ error: "Pick a day." }, { status: 400 });
  }
  if (!Number.isInteger(x) || x < 0 || !Number.isInteger(linkedin) || linkedin < 0) {
    return Response.json({ error: "Need whole numbers for X and LinkedIn." }, { status: 400 });
  }

  const saved = await appendEntry({ date, x, linkedin });
  const entries = await readEntries();
  return Response.json({ saved, entries, latest: entries.at(-1) ?? saved });
}
