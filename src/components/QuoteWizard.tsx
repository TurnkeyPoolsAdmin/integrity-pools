"use client";

import { useMemo, useState } from "react";
import {
  POOL_MODELS,
  DECKING_MATERIALS,
  DECKING_COVERAGE,
  FEATURE_GROUPS,
  TIMELINES,
  deckingSqft,
  isServedAddress,
  computeEstimate,
  formatUsd,
} from "@/lib/quotePricing";
import { BUSINESS } from "@/lib/site";
import { ArrowIcon, CheckIcon, PhoneIcon } from "./ui";

type Screen = "landing" | 1 | 2 | 3 | 4 | 5 | "result";

const LEAD_EMAIL = "mattbsheeran@gmail.com"; // TODO(matt): switch to Integrity's real lead inbox

const HOW_IT_WORKS = [
  {
    title: "Share your vision",
    body: "Tell us your target pool size and the features you want. Takes about 2 minutes.",
  },
  {
    title: "Tell us your timeline",
    body: "Whether you're ready now or just exploring, we tailor the process to you.",
  },
  {
    title: "Confirm your location",
    body: "We check that your property is inside our Temecula and Murrieta service area.",
  },
  {
    title: "Get your estimate",
    body: "A real price range built from our actual build pricing, instantly, with no rep required.",
  },
];

const FAQS = [
  {
    q: "Is this free to use?",
    a: "Yes. The estimate is completely free and there is no obligation of any kind.",
  },
  {
    q: "Do I have to talk to anyone to see my estimate?",
    a: "No. Your estimate appears on screen instantly. Nobody has to call you first.",
  },
  {
    q: "What's included in the base price of the pool I select?",
    a: "Design, engineering, permits, excavation, steel, plumbing, gunite shell, standard finish and tile, equipment, and startup. Decking and upgrades are priced separately as you select them.",
  },
  {
    q: "Will someone call me afterward?",
    a: "We will follow up once to see if you would like to talk through your numbers. If not, no problem. No pressure, ever.",
  },
  {
    q: "I don't get it. What's in it for you?",
    a: "Serious shoppers with realistic numbers make better projects. We would rather show you real pricing up front than waste your time with a sales dance.",
  },
  {
    q: "How accurate is the estimate?",
    a: "It is a real range built from our actual build pricing. Your final quote depends on your yard's access, slope and soil, which we confirm at your design consultation.",
  },
  { q: "How long does this take?", a: "About two minutes." },
  {
    q: "Do I need to know exactly what I want?",
    a: "Not at all. Pick the closest options. Everything can be refined later during your design consultation.",
  },
];

/* ------------------------------------------------------------------ */
/* Shared bits                                                         */
/* ------------------------------------------------------------------ */

function Stepper({ step }: { step: number }) {
  return (
    <div className="mb-8 grid grid-cols-5 gap-2">
      {[1, 2, 3, 4, 5].map((n) => (
        <div
          key={n}
          className={`h-[3px] rounded-full transition-colors ${
            n <= step ? "bg-cyan" : "bg-line-cool"
          }`}
        />
      ))}
    </div>
  );
}

function SelectCard({
  selected,
  onClick,
  title,
  meta,
  body,
  className = "",
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  meta?: string;
  body?: string;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`relative cursor-pointer rounded-lg border p-5 text-left transition-colors ${
        selected
          ? "border-cyan bg-cyan-pale"
          : "border-line-strong bg-white hover:border-cyan"
      } ${className}`}
    >
      {selected ? (
        <span className="absolute right-4 top-4 flex h-5 w-5 items-center justify-center rounded-full bg-cyan text-white">
          <CheckIcon className="h-3 w-3" />
        </span>
      ) : null}
      <p className="m-0 pr-7 text-[14px] font-bold uppercase tracking-[0.5px] text-navy">{title}</p>
      {meta ? (
        <p className="m-0 mt-1 text-[11px] font-semibold uppercase tracking-[1.2px] text-muted">
          {meta}
        </p>
      ) : null}
      {body ? <p className="m-0 mt-2 text-sm leading-[1.6] text-slate">{body}</p> : null}
    </button>
  );
}

