"use client";

import { useState, useEffect } from "react";
import { Cookie, Check, X, Sliders, Shield, Eye, Settings, Globe } from "lucide-react";

interface CookiePreferences {
  necessary: boolean;
  analytics: boolean;
  functional: boolean;
  advertising: boolean;
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);
  const [showPreferences, setShowPreferences] = useState(false);
  const [cookiePreferences, setCookiePreferences] = useState<CookiePreferences>({
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
    localStorage.setItem("cookieConsent", JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString(),
    }));
    setShowBanner(false);
    setShowPreferences(false);
    // Initialize analytics/marketing cookies here
    initializeCookies(preferences);
  };

  const handleRejectNonEssential = () => {
    const preferences = {
      necessary: true,
      analytics: false,
      functional: false,
      advertising: false,
    };
    setCookiePreferences(preferences);
    localStorage.setItem("cookieConsent", JSON.stringify({
      ...preferences,
      timestamp: new Date().toISOString(),
    }));
    setShowBanner(false);
    setShowPreferences(false);
    // Initialize only necessary cookies
    initializeCookies(preferences);
  };

  const handleSavePreferences = () => {
    localStorage.setItem("cookieConsent", JSON.stringify({
      ...cookiePreferences,
      timestamp: new Date().toISOString(),
    }));
    setShowBanner(false);
    setShowPreferences(false);
    // Initialize cookies based on preferences
    initializeCookies(cookiePreferences);
  };

  const initializeCookies = (preferences: CookiePreferences) => {
    // This is where you would initialize your actual cookies
    // For now, we'll just log the preferences
    console.log("Cookie preferences saved:", preferences);
    
    // Example: Initialize Google Analytics only if analytics consented
    if (preferences.analytics) {
      // Initialize analytics
      console.log("Analytics cookies enabled");
    }
    
    // Example: Initialize advertising cookies only if advertising consented
    if (preferences.advertising) {
      // Initialize advertising cookies
      console.log("Advertising cookies enabled");
    }
  };

  const openPreferences = () => {
    setShowPreferences(true);
  };

  const closePreferences = () => {
    setShowPreferences(false);
  };

  if (!showBanner && !showPreferences) return null;

  return (
    <>
      {/* Cookie Consent Banner */}
      {showBanner && (
        <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-0">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white rounded-2xl shadow-2xl border border-gray-200 overflow-hidden animate-slide-up">
              <div className="h-1 bg-gradient-to-r from-[#B7860B] to-[#E5A620]" />
              <div className="p-6 md:p-2">
                <div className="flex items-start gap-3 mb-4">
                  <div className="w-10 h-10 bg-[#B7860B]/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Cookie className="w-5 h-5 text-[#B7860B]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-bold text-gray-900 mb-2">We value your privacy</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      We use cookies to improve your experience, analyze usage, and support platform functionality. 
                      You can accept all cookies, reject non-essential cookies, or manage your preferences.
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