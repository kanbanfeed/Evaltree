import Link from "next/link";
import Footer from "@/components/Footer";
import { Shield, Mail, Clock, CheckCircle2, ArrowLeft, Home, Sparkles, Zap, RefreshCw, DollarSign } from "lucide-react";

export default function RefundPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header with gradient background matching homepage */}
        <div className="bg-gradient-to-r from-[#0D2137] to-[#0F2A3E] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23B7860B%22 fill-opacity=%220.08%22%3E%3Cpath d=%22M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-20"></div>
          </div>
          <div className="max-w-7xl mx-auto px-6 py-8 relative z-10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#B7860B]/10 rounded-xl flex items-center justify-center">
                  <Shield className="w-5 h-5 text-[#B7860B]" />
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

        {/* Main Content */}
        <div className="flex items-center justify-center px-6 py-16 md:py-20">
          <div className="max-w-3xl w-full">
            {/* Refund Policy Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Decorative Top Bar */}
              <div className="h-2 bg-gradient-to-r from-[#B7860B] to-[#E5A620]" />
              
              {/* Header Section */}
              <div className="pt-8 pb-4 px-6 md:px-8 text-center">
                <div className="inline-flex items-center gap-2 bg-[#B7860B]/10 rounded-full px-4 py-2 mb-4">
                  <RefreshCw className="w-4 h-4 text-[#B7860B]" />
                  <span className="text-sm font-medium text-[#B7860B]">Our Promise</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  REFUND POLICY
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[#B7860B] to-[#E5A620] mx-auto rounded-full" />
              </div>

              {/* Content Section */}
              <div className="px-6 md:px-8 pb-8">
                {/* Main Content */}
                <div className="space-y-6">
                  {/* Policy Points */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <DollarSign className="w-5 h-5 text-[#B7860B]" />
                      </div>
                      <div>
                        <p className="text-gray-700 leading-relaxed">
                          Evaltree intelligence documents are digital products delivered instantly on purchase.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Refund Guarantee Card */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#B7860B]" />
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium mb-1">
                          We offer a full refund within 7 days of purchase, no questions asked.
                        </p>
                        <p className="text-sm text-gray-600 mt-1">
                          Your satisfaction is guaranteed.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* How to Request */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Mail className="w-5 h-5 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <p className="text-gray-800 font-medium mb-2">
                          To request a refund, email support@evaltree.com with your order reference.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-gray-600 mt-2">
                          <Clock className="w-4 h-4" />
                          <span>Refunds are processed within 2 business days</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Refund-first Policy */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Zap className="w-5 h-5 text-[#B7860B]" />
                      </div>
                      <div>
                        <p className="text-gray-800 leading-relaxed">
                          We operate a refund-first policy. We would rather refund than dispute.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Contact Support Section */}
                <div className="mt-8 pt-6 border-t border-gray-100">
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <Shield className="w-4 h-4" />
                      <span>Secure & Transparent</span>
                    </div>
                    <a
                      href="mailto:support@evaltree.com"
                      className="inline-flex items-center gap-2 text-[#B7860B] hover:text-[#E5A620] font-medium transition-colors text-sm"
                    >
                      <Mail className="w-4 h-4" />
                      support@evaltree.com
                    </a>
                  </div>
                </div>

                {/* Footer Note */}
                <div className="mt-6 pt-4 text-center">
                  <p className="text-xs text-gray-400">
                    © 2026 Crowbar Ventures Limited
                  </p>
                </div>
              </div>
            </div>

            {/* Return Home Link */}
            <div className="text-center mt-6">
              <Link href="/">
                <button className="group inline-flex items-center gap-2 text-gray-500 hover:text-[#B7860B] transition-colors text-sm">
                  <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                  Return to Homepage
                </button>
              </Link>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}