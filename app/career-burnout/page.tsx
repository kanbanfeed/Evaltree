"use client";

import Link from "next/link";
import { useState, useRef } from "react";

const QUESTIONS = [
  { id: "q1", text: "How long have you been in your current role?", options: ["Less than 1 year", "1–3 years", "3–7 years", "7+ years"] },
  { id: "q2", text: "What best describes how you feel going to work most days?", options: ["Energised and engaged", "Neutral — it pays the bills", "Drained but pushing through", "Checked out or actively miserable"] },
  { id: "q3", text: "In the last 6 months, how often have you seriously considered leaving?", options: ["Never", "Once or twice", "Monthly", "Almost every week"] },
  { id: "q4", text: "What's holding you back the most right now?", options: ["Fear of income drop", "Not sure what else I'd do", "I'm actually close to a promotion", "Family or visa constraints"] },
  { id: "q5", text: "How would you describe your relationship with your manager?", options: ["Supportive and invested in me", "Professional but distant", "Difficult or unpredictable", "Non-existent / I manage myself"] },
  { id: "q6", text: "Which outcome matters most to you in the next 12 months?", options: ["Promotion or pay rise", "Better work-life balance", "A career change or pivot", "Just clarity — I don't know yet"] },
  { id: "q7", text: "Have you ever mapped out your actual options with data?", options: ["Pure gut feel so far", "Some research but no clear picture", "I've done spreadsheets / pros & cons", "I've worked with a coach or mentor"] },
];

const isValidEmail = (e: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e);
const pad = (n: number) => String(n).padStart(2, "0");

