"use client";

import { useState } from "react";

type View = "Overview" | "Schedule" | "Documents";
const VIEWS: View[] = ["Overview", "Schedule", "Documents"];
const PHASES = ["Excavation", "Steel & plumbing", "Concrete shell", "Tile & decking", "Interior finish", "Startup & care"];
const FILES = [
  { name: "Pool design & layout", detail: "Your approved design", status: "Available" },
  { name: "Site plan", detail: "Pool position and yard layout", status: "Available" },
  { name: "Signed building permit", detail: "Approved permit", status: "Available" },
  { name: "Equipment manuals", detail: "Reference guides for your equipment", status: "At handover" },
  { name: "Warranty documents", detail: "Coverage and care requirements", status: "At handover" },
];

function FileIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true" className="h-5 w-5 shrink-0"><path d="M14 3H6a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8l-5-5Z" /><path d="M14 3v5h5M8 12h8M8 16h6" /></svg>;
}

function Check() {
  return <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true" className="h-3.5 w-3.5"><path d="m3 8 3 3 7-7" strokeLinecap="round" strokeLinejoin="round" /></svg>;
}

export default function CustomerPortalPreview() {
  const [view, setView] = useState<View>("Overview");

  return (
    <div className="min-w-0 overflow-hidden rounded-2xl border border-white/20 bg-white text-navy shadow-[0_24px_70px_rgba(0,0,0,0.2)]" role="group" aria-label="Interactive customer portal preview with sample project information">
      <div className="flex items-center justify-between gap-3 border-b border-line px-5 py-4 sm:px-6">
        <div className="flex items-center gap-2.5">
          <span aria-hidden="true" className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-[11px] font-bold tracking-wide text-white">IP</span>
          <div><p className="m-0 text-[11px] font-bold tracking-[1.5px]">INTEGRITY</p><p className="m-0 text-[11px] text-slate">Homeowner portal</p></div>
        </div>
        <span className="rounded-full border border-line px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[.8px] text-slate">Sample project</span>
      </div>

      <div className="flex gap-5 border-b border-line px-5 sm:px-6" role="group" aria-label="Preview views">
        {VIEWS.map((item) => (
          <button key={item} type="button" aria-pressed={view === item} aria-controls="portal-preview-content" onClick={() => setView(item)} className={`min-h-12 border-b-2 px-0.5 text-xs font-semibold transition-colors ${view === item ? "border-cyan text-cyan" : "border-transparent text-slate hover:text-navy"}`}>
            {item}
          </button>
        ))}
      </div>

      <div id="portal-preview-content" className="min-h-[390px] bg-[#f6f8fa] p-5 sm:p-6">
        <div className="mb-5 flex flex-wrap items-start justify-between gap-3">
          <div>
            <h3 className="m-0 font-sans text-xl font-semibold tracking-[-.3px]">{view === "Overview" ? "Your pool project" : view === "Schedule" ? "Your project schedule" : "Your project documents"}</h3>
            <p className="mb-0 mt-1 text-xs text-slate">Custom pool &amp; spa <span aria-hidden="true">·</span> Menifee, CA</p>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-pale px-2.5 py-1 text-[11px] font-semibold text-cyan"><span className="h-1.5 w-1.5 rounded-full bg-aqua" />In construction</span>
        </div>

        {view === "Overview" && (
          <>
            <div className="rounded-xl border border-line bg-white p-4 sm:p-5">
              <div className="flex items-start justify-between gap-3">
                <div><p className="m-0 text-[10px] font-semibold uppercase tracking-[1.2px] text-slate">Current phase</p><h4 className="mb-0 mt-1 font-sans text-lg font-semibold">Steel &amp; plumbing</h4></div>
                <span className="pt-1 text-xs text-slate">Step <strong className="text-navy">2</strong> of 6</span>
              </div>
              <ol className="mb-0 mt-5 grid list-none grid-cols-3 gap-x-3 gap-y-4 p-0 sm:grid-cols-6 sm:gap-x-2" aria-label="Construction progress">
                {PHASES.map((phase, i) => (
                  <li key={phase} className="relative min-w-0">
                    <div aria-hidden="true" className={`mb-2 h-[3px] rounded-full ${i < 2 ? "bg-aqua" : "bg-line"}`} />
                    <span className={`mb-1.5 flex h-5 w-5 items-center justify-center rounded-full text-[10px] font-semibold ${i === 0 ? "bg-navy text-white" : i === 1 ? "bg-cyan text-white ring-2 ring-cyan-mist ring-offset-2" : "bg-white text-slate ring-1 ring-line"}`} aria-hidden="true">{i === 0 ? <Check /> : i + 1}</span>
                    <span className={`block text-[10px] leading-[1.5] ${i === 1 ? "font-semibold text-navy" : "text-slate"}`}>{phase}<span className="sr-only">: {i === 0 ? "complete" : i === 1 ? "in progress" : "upcoming"}</span></span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="mt-3 grid gap-3 sm:grid-cols-2">
              <div className="rounded-xl border border-line bg-white p-4">
                <p className="m-0 text-[10px] font-semibold uppercase tracking-[1.2px] text-slate">Coming up next</p>
                <h4 className="mb-0 mt-2 font-sans text-sm font-semibold">Concrete shell</h4>
                <p className="mb-3 mt-1 text-xs text-slate">Date to be confirmed</p>
                <button type="button" onClick={() => setView("Schedule")} className="inline-flex min-h-9 items-center gap-2 text-xs font-semibold text-cyan hover:underline">See schedule <span aria-hidden="true">→</span></button>
              </div>
              <div className="rounded-xl border border-line bg-white p-4">
                <p className="m-0 text-[10px] font-semibold uppercase tracking-[1.2px] text-slate">Ready when you need them</p>
                <h4 className="mb-0 mt-2 font-sans text-sm font-semibold">Your plans &amp; permits</h4>
                <p className="mb-3 mt-1 text-xs text-slate">3 documents available</p>
                <button type="button" onClick={() => setView("Documents")} className="inline-flex min-h-9 items-center gap-2 text-xs font-semibold text-cyan hover:underline">See documents <span aria-hidden="true">→</span></button>
              </div>
            </div>
          </>
        )}

        {view === "Schedule" && (
          <div className="overflow-hidden rounded-xl border border-line bg-white">
            <div className="flex items-center justify-between gap-3 border-b border-line bg-cyan-pale px-4 py-3 text-xs"><span className="font-semibold">Design &amp; permits</span><span className="flex items-center gap-1.5 text-cyan"><Check />Approved</span></div>
            <ol className="m-0 list-none divide-y divide-line p-0">
              {PHASES.map((phase, i) => <li key={phase} className="flex items-center justify-between gap-3 px-4 py-3"><span className="text-xs font-medium"><span className="mr-2.5 text-muted">0{i + 1}</span>{phase}</span><span className={`text-right text-[11px] ${i === 1 ? "font-semibold text-cyan" : "text-slate"}`}>{i === 0 ? "Complete" : i === 1 ? "In progress" : i === 2 ? "Next · Date to be confirmed" : "Upcoming"}</span></li>)}
            </ol>
          </div>
        )}

        {view === "Documents" && (
          <ul className="m-0 list-none divide-y divide-line overflow-hidden rounded-xl border border-line bg-white p-0">
            {FILES.map((file) => <li key={file.name} className="flex items-center gap-3 px-4 py-3.5"><span className="text-cyan"><FileIcon /></span><div className="min-w-0 flex-1"><h4 className="m-0 font-sans text-xs font-semibold">{file.name}</h4><p className="mb-0 mt-1 text-[11px] text-slate">{file.detail}</p></div><span className={`shrink-0 text-[10px] ${file.status === "Available" ? "font-semibold text-cyan" : "text-slate"}`}>{file.status}</span></li>)}
          </ul>
        )}
      </div>
      <p className="m-0 border-t border-line px-5 py-3 text-[10px] leading-relaxed text-slate sm:px-6">Illustrative portal preview. All project details shown are examples.</p>
    </div>
  );
}
