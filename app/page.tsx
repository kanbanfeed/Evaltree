"use client";

import { useEffect, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import Link from "next/link";
import { ArrowUp, Shield, Sparkles, Zap, Compass, Users, TrendingUp, CheckCircle2, ArrowRight, BarChart3, Library, Star, ChevronRight, Info } from "lucide-react";

export default function Home() {
  // ✅ SCROLL BUTTON STATE
  const [showTopBtn, setShowTopBtn] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    
    // Intersection Observer for fade-in animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-up');
          }
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('.fade-up-element').forEach((el) => observer.observe(el));

    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      
      <div className="fixed top-0 left-0 w-full z-50 bg-white/98 backdrop-blur-md shadow-lg border-b bg-[#E8F0F7] border-gray-100/20">
        <Navbar />
      </div>

      <div >
        <main>
          <section className="relative bg-gradient-to-br from-[#0D2137] via-[#0F2A3E] to-[#0A1A2F] text-white overflow-hidden">
            {/* Abstract geometric background patterns */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23B7860B%22 fill-opacity=%220.08%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            </div>
            
            {/* Gradient orbs for depth */}
            <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#B7860B]/20 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-[#B7860B]/10 rounded-full blur-3xl"></div>
            
            <div className="relative max-w-7xl mx-auto px-16 py-14 md:py-14 lg:py-20 text-center">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-2 py-2 mb-8 border border-white/20 fade-up-element">
                <Sparkles className="w-4 h-4 text-[#B7860B]" />
                <span className="text-sm font-medium tracking-wide">Data-Driven Career Intelligence</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-5xl font-bold leading-tight mb-6 fade-up-element tracking-tight">
                You've built the career everyone <br/>said you should want.
                <span className="block bg-gradient-to-r from-[#B7860B] to-[#E5A620] bg-clip-text text-transparent mt-4">So why does Sunday night feel <br/> like a prison sentence?</span>
              </h1>

              <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-200 fade-up-element">
                Most people don't make bad career decisions because they lack information.
                They make bad decisions because nobody showed them what actually happened
                to people in their exact situation.
              </p>

              <div className="fade-up-element mt-4">
                <Link href="/diagnostic">
                  <button className="group relative bg-[#B7860B] text-black px-10 py-3 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#E5A620] hover:scale-105 hover:shadow-2xl inline-flex items-center gap-3 overflow-hidden">
                    <span className="relative z-10">Take The Free Diagnostic →</span>
                    <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform relative z-10" />
                    <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </button>
                </Link>
              </div>

              <div className="mt-6 flex items-center justify-center gap-2 text-sm text-gray-400 fade-up-element">
                <Zap className="w-4 h-4 text-[#B7860B]" />
                <span>Free. Takes 4 minutes. No account required.</span>
              </div>
            </div>
            
            {/* Curved bottom separator */}
            <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
              <svg className="relative block w-full h-12 md:h-16" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white"></path>
              </svg>
            </div>
          </section>

          {/* CREDIBILITY - Enhanced with subtle gradient and trust indicators */}
          <section className="bg-white py-8 px-2 border-b border-gray-100">
            <div className="max-w-7xl mx-auto">
              <div className="flex flex-wrap items-center justify-center gap-6 md:gap-12">
                <div className="flex items-center gap-2 text-gray-600">
                  <Shield className="w-5 h-5 text-[#B7860B]" />
                  <span className="text-sm font-medium">Verified Data Sources</span>
                </div>
                <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Library className="w-5 h-5 text-[#B7860B]" />
                  <span className="text-sm font-medium">U.S. Bureau of Labor Statistics</span>
                </div>
                <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
                <div className="flex items-center gap-2 text-gray-600">
                  <BarChart3 className="w-5 h-5 text-[#B7860B]" />
                  <span className="text-sm font-medium">Gallup · McKinsey · Harvard Business Review</span>
                </div>
                <div className="h-6 w-px bg-gray-200 hidden md:block"></div>
                <div className="flex items-center gap-2 text-gray-600">
                  <TrendingUp className="w-5 h-5 text-[#B7860B]" />
                  <span className="text-sm font-medium">World Economic Forum</span>
                </div>
              </div>
            </div>
          </section>

          {/* WHAT WE DO - Enhanced with modern card design and hover effects */}
          <section className="py-20  mx-auto px-6 bg-[#E8F0F7]">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#B7860B]/10 text-[#B7860B] text-sm font-semibold tracking-wide mb-4 fade-up-element">Our Philosophy</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 fade-up-element">
                What Evaltree Is
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#B7860B] to-[#E5A620] mx-auto rounded-full fade-up-element"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto fade-up-element">Evidence-based clarity, not opinion. Real outcomes, not promises.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: Compass, title: "Not Advice", description: "We don't tell you what to do. We don't coach. We don't motivate.", color: "from-blue-50 to-indigo-50", iconColor: "text-[#0D2137]" },
                { icon: Users, title: "Real Cases", description: "We show you what actually happened to people in your exact situation. Good outcomes and bad ones.", color: "from-amber-50 to-orange-50", iconColor: "text-[#B7860B]" },
                { icon: TrendingUp, title: "Your Decision", description: "You see the data. You decide. That is the complete scope of what we do.", color: "from-emerald-50 to-teal-50", iconColor: "text-[#0D2137]" }
              ].map((item, idx) => (
                <div key={idx} className={`group relative bg-gradient-to-br ${item.color} rounded-2xl p-8 transition-all duration-500 hover:shadow-2xl hover:-translate-y-2 border border-[#0D2137]-100/50 fade-up-element overflow-hidden`}>
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:scale-150 transition-transform duration-700 border  border-[#0D2137]-100/50"></div>
                  <div className="relative z-10">
                    <div className="w-14 h-14 bg-white/80 rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform duration-300">
                      <item.icon className={`w-7 h-7 ${item.iconColor}`} />
                    </div>
                    <h3 className="font-bold text-xl mb-3 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* HOOK - Enhanced with pull quote styling and visual depth */}
          <section className="relative bg-[#0D2137] py-18 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23B7860B%22 fill-opacity=%220.05%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
            <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-[#B7860B]/5 rounded-full blur-3xl"></div>
            
            <div className="max-w-4xl mx-auto text-center relative z-10">
             <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight fade-up-element">
               <span className="text-7xl text-[#B7860B] mb-6 fade-up-element font-serif">“</span>
                59% of employed US professionals report being psychologically disengaged from their work while maintaining full employment.
                <span className="text-7xl text-[#B7860B] mt-6 rotate-180 fade-up-element font-serif">”</span>
              </h2>
              
              

              <div className="mt-8 inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 fade-up-element">
                <Library className="w-4 h-4 text-[#B7860B]" />
                <p className="text-sm text-gray-300 font-medium">Source: Gallup — State of the Global Workplace Report (2024)</p>
              </div>

              <p className="mt-10 text-lg text-gray-200 max-w-2xl mx-auto leading-relaxed fade-up-element">
                If you are employed, earning well, and quietly wondering whether you are in the right place — you are not alone. And this was built for you.
              </p>

              <div className="fade-up-element mt-10">
                <Link href="/diagnostic">
                  <button className="group inline-flex items-center gap-2 bg-[#B7860B] text-black px-8 py-4 rounded-xl font-semibold transition-all duration-300 hover:bg-[#E5A620] hover:scale-105 shadow-lg">
                    Take The Free Diagnostic
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </section>

          {/* HOW IT WORKS - Enhanced with modern step design */}
          <section id="how" className="py-16 mx-auto px-6 bg-[#E8F0F7]">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#B7860B]/10 text-[#B7860B] text-sm font-semibold tracking-wide mb-4 fade-up-element">Simple Process</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 fade-up-element">
                How It Works
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#B7860B] to-[#E5A620] mx-auto rounded-full fade-up-element"></div>
              <p className="mt-4 text-gray-600 max-w-2xl mx-auto fade-up-element">Four steps to career clarity. No fluff. Just evidence.</p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Answer 7 Questions", description: "Honest, direct questions about your career situation. Takes 4 minutes.", color: "from-emerald-50 to-teal-100" },
                { step: "02", title: "We Map Your Pattern", description: "Our system identifies which documented pattern your answers match — based on real labor market research.", color: "from-emerald-50 to-teal-100" },
                { step: "03", title: "See What Happened To Others", description: "You receive a personalised intelligence document showing real cases, real data, and real outcomes for people in your situation.", color: "from-emerald-50 to-teal-100" },
                { step: "04", title: "You Decide", description: "No recommendation. No agenda. The data is yours. What you do with it is up to you.", color: "from-emerald-50 to-teal-100" }
              ].map((item, idx) => (
                <div key={idx} className={`group bg-gradient-to-br ${item.color} rounded-2xl p-6 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 border border-[#0D2137]-100/50 fade-up-element`}>
                  <div className="flex flex-col items-center text-center">
                    <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-5 shadow-sm group-hover:shadow-md transition-all">
                      <span className="text-2xl font-bold bg-gradient-to-r from-[#B7860B] to-[#E5A620] bg-clip-text text-transparent">{item.step}</span>
                    </div>
                    <h3 className="font-bold text-lg mb-2 text-gray-900">{item.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* PRODUCTS - Enhanced with premium card styling and visual hierarchy */}
          <section id="products" className="py-16 mx-auto px-6 bg-[#0D2137]">
            <div className="text-center mb-16">
              <span className="inline-block px-4 py-1.5 rounded-full bg-[#B7860B]/10 text-[#B7860B] text-sm font-semibold tracking-wide mb-4 fade-up-element">Our Intelligence Documents</span>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 fade-up-element">
                Evidence-Based Career Intelligence
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-[#B7860B] to-[#E5A620] mx-auto rounded-full fade-up-element"></div>
              <p className="mt-4 text-white max-w-2xl mx-auto fade-up-element">Choose the depth of insight that matches your situation.</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 items-start">
              <div className="fade-up-element">
                <ProductCard
                  label="Base Intelligence"
                  title="The Mirror"
                  price="$45"
                  description="Your situation mapped against real documented patterns. What happened to people who answered exactly the way you answered. Some thrived. Some did not. You see both."
                />
              </div>

              <div className="fade-up-element transform md:scale-105 z-10">
                <div className="relative">
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gradient-to-r from-[#B7860B] to-[#E5A620] text-black text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
                  <ProductCard
                    label="Extended Intelligence"
                    title="The Map"
                    price="$95"
                    description="Everything in The Mirror plus every path available from your current position. Four documented transition routes. Real outcomes for each. Real failures included alongside successes."
                    highlight
                  />
                </div>
              </div>

              <div className="fade-up-element">
                <ProductCard
                  label="Full Decision Intelligence"
                  title="The Reckoning"
                  price="$295"
                  description="The complete financial and personal cost of every decision — including the decision to do nothing. Modelled against real documented cases over 12, 24, and 36 months."
                />
              </div>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-gray-500 fade-up-element">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#B7860B]" />
                <span>All documents are delivered instantly by email.</span>
              </div>
              <div className="w-px h-4 bg-gray-300 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Shield className="w-4 h-4 text-[#B7860B]" />
                <span>Licensed for personal use.</span>
              </div>
              <div className="w-px h-4 bg-gray-300 hidden sm:block"></div>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-[#B7860B]" />
                <span>Backed by a full refund policy.</span>
              </div>
            </div>
          </section>

          {/* REAL SECTION - Enhanced with data visualization style */}
          <section className="relative bg-[#E8F0F7] py-20 px-6 overflow-hidden">
            <div className="absolute inset-0">
              <svg className="absolute bottom-0 left-0 w-full h-48 text-[#B7860B]/5" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="currentColor"></path>
              </svg>
            </div>
            
            <div className="max-w-5xl mx-auto text-center relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-8 fade-up-element">
                <Info className="w-4 h-4 text-[#B7860B]" />
                <span className="text-sm font-medium text-[#0D2137]">Verified & Transparent</span>
              </div>
              
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0D2137] mb-8 fade-up-element">
                Every case in our documents is real.
              </h2>

              <div className="backdrop-blur-sm rounded-2xl p-8 border border-[#0D2137] fade-up-element bg-[#0D2137]">
                <p className="text-lg text-gray-200 leading-relaxed">
                  Names are changed. Financial figures are calculated using BLS wage data and Census Bureau income mobility statistics. Every factual claim is sourced from government bodies, regulators, or recognized research institutions. You can verify every source. We cite them all.
                </p>
              </div>
              
              <div className="mt-8 flex flex-wrap items-center justify-center gap-4 fade-up-element">
                <span className="text-sm text-[#0D2137]">Trusted Sources:</span>
                <div className="flex flex-wrap gap-3">
                  {["BLS", "Census Bureau", "Gallup", "McKinsey", "HBR", "WEF"].map((source) => (
                    <span key={source} className="text-xs bg-[#0D2137] px-3 py-1 rounded-full text-gray-300">{source}</span>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* FINAL CTA - Enhanced with gradient and subtle animation */}
          <section className="relative bg-gradient-to-r from-[#B7860B] to-[#E5A620] py-28 px-6 overflow-hidden">
            <div className="absolute inset-0 bg-black/5"></div>
            <div className="absolute -top-24 -right-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-white/10 rounded-full blur-3xl"></div>
            
            <div className="max-w-3xl mx-auto text-center relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 fade-up-element">
                Not sure which document is right for you?
              </h2>

              <p className="text-xl text-gray-800 mb-10 fade-up-element">
                Take the free 4-minute diagnostic. We will tell you exactly which pattern you are in and which document addresses it directly.
              </p>

              <div className="fade-up-element">
                <Link href="/diagnostic">
                  <button className="group inline-flex items-center gap-3 bg-[#0D2137] text-white px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-[#1A2F45] hover:scale-105 hover:shadow-2xl">
                    <Compass className="w-5 h-5" />
                    Start With The Free Diagnostic
                    <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />

        {/* ✅ SCROLL TO TOP BUTTON - Enhanced with modern design */}
        {showTopBtn && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 bg-gradient-to-r from-[#B7860B] to-[#E5A620] text-black p-4 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-110 group z-50"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          </button>
        )}
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-up {
          animation: fadeUp 0.8s cubic-bezier(0.2, 0.9, 0.4, 1.1) forwards;
        }
        
        .fade-up-element {
          opacity: 0;
        }
        
        .fade-up-element.animate-fade-up {
          opacity: 1;
        }
        
        /* Stagger animations for multiple elements */
        .fade-up-element:nth-child(1).animate-fade-up { animation-delay: 0.1s; }
        .fade-up-element:nth-child(2).animate-fade-up { animation-delay: 0.2s; }
        .fade-up-element:nth-child(3).animate-fade-up { animation-delay: 0.3s; }
        .fade-up-element:nth-child(4).animate-fade-up { animation-delay: 0.4s; }
        .fade-up-element:nth-child(5).animate-fade-up { animation-delay: 0.5s; }
        .fade-up-element:nth-child(6).animate-fade-up { animation-delay: 0.6s; }
        
        /* Smooth scroll behavior */
        html {
          scroll-behavior: smooth;
        }
      `}</style>
    </>
  );
}