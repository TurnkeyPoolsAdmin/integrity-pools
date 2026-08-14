"use client";

import { useState } from "react";
import { SERVICES } from "@/lib/site";

const LEAD_EMAIL = "mattbsheeran@gmail.com"; // TODO(matt): switch to Integrity's real lead inbox

const PROJECT_OPTIONS = [...SERVICES.map((s) => s.name), "Not sure yet"];

const BUDGETS = ["Under $75k", "$75k - $125k", "$125k - $200k", "$200k+", "Not sure yet"];

const TIMELINES = ["ASAP", "This season", "Next season", "Just exploring"];

const STEPS = ["Project", "Budget", "Details"];

function Chip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded border px-4 py-3 text-left text-[13px] font-semibold transition-colors ${
        active
          ? "border-cyan bg-cyan-mist text-navy"
          : "border-line-strong bg-white text-slate hover:border-cyan hover:text-navy"
      }`}
    >
      <span className={active ? "text-cyan" : "text-faint"}>&#10003;</span> {children}
    </button>
  );
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <label className="flex flex-col gap-2">
      <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-muted">
        {label}
        {required ? " *" : ""}
      </span>
      <input
        type={type}
        value={value}
        required={required}
        onChange={(e) => onChange(e.target.value)}
        className="rounded border border-line-strong px-4 py-3 text-sm text-navy outline-none focus:border-cyan"
      />
    </label>
  );
}

export default function ContactForm() {
  const [step, setStep] = useState(0);
  const [projects, setProjects] = useState<string[]>([]);
  const [budget, setBudget] = useState("");
  const [timeline, setTimeline] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [notes, setNotes] = useState("");
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const toggle = (v: string) =>
    setProjects((p) => (p.includes(v) ? p.filter((x) => x !== v) : [...p, v]));

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    try {
      const res = await fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          _subject: "New Integrity Pools website enquiry",
          Name: name,
          Email: email,
          Phone: phone,
          Address: address,
          Projects: projects.join(", ") || "Not specified",
          Budget: budget || "Not specified",
          Timeline: timeline || "Not specified",
          Notes: notes,
        }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="flex flex-col items-start gap-4 rounded-lg border border-line bg-white p-10">
        <p className="eyebrow m-0">Thank you</p>
        <h2 className="m-0 text-[26px] font-bold uppercase leading-[1.2] text-navy">
          Your request is in
        </h2>
        <p className="m-0 text-base leading-[1.75] text-slate">
          We will come back to you within one business day to book the site visit. If it is urgent,
          call us and we will pick up.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="rounded-lg border border-line bg-white p-6 sm:p-10">
      <ol className="m-0 mb-8 flex list-none gap-2 p-0">
        {STEPS.map((s, i) => (
          <li
            key={s}
            className={`flex flex-1 items-center gap-2 border-t-2 pt-3 text-[11px] font-bold uppercase tracking-[1.2px] ${
              i <= step ? "border-cyan text-navy" : "border-line-cool text-faint"
            }`}
          >
            <span className="numeral">{i + 1}</span>
            {s}
          </li>
        ))}
      </ol>

      {step === 0 ? (
        <div>
          <p className="m-0 mb-1 text-[19px] font-bold text-navy">
            What are you thinking about building?
          </p>
          <p className="m-0 mb-6 text-sm text-slate">Pick everything that applies.</p>
          <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
            {PROJECT_OPTIONS.map((o) => (
              <Chip key={o} active={projects.includes(o)} onClick={() => toggle(o)}>
                {o}
              </Chip>
            ))}
          </div>
        </div>
      ) : null}

      {step === 1 ? (
        <div className="flex flex-col gap-8">
          <div>
            <p className="m-0 mb-1 text-[19px] font-bold text-navy">
              Roughly what budget are you working to?
            </p>
            <p className="m-0 mb-5 text-sm text-slate">
              A range is fine. It helps us design something you would actually build.
            </p>
            <div className="grid grid-cols-1 gap-2.5 sm:grid-cols-2">
              {BUDGETS.map((b) => (
                <Chip key={b} active={budget === b} onClick={() => setBudget(b)}>
                  {b}
                </Chip>
              ))}
            </div>
          </div>
          <div>
            <p className="m-0 mb-5 text-[19px] font-bold text-navy">When would you like to start?</p>
            <div className="grid grid-cols-2 gap-2.5">
              {TIMELINES.map((t) => (
                <Chip key={t} active={timeline === t} onClick={() => setTimeline(t)}>
                  {t}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      ) : null}

      {step === 2 ? (
        <div className="flex flex-col gap-4">
          <p className="m-0 mb-1 text-[19px] font-bold text-navy">Where do we send it?</p>
          <div className="grid gap-4 sm:grid-cols-2">
            <Field label="Name" value={name} onChange={setName} required />
            <Field label="Phone" value={phone} onChange={setPhone} type="tel" required />
          </div>
          <Field label="Email" value={email} onChange={setEmail} type="email" required />
          <Field label="Project address" value={address} onChange={setAddress} />
          <label className="flex flex-col gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-muted">
              Anything else we should know?
            </span>
            <textarea
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              rows={4}
              className="rounded border border-line-strong px-4 py-3 text-sm text-navy outline-none focus:border-cyan"
            />
          </label>
          {status === "error" ? (
            <p className="m-0 text-sm font-semibold text-red-700">
              Something went wrong sending that. Please call us instead.
            </p>
          ) : null}
        </div>
      ) : null}

      <div className="mt-8 flex items-center justify-between gap-4">
        <button
          type="button"
          onClick={() => setStep((s) => Math.max(0, s - 1))}
          disabled={step === 0}
          className="cursor-pointer border-none bg-transparent text-[13px] font-bold uppercase tracking-[1px] text-slate disabled:cursor-default disabled:opacity-30"
        >
          Back
        </button>
        {step < 2 ? (
          <button
            type="button"
            onClick={() => setStep((s) => Math.min(2, s + 1))}
            className="inline-flex cursor-pointer items-center justify-center rounded bg-navy px-9 py-4 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-cyan"
          >
            Continue
          </button>
        ) : (
          <button
            type="submit"
            disabled={status === "sending"}
            className="inline-flex cursor-pointer items-center justify-center rounded bg-cyan px-9 py-4 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-navy disabled:opacity-60"
          >
            {status === "sending" ? "Sending..." : "Send Request"}
          </button>
        )}
      </div>
    </form>
  );
}
