import Link from "next/link";
import Footer from "@/components/Footer";
import { Shield, RefreshCw, Mail, Clock, Home, ArrowLeft, Sparkles, CheckCircle2, AlertCircle, CreditCard, FileText, Info, Calendar, DollarSign, Users, Eye, Lock, Scale, Zap, HelpCircle } from "lucide-react";

export default function RefundPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        {/* Header with gradient background matching homepage */}
        <div className="bg-gradient-to-r from-[#0D2137] to-[#0F2A3E] text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div
              className="absolute top-0 left-0 w-full h-full opacity-20"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B7860B' fill-opacity='0.08'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
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
        <div className="flex items-center justify-center px-6 py-16 md:py-20">
          <div className="max-w-4xl w-full">
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
                <div className="w-20 h-1 bg-gradient-to-r from-[#B7860B] to-[#E5A620] mx-auto rounded-full mb-4" />
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4" />
                    <span>Effective Date: March 26, 2026</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    <span>Last Updated: March 26, 2026</span>
                  </div>
                </div>
                <p className="text-sm text-gray-500 mt-3">
                  Company: Evaltree Insights by Crowbar | Contact: support@evaltree.com
                </p>
              </div>

              {/* Content Section */}
              <div className="px-6 md:px-8 pb-8">
                <div className="space-y-6">
                  {/* Section 1 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">1</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">INTRODUCTION</h2>
                        <p className="text-gray-700 leading-relaxed">
                          This Refund Policy outlines how refunds are handled for purchases made on Evaltree.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          Evaltree provides digital intelligence documents, which are delivered instantly upon purchase.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <FileText className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">NATURE OF SERVICES</h2>
                        <p className="text-gray-700 leading-relaxed">
                          All products offered on Evaltree are:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Digital and non-tangible</li>
                          <li>Delivered immediately after purchase</li>
                          <li>Accessible via email or on-screen delivery</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          Due to this nature, traditional return mechanisms do not apply.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 - Core Principle */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Shield className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">REFUND-FIRST POLICY (CORE PRINCIPLE)</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We operate a refund-first approach.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2 font-semibold">
                          We offer a full refund within 7 days of purchase, no questions asked.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          Your satisfaction is our priority — we would rather issue a refund than enter into disputes.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">4</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">ELIGIBILITY FOR REFUNDS</h2>
                        <p className="text-gray-700 leading-relaxed">
                          You are eligible for a full refund within 7 days if:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>You are not satisfied with your purchase</li>
                          <li>You request a refund within the eligible period</li>
                          <li>You provide your order reference</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <AlertCircle className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">ADDITIONAL ELIGIBLE SCENARIOS</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Refunds may also be granted in the following cases:
                        </p>
                        <div className="mt-3 space-y-3">
                          <div>
                            <h3 className="font-semibold text-gray-800">5.1 Non-Delivery</h3>
                            <p className="text-gray-600 text-sm">If you were charged but did not receive your report due to a verified issue.</p>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">5.2 Technical Failure</h3>
                            <p className="text-gray-600 text-sm">If a system error prevented access and cannot be resolved.</p>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800">5.3 Duplicate Payment</h3>
                            <p className="text-gray-600 text-sm">If multiple charges occurred for the same purchase.</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">6</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">HOW TO REQUEST A REFUND</h2>
                        <p className="text-gray-700 leading-relaxed">
                          To request a refund:
                        </p>
                        <ol className="list-decimal list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Email support@evaltree.com</li>
                          <li>Include:
                            <ul className="list-disc list-inside ml-6 mt-1 space-y-1">
                              <li>Order reference</li>
                              <li>Registered email address</li>
                              <li>Brief note (optional)</li>
                            </ul>
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>

                  {/* Section 7 */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Clock className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">REFUND PROCESSING TIME</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-2">
                          <li>Refunds are processed within 2 business days of approval</li>
                          <li>Funds are returned via the original payment method</li>
                          <li>Bank processing times may vary depending on your provider</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 8 */}
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Scale className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">WAIVER OF RIGHT TO CANCEL (LEGAL NOTICE)</h2>
                        <p className="text-gray-700 leading-relaxed">
                          By completing a purchase, you:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Request immediate access to digital content</li>
                          <li>Acknowledge that delivery begins instantly</li>
                          <li>Accept that statutory cancellation rights may be waived</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          This clause ensures compliance with digital product regulations in the UK and EU.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 9 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">9</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">USER RESPONSIBILITY</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Users are responsible for:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Reviewing product details before purchase</li>
                          <li>Entering correct email information</li>
                          <li>Understanding that outputs are AI-generated</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 10 */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Eye className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">LIMITATIONS & FAIR USE</h2>
                        <p className="text-gray-700 leading-relaxed">
                          While we maintain a refund-first approach, we reserve the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Refuse refunds in cases of abuse or repeated misuse</li>
                          <li>Investigate suspicious refund patterns</li>
                          <li>Deny requests that indicate fraudulent activity</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 11 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">11</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">CHARGEBACK POLICY</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We encourage users to contact support before initiating a chargeback.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          Unnecessary chargebacks may result in:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Account restriction</li>
                          <li>Suspension of access</li>
                          <li>Additional verification requirements</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 12 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">12</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">FRAUD PREVENTION</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Evaltree reserves the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Monitor transactions</li>
                          <li>Investigate anomalies</li>
                          <li>Report fraudulent activity where required</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 13 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">13</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">POLICY UPDATES</h2>
                        <p className="text-gray-700 leading-relaxed">
                          This Refund Policy may be updated from time to time.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          Updates will be reflected with a revised "Last Updated" date.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 14 */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Mail className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">CONTACT</h2>
                        <p className="text-gray-700 leading-relaxed">
                          For all refund-related queries:
                        </p>
                        <div className="flex items-center gap-2 mt-3">
                          <Mail className="w-4 h-4 text-[#B7860B]" />
                          <a 
                            href="mailto:support@evaltree.com" 
                            className="text-[#B7860B] hover:text-[#E5A620] font-medium transition-colors"
                          >
                            support@evaltree.com
                          </a>
                        </div>
                      </div>
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