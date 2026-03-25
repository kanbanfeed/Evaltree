"use client";

import { useState } from "react";
import ProductCard from "@/components/ProductCard";
import Footer from "@/components/Footer";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Home, CheckCircle2, Brain, TrendingUp, Sparkles, Shield, Zap, Compass, ChevronRight, BarChart3 } from "lucide-react";

type Question = {
  question: string;
  options: string[];
};

const questions: Question[] = [
  {
    question: "When did you last feel genuinely excited about a Monday morning?",
    options: [
      "I actually cannot remember",
      "Maybe 2 to 3 years ago",
      "Last year but it passed",
      "Never — I have always just tolerated it",
    ],
  },
  {
    question: "What do you tell yourself at 11pm on Sunday?",
    options: [
      "Maybe next week will be different",
      "I cannot keep doing this but I do not know what else to do",
      "I am wasting my life",
      "I have already decided — I just have not acted yet",
    ],
  },
  {
    question: "When a peer quits to build something, your honest first reaction is?",
    options: [
      "Jealousy I cannot admit out loud",
      "Relief it was not me — I need the security",
      "Inspiration that lasts about 48 hours then disappears",
      "I have stopped watching — it hurts too much",
    ],
  },
  {
    question: "What has this career already cost you that does not appear on your payslip?",
    options: [
      "A relationship or the quality of one",
      "My health — physical or mental",
      "Years I will not get back",
      "The person I thought I would become",
    ],
  },
  {
    question: "If your salary disappeared tomorrow, what would you do?",
    options: [
      "Panic completely — I have no plan",
      "I have thought about this and have a rough idea",
      "I know exactly what I would do — I just have not done it",
      "I would be scared but honestly slightly relieved",
    ],
  },
  {
    question: "What is the real reason you have not made a change yet?",
    options: [
      "I do not know what I would do instead",
      "I cannot afford to get it wrong",
      "I am waiting for the right moment that never comes",
      "What other people would think",
    ],
  },
  {
    question: "What do you actually want from the next 5 years?",
    options: [
      "Freedom over my time more than money",
      "Significantly more money doing something I do not hate",
      "To build something of my own",
      "I want to want something — right now I feel nothing",
    ],
  },
];

