"use client";

import Link from "next/link";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Cookie, Shield, Eye, Settings, Globe, Mail, Home, ArrowLeft, Sparkles, Clock, RefreshCw, CheckCircle2, AlertCircle, X, Check, Sliders, Info } from "lucide-react";

export default function CookiePage() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [consentGiven, setConsentGiven] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState({
    necessary: true,
    analytics: false,
    functional: false,
    advertising: false,
  });

  useEffect(() => {
    // Check if user has already consented
    const hasConsented = localStorage.getItem("cookieConsent");
    if (!hasConsented) {
      setShowBanner(true);
    } else {
      const savedPreferences = JSON.parse(hasConsented);
      setCookiePreferences(savedPreferences);
      setConsentGiven(true);
    }
  }, []);

  const handleAcceptAll = () => {
    const preferences = {
      necessary: true,
      analytics: true,
      functional: true,
      advertising: true,
    };
    setCookiePreferences(preferences);
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setConsentGiven(true);
    setShowBanner(false);
    setShowPreferences(false);
    // Here you would initialize analytics/marketing cookies
  };

  const handleRejectNonEssential = () => {
    const preferences = {
      necessary: true,
      analytics: false,
      functional: false,
      advertising: false,
    };
    setCookiePreferences(preferences);
    localStorage.setItem("cookieConsent", JSON.stringify(preferences));
    setConsentGiven(true);
    setShowBanner(false);
    setShowPreferences(false);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify(cookiePreferences));
    setConsentGiven(true);
    setShowBanner(false);
    setShowPreferences(false);
    // Here you would initialize cookies based on preferences
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const closePreferences = () => {
    setShowPreferences(false);
  };

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
            {/* Cookie Policy Card */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
              {/* Decorative Top Bar */}
              <div className="h-2 bg-gradient-to-r from-[#B7860B] to-[#E5A620]" />
              
              {/* Header Section */}
              <div className="pt-8 pb-4 px-6 md:px-8 text-center">
                <div className="inline-flex items-center gap-2 bg-[#B7860B]/10 rounded-full px-4 py-2 mb-4">
                  <Cookie className="w-4 h-4 text-[#B7860B]" />
                  <span className="text-sm font-medium text-[#B7860B]">Your Privacy Choices</span>
                </div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
                  COOKIE POLICY
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
                          This Cookie Policy explains how Evaltree uses cookies and similar tracking technologies when you visit or use our platform.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          It should be read together with our Privacy Policy.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          By using our website, you agree to the use of cookies in accordance with this policy and your preferences set via our cookie consent tool.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 2 */}
                  <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Info className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">WHAT ARE COOKIES</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Cookies are small text files placed on your device (computer, mobile, tablet) when you visit a website.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          They help websites:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Function properly</li>
                          <li>Remember user preferences</li>
                          <li>Improve user experience</li>
                          <li>Analyze usage</li>
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
                        <h2 className="text-lg font-bold text-gray-900 mb-3">TYPES OF COOKIES WE USE</h2>
                        
                        <div className="mt-4 space-y-4">
                          <div>
                            <h3 className="font-semibold text-gray-800 mb-2">3.1 Strictly Necessary Cookies</h3>
                            <p className="text-gray-700 leading-relaxed">
                              These cookies are essential for the operation of the website.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-1">
                              They enable:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-1 space-y-1 ml-2">
                              <li>Page navigation</li>
                              <li>Secure access</li>
                              <li>Payment processing</li>
                            </ul>
                            <p className="text-amber-600 text-sm mt-2 flex items-center gap-1">
                              <AlertCircle className="w-3 h-3" />
                              These cookies do not require consent.
                            </p>
                          </div>

                          <div className="pt-2">
                            <h3 className="font-semibold text-gray-800 mb-2">3.2 Performance & Analytics Cookies</h3>
                            <p className="text-gray-700 leading-relaxed">
                              These cookies help us understand how users interact with our website.
                            </p>
                            <p className="text-gray-700 leading-relaxed mt-1">
                              They collect:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-1 space-y-1 ml-2">
                              <li>Page visits</li>
                              <li>Time spent</li>
                              <li>Error reports</li>
                            </ul>
                            <p className="text-blue-600 text-sm mt-2 flex items-center gap-1">
                              <Info className="w-3 h-3" />
                              Used to improve platform performance
                            </p>
                          </div>

                          <div className="pt-2">
                            <h3 className="font-semibold text-gray-800 mb-2">3.3 Functional Cookies</h3>
                            <p className="text-gray-700 leading-relaxed">
                              These cookies allow the website to remember your preferences, such as:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-1 space-y-1 ml-2">
                              <li>Language settings</li>
                              <li>Session preferences</li>
                            </ul>
                          </div>

                          <div className="pt-2">
                            <h3 className="font-semibold text-gray-800 mb-2">3.4 Advertising / Tracking Cookies (if applicable)</h3>
                            <p className="text-gray-700 leading-relaxed">
                              These cookies may be used to:
                            </p>
                            <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-1 space-y-1 ml-2">
                              <li>Deliver relevant ads</li>
                              <li>Track browsing across websites</li>
                            </ul>
                            <p className="text-purple-600 text-sm mt-2 flex items-center gap-1">
                              <Settings className="w-3 h-3" />
                              These are only used with your explicit consent.
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
                        <Shield className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">LEGAL BASIS FOR USING COOKIES</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We rely on:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Consent – for non-essential cookies (analytics, marketing)</li>
                          <li>Legitimate Interest – for essential cookies required for platform operation</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* Section 5-12 continue with same pattern... */}
                  {/* Sections 5-12 with proper styling */}

                  {/* Section 5 */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">5</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">COOKIE CONSENT</h2>
                        <p className="text-gray-700 leading-relaxed">
                          When you first visit our website, you will see a cookie banner allowing you to:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Accept all cookies</li>
                          <li>Reject non-essential cookies</li>
                          <li>Customize preferences</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          No non-essential cookies are placed without your consent.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 6 */}
                  <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Settings className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">MANAGING YOUR COOKIE PREFERENCES</h2>
                        <p className="text-gray-700 leading-relaxed">
                          You can manage or withdraw your consent at any time by:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Clicking the "Cookie Settings" link on our website</li>
                          <li>Adjusting your browser settings</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          You can also delete cookies already stored on your device.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 7-12 with similar styling */}
                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">7</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">THIRD-PARTY COOKIES</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We may allow third-party services to place cookies on your device, including:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Analytics providers</li>
                          <li>Payment processors</li>
                          <li>Hosting and infrastructure services</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          These third parties operate under their own privacy policies.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">8</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">COOKIE RETENTION</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Cookies may be stored for different durations:
                        </p>
                        <ul className="list-disc list-inside text-gray-700 leading-relaxed mt-2 space-y-1 ml-2">
                          <li>Session cookies: deleted when you close your browser</li>
                          <li>Persistent cookies: remain until expiry or deletion</li>
                        </ul>
                        <p className="text-gray-700 leading-relaxed mt-3">
                          Retention periods vary depending on the purpose of the cookie.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">9</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">DO NOT TRACK SIGNALS</h2>
                        <p className="text-gray-700 leading-relaxed">
                          Some browsers offer "Do Not Track" signals.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          Currently, our website may not respond to such signals due to lack of standardized implementation.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl p-6 border border-purple-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Globe className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">INTERNATIONAL USERS</h2>
                        <p className="text-gray-700 leading-relaxed">
                          If you access the platform from outside your country, cookies may be stored and processed in other jurisdictions in accordance with applicable laws.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl p-6 border border-gray-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-[#B7860B]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                        <span className="text-sm font-bold text-[#B7860B]">11</span>
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">UPDATES TO THIS POLICY</h2>
                        <p className="text-gray-700 leading-relaxed">
                          We may update this Cookie Policy periodically.
                        </p>
                        <p className="text-gray-700 leading-relaxed mt-2">
                          Changes will be posted on this page with an updated "Last Updated" date.
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Section 12 */}
                  <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl p-6 border border-green-100">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Mail className="w-4 h-4 text-[#B7860B]" />
                      </div>
                      <div className="flex-1">
                        <h2 className="text-lg font-bold text-gray-900 mb-3">CONTACT</h2>
                        <p className="text-gray-700 leading-relaxed">
                          For any questions regarding this Cookie Policy:
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

                {/* Cookie Settings Link in Footer */}
                <div className="mt-8 pt-6 border-t border-gray-200 text-center">
                  <button
                    onClick={openPreferences}
                    className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-[#B7860B] transition-colors"
                  >
                    <Settings className="w-4 h-4" />
                    Cookie Settings
                  </button>
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

      {/* Cookie Consent Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-up">
              <div className="h-1 bg-gradient-to-r from-[#B7860B] to-[#E5A620]" />
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#B7860B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 text-[#B7860B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">We value your privacy</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We use cookies to improve your experience, analyze usage, and support platform functionality. You can accept all cookies, reject non-essential cookies, or manage your preferences.
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3 mt-6">
                  <button
                    onClick={handleAcceptAll}
                    className="flex-1 bg-gradient-to-r from-[#B7860B] to-[#E5A620] text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg inline-flex items-center justify-center gap-2"
                  >
                    <Check className="w-4 h-4" />
                    Accept All
                  </button>
                  <button
                    onClick={handleRejectNonEssential}
                    className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:bg-gray-200 hover:scale-[1.02] inline-flex items-center justify-center gap-2"
                  >
                    <X className="w-4 h-4" />
                    Reject Non-Essential
                  </button>
                  <button
                    onClick={openPreferences}
                    className="flex-1 border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:border-[#B7860B] hover:text-[#B7860B] inline-flex items-center justify-center gap-2"
                  >
                    <Sliders className="w-4 h-4" />
                    Customize
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Cookie Preferences Modal */}
      {showPreferences && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-2xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-white border-b border-gray-100 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Settings className="w-5 h-5 text-[#B7860B]" />
                  <h3 className="text-lg font-bold text-gray-900">Cookie Preferences</h3>
                </div>
                <button
                  onClick={closePreferences}
                  className="text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="p-6 space-y-4">
              <div className="space-y-4">
                {/* Necessary Cookies - Always Required */}
                <div className="flex items-start justify-between p-4 bg-gray-50 rounded-xl">
                  <div>
                    <div className="flex items-center gap-2">
                      <Shield className="w-4 h-4 text-[#B7860B]" />
                      <h4 className="font-semibold text-gray-900">Strictly Necessary Cookies</h4>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Required for platform functionality. Cannot be disabled.</p>
                  </div>
                  <div className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">Always Active</div>
                </div>

                {/* Analytics Cookies */}
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <Eye className="w-4 h-4 text-[#B7860B]" />
                      <h4 className="font-semibold text-gray-900">Performance & Analytics Cookies</h4>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Help us understand how you use our platform.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.analytics}
                      onChange={(e) => setCookiePreferences({ ...cookiePreferences, analytics: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#B7860B]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B7860B]"></div>
                  </label>
                </div>

                {/* Functional Cookies */}
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <Settings className="w-4 h-4 text-[#B7860B]" />
                      <h4 className="font-semibold text-gray-900">Functional Cookies</h4>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Remember your preferences and settings.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.functional}
                      onChange={(e) => setCookiePreferences({ ...cookiePreferences, functional: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#B7860B]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B7860B]"></div>
                  </label>
                </div>

                {/* Advertising Cookies */}
                <div className="flex items-center justify-between p-4 hover:bg-gray-50 rounded-xl transition-colors">
                  <div>
                    <div className="flex items-center gap-2">
                      <Globe className="w-4 h-4 text-[#B7860B]" />
                      <h4 className="font-semibold text-gray-900">Advertising / Tracking Cookies</h4>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">Used for delivering relevant advertisements.</p>
                  </div>
                  <label className="relative inline-flex items-center cursor-pointer">
                    <input
                      type="checkbox"
                      checked={cookiePreferences.advertising}
                      onChange={(e) => setCookiePreferences({ ...cookiePreferences, advertising: e.target.checked })}
                      className="sr-only peer"
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-[#B7860B]/20 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#B7860B]"></div>
                  </label>
                </div>
              </div>
            </div>

            <div className="sticky bottom-0 bg-white border-t border-gray-100 p-6">
              <button
                onClick={handleSavePreferences}
                className="w-full bg-gradient-to-r from-[#B7860B] to-[#E5A620] text-black px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-[1.02] hover:shadow-lg"
              >
                Save Preferences
              </button>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(100%);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-slide-up {
          animation: slide-up 0.3s ease-out;
        }
        
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.2s ease-out;
        }
      `}</style>
    </>
  );
}