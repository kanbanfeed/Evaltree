import Link from "next/link";
import Footer from "@/components/Footer";
import { Shield, Lock, Eye, Database, Globe, Cookie, Mail, Home, ArrowLeft, Sparkles, Clock, RefreshCw, CheckCircle2, AlertCircle, Users, Server, Brain, FileText, CreditCard, Share2, Scale, Zap, Info } from "lucide-react";

export default function PrivacyPage() {
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
            {/* Privacy Policy Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Decorative Top Bar */}
              <div className="h-2 bg-gradient-to-r from-[#B7860B] to-[#E5A620]" />
              
              {/* Header Section */}
              <div className="pt-8 pb-4 px-6 md:px-8 text-center">
                <div className="inline-flex items-center gap-2 bg-[#B7860B]/10 rounded-full px-4 py-2 mb-4">
                  <Lock className="w-4 h-4 text-[#B7860B]" />
                  <span className="text-sm font-medium text-[#B7860B]">Your Privacy Matters</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  PRIVACY POLICY
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">INTRODUCTION</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Evaltree (“we”, “our”, “us”) is committed to protecting and respecting your privacy.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          This Privacy Policy explains how we collect, use, store, and protect your personal data when you use our platform.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          This policy is designed to comply with:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>UK General Data Protection Regulation (UK GDPR)</li>
                          <li>EU General Data Protection Regulation (EU GDPR)</li>
                          <li>India Digital Personal Data Protection Act (DPDP), 2023</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          By using the platform, you agree to the terms of this Privacy Policy.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Database className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">DATA CONTROLLER</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Evaltree Insights by Crowbar is the data controller responsible for your personal data.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          For any queries:
                        </p>
                        <a 
                          href="mailto:support@crowbarltd.com" 
                          className="text-[#B7860B] hover:text-[#E5A620] font-medium transition-colors inline-flex items-center gap-2 mt-1"
                        >
                          <Mail className="w-4 h-4" />
                          support@crowbarltd.com
                        </a>
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">INFORMATION WE COLLECT</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We collect the following categories of data:
                        </p>
                        <div className="mt-4 space-y-4">
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-2">3.1 Personal Data</h3>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-2">
                              <li>Email address</li>
                              <li>Name (if voluntarily provided)</li>
                              <li>Payment-related identifiers (via third-party processors)</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-2">3.2 Usage Data</h3>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed space-y-1 ml-2">
                              <li>IP address</li>
                              <li>Device type and browser</li>
                              <li>Pages visited</li>
                              <li>Session duration and interactions</li>
                            </ul>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-2">3.3 Data PROCESSING</h3>
                            <p className="text-gray-700 leading-relaxed">
                              Your responses are processed by automated systems to generate outputs.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-2">
                              Do not submit:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-1 space-y-1 ml-2">
                              <li>Sensitive personal data</li>
                              <li>Confidential business information</li>
                            </ul>
                            <p className="text-gray-600 text-sm mt-2 italic">
                              Users are advised not to submit sensitive personal, financial, or confidential data.
                            </p>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-2">3.4 Cookies & Tracking Data</h3>
                            <p className="text-gray-700 leading-relaxed">
                              We collect data through cookies and similar technologies (see Cookie Policy).
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Section 4 */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Scale className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">LEGAL BASIS FOR PROCESSING</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We process your data under the following lawful bases:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Contractual Necessity – to provide purchased services</li>
                          <li>Legitimate Interest – to improve platform performance</li>
                          <li>Consent – for cookies and marketing (where applicable)</li>
                          <li>Legal Obligation – to comply with laws</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 5 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">5</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">HOW WE USE YOUR DATA</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We use your data to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Process payments</li>
                          <li>Deliver digital outputs</li>
                          <li>Send transactional emails</li>
                          <li>Improve system performance</li>
                          <li>Prevent fraud and misuse</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Brain className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">Data PROCESSING DISCLOSURE</h2>
                        <p className="text-gray-700 leading-relaxed">
                          You acknowledge that:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Outputs are automated and may not be accurate</li>
                          <li>No human review is guaranteed</li>
                          <li>You are responsible for how outputs are used</li>
                        </ul>
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">THIRD-PARTY DATA PROCESSORS</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We use trusted third-party providers, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Payment processors (e.g., Stripe)</li>
                          <li>Email delivery services</li>
                          <li>Hosting and analytics providers</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          These providers process data on our behalf and are contractually bound to protect your data.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 8 */}
                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Globe className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">INTERNATIONAL DATA TRANSFERS</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Your data may be transferred and processed outside your country, including jurisdictions that may not have equivalent data protection laws.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          Where required, we implement safeguards such as:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Standard Contractual Clauses (SCCs)</li>
                          <li>Adequacy decisions</li>
                          <li>Secure data handling practices</li>
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">DATA RETENTION</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We retain your data only as long as necessary for:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Service delivery</li>
                          <li>Legal compliance</li>
                          <li>Business operations</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          We may delete or anonymize data when no longer required.
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">DATA SECURITY</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We implement appropriate technical and organizational measures, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Secure servers</li>
                          <li>Encryption where applicable</li>
                          <li>Access control mechanisms</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          However, no system can guarantee absolute security.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 11 */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Users className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">YOUR RIGHTS</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Depending on your jurisdiction, you have the right to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Access your personal data</li>
                          <li>Correct inaccurate data</li>
                          <li>Request deletion of your data</li>
                          <li>Withdraw consent</li>
                          <li>Object to processing</li>
                          <li>Request data portability</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          To exercise your rights, contact: support@crowbarltd.com
                        </p>
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">CHILDREN'S PRIVACY</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Evaltree is not intended for individuals under the age of 18.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          We do not knowingly collect data from children.
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">COOKIES</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We use cookies to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Enable platform functionality</li>
                          <li>Analyze usage</li>
                          <li>Improve user experience</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          Users can manage cookie preferences via browser settings and consent tools.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 14 */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Share2 className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">DO NOT SELL PERSONAL DATA</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We do not sell, rent, or trade personal data.
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">AUTOMATED DECISION-MAKING</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Our platform involves automated processing.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          However:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>No legally binding decisions are made solely by automation</li>
                          <li>Users retain full control over decisions</li>
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">CHANGES TO THIS POLICY</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We may update this Privacy Policy from time to time.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          Users will be notified of significant changes via the website.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 17 */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Mail className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">CONTACT</h2>
                        <p className="text-gray-700 leading-relaxed">
                          For privacy-related concerns:
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