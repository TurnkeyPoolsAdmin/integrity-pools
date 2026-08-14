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

type Screen = "landing" | 1 | 2 | 3 | 4 | 5 | "result";

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
    body: "We check that your property is inside our Murrieta & Temecula Valley service area.",
  },
  {
    title: "Get your estimate",
    body: "See a real price range based on our actual build pricing — instantly, no rep required.",
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
    a: "We'll follow up once to see if you'd like to talk through your numbers. If not, no problem — no pressure, ever.",
  },
  {
    q: "I don't get it… What's in it for you?",
    a: "Serious shoppers with realistic numbers make better projects. We'd rather show you real pricing up front than waste your time with a sales dance.",
  },
  {
    q: "How accurate is the estimate?",
    a: "It's a real range built from our actual build pricing. Your final quote depends on your yard's access, slope, and soil — we confirm those at your design consultation.",
  },
  {
    q: "How long does this take?",
    a: "About 2 minutes.",
  },
  {
    q: "Do I need to know exactly what I want?",
    a: "Not at all. Pick the closest options — everything can be refined later during your design consultation.",
  },
];

function Stepper({ step }: { step: number }) {
  return (
    <div className="flex items-center justify-center gap-0 mb-6">
      {[1, 2, 3, 4, 5].map((n) => (
        <div key={n} className="flex items-center">
          <div
            className={`h-3.5 w-3.5 rounded-full border-2 transition-colors ${
              n < step
                ? "bg-secondary border-secondary"
                : n === step
                ? "bg-secondary border-secondary scale-125"
                : "bg-white border-gray-300"
            }`}
          />
          {n < 5 && (
            <div
              className={`h-0.5 w-10 sm:w-14 ${
                n < step ? "bg-secondary" : "bg-gray-300"
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
}

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
    <div className="max-w-2xl mx-auto px-4 py-12">
      <Stepper step={step} />
      <p className="text-center text-xs font-semibold tracking-widest text-secondary uppercase mb-3">
        {kicker}
      </p>
      <h1 className="text-center text-4xl sm:text-5xl font-extrabold text-primary mb-4">
        {title}
      </h1>
      <p className="text-center text-gray-500 mb-8 max-w-xl mx-auto">{sub}</p>
      {children}
      <div className="border-t border-gray-200 mt-10 pt-6 flex items-center justify-between">
        <button
          type="button"
          onClick={onBack}
          className="text-gray-500 hover:text-primary font-medium"
        >
          ← Back
        </button>
        {onContinue && (
          <button
            type="button"
            onClick={onContinue}
            disabled={continueDisabled}
            className={`px-8 py-3 rounded-lg font-semibold text-white transition-colors ${
              continueDisabled
                ? "bg-secondary/40 cursor-not-allowed"
                : "bg-secondary hover:bg-secondary-light"
            }`}
          >
            {continueLabel}
          </button>
        )}
      </div>
    </div>
  );
}

function CheckBadge() {
  return (
    <span className="absolute top-3 right-3 h-5 w-5 rounded-full bg-secondary text-white flex items-center justify-center text-xs">
      ✓
    </span>
  );
}

export default function QuoteWizard() {
  const [screen, setScreen] = useState<Screen>("landing");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

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
    (deckingId === "none" ||
      (!!deckingId && (useExact ? sqft > 0 : !!coverageId)));

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
    setFeatureIds((prev) =>
      prev.includes(id) ? prev.filter((f) => f !== id) : [...prev, id]
    );

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
    fetch("https://formsubmit.co/ajax/mattbsheeran@gmail.com", {
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
        Timeline:
          TIMELINES.find((t) => t.id === timeline)?.label ?? "",
        "Estimate range": `${formatUsd(estimate.low)} – ${formatUsd(
          estimate.high
        )}`,
      }),
    }).catch(() => {});
  };

  /* ---------------- Landing ---------------- */
  if (screen === "landing") {
    return (
      <div>
        <section className="py-20 px-4 text-center">
          <p className="text-xs font-semibold tracking-widest text-secondary uppercase mb-4">
            — For Murrieta &amp; Temecula Valley Homeowners —
          </p>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-primary max-w-3xl mx-auto mb-6">
            Get an Accurate Price for Your Custom Pool Project
          </h1>
          <p className="text-gray-500 max-w-xl mx-auto mb-8">
            See real numbers based on our actual pricing data. No rep required.
          </p>
          <button
            type="button"
            onClick={() => setScreen(1)}
            className="bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
          >
            Get my Instant Quote
          </button>
          <div className="flex items-center justify-center gap-6 mt-8 text-sm text-gray-500">
            <span>⚡ Instant estimate</span>
            <span>✓ No obligation</span>
            <span>👥 Real pricing</span>
          </div>
        </section>

        <section className="bg-gray-light py-16 px-4">
          <p className="text-center text-xs font-semibold tracking-widest text-secondary uppercase mb-3">
            — How It Works —
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-primary mb-12">
            Your estimate in 4 simple steps
          </h2>
          <div className="max-w-2xl mx-auto space-y-10">
            {HOW_IT_WORKS.map((s, i) => (
              <div key={s.title} className="flex items-start gap-6">
                <div className="h-12 w-12 shrink-0 rounded-full bg-secondary/10 text-secondary font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-bold text-primary text-lg mb-1">
                    {s.title}
                  </h3>
                  <p className="text-gray-500">{s.body}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="py-16 px-4">
          <p className="text-center text-xs font-semibold tracking-widest text-secondary uppercase mb-3">
            — Common Questions —
          </p>
          <h2 className="text-center text-3xl sm:text-4xl font-extrabold text-primary mb-10">
            Good to know before you start
          </h2>
          <div className="max-w-xl mx-auto space-y-3">
            {FAQS.map((f, i) => (
              <div
                key={f.q}
                className="border border-gray-200 rounded-xl bg-white"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-5 py-4 text-left font-medium text-primary"
                >
                  {f.q}
                  <span className="text-gray-400 text-xl">
                    {openFaq === i ? "−" : "+"}
                  </span>
                </button>
                {openFaq === i && (
                  <p className="px-5 pb-4 text-gray-500">{f.a}</p>
                )}
              </div>
            ))}
          </div>
        </section>
      </div>
    );
  }

  /* ---------------- Step 1 ---------------- */
  if (screen === 1) {
    return (
      <StepShell
        step={1}
        kicker="Step 1 of 5"
        title="Choose your pool"
        sub="Select the model that best fits your yard and vision. All sizes are approximate and include both freeform and geometric layouts. We can refine during your consultation."
        onBack={() => setScreen("landing")}
        onContinue={() => setScreen(2)}
        continueDisabled={!step1Done}
      >
        <div className="grid sm:grid-cols-2 gap-4">
          {POOL_MODELS.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setPoolId(p.id)}
              className={`relative text-left border rounded-xl p-5 transition-colors ${
                poolId === p.id
                  ? "border-secondary ring-1 ring-secondary"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {poolId === p.id && <CheckBadge />}
              <p className="font-bold text-primary">{p.name}</p>
              <p className="text-sm text-gray-400 mb-2">{p.size}</p>
              <p className="text-sm text-gray-500">{p.description}</p>
            </button>
          ))}
        </div>

        {poolId && (
          <div className="mt-8 border-l-4 border-secondary bg-gray-light rounded-r-xl p-6">
            <p className="font-bold text-primary mb-1">Add pool decking?</p>
            <p className="text-sm text-gray-500 mb-4">
              Choose a material and coverage. We&apos;ll calculate the area
              based on your pool size.
            </p>
            <button
              type="button"
              onClick={() => {
                setDeckingId("none");
                setCoverageId(null);
                setUseExact(false);
              }}
              className={`relative w-full text-left border rounded-xl p-4 mb-4 bg-white transition-colors ${
                deckingId === "none"
                  ? "border-secondary ring-1 ring-secondary"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {deckingId === "none" && <CheckBadge />}
              <p className="font-bold text-primary">No decking</p>
              <p className="text-sm text-gray-500">
                Skip decking for now — we can quote it separately.
              </p>
            </button>
            <div className="grid sm:grid-cols-3 gap-3">
              {DECKING_MATERIALS.map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setDeckingId(m.id)}
                  className={`relative text-left border rounded-xl p-4 bg-white transition-colors ${
                    deckingId === m.id
                      ? "border-secondary ring-1 ring-secondary"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {deckingId === m.id && <CheckBadge />}
                  <p className="font-bold text-primary text-sm mb-1">
                    {m.name}
                  </p>
                  <p className="text-xs text-gray-500">{m.description}</p>
                </button>
              ))}
            </div>

            {deckingId && deckingId !== "none" && pool && (
              <div className="mt-5">
                <p className="font-bold text-primary mb-3">How much decking?</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {DECKING_COVERAGE.map((c) => (
                    <button
                      key={c.id}
                      type="button"
                      onClick={() => {
                        setCoverageId(c.id);
                        setUseExact(false);
                      }}
                      className={`relative text-left border rounded-xl p-4 bg-white transition-colors ${
                        !useExact && coverageId === c.id
                          ? "border-secondary ring-1 ring-secondary"
                          : "border-gray-200 hover:border-gray-300"
                      }`}
                    >
                      {!useExact && coverageId === c.id && <CheckBadge />}
                      <p className="font-semibold text-primary text-sm">
                        {c.label}
                      </p>
                      <p className="text-xs text-gray-400">
                        ≈ {deckingSqft(pool, c.apronFt)} sqft
                      </p>
                    </button>
                  ))}
                  <button
                    type="button"
                    onClick={() => setUseExact(true)}
                    className={`relative text-left border rounded-xl p-4 bg-white sm:col-span-2 transition-colors ${
                      useExact
                        ? "border-secondary ring-1 ring-secondary"
                        : "border-gray-200 hover:border-gray-300"
                    }`}
                  >
                    {useExact && <CheckBadge />}
                    <p className="font-semibold text-primary text-sm">
                      Enter exact sqft
                    </p>
                    <p className="text-xs text-gray-400">
                      I know the square footage I need.
                    </p>
                  </button>
                </div>
                {useExact && (
                  <input
                    type="number"
                    min={0}
                    value={exactSqft}
                    onChange={(e) => setExactSqft(e.target.value)}
                    placeholder="e.g. 800"
                    className="mt-3 w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary"
                  />
                )}
              </div>
            )}
          </div>
        )}
      </StepShell>
    );
  }

  /* ---------------- Step 2 ---------------- */
  if (screen === 2) {
    return (
      <StepShell
        step={2}
        kicker="Step 2 of 5"
        title="Personalize your pool"
        sub="Select the features and upgrades you'd like. Each is individually priced; simply spec out your project the way you want it."
        onBack={() => setScreen(1)}
        onContinue={() => setScreen(3)}
      >
        {FEATURE_GROUPS.map((g) => (
          <div key={g.label} className="mb-8">
            <p className="text-xs font-semibold tracking-widest text-gray-400 uppercase mb-3">
              {g.label}
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              {g.options.map((o) => (
                <button
                  key={o.id}
                  type="button"
                  onClick={() => toggleFeature(o.id)}
                  className={`relative text-left border rounded-xl p-5 transition-colors ${
                    featureIds.includes(o.id)
                      ? "border-secondary ring-1 ring-secondary"
                      : "border-gray-200 hover:border-gray-300"
                  }`}
                >
                  {featureIds.includes(o.id) && <CheckBadge />}
                  <p className="font-bold text-primary mb-1">{o.name}</p>
                  <p className="text-sm text-gray-500">{o.description}</p>
                </button>
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
        sub="This helps us provide the best service timeline for you."
        onBack={() => setScreen(2)}
        onContinue={() => setScreen(4)}
        continueDisabled={!timeline}
      >
        <div className="space-y-3">
          {TIMELINES.map((t) => (
            <button
              key={t.id}
              type="button"
              onClick={() => setTimeline(t.id)}
              className={`relative w-full text-left border rounded-xl p-5 transition-colors ${
                timeline === t.id
                  ? "border-secondary ring-1 ring-secondary"
                  : "border-gray-200 hover:border-gray-300"
              }`}
            >
              {timeline === t.id && <CheckBadge />}
              <p className="font-bold text-primary">{t.label}</p>
              <p className="text-sm text-gray-500">{t.sub}</p>
            </button>
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
        sub="We'll use this to confirm we serve your area and tailor your estimate."
        onBack={() => setScreen(3)}
        onContinue={() => setScreen(5)}
        continueDisabled={address.trim().length < 8}
      >
        <label className="block text-sm font-semibold text-primary mb-2">
          Property address
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          placeholder="Street, city, and ZIP…"
          className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary"
        />
        {served === true && (
          <div className="mt-4 rounded-lg bg-emerald-50 text-emerald-700 px-4 py-3 text-sm">
            ✓ We serve this area.
          </div>
        )}
        {served === false && (
          <div className="mt-4 rounded-lg bg-amber-50 text-amber-700 px-4 py-3 text-sm">
            We may be outside our usual service area — continue anyway and
            we&apos;ll confirm.
          </div>
        )}
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
        sub="Your personalized custom pool estimate will be ready in seconds."
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
          className="space-y-5"
        >
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Full name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Jane Smith"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Email address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="jane@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-primary mb-2">
              Phone number
            </label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="(555) 000-0000"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:border-secondary"
            />
          </div>
          <p className="text-xs text-gray-400">
            By continuing you agree to our privacy policy and consent to be
            contacted by Integrity Pools regarding your pool project.
          </p>
          <div className="flex justify-end">
            <button
              type="submit"
              disabled={!contactValid}
              className={`px-8 py-3 rounded-lg font-semibold text-white transition-colors ${
                contactValid
                  ? "bg-secondary hover:bg-secondary-light"
                  : "bg-secondary/40 cursor-not-allowed"
              }`}
            >
              Get my estimate
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

  return (
    <div className="max-w-2xl mx-auto px-4 py-16 text-center">
      <p className="text-xs font-semibold tracking-widest text-secondary uppercase mb-3">
        Your Instant Estimate
      </p>
      <h1 className="text-4xl sm:text-5xl font-extrabold text-primary mb-4">
        {name.split(" ")[0] ? `${name.split(" ")[0]}, here's` : "Here's"} your
        estimated range
      </h1>
      <p className="text-5xl sm:text-6xl font-extrabold text-secondary my-8">
        {formatUsd(estimate.low)} – {formatUsd(estimate.high)}
      </p>
      <div className="text-left bg-gray-light rounded-xl p-6 mb-8">
        <p className="font-bold text-primary mb-3">Your project</p>
        <ul className="space-y-2 text-gray-600 text-sm">
          {pool && (
            <li>
              • {pool.name} gunite pool ({pool.size})
            </li>
          )}
          <li>
            •{" "}
            {decking
              ? `${decking.name} decking, ≈ ${sqft} sqft`
              : "No decking (quoted separately)"}
          </li>
          {chosenFeatures.map((f) => (
            <li key={f.id}>• {f.name}</li>
          ))}
          {address && <li>• {address}</li>}
        </ul>
      </div>
      <p className="text-gray-500 text-sm max-w-lg mx-auto mb-8">
        This range is based on our standard build pricing. Your exact quote
        depends on yard access, slope, and soil — we&apos;ll confirm everything
        in a free design consultation.
      </p>
      <a
        href="tel:9514447150"
        className="inline-block bg-secondary hover:bg-secondary-light text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors"
      >
        Call (951) 444-7150 to talk it through
      </a>
    </div>
  );
}
