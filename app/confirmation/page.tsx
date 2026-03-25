import Footer from "@/components/Footer"; // ✅ ADDED
import Link from "next/link"; // ✅ ADDED
import { CheckCircle2, Mail, Clock, Shield, Home, ArrowLeft, Sparkles, Zap } from "lucide-react";

export default function ConfirmationPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header with gradient background matching homepage */}
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

        {/* Main Content */}
        <div className="flex items-center justify-center px-6 py-20">
          <div className="max-w-2xl w-full">
            {/* Success Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Decorative Top Bar */}
              <div className="h-2 bg-gradient-to-r from-[#B7860B] to-[#E5A620]" />
              
              {/* Icon Section */}
              <div className="pt-8 pb-4 flex justify-center">
                <div className="relative">
                  <div className="absolute inset-0 bg-[#B7860B]/20 rounded-full blur-xl animate-pulse" />
                  <div className="relative w-20 h-20 bg-gradient-to-br from-[#B7860B] to-[#E5A620] rounded-full flex items-center justify-center">
                    <CheckCircle2 className="w-10 h-10 text-white" />
                  </div>
                </div>
              </div>

              {/* Heading */}
              <div className="text-center px-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  Your document is on its way.
                </h1>
                
                {/* Decorative Divider */}
                <div className="w-20 h-1 bg-gradient-to-r from-[#B7860B] to-[#E5A620] mx-auto rounded-full mb-6" />
              </div>

              {/* Body Content */}
              <div className="px-6 pb-8">
                {/* Email Card */}
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                      <Mail className="w-5 h-5 text-[#B7860B]" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-900 mb-1">
                        Check Your Email
                      </p>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        We have sent your intelligence document to the email address you used at checkout.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Instructions */}
                <div className="space-y-4 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#B7860B]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#B7860B]">1</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Please check your inbox — and your spam folder if it does not arrive within 5 minutes.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#B7860B]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#B7860B]">2</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      If you don't see it, check your spam or promotions folder.
                    </p>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-[#B7860B]/10 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-bold text-[#B7860B]">3</span>
                    </div>
                    <p className="text-gray-700 leading-relaxed">
                      Your document is delivered instantly and ready to view.
                    </p>
                  </div>
                </div>

                {/* Contact Support */}
                <div className="bg-gray-50 rounded-xl p-5 border border-gray-100">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-4 h-4 text-[#B7860B]" />
                    <p className="text-sm font-semibold text-gray-900">Need help?</p>
                  </div>
                  <p className="text-sm text-gray-600">
                    If you have any issues, contact us at{" "}
                    <a 
                      href="mailto:support@evaltree.com" 
                      className="text-[#B7860B] hover:text-[#E5A620] font-medium transition-colors"
                    >
                      support@evaltree.com
                    </a>
                  </p>
                </div>

                {/* Additional Information */}
                <div className="mt-6 pt-4 border-t border-gray-100">
                  <div className="flex items-center justify-center gap-4 text-xs text-gray-400">
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>Instant delivery</span>
                    </div>
                    <div className="w-px h-3 bg-gray-200" />
                    <div className="flex items-center gap-1">
                      <Shield className="w-3 h-3" />
                      <span>Secure delivery</span>
                    </div>
                    <div className="w-px h-3 bg-gray-200" />
                    <div className="flex items-center gap-1">
                      <Zap className="w-3 h-3" />
                      <span>Lifetime access</span>
                    </div>
                  </div>
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