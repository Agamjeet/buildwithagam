"use client";

import { useEffect, useMemo, useState } from "react";
import { LINKEDIN_URL, X_URL } from "../lib/personal";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function todayKey() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function formatNumber(n) {
  if (n == null) return "—";
  return n.toLocaleString("en-US");
}

function formatStamp(stamp) {
  const date = new Date(stamp);
  if (Number.isNaN(date.getTime())) return stamp;
  return date.toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "numeric",
    minute: "2-digit",
  });
}

function monthLabel(year, month) {
  return new Date(year, month, 1).toLocaleString(undefined, {
    month: "long",
    year: "numeric",
  });
}

function latestOnDate(entries, date) {
  return [...entries].reverse().find((entry) => entry.date === date) ?? null;
}

function byDate(entries) {
  const map = {};
  entries.forEach((entry) => {
    map[entry.date] = entry;
  });
  return map;
}

export default function PersonalDesk() {
  const now = new Date();
  const [year, setYear] = useState(now.getFullYear());
  const [month, setMonth] = useState(now.getMonth());
  const [selected, setSelected] = useState(todayKey());
  const [entries, setEntries] = useState([]);
  const [xInput, setXInput] = useState("247");
  const [linkedinInput, setLinkedinInput] = useState("762");
  const [status, setStatus] = useState("");
  const [saving, setSaving] = useState(false);

  function applyEntries(next, date = selected) {
    setEntries(next);
    const hit = latestOnDate(next, date) ?? next.at(-1);
    if (hit) {
      setXInput(String(hit.x));
      setLinkedinInput(String(hit.linkedin));
    }
  }

  useEffect(() => {
    fetch("/api/personal/stats")
      .then((res) => res.json())
      .then((data) => applyEntries(data.entries ?? [], selected))
      .catch(() => setStatus("Could not read the log."));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const days = useMemo(() => {
    const first = new Date(year, month, 1).getDay();
    const count = new Date(year, month + 1, 0).getDate();
    const cells = [];
    for (let i = 0; i < first; i += 1) cells.push(null);
    for (let day = 1; day <= count; day += 1) {
      cells.push(`${year}-${String(month + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`);
    }
    return cells;
  }, [year, month]);

  const dated = byDate(entries);
  const selectedEntry = latestOnDate(entries, selected);
  const latest = entries.at(-1) ?? null;

  function shiftMonth(delta) {
    const next = new Date(year, month + delta, 1);
    setYear(next.getFullYear());
    setMonth(next.getMonth());
  }

  function pickDay(date) {
    setSelected(date);
    const hit = latestOnDate(entries, date) ?? entries.at(-1);
    if (hit) {
      setXInput(String(hit.x));
      setLinkedinInput(String(hit.linkedin));
    }
  }

  async function save(event) {
    event.preventDefault();
    const x = Number(String(xInput).replace(/,/g, ""));
    const linkedin = Number(String(linkedinInput).replace(/,/g, ""));
    if (!Number.isInteger(x) || x < 0 || !Number.isInteger(linkedin) || linkedin < 0) {
      setStatus("Need whole numbers.");
      return;
    }
    setSaving(true);
    setStatus("");
    try {
      const res = await fetch("/api/personal/stats", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ date: selected, x, linkedin }),
      });
      const data = await res.json();
      if (!res.ok) {
        setStatus(data.error || "Save failed.");
        return;
      }
      applyEntries(data.entries ?? [], selected);
      setStatus(`Saved ${selected}.`);
    } catch {
      setStatus("Save failed.");
    } finally {
      setSaving(false);
    }
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950 text-white">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-sky-500/20 blur-3xl" />
      <div className="pointer-events-none absolute -right-16 bottom-10 h-80 w-80 rounded-full bg-indigo-500/20 blur-3xl" />

      <main className="relative mx-auto max-w-4xl px-4 py-16">
        <p className="text-sm font-semibold tracking-widest text-sky-300">FOR YOU ONLY</p>
        <h1 className="mt-3 text-4xl font-bold sm:text-5xl">Hey Agam.</h1>
        <p className="mt-3 text-lg text-slate-300">Type the counts. Pick a day. Save. Nothing auto-updates.</p>

        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <StatCard label="X" value={formatNumber(latest?.x)} href={X_URL} />
          <StatCard label="LinkedIn" value={formatNumber(latest?.linkedin)} href={LINKEDIN_URL} />
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <section className="rounded-3xl border border-white/10 bg-white/5 p-5">
            <div className="mb-4 flex items-center justify-between">
              <button type="button" className="rounded-lg px-3 py-1 text-slate-300 hover:bg-white/10" onClick={() => shiftMonth(-1)}>
                ←
              </button>
              <h2 className="text-lg font-semibold">{monthLabel(year, month)}</h2>
              <button type="button" className="rounded-lg px-3 py-1 text-slate-300 hover:bg-white/10" onClick={() => shiftMonth(1)}>
                →
              </button>
            </div>
            <div className="grid grid-cols-7 gap-1 text-center text-xs text-slate-500">
              {WEEKDAYS.map((day) => (
                <div key={day} className="py-1">
                  {day}
                </div>
              ))}
              {days.map((date, index) => {
                if (!date) return <div key={`e-${index}`} />;
                const logged = Boolean(dated[date]);
                const isSelected = date === selected;
                const isToday = date === todayKey();
                return (
                  <button
                    key={date}
                    type="button"
                    onClick={() => pickDay(date)}
                    className={`aspect-square rounded-xl text-sm ${
                      isSelected
                        ? "bg-sky-500 font-semibold text-slate-950"
                        : logged
                          ? "bg-sky-500/20 text-sky-100 hover:bg-sky-500/30"
                          : "text-slate-300 hover:bg-white/10"
                    } ${isToday && !isSelected ? "ring-1 ring-sky-400/70" : ""}`}
                  >
                    {Number(date.slice(-2))}
                  </button>
                );
              })}
            </div>
          </section>

          <form onSubmit={save} className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/5 p-5">
            <p className="text-sm text-slate-400">
              {selected}
              {selectedEntry ? ` · last saved ${formatStamp(selectedEntry.stamp)}` : " · no log yet"}
            </p>
            <label className="flex flex-col gap-1 text-sm text-slate-400">
              X followers
              <input
                name="x"
                inputMode="numeric"
                value={xInput}
                onChange={(e) => setXInput(e.target.value)}
                className="h-12 rounded-xl border border-white/10 bg-white/5 px-3 text-lg text-white outline-none focus:border-sky-400"
              />
            </label>
            <label className="flex flex-col gap-1 text-sm text-slate-400">
              LinkedIn followers
              <input
                name="linkedin"
                inputMode="numeric"
                value={linkedinInput}
                onChange={(e) => setLinkedinInput(e.target.value)}
                className="h-12 rounded-xl border border-white/10 bg-white/5 px-3 text-lg text-white outline-none focus:border-sky-400"
              />
            </label>
            <button
              type="submit"
              disabled={saving}
              className="h-12 rounded-xl bg-sky-500 font-semibold text-slate-950 hover:bg-sky-400 disabled:opacity-60"
            >
              {saving ? "Saving…" : "Save this day"}
            </button>
            {status ? <p className="text-sm text-slate-400">{status}</p> : null}
          </form>
        </div>

        <section className="mt-8">
          <h2 className="text-sm font-semibold uppercase tracking-wide text-slate-500">Log</h2>
          <ul className="mt-3 space-y-2">
            {[...entries].reverse().map((entry) => (
              <li key={entry.stamp} className="flex flex-wrap justify-between gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm">
                <button type="button" className="text-left text-slate-300 hover:text-white" onClick={() => pickDay(entry.date)}>
                  {formatStamp(entry.stamp)}
                </button>
                <span className="text-slate-200">X {formatNumber(entry.x)}</span>
                <span className="text-slate-200">LinkedIn {formatNumber(entry.linkedin)}</span>
              </li>
            ))}
          </ul>
        </section>
      </main>
    </div>
  );
}

function StatCard({ label, value, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="rounded-3xl border border-white/10 bg-white/5 p-6"
    >
      <p className="text-sm text-slate-400">{label}</p>
      <p className="mt-2 text-5xl font-bold tracking-tight">{value}</p>
    </a>
  );
}