const INPUT_CLS =
  "w-full rounded border border-line-strong px-4 py-3 text-sm text-navy outline-none transition-colors focus:border-cyan";

function StepShell({
  step,
  kicker,
  title,
  sub,
  children,
  onBack,
  onContinue,
  continueDisabled,
  continueLabel = "Continue",
}: {
  step: number;
  kicker: string;
  title: string;
  sub: string;
  children: React.ReactNode;
  onBack: () => void;
  onContinue?: () => void;
  continueDisabled?: boolean;
  continueLabel?: string;
}) {
  return (
    <section className="section-x bg-shell py-[70px]">
      <div className="mx-auto w-full max-w-[820px] rounded-lg border border-line bg-white p-6 sm:p-12">
        <Stepper step={step} />
        <p className="eyebrow m-0 mb-4">{kicker}</p>
        <h1 className="m-0 mb-5 text-[clamp(28px,4vw,40px)] font-extrabold uppercase leading-[1.12] text-navy">
          {title}
        </h1>
        <p className="m-0 mb-9 text-base leading-[1.75] text-slate">{sub}</p>
        {children}
        <div className="mt-10 flex items-center justify-between gap-4 border-t border-line pt-7">
          <button
            type="button"
            onClick={onBack}
            className="cursor-pointer border-none bg-transparent text-[13px] font-bold uppercase tracking-[1px] text-slate transition-colors hover:text-navy"
          >
            Back
          </button>
          {onContinue ? (
            <button
              type="button"
              onClick={onContinue}
              disabled={continueDisabled}
              className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded bg-navy px-9 py-4 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-cyan disabled:cursor-not-allowed disabled:bg-faint"
            >
              {continueLabel}
              <ArrowIcon className="h-4 w-4" />
            </button>
          ) : null}
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */

export default function QuoteWizard() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  // Step 1
  const [poolId, setPoolId] = useState<string | null>(null);
  const [deckingId, setDeckingId] = useState<string | null | "none">(null);
  const [coverageId, setCoverageId] = useState<string | null>(null);
  const [exactSqft, setExactSqft] = useState<string>("");
  const [useExact, setUseExact] = useState(false);

  // Step 2
  const [featureIds, setFeatureIds] = useState<string[]>([]);

  // Step 3
  const [timeline, setTimeline] = useState<string | null>(null);

  // Step 4
  const [address, setAddress] = useState("");
  const served = address.trim().length >= 8 ? isServedAddress(address) : null;

  // Step 5
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const pool = POOL_MODELS.find((p) => p.id === poolId) ?? null;

  const sqft = useMemo(() => {
    if (!pool || deckingId === "none" || !deckingId) return 0;
    if (useExact) return parseInt(exactSqft, 10) || 0;
    const cov = DECKING_COVERAGE.find((c) => c.id === coverageId);
    return cov ? deckingSqft(pool, cov.apronFt) : 0;
  }, [pool, deckingId, coverageId, useExact, exactSqft]);

  const step1Done =
    !!poolId &&
    (deckingId === "none" || (!!deckingId && (useExact ? sqft > 0 : !!coverageId)));

  const estimate = useMemo(
    () =>
      computeEstimate({
        poolId: poolId ?? "",
        deckingId: deckingId === "none" ? null : deckingId,
        deckingSqftValue: sqft,
        featureIds,
      }),
    [poolId, deckingId, sqft, featureIds]
  );

  const toggleFeature = (id: string) =>
    setFeatureIds((prev) => (prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]));

  const contactValid =
    name.trim().length > 1 &&
    /.+@.+\..+/.test(email) &&
    phone.replace(/\D/g, "").length >= 10;

  // Email the lead to the business inbox. Fire-and-forget: the visitor
  // sees their estimate even if the email service hiccups.
  const sendLead = () => {
    const featureNames = FEATURE_GROUPS.flatMap((g) => g.options)
      .filter((o) => featureIds.includes(o.id))
      .map((o) => o.name)
      .join(", ");
    const deckName =
      deckingId && deckingId !== "none"
        ? DECKING_MATERIALS.find((m) => m.id === deckingId)?.name
        : "None";
    fetch(`https://formsubmit.co/ajax/${LEAD_EMAIL}`, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({
        _subject: `New pool quote lead: ${name}`,
        Name: name,
        Email: email,
        Phone: phone,
        Address: address,
        Pool: pool ? `${pool.name} (${pool.size})` : "",
        Decking: deckName,
        "Decking sqft": sqft || 0,
        Features: featureNames || "None",
        Timeline: TIMELINES.find((t) => t.id === timeline)?.label ?? "",
        "Estimate range": `${formatUsd(estimate.low)} - ${formatUsd(estimate.high)}`,
      }),
    }).catch(() => {});
  };

  /* ---------------- Landing ---------------- */
  if (screen === "landing") {
    return (
      <>
        <section className="section-x bg-white py-[90px] text-center">
          <div className="mx-auto max-w-[860px]">
            <p className="eyebrow m-0 mb-5">For Temecula &amp; Murrieta Homeowners</p>
            <h1 className="m-0 mb-7 text-[clamp(34px,5.2vw,58px)] font-extrabold uppercase leading-[1.06] tracking-[-0.5px] text-navy">
              Get an Accurate Price for Your{" "}
              <span className="text-cyan">Custom Pool Project</span>
            </h1>
            <p className="mx-auto m-0 mb-10 max-w-[560px] text-[17px] leading-[1.75] text-slate">
              A real price range built from our actual build pricing. Two minutes, no rep, no
              obligation.
            </p>
            <button
              type="button"
              onClick={() => setScreen(1)}
              className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded bg-navy px-10 py-[18px] text-sm font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-cyan"
            >
              <ArrowIcon />
              Get My Instant Quote
            </button>
            <ul className="m-0 mt-8 flex list-none flex-wrap items-center justify-center gap-x-8 gap-y-3 p-0">
              {["Instant estimate", "No obligation", "Real pricing"].map((t) => (
                <li
                  key={t}
                  className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[1.5px] text-muted"
                >
                  <span className="shrink-0 text-cyan">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="section-x bg-shell py-[100px]">
          <div className="mx-auto w-full max-w-[1400px]">
            <div className="mb-[50px] max-w-[720px]">
              <p className="eyebrow m-0 mb-4">How It Works</p>
              <h2 className="m-0 text-[clamp(30px,4vw,44px)] font-bold uppercase leading-[1.15] text-navy">
                Your estimate in four steps
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-x-4 gap-y-0 border-t-2 border-line-cool lg:grid-cols-4">
              {HOW_IT_WORKS.map((s, i) => (
                <div
                  key={s.title}
                  className="-mt-0.5 flex flex-col gap-3 border-t-2 border-cyan pb-2.5 pt-6 sm:pr-6 sm:pt-8"
                >
                  <span className="numeral">{String(i + 1).padStart(2, "0")}</span>
                  <h3 className="m-0 text-base font-bold uppercase tracking-[0.5px] text-navy">
                    {s.title}
                  </h3>
                  <p className="m-0 text-sm leading-[1.7] text-slate">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-x bg-white py-[100px]">
          <div className="mx-auto w-full max-w-[980px]">
            <div className="mb-10">
              <p className="eyebrow m-0 mb-4">Common Questions</p>
              <h2 className="m-0 text-[clamp(30px,4vw,44px)] font-bold uppercase leading-[1.15] text-navy">
                Good to know before you start
              </h2>
            </div>
            <div className="border-t border-line-cool">
              {FAQS.map((f, i) => (
                <div key={f.q} className="border-b border-line-cool">
                  <h3 className="m-0">
                    <button
                      type="button"
                      aria-expanded={openFaq === i}
                      onClick={() => setOpenFaq(openFaq === i ? null : i)}
                      className="flex w-full cursor-pointer items-center justify-between gap-6 border-none bg-transparent py-[26px] text-left text-[17px] font-semibold text-navy transition-colors hover:text-cyan"
                    >
                      {f.q}
                      <span
                        aria-hidden="true"
                        className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-shell text-base font-bold leading-none text-cyan"
                      >
                        {openFaq === i ? "–" : "+"}
                      </span>
                    </button>
                  </h3>
                  {openFaq === i ? (
                    <p className="m-0 pb-7 pr-0 text-[15px] leading-[1.8] text-slate md:pr-[60px]">
                      {f.a}
                    </p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }

  /* ---------------- Step 1 ---------------- */
  if (screen === 1) {
    return (
      <StepShell
        step={1}
        kicker="Step 1 of 5"
        title="Choose your pool"
        sub="Pick the model that best fits your yard. Sizes are approximate and cover both freeform and geometric layouts. We refine all of it at your consultation."
        onBack={() => setScreen("landing")}
        onContinue={() => setScreen(2)}
        continueDisabled={!step1Done}
      >
        <div className="grid gap-3 sm:grid-cols-2">
          {POOL_MODELS.map((p) => (
            <SelectCard
              key={p.id}
              selected={poolId === p.id}
              onClick={() => setPoolId(p.id)}
              title={p.name}
              meta={p.size}
              body={p.description}
            />
          ))}
        </div>

        {poolId ? (
          <div className="mt-9 border-l-2 border-cyan bg-shell p-6 sm:p-8">
            <p className="m-0 mb-1 text-base font-bold uppercase tracking-[0.5px] text-navy">
              Add pool decking?
            </p>
            <p className="m-0 mb-5 text-sm leading-[1.7] text-slate">
              Choose a material and coverage. We work out the area from your pool size.
            </p>
            <SelectCard
              className="mb-4 w-full"
              selected={deckingId === "none"}
              onClick={() => {
                setDeckingId("none");
                setCoverageId(null);
                setUseExact(false);
              }}
              title="No decking"
              body="Skip decking for now. We can quote it separately."
            />
            <div className="grid gap-3 sm:grid-cols-3">
              {DECKING_MATERIALS.map((m) => (
                <SelectCard
                  key={m.id}
                  selected={deckingId === m.id}
                  onClick={() => setDeckingId(m.id)}
                  title={m.name}
                  body={m.description}
                />
              ))}
            </div>

            {deckingId && deckingId !== "none" && pool ? (
              <div className="mt-6">
                <p className="m-0 mb-4 text-base font-bold uppercase tracking-[0.5px] text-navy">
                  How much decking?
                </p>
                <div className="grid gap-3 sm:grid-cols-2">
                  {DECKING_COVERAGE.map((c) => (
                    <SelectCard
                      key={c.id}
                      selected={!useExact && coverageId === c.id}
                      onClick={() => {
                        setCoverageId(c.id);
                        setUseExact(false);
                      }}
                      title={c.label}
                      meta={`approx ${deckingSqft(pool, c.apronFt)} sqft`}
                    />
                  ))}
                  <SelectCard
                    className="sm:col-span-2"
                    selected={useExact}
                    onClick={() => setUseExact(true)}
                    title="Enter exact sqft"
                    meta="I know the square footage I need"
                  />
                </div>
                {useExact ? (
                  <input
                    type="number"
                    min={0}
                    value={exactSqft}
                    onChange={(e) => setExactSqft(e.target.value)}
                    placeholder="e.g. 800"
                    className={`mt-3 ${INPUT_CLS}`}
                  />
                ) : null}
              </div>
            ) : null}
          </div>
        ) : null}
      </StepShell>
    );
  }

  /* ---------------- Step 2 ---------------- */
  if (screen === 2) {
    return (
      <StepShell
        step={2}
        kicker="Step 2 of 5"
        title="Personalise your pool"
        sub="Pick the features and upgrades you want. Each one is priced individually, so you can spec the project the way you would actually build it."
        onBack={() => setScreen(1)}
        onContinue={() => setScreen(3)}
      >
        {FEATURE_GROUPS.map((g) => (
          <div key={g.label} className="mb-8">
            <p className="m-0 mb-3 text-[11px] font-bold uppercase tracking-[1.5px] text-muted">
              {g.label}
            </p>
            <div className="grid gap-3 sm:grid-cols-2">
              {g.options.map((o) => (
                <SelectCard
                  key={o.id}
                  selected={featureIds.includes(o.id)}
                  onClick={() => toggleFeature(o.id)}
                  title={o.name}
                  body={o.description}
                />
              ))}
            </div>
          </div>
        ))}
      </StepShell>
    );
  }

  /* ---------------- Step 3 ---------------- */
  if (screen === 3) {
    return (
      <StepShell
        step={3}
        kicker="Step 3 of 5"
        title="When are you planning to build?"
        sub="This helps us give you a realistic timeline rather than a generic one."
        onBack={() => setScreen(2)}
        onContinue={() => setScreen(4)}
        continueDisabled={!timeline}
      >
        <div className="flex flex-col gap-3">
          {TIMELINES.map((t) => (
            <SelectCard
              key={t.id}
              selected={timeline === t.id}
              onClick={() => setTimeline(t.id)}
              title={t.label}
              body={t.sub}
            />
          ))}
        </div>
      </StepShell>
    );
  }

  /* ---------------- Step 4 ---------------- */
  if (screen === 4) {
    return (
      <StepShell
        step={4}
        kicker="Step 4 of 5"
        title="Where is the property?"
        sub="We use this to confirm we serve your area and to allow for local access and permitting."
        onBack={() => setScreen(3)}
        onContinue={() => setScreen(5)}
        continueDisabled={address.trim().length < 8}
      >
        <label className="mb-2 block text-[11px] font-bold uppercase tracking-[1.2px] text-muted">
          Property address
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Street, city and ZIP"
          className={INPUT_CLS}
        />
        {served === true ? (
          <div className="mt-4 flex items-center gap-2.5 rounded border border-cyan bg-cyan-pale px-4 py-3 text-sm font-semibold text-navy">
            <span className="text-cyan">
              <CheckIcon className="h-4 w-4" />
            </span>
            We serve this area.
          </div>
        ) : null}
        {served === false ? (
          <div className="mt-4 rounded border border-line-strong bg-shell px-4 py-3 text-sm text-slate">
            This may be outside our usual service area. Continue anyway and we will confirm.
          </div>
        ) : null}
      </StepShell>
    );
  }

  /* ---------------- Step 5 ---------------- */
  if (screen === 5) {
    return (
      <StepShell
        step={5}
        kicker="Step 5 of 5"
        title="Where should we send your estimate?"
        sub="Your range is ready. Tell us where to send a copy and we will show it on screen straight away."
        onBack={() => setScreen(4)}
      >
        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (contactValid) {
              sendLead();
              setScreen("result");
            }
          }}
          className="flex flex-col gap-5"
        >
          <label className="flex flex-col gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-muted">
              Full name
            </span>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Smith"
              className={INPUT_CLS}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-muted">
              Email address
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className={INPUT_CLS}
            />
          </label>
          <label className="flex flex-col gap-2">
            <span className="text-[11px] font-bold uppercase tracking-[1.2px] text-muted">
              Phone number
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 000-0000"
              className={INPUT_CLS}
            />
          </label>
          <p className="m-0 text-xs leading-[1.7] text-muted">
            By continuing you agree to our privacy policy and consent to be contacted by{" "}
            {BUSINESS.name} about your pool project.
          </p>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!contactValid}
              className="inline-flex cursor-pointer items-center justify-center gap-2.5 rounded bg-cyan px-9 py-4 text-[13px] font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-navy disabled:cursor-not-allowed disabled:bg-faint"
            >
              Get My Estimate
              <ArrowIcon className="h-4 w-4" />
            </button>
          </div>
        </form>
      </StepShell>
    );
  }

  /* ---------------- Result ---------------- */
  const chosenFeatures = FEATURE_GROUPS.flatMap((g) => g.options).filter((o) =>
    featureIds.includes(o.id)
  );
  const decking =
    deckingId && deckingId !== "none"
      ? DECKING_MATERIALS.find((m) => m.id === deckingId)
      : null;
  const firstName = name.trim().split(" ")[0];

  return (
    <section className="section-x bg-shell py-[80px]">
      <div className="mx-auto w-full max-w-[820px]">
        <div className="rounded-lg border border-line bg-white p-6 text-center sm:p-12">
          <p className="eyebrow m-0 mb-5">Your Instant Estimate</p>
          <h1 className="m-0 mb-8 text-[clamp(28px,4vw,42px)] font-extrabold uppercase leading-[1.12] text-navy">
            {firstName ? `${firstName}, here's` : "Here's"} your estimated range
          </h1>
          <p className="m-0 text-[clamp(36px,6vw,60px)] font-extrabold leading-none text-cyan">
            {formatUsd(estimate.low)} – {formatUsd(estimate.high)}
          </p>

          <div className="mt-10 rounded-lg border border-line bg-shell p-6 text-left sm:p-8">
            <p className="m-0 mb-4 text-[13px] font-bold uppercase tracking-[1.5px] text-navy">
              Your project
            </p>
            <ul className="m-0 flex list-none flex-col gap-3 p-0">
              {pool ? (
                <li className="flex items-start gap-3 text-sm leading-[1.65] text-slate">
                  <span className="mt-1 shrink-0 text-cyan">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {pool.name} gunite pool ({pool.size})
                </li>
              ) : null}
              <li className="flex items-start gap-3 text-sm leading-[1.65] text-slate">
                <span className="mt-1 shrink-0 text-cyan">
                  <CheckIcon className="h-3.5 w-3.5" />
                </span>
                {decking
                  ? `${decking.name} decking, approx ${sqft} sqft`
                  : "No decking (quoted separately)"}
              </li>
              {chosenFeatures.map((f) => (
                <li
                  key={f.id}
                  className="flex items-start gap-3 text-sm leading-[1.65] text-slate"
                >
                  <span className="mt-1 shrink-0 text-cyan">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {f.name}
                </li>
              ))}
              {address ? (
                <li className="flex items-start gap-3 text-sm leading-[1.65] text-slate">
                  <span className="mt-1 shrink-0 text-cyan">
                    <CheckIcon className="h-3.5 w-3.5" />
                  </span>
                  {address}
                </li>
              ) : null}
            </ul>
          </div>

          <p className="mx-auto m-0 mb-9 mt-8 max-w-[560px] text-sm leading-[1.75] text-slate">
            This range is based on our standard build pricing. Your exact quote depends on yard
            access, slope and soil, which we confirm in a free design consultation.
          </p>

          <a
            href={BUSINESS.phoneHref}
            className="inline-flex items-center justify-center gap-2.5 rounded bg-navy px-10 py-[18px] text-sm font-bold uppercase tracking-[1px] text-white transition-colors hover:bg-cyan"
          >
            <PhoneIcon className="h-4 w-4" />
            Call {BUSINESS.phone} to talk it through
          </a>
        </div>
      </div>
    </section>
  );
}
