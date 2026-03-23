import Link from "next/link";
import { Mail, Clock, Shield, FileText, Cookie, CreditCard, MapPin, Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="mt-16 bg-white">
      {/* Main Footer Section */}
      <div className="border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
          <div className="grid md:grid-cols-4 gap-8 lg:gap-12">
            
            {/* LEFT - Company Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-br from-[#B7860B] to-[#E5A620] rounded-lg flex items-center justify-center">
                  <span className="text-white text-sm font-bold">E</span>
                </div>
                <h3 className="text-lg font-bold bg-gradient-to-r from-[#0D2137] to-[#0F2A3E] bg-clip-text text-transparent">
                  Evaltree
                </h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">
                Career Decision Intelligence
              </p>
              <p className="text-xs text-gray-500">
                A product of Crowbar Ventures Limited
              </p>
              
              {/* Trust Badge */}
              <div className="flex items-center gap-2 pt-2">
                <Shield className="w-4 h-4 text-[#B7860B]" />
                <span className="text-xs text-gray-500">Evidence-Based Intelligence</span>
              </div>
            </div>

            {/* MIDDLE LEFT - Legal Links */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Legal</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="/evaltree/privacy" 
                    className="text-sm text-gray-600 hover:text-[#B7860B] transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <FileText className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/evaltree/terms" 
                    className="text-sm text-gray-600 hover:text-[#B7860B] transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <FileText className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Terms of Use
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/evaltree/cookies" 
                    className="text-sm text-gray-600 hover:text-[#B7860B] transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <Cookie className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Cookie Policy
                  </Link>
                </li>
                <li>
                  <Link 
                    href="/evaltree/refunds" 
                    className="text-sm text-gray-600 hover:text-[#B7860B] transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <CreditCard className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    Refund Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* MIDDLE RIGHT - Contact */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Contact</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:support@evaltree.com" 
                  className="text-sm text-gray-600 hover:text-[#B7860B] transition-colors duration-200 inline-flex items-center gap-2 group"
                >
                  <Mail className="w-4 h-4" />
                  <span>support@evaltree.com</span>
                </a>
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>Typical response: within 2 business days</span>
                </div>
              </div>
            </div>

            {/* RIGHT - Address */}
            <div>
              <h4 className="text-sm font-semibold text-gray-900 mb-4">Company</h4>
              <div className="space-y-3">
                <div className="flex items-start gap-2 text-sm text-gray-600">
                  <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" />
                  <span>
                    71-75 Shelton Street,<br />
                    Covent Garden, London<br />
                    WC2H 9JQ United Kingdom
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500 pt-2">
                  <Globe className="w-3 h-3" />
                  <span>Crowbar Ventures Limited</span>
                </div>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-8" />
        </div>
      </div>

      {/* BOTTOM BAR - Legal Information */}
      <div className="bg-gradient-to-r from-[#0D2137] to-[#0F2A3E] text-white">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-xs leading-relaxed text-gray-300 text-center">
            © 2026 Crowbar Ventures Limited. Registered: 71-75 Shelton Street,
            Covent Garden, London WC2H 9JQ United Kingdom. Payments processed
            securely by Crowbar Ltd. Prices exclude VAT. VAT is not currently
            charged. Intelligence products are licensed for personal use only.
            Not investment, legal, financial, or strategic advice.
          </p>
        </div>
      </div>

      {/* REQUIRED EXTRA LINE */}
      <div className="bg-[#0A1A2F] text-center py-3">
        <p className="text-[10px] text-gray-400">
          © 2026 Crowbar Ventures Limited — Intelligence Product — Licensed, Not Sold
        </p>
      </div>
    </footer>
  );
}