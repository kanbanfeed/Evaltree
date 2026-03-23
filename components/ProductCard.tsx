"use client";

import { useState } from "react";
import { Sparkles, ArrowRight, Shield, Zap, CheckCircle2 } from "lucide-react";

interface ProductCardProps {
  label: string;
  title: string;
  price: string;
  description: string;
  highlight?: boolean;
}

export default function ProductCard({
  label,
  title,
  price,
  description,
  highlight = false,
}: ProductCardProps) {
  const [loading, setLoading] = useState(false);

  // 👉 Convert title → product key
  const getProductKey = () => {
    if (title.toLowerCase().includes("mirror")) return "mirror";
    if (title.toLowerCase().includes("map")) return "map";
    if (title.toLowerCase().includes("reckoning")) return "reckoning";
    return "";
  };

  const handleCheckout = async () => {
    try {
      setLoading(true);

      const res = await fetch("/api/create-checkout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          product: getProductKey(),
        }),
      });

      const data = await res.json();

      if (data.url) {
        window.location.href = data.url;
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Payment failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className={`group relative bg-white rounded-2xl transition-all duration-500 hover:-translate-y-3
        ${highlight 
          ? "border-2 border-[#B7860B] shadow-2xl shadow-[#B7860B]/10" 
          : "border border-gray-200 shadow-lg hover:shadow-2xl"
        }`}
    >
      {/* Decorative gradient overlay */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
        ${highlight 
          ? "bg-gradient-to-br from-[#B7860B]/5 to-transparent" 
          : "bg-gradient-to-br from-gray-50 to-transparent"
        }`} />
      
      {/* Hover border effect */}
      <div className={`absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none
        ${highlight ? "ring-2 ring-[#B7860B]/30" : "ring-1 ring-gray-200"}`} />
      
      {/* Content container */}
      <div className="relative p-6 md:p-8 z-10">
        {/* LABEL with icon */}
        <div className="flex items-center justify-between mb-4">
          <div className="inline-flex items-center gap-2">
            <div className={`w-1 h-6 rounded-full ${highlight ? "bg-[#B7860B]" : "bg-gray-300"}`} />
            <p className={`text-xs font-semibold tracking-wide uppercase ${highlight ? "text-[#B7860B]" : "text-gray-500"}`}>
              {label}
            </p>
          </div>
          {highlight && (
            <div className="flex items-center gap-1 bg-[#B7860B]/10 px-2 py-1 rounded-full">
              <Sparkles className="w-3 h-3 text-[#B7860B]" />
              <span className="text-[10px] font-bold text-[#B7860B]">BEST VALUE</span>
            </div>
          )}
        </div>

        {/* TITLE */}
        <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2 group-hover:text-[#B7860B] transition-colors duration-300">
          {title}
        </h3>

        {/* PRICE with currency styling */}
        <div className="mt-4 mb-4">
          <div className="flex items-baseline gap-1">
            <span className="text-4xl md:text-5xl font-black text-gray-900">
              {price}
            </span>
            <span className="text-sm text-gray-500 font-medium">USD</span>
          </div>
          <p className="text-xs text-gray-400 mt-1">One-time payment • Lifetime access</p>
        </div>

        {/* DESCRIPTION with improved readability */}
        <div className="mt-4 mb-6">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent mb-4" />
          <p className="text-sm leading-relaxed text-gray-600 min-h-[100px]">
            {description}
          </p>
        </div>

        {/* Feature highlights based on product type */}
        <div className="mb-6 space-y-2">
          {title.toLowerCase().includes("mirror") && (
            <>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CheckCircle2 className="w-3 h-3 text-[#B7860B]" />
                <span>Real documented patterns</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CheckCircle2 className="w-3 h-3 text-[#B7860B]" />
                <span>Success & failure cases</span>
              </div>
            </>
          )}
          {title.toLowerCase().includes("map") && (
            <>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CheckCircle2 className="w-3 h-3 text-[#B7860B]" />
                <span>4 documented transition routes</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CheckCircle2 className="w-3 h-3 text-[#B7860B]" />
                <span>Real outcomes with failures</span>
              </div>
            </>
          )}
          {title.toLowerCase().includes("reckoning") && (
            <>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CheckCircle2 className="w-3 h-3 text-[#B7860B]" />
                <span>12, 24, 36 month projections</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <CheckCircle2 className="w-3 h-3 text-[#B7860B]" />
                <span>Cost of inaction included</span>
              </div>
            </>
          )}
        </div>

        {/* CTA Button with enhanced styling */}
        <button
          onClick={handleCheckout}
          disabled={loading}
          className={`relative w-full py-3.5 rounded-xl font-semibold transition-all duration-300 overflow-hidden group/btn
            ${highlight 
              ? "bg-gradient-to-r from-[#B7860B] to-[#E5A620] text-black shadow-lg hover:shadow-xl" 
              : "bg-gray-900 text-white hover:bg-gray-800 shadow-md hover:shadow-lg"
            }
            ${loading ? "opacity-70 cursor-not-allowed" : "hover:scale-[1.02] active:scale-[0.98]"}
          `}
        >
          <span className="relative z-10 flex items-center justify-center gap-2">
            {loading ? (
              <>
                <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                <span>Processing...</span>
              </>
            ) : (
              <>
                <span>Get {title}</span>
                <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${!loading && "group-hover/btn:translate-x-1"}`} />
              </>
            )}
          </span>
          
          {/* Button hover effect */}
          <div className={`absolute inset-0 opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300
            ${highlight ? "bg-gradient-to-r from-[#E5A620] to-[#B7860B]" : "bg-gradient-to-r from-gray-800 to-gray-900"}`} 
          />
        </button>

        {/* Trust indicator */}
        <div className="mt-4 flex items-center justify-center gap-2">
          <Shield className="w-3 h-3 text-gray-400" />
          <p className="text-[10px] text-gray-400 text-center">
            Secure checkout • Instant delivery
          </p>
        </div>
      </div>

      {/* Decorative corner accent for highlighted card */}
      {highlight && (
        <>
          <div className="absolute top-0 right-0 w-16 h-16 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-8 h-8 bg-[#B7860B] transform rotate-45 translate-x-4 -translate-y-4" />
          </div>
          <div className="absolute bottom-0 left-0 w-16 h-16 overflow-hidden pointer-events-none">
            <div className="absolute bottom-0 left-0 w-8 h-8 bg-[#B7860B]/10 transform rotate-45 -translate-x-4 translate-y-4" />
          </div>
        </>
      )}
    </div>
  );
}