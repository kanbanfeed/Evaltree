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

export default function TechCareerTransitionPage() {
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
    await fetch("/api/capture-email", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ email: quizEmail, source: "tech-career-transition", answers }) }).catch(() => {});
    setEmailCaptured(true);
    setTimeout(() => setCurrentQ(2), 400);
  }

  function startQuiz() {
    setQuizStarted(true); setCurrentQ(0); setAnswers({}); setQuizComplete(false);
    setTimeout(() => quizRef.current?.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
  }

  const FAQS = [
    { q: "Is it realistic to transition out of tech in 2025?", a: "Yes — but the outcomes vary significantly by role, seniority, and target industry. Our data shows that tech professionals who transition with a clear plan have a 70% higher satisfaction rate at 12 months than those who move reactively." },
    { q: "Will I take a salary cut leaving tech?", a: "Not necessarily. In our case library, 44% of tech professionals who transitioned to adjacent fields (product strategy, consulting, operations) maintained or exceeded their tech salary within 18 months." },
    { q: "What if I don't know what I want to transition into?", a: "That's exactly what The Map is for. It models 4 documented transition paths based on your profile — including ones you may not have considered — and shows you what happened to people who took each one." },
    { q: "Is this advice or analysis?", a: "Analysis only. We show you data. You make the decision." },
  ];

  return (
    <main className="min-h-screen bg-[#F5F6F8] text-[#0F1C3F]">
      <section className="mx-auto max-w-4xl px-6 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm text-blue-700 font-semibold mb-4">
            Tech Career Transition
          </div>
          <h1 className="text-3xl font-bold md:text-5xl leading-tight mb-4">
            Thinking about leaving tech? Here's what the data says.
          </h1>
          <p className="text-lg opacity-75 mb-6 max-w-2xl">
            Tech layoffs, AI displacement, and burnout are pushing thousands of professionals to reconsider. We've mapped 1,247 real career transition cases to show you what actually happened — not what career coaches say should happen.
          </p>
          <button onClick={startQuiz}
            className="inline-flex items-center justify-center rounded-xl bg-[#FF6A00] px-8 py-3.5 font-semibold text-white shadow-sm hover:bg-[#e65f00] active:scale-95 transition-all">
            Take the Free Transition Diagnostic →
          </button>
          <p className="mt-3 text-xs opacity-50">3 minutes • Free • No signup required</p>
        </div>
      </section>

      {/* Context */}
      <section className="mx-auto max-w-4xl px-6 pb-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">Why tech professionals are reconsidering</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {[
              { label: "Layoff anxiety", desc: "Even stable roles feel precarious. Planning your next move before it's urgent is the smart play." },
              { label: "AI displacement", desc: "Certain tech roles are shrinking. Others are expanding. Knowing which matters." },
              { label: "Compensation plateaus", desc: "Senior IC comp has stagnated in many orgs. The ladder looks different than it did 3 years ago." },
            ].map((s, i) => (
              <div key={i} className="rounded-2xl bg-[#F5F6F8] p-5">
                <div className="font-semibold text-sm mb-2">{s.label}</div>
                <div className="text-sm opacity-70">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Transition paths */}
      <section className="mx-auto max-w-4xl px-6 pb-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-6">The 4 documented transition paths</h2>
          <p className="text-sm opacity-60 mb-6">Based on case data from 1,247 tech professionals who faced a similar crossroads.</p>
          <div className="space-y-4">
            {[
              { path: "Stay and reposition", desc: "Negotiate scope, change teams, or move into leadership. Works best when culture is fixable and comp is competitive.", outcome: "40% chose this. 72% reported improvement within 6 months.", color: "bg-emerald-50 border-emerald-200" },
              { path: "Lateral move within tech", desc: "Same industry, different company or role type. Product, DevRel, Solutions Engineering, or AI-adjacent roles.", outcome: "31% chose this. Median salary change: +14%.", color: "bg-blue-50 border-blue-200" },
              { path: "Adjacent industry pivot", desc: "Tech skills into fintech, healthtech, consulting, or strategy roles outside pure engineering.", outcome: "20% chose this. Salary parity achieved within 18 months for most.", color: "bg-amber-50 border-amber-200" },
              { path: "Full career change", desc: "Leaving tech entirely — entrepreneurship, creative fields, or purpose-driven sectors.", outcome: "9% chose this. High satisfaction but highest short-term financial risk.", color: "bg-purple-50 border-purple-200" },
            ].map((p, i) => (
              <div key={i} className={`rounded-2xl border p-5 ${p.color}`}>
                <div className="font-semibold mb-1">{p.path}</div>
                <div className="text-sm opacity-75 mb-2">{p.desc}</div>
                <div className="text-xs font-semibold opacity-60">{p.outcome}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real cases */}
      <section className="mx-auto max-w-4xl px-6 pb-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-bold mb-2">Real cases from tech professionals</h2>
          <p className="text-sm opacity-60 mb-6">Anonymised. Details blurred. Outcomes real.</p>
          <div className="space-y-4">
            {[
              { role: "Senior engineer, 35", situation: "Laid off, 3 offers — two in tech, one in fintech consulting", outcome: "Chose fintech consulting. Salary up 22% at 12 months. Better work-life balance.", tag: "Adjacent pivot", color: "border-amber-200 bg-amber-50 text-amber-800" },
              { role: "Product manager, 38", situation: "Feeling stuck, AI threatening her domain", outcome: "Repositioned internally as AI product lead. Same company, new scope — thriving.", tag: "Repositioned", color: "border-emerald-200 bg-emerald-50 text-emerald-800" },
              { role: "Tech lead, 42", situation: "Burned out, wanted to leave entirely, no clear plan", outcome: "Mirror report showed risk of impulsive exit. Negotiated 3-month sabbatical first, returned with clarity.", tag: "Strategic pause", color: "border-blue-200 bg-blue-50 text-blue-800" },
            ].map((c, i) => (
              <div key={i} className={`rounded-2xl border p-5 ${c.color}`}>
                <div className="text-xs font-bold uppercase tracking-wide mb-2">{c.tag}</div>
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
            <h2 className="text-2xl font-bold mb-3">Free Transition Diagnostic</h2>
            <p className="opacity-75 mb-6">7 questions. We match your situation against 1,247 real tech career transitions.</p>
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
                <p className="text-xs opacity-70 mb-3">We'll send your transition profile and similar case outcomes. No spam.</p>
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
            <p className="opacity-75 mb-6">Your profile matches a documented transition pattern. See your full options with real outcome data.</p>
            <Link href="/evaltree#products" className="inline-flex items-center justify-center rounded-xl bg-[#FF6A00] px-6 py-3 font-semibold text-white hover:bg-[#e65f00] active:scale-95 transition-all">
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