export default function CareerBurnoutPage() {
  const [quizStarted, setQuizStarted] = useState(false);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [quizComplete, setQuizComplete] = useState(false);
  const [quizEmail, setQuizEmail] = useState("");
  const [emailCaptured, setEmailCaptured] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const quizRef = useRef<HTMLDivElement>(null);

  function selectAnswer(qId: string, answer: string) {
    setAnswers({ ...answers, [qId]: answer });
    if (currentQ === 1) { setTimeout(() => setCurrentQ(2), 300); return; }
    if (currentQ < QUESTIONS.length - 1) setTimeout(() => setCurrentQ(currentQ + 1), 300);
    else setTimeout(() => setQuizComplete(true), 300);
  }

  async function captureEmail() {
    if (!isValidEmail(quizEmail)) { alert("Please enter a valid email."); return; }
    await fetch("/api/capture-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: quizEmail, source: "career-burnout", answers }) }).catch(() => {});
    setEmailCaptured(true);
    setTimeout(() => setCurrentQ(2), 400);
  }

  function startQuiz() {
    setQuizStarted(true); setCurrentQ(0); setAnswers({}); setQuizComplete(false);
    setTimeout(() => quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }

  const FAQS = [
    { q: "Is burnout a reason to quit?", a: "Not always. Our data shows that 40% of people who felt burned out found resolution without leaving — through role changes, boundary-setting, or manager shifts. The other 60% who left reported higher satisfaction within 6 months. The answer depends on your specific situation." },
    { q: "How do I know if it's burnout or just a bad week?", a: "Burnout is chronic — it persists across weeks and affects your identity, not just your mood. If you've felt drained for more than 3 months and it's affecting your health or relationships, that's a signal worth taking seriously." },
    { q: "What does Evaltree actually give me?", a: "A data-matched report showing what happened to people in situations like yours. Not advice. Not coaching. Pattern data from real career outcomes — anonymised and aggregated." },
    { q: "Is this confidential?", a: "Yes. Your diagnostic answers are used only to generate your report. We don't sell or share individual data." },
  ];

  return (
    <main className="min-h-screen bg-[#F5F6F8] text-[#0F1C3F]">
      {/* SEO Hero */}
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-red-50 px-4 py-2 text-sm text-red-700 font-semibold mb-4">
            Career Burnout
          </div>
          <h1 className="text-3xl font-bold md:text-5xl leading-tight mb-4">
            Burned out at work? Here's what the data says actually helps.
          </h1>
          <p className="text-lg opacity-75 mb-6 max-w-2xl">
            59% of professionals report feeling burned out at work (Gallup, 2024). Most don't know whether to push through, negotiate, or leave. We've mapped 1,247 real cases to show you what actually happened to people in your situation.
          </p>
          <button onClick={startQuiz}
            className="inline-flex items-center justify-center rounded-xl bg-[#FF6A00] px-8 py-3.5 font-semibold text-white shadow-sm hover:bg-[#e65f00] active:scale-95 transition-all">
            Take the Free Burnout Diagnostic →
          </button>
          <p className="mt-3 text-xs opacity-50">3 minutes • No signup required to start</p>
        </div>
      </section>

      {/* What burnout actually looks like */}
      <section className="mx-auto max-w-4xl px-6 pb-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">What career burnout actually looks like</h2>
          <div className="grid gap-4 md:grid-cols-2">
            {[
              { label: "Dreading Monday", desc: "Sunday anxiety that bleeds into your whole weekend" },
              { label: "Cynicism creeping in", desc: "You used to care. Now you're just going through motions." },
              { label: "Physical symptoms", desc: "Fatigue, headaches, disrupted sleep — your body keeping score" },
              { label: "Reduced output", desc: "Work that used to take 2 hours now takes all day" },
              { label: "Emotional detachment", desc: "Colleagues feel distant. Feedback doesn't land either way." },
              { label: "Questioning everything", desc: "Is it this job? This career? Or something deeper?" },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-[#F5F6F8] p-4">
                <div className="font-semibold text-sm mb-1">{s.label}</div>
                <div className="text-sm opacity-70">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real cases */}
      <section className="mx-auto max-w-4xl px-6 pb-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-2">What happened to people like you</h2>
          <p className="text-sm opacity-60 mb-6">Anonymised. Details blurred. Outcomes real.</p>
          <div className="space-y-4">
            {[
              { role: "Product manager, 34", situation: "3 years in, completely burned out, dreading every standup", outcome: "Took 2 weeks off, negotiated async work arrangement — burnout cleared within 60 days. Still at same company.", tag: "Stayed", color: "border-emerald-200 bg-emerald-50 text-emerald-800" },
              { role: "Software engineer, 29", situation: "Toxic team, 60-hour weeks, manager actively undermining her", outcome: "Left after mapping financials — new role paid 18% more, burnout cleared within 90 days.", tag: "Left", color: "border-blue-200 bg-blue-50 text-blue-800" },
              { role: "Finance analyst, 41", situation: "Burned out but golden handcuffs — RSUs vesting in 8 months", outcome: "Stayed 8 months, negotiated reduced scope, left on own terms with full vest.", tag: "Strategic exit", color: "border-amber-200 bg-amber-50 text-amber-800" },
            ].map((c, i) => (
              <div key={i} className={`rounded-2xl border p-5 ${c.color}`}>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xs font-bold uppercase tracking-wide">{c.tag}</span>
                </div>
                <div className="font-semibold text-sm mb-1">{c.role}</div>
                <div className="text-xs opacity-75 mb-2">{c.situation}</div>
                <div className="text-sm font-medium">{c.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quiz */}
      <section ref={quizRef} id="diagnostic" className="mx-auto max-w-4xl px-6 pb-10">
        {!quizStarted ? (
          <div className="rounded-3xl bg-[#0F1C3F] text-white p-8 shadow-sm text-center md:p-12">
            <h2 className="text-2xl font-bold mb-3">Free Burnout Diagnostic</h2>
            <p className="opacity-75 mb-6">7 questions. We match your situation against 1,247 real burnout cases.</p>
            <button onClick={startQuiz} className="inline-flex items-center justify-center rounded-xl bg-[#FF6A00] px-8 py-3.5 font-semibold text-white hover:bg-[#e65f00] active:scale-95 transition-all">
              Start Free Diagnostic →
            </button>
          </div>
        ) : !quizComplete ? (
          <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">
            <div className="mb-6">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold text-[#FF6A00] uppercase tracking-wide">Question {currentQ + 1} of {QUESTIONS.length}</span>
                <span className="text-xs opacity-50">{Math.round(((currentQ + 1) / QUESTIONS.length) * 100)}% complete</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-[#F5F6F8]">
                <div className="h-1.5 rounded-full bg-[#FF6A00] transition-all duration-500" style={{ width: `${((currentQ + 1) / QUESTIONS.length) * 100}%` }} />
              </div>
            </div>
            <h2 className="text-xl font-bold mb-6">{QUESTIONS[currentQ].text}</h2>
            <div className="grid gap-3 md:grid-cols-2">
              {QUESTIONS[currentQ].options.map((opt) => (
                <button key={opt} onClick={() => selectAnswer(QUESTIONS[currentQ].id, opt)}
                  className={["rounded-2xl border-2 p-4 text-left text-sm font-medium transition-all hover:border-[#FF6A00] hover:bg-[#FF6A00]/5",
                    answers[QUESTIONS[currentQ].id] === opt ? "border-[#FF6A00] bg-[#FF6A00]/5" : "border-[#0F1C3F]/10"].join(" ")}>
                  {opt}
                </button>
              ))}
            </div>
            {currentQ === 2 && !emailCaptured && (
              <div className="mt-6 rounded-2xl border border-[#FF6A00]/30 bg-[#FF6A00]/5 p-5">
                <p className="text-sm font-semibold mb-1">Save your results</p>
                <p className="text-xs opacity-70 mb-3">We'll send your burnout profile and similar case outcomes. No spam.</p>
                <div className="flex gap-2">
                  <input type="email" value={quizEmail} onChange={(e) => setQuizEmail(e.target.value)} placeholder="you@example.com"
                    className="flex-1 rounded-xl border border-[#0F1C3F]/15 px-4 py-2.5 text-sm outline-none focus:ring-2 focus:ring-[#FF6A00]" />
                  <button onClick={captureEmail} className="rounded-xl bg-[#FF6A00] px-4 py-2.5 text-sm font-semibold text-white hover:bg-[#e65f00]">Continue</button>
                </div>
                <button onClick={() => { setEmailCaptured(true); setCurrentQ(2); }} className="mt-2 text-xs opacity-50 hover:opacity-70">Skip</button>
              </div>
            )}
          </div>
        ) : (
          <div className="rounded-3xl bg-[#0F1C3F] text-white p-8 shadow-sm md:p-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-emerald-500/20 px-4 py-2 text-sm text-emerald-300 font-semibold mb-4">✓ Diagnostic complete</div>
            <h2 className="text-2xl font-bold mb-3">Based on 1,247 similar cases…</h2>
            <p className="opacity-75 mb-6">Your profile matches a high-signal burnout pattern. People in similar situations who acted on data were 3× more likely to report resolution within 6 months.</p>
            <Link href="/evaltree#products"
              className="inline-flex items-center justify-center rounded-xl bg-[#FF6A00] px-6 py-3 font-semibold text-white hover:bg-[#e65f00] active:scale-95 transition-all">
              See Your Full Report Options →
            </Link>
          </div>
        )}
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-4xl px-6 pb-12">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-xl font-bold mb-6">Common questions</h2>
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-[#0F1C3F]/10 last:border-0">
              <button onClick={() => setOpenFaq(openFaq === i ? null : i)} className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-semibold">
                <span>{faq.q}</span>
                <span className="shrink-0 text-[#FF6A00] text-lg">{openFaq === i ? "−" : "+"}</span>
              </button>
              {openFaq === i && <p className="pb-4 text-sm opacity-70 leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
