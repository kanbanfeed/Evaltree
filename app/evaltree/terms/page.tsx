import Link from "next/link";
import Footer from "@/components/Footer";
import { Shield, FileText, Scale, AlertCircle, Brain, CreditCard, RefreshCw, Globe, Mail, Clock, Home, ArrowLeft, Sparkles, CheckCircle2, Zap, Database, Info } from "lucide-react";

export default function TermsPage() {
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
            {/* Terms of Service Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Decorative Top Bar */}
              <div className="h-2 bg-gradient-to-r from-[#B7860B] to-[#E5A620]" />
              
              {/* Header Section */}
              <div className="pt-8 pb-4 px-6 md:px-8 text-center">
                <div className="inline-flex items-center gap-2 bg-[#B7860B]/10 rounded-full px-4 py-2 mb-4">
                  <FileText className="w-4 h-4 text-[#B7860B]" />
                  <span className="text-sm font-medium text-[#B7860B]">Legal Agreement</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  TERMS OF SERVICE
                </h1>
                <div className="w-20 h-1 bg-gradient-to-r from-[#B7860B] to-[#E5A620] mx-auto rounded-full mb-4" />
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4" />
                    <span>Effective Date: 3-26-2026</span>
                  </div>
                  <div className="hidden sm:block w-px h-4 bg-gray-300" />
                  <div className="flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    <span>Last Updated: 3-26-2026</span>
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">ACCEPTANCE OF TERMS</h2>
                        <p className="text-gray-700 leading-relaxed">
                          By accessing or using Evaltree (“Platform”, “Service”), you agree to be legally bound by these Terms of Service (“Terms”).
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          If you do not agree, you must not use the Platform.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">2</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">ELIGIBILITY</h2>
                        <p className="text-gray-700 leading-relaxed">
                          You must be at least 18 years old to use this Platform.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          By using the Service, you confirm that:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>You have legal capacity to enter into a binding agreement</li>
                          <li>You are not prohibited from using such services under applicable laws</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 3 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">3</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">NATURE OF SERVICE</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Evaltree provides AI-generated insights based on user-submitted inputs.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          The Service:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Is informational in nature</li>
                          <li>Does not provide professional advice</li>
                          <li>Does not guarantee outcomes</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <AlertCircle className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">NO PROFESSIONAL ADVICE</h2>
                        <p className="text-gray-700 leading-relaxed">
                          The Platform does not provide:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Legal advice</li>
                          <li>Financial advice</li>
                          <li>Investment advice</li>
                          <li>Business or strategic advice</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          All outputs are generated automatically and should not be relied upon as the sole basis for decision-making.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2 font-medium">
                          You are solely responsible for all decisions and actions taken.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Database className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">Data DISCLOSURE</h2>
                        <p className="text-gray-700 leading-relaxed">
                          You acknowledge that:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Outputs are generated using automated systems</li>
                          <li>No human validation is guaranteed</li>
                          <li>Results depend entirely on your inputs</li>
                        </ul>
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">USER OBLIGATIONS</h2>
                        <p className="text-gray-700 leading-relaxed">
                          You agree not to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Submit unlawful, harmful, or misleading content</li>
                          <li>Upload confidential or sensitive third-party information without authorization</li>
                          <li>Attempt to reverse engineer, copy, or exploit the platform</li>
                          <li>Interfere with system integrity or security</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          You are fully responsible for the content you submit.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 7 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">7</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">PAYMENTS & PRICING</h2>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-2">
                          <li>All prices are displayed clearly before purchase</li>
                          <li>Payments are processed via secure third-party providers (e.g., Stripe)</li>
                          <li>You agree to pay all applicable charges</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          Evaltree does not store full payment details.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 8 */}
                  <div className="bg-gradient-to-br from-red-50 to-pink-50 rounded-xl p-6 border border-red-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <CreditCard className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">REFUND POLICY</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Due to the nature of digital services:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>All purchases are final and non-refundable</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3 font-semibold">
                          Waiver of Right to Cancel
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          By completing a purchase, you:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Explicitly request immediate access to digital content</li>
                          <li>Acknowledge that delivery begins instantly</li>
                          <li>Waive your statutory right to cancel where applicable</li>
                        </ul>
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">INTELLECTUAL PROPERTY</h2>
                        <p className="text-gray-700 leading-relaxed">
                          All content on the Platform, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Software</li>
                          <li>Branding</li>
                          <li>Design</li>
                          <li>AI outputs</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          Is owned or licensed by Evaltree.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          You may not:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Copy</li>
                          <li>Distribute</li>
                          <li>Resell</li>
                          <li>Modify</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          without prior written permission.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 10 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">10</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">DATA & PRIVACY</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Your use of the Platform is also governed by our Privacy Policy.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          By using the Service, you consent to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Data collection and processing</li>
                          <li>Use of third-party providers</li>
                          <li>Storage of inputs and outputs</li>
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">THIRD-PARTY SERVICES</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We rely on third-party services for:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Payments</li>
                          <li>Hosting</li>
                          <li>Email delivery</li>
                          <li>Analytics</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          We are not responsible for the practices of these providers.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 12 */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Shield className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">LIMITATION OF LIABILITY</h2>
                        <p className="text-gray-700 leading-relaxed">
                          To the fullest extent permitted by law:
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2 font-semibold">
                          Evaltree shall not be liable for:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Any direct, indirect, incidental, or consequential damages</li>
                          <li>Financial or business losses</li>
                          <li>Decisions made based on platform outputs</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          Maximum liability (if applicable) shall not exceed the amount paid by you for the Service.
                        </p>
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">INDEMNIFICATION</h2>
                        <p className="text-gray-700 leading-relaxed">
                          You agree to indemnify and hold harmless Evaltree from any claims, damages, or liabilities arising from:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Your use of the Platform</li>
                          <li>Your violation of these Terms</li>
                          <li>Your misuse of outputs</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 14 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">14</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">SERVICE AVAILABILITY</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We do not guarantee:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Continuous availability</li>
                          <li>Error-free operation</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          We may:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Modify</li>
                          <li>Suspend</li>
                          <li>Discontinue</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          any part of the Service at any time.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 15 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">15</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">TERMINATION</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We reserve the right to suspend or terminate access if:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>You violate these Terms</li>
                          <li>We detect misuse or abuse</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 16 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">16</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">FORCE MAJEURE</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We are not liable for delays or failures due to events beyond our control, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Technical failures</li>
                          <li>Cyber incidents</li>
                          <li>Regulatory changes</li>
                          <li>Natural disasters</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 17 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">17</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">GOVERNING LAW</h2>
                        <p className="text-gray-700 leading-relaxed">
                          These Terms shall be governed by the laws of:
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2 font-medium">
                          United Kingdom (recommended for your current setup)
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 18 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">18</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">DISPUTE RESOLUTION</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Disputes shall be resolved through:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Good faith negotiation first</li>
                          <li>Courts of the United Kingdom (if unresolved)</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 19 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">19</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">CHANGES TO TERMS</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We may update these Terms at any time.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          Continued use of the Platform constitutes acceptance of updated Terms.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 20 */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Mail className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">CONTACT</h2>
                        <p className="text-gray-700 leading-relaxed">
                          For any queries:
                        </p>
                        <a 
                          href="mailto:support@evaltree.com" 
                          className="text-[#B7860B] hover:text-[#E5A620] font-medium transition-colors inline-flex items-center gap-2 mt-2"
                        >
                          <Mail className="w-4 h-4" />
                          support@evaltree.com
                        </a>
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