export default function DiagnosticPage() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const handleSelect = (option: string) => {
    setSelected(option);

    const updated = [...answers];
    updated[step] = option;
    setAnswers(updated);
  };

  const handleNext = () => {
    if (step < questions.length - 1) {
      setStep(step + 1);
      setSelected(null);
    } else {
      setShowResult(true);
    }
  };

  const getRecommendation = () => {
    if (answers.includes("I am wasting my life")) return "Reckoning";
    if (answers.includes("I know exactly what I would do — I just have not done it"))
      return "Map";
    return "Mirror";
  };

  const recommended = getRecommendation();

  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header with gradient background */}
        <div className="bg-gradient-to-r from-[#0D2137] to-[#0F2A3E] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23B7860B%22 fill-opacity=%220.08%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 py-2 relative z-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-20 h-20 relative group-hover:scale-105 transition-transform duration-300">
                <img
                  src="/Evaltree_logo.jpeg"
                  alt="Evaltree Logo"
                  className="w-full h-full object-contain"
                />
              </div>
                <div className="text-xl font-bold tracking-tight">
                  Evaltree
                </div>
              </div>
              <Link href="/">
                <button className="group flex items-center gap-2 bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 px-4 py-2 rounded-xl text-sm font-medium border border-white/20">
                  <Home className="w-4 h-4" />
                  Back to Home
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto px-6 py-12">
          {!showResult ? (
            <>
              {/* Progress Header */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-[#B7860B]/10 rounded-full px-4 py-2 mb-4">
                  <Brain className="w-4 h-4 text-[#B7860B]" />
                  <span className="text-sm font-medium text-[#B7860B]">Career Diagnostic</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Answer the following 7 questions honestly. There are no right answers.
                </h1>
                <p className="text-gray-600 mt-6">
                  Your responses are used only to identify which documented career pattern your situation matches. This takes approximately 4 minutes.
                </p>
                <p className="text-gray-500 mt-6">Your answers are not stored. No account required.</p>
              </div>

              {/* Info Cards */}
              <div className="grid md:grid-cols-2 gap-4 mb-8">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-4 flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#B7860B] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Your answers are private</p>
                    <p className="text-xs text-gray-600">Not stored. No account required.</p>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-4 flex items-start gap-3">
                  <Zap className="w-5 h-5 text-[#B7860B] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-900 mb-1">Takes 4 minutes</p>
                    <p className="text-xs text-gray-600">7 questions to uncover your pattern</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex justify-between text-sm text-gray-600 mb-2">
                  <span>Progress</span>
                  <span className="font-medium">{step + 1} of {questions.length}</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-[#B7860B] to-[#E5A620] h-2.5 rounded-full transition-all duration-500 ease-out"
                    style={{ width: `${((step + 1) / questions.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Card */}
              <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
                <div className="bg-gradient-to-r from-gray-50 to-white px-6 py-4 border-b border-gray-100">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center">
                      <span className="text-[#B7860B] font-bold text-sm">Q{step + 1}</span>
                    </div>
                    <h2 className="text-lg md:text-xl font-bold text-gray-900">
                      {questions[step].question}
                    </h2>
                  </div>
                </div>

                {/* Options */}
                <div className="p-6 space-y-3">
                  {questions[step].options.map((opt, i) => (
                    <div
                      key={i}
                      onClick={() => handleSelect(opt)}
                      className={`group relative border rounded-xl p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                        selected === opt
                          ? "border-[#B7860B] bg-gradient-to-r from-[#FFF8E1] to-[#FFF5E6] shadow-md"
                          : "border-gray-200 hover:border-[#B7860B]/50 hover:bg-gray-50"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`w-5 h-5 rounded-full border-2 flex-shrink-0 mt-0.5 transition-all ${
                          selected === opt
                            ? "border-[#B7860B] bg-[#B7860B] ring-2 ring-[#B7860B]/20"
                            : "border-gray-300 group-hover:border-[#B7860B]"
                        }`} />
                        <p className={`text-gray-700 leading-relaxed ${
                          selected === opt ? "font-medium" : ""
                        }`}>
                          {opt}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Next Button */}
                {selected && (
                  <div className="px-6 pb-6">
                    <button
                      onClick={handleNext}
                      className="group w-full bg-gradient-to-r from-[#B7860B] to-[#E5A620] text-black py-4 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-xl flex items-center justify-center gap-2"
                    >
                      <span>{step === questions.length - 1 ? "See My Results" : "Next Question"}</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              {/* Results Section */}
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 bg-[#B7860B]/10 rounded-full px-4 py-2 mb-4">
                  <Sparkles className="w-4 h-4 text-[#B7860B]" />
                  <span className="text-sm font-medium text-[#B7860B]">Here Is What Your Answers Reveal</span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Here Is What Your Answers Reveal
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-[#B7860B] to-[#E5A620] mx-auto rounded-full mb-4" />
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                  Based on your answers, we recommend starting with <span className="font-bold text-[#B7860B]">{recommended}</span> — but all three are available below.
                </p>
              </div>

              {/* Recommendation Badge */}
              <div className="bg-gradient-to-r from-[#0D2137] to-[#0F2A3E] rounded-2xl p-6 mb-8 text-white">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 bg-[#B7860B]/20 rounded-xl flex items-center justify-center">
                    <Compass className="w-6 h-6 text-[#B7860B]" />
                  </div>
                  <div>
                    <p className="text-sm opacity-80">Recommended for you</p>
                    <p className="text-2xl font-bold">{recommended}</p>
                  </div>
                </div>
                <p className="text-gray-200 text-sm leading-relaxed">
                  This recommendation is based on documented patterns from real cases matching your responses.
                </p>
              </div>

              {/* Product Cards Grid */}
              <div className="space-y-6">
                <div>
                  <div className="flex items-center gap-2 mb-4">
                    <BarChart3 className="w-5 h-5 text-[#B7860B]" />
                    <h3 className="font-semibold text-gray-900">Choose Your Intelligence Document</h3>
                  </div>
                  <div className="grid gap-6">
                    <ProductCard
                      label="Base Intelligence"
                      title="The Mirror"
                      price="$45"
                      description="Your situation mapped against real documented patterns. What happened to people who answered exactly the way you answered. Some thrived. Some did not. You see both."
                      highlight={recommended === "Mirror"}
                    />

                    <ProductCard
                      label="Extended Intelligence — Most Popular"
                      title="The Map"
                      price="$95"
                      description="Everything in The Mirror plus every path available from your current position. Four documented transition routes. Real outcomes for each. Real failures included alongside successes."
                      highlight={recommended === "Map"}
                    />

                    <ProductCard
                      label="Full Decision Intelligence"
                      title="The Reckoning"
                      price="$295"
                      description="The complete financial and personal cost of every decision — including the decision to do nothing. Modelled against real documented cases over 12, 24, and 36 months."
                      highlight={recommended === "Reckoning"}
                    />
                  </div>
                </div>
              </div>

              {/* Retake Link */}
              <div className="text-center mt-8 pt-6 border-t border-gray-200">
                <button
                  onClick={() => {
                    setStep(0);
                    setAnswers([]);
                    setSelected(null);
                    setShowResult(false);
                  }}
                  className="text-sm text-gray-500 hover:text-[#B7860B] transition-colors inline-flex items-center gap-1"
                >
                  <ArrowLeft className="w-4 h-4" />
                  Retake the diagnostic
                </button>
              </div>
            </>
          )}
        </div>

        <Footer />
      </div>
    </>
  );
}