"use client";

import { useEffect, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

type Purchase = {
  id: string;
  plan: "single" | "pack" | "mirror" | "map" | "reckoning";
  downloads_remaining: number;
  customer_email: string;
  status: "paid" | "refunded" | "canceled";
};

function Modal({
  open, title, message, primaryLabel, primaryHref, secondaryLabel, onClose,
}: {
  open: boolean; title: string; message: string;
  primaryLabel: string; primaryHref: string;
  secondaryLabel?: string; onClose: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center px-6" role="dialog" aria-modal="true">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="relative w-full max-w-lg rounded-3xl bg-white p-6 shadow-xl">
        <h2 className="text-lg font-semibold">{title}</h2>
        <p className="mt-2 text-sm opacity-80">{message}</p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-end">
          {secondaryLabel && (
            <button onClick={onClose} className="rounded-xl border border-[#0F1C3F]/15 bg-white px-5 py-2.5 text-sm font-semibold hover:bg-[#F5F6F8]">
              {secondaryLabel}
            </button>
          )}
          <a href={primaryHref} className="inline-flex items-center justify-center rounded-xl bg-[#FF6A00] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#e65f00]">
            {primaryLabel}
          </a>
        </div>
      </div>
    </div>
  );
}

// ── Upsell card shown after Mirror purchase ──────────────────────────────────
function MapUpsellCard({ email, plan }: { email: string; plan: string }) {
  const [claimed, setClaimed] = useState(false);
  const [loading, setLoading] = useState(false);

  // Only show upsell if they bought Mirror (not already on Map/Reckoning)
  if (plan !== "mirror" && plan !== "single") return null;

  const upsellPrice = plan === "mirror" ? "$60" : "$96.01";
  const savings = plan === "mirror" ? "$10" : "$2.99";

  async function claimUpsell() {
    setLoading(true);
    try {
      const r = await fetch("/api/stripe/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ plan: "map_upsell", email }),
      });
      const d = await r.json().catch(() => ({}));
      if (d.url) window.location.href = d.url;
      else { setClaimed(false); alert(d.error || "Checkout failed"); }
    } finally {
      setLoading(false);
    }
  }

  if (claimed) return null;

  return (
    <div className="mt-6 rounded-2xl border-2 border-[#FF6A00] bg-[#FF6A00]/5 p-5">
      <div className="flex items-start gap-3">
        <div className="shrink-0 h-8 w-8 rounded-full bg-[#FF6A00] flex items-center justify-center text-white text-sm font-bold">
          ↑
        </div>
        <div className="flex-1">
          <div className="flex items-center gap-2 flex-wrap mb-1">
            <span className="text-sm font-bold">Unlock The Map for {upsellPrice}</span>
            <span className="rounded-full bg-emerald-100 text-emerald-700 px-2 py-0.5 text-xs font-bold">
              Save {savings} — one-time offer
            </span>
          </div>
          <p className="text-xs opacity-70 mb-3">
            The Map adds your full decision framework, 3 scenario paths, salary benchmarks, and leverage point analysis. Usually $99 — {upsellPrice} when upgraded now.
          </p>
          <button
            onClick={claimUpsell}
            disabled={loading}
            className="rounded-xl bg-[#FF6A00] px-5 py-2.5 text-sm font-semibold text-white hover:bg-[#e65f00] active:scale-95 transition-all disabled:opacity-60"
          >
            {loading ? "Loading…" : `Upgrade to The Map – ${upsellPrice}`}
          </button>
          <button
            onClick={() => setClaimed(true)}
            className="ml-3 text-xs opacity-40 hover:opacity-60"
          >
            No thanks
          </button>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouClient() {
  const sp = useSearchParams();
  const sessionId = sp.get("session_id") || "";
  const slug = sp.get("slug") || "";

  const [purchase, setPurchase] = useState<Purchase | null>(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState("");
  const [modalMessage, setModalMessage] = useState("");
  const [modalPrimaryLabel, setModalPrimaryLabel] = useState("Back to landing");
  const [modalPrimaryHref, setModalPrimaryHref] = useState("/evaltree");

  const purchaseReady = useMemo(() => purchase?.status === "paid", [purchase]);

  function showModal(args: { title: string; message: string; primaryLabel?: string; primaryHref?: string }) {
    setModalTitle(args.title);
    setModalMessage(args.message);
    setModalPrimaryLabel(args.primaryLabel || "Back to landing");
    setModalPrimaryHref(args.primaryHref || "/evaltree");
    setModalOpen(true);
  }

  function startDownload() {
    if (!sessionId || !slug) return;
    window.location.href = `/api/paid-download?session_id=${encodeURIComponent(sessionId)}&slug=${encodeURIComponent(slug)}`;
  }

  useEffect(() => {
    (async () => {
      try {
        if (!sessionId) {
          showModal({ title: "Missing payment reference", message: "We couldn't find your payment session. Please return to the landing page and try again." });
          setLoading(false);
          return;
        }
        const vr = await fetch("/api/purchase/verify", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ sessionId }),
        });
        if (!vr.ok) {
          showModal({ title: "Payment not verified yet", message: "Your payment is still being confirmed. Please wait a few seconds and refresh. If the issue continues, contact support." });
          setLoading(false);
          return;
        }
        const vj = await vr.json();
        setPurchase(vj.purchase);
      } catch {
        showModal({ title: "Something went wrong", message: "We couldn't load your thank-you page. Please try again, or contact support." });
      } finally {
        setLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sessionId]);

  return (
    <main className="min-h-screen bg-[#F5F6F8] text-[#0F1C3F]">
      <Modal
        open={modalOpen} title={modalTitle} message={modalMessage}
        primaryLabel={modalPrimaryLabel} primaryHref={modalPrimaryHref}
        secondaryLabel="Close" onClose={() => setModalOpen(false)}
      />

      <header>
        <div className="flex w-full items-center justify-end gap-4 px-6 py-4">
          <Link href="/evaltree" className="rounded-xl border border-[#ff6a00] bg-white px-4 py-2 text-sm font-semibold hover:bg-[#ff6a00] hover:text-white transition-all">
            Back to landing
          </Link>
        </div>
      </header>

      <div className="mx-auto max-w-2xl px-6 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-10">

          {/* Status pill */}
          <div className="inline-flex items-center gap-2 rounded-full bg-[#F5F6F8] px-4 py-2 text-sm mb-5">
            <span className={`h-2 w-2 rounded-full ${purchaseReady ? "bg-emerald-500" : "bg-[#FF6A00]"}`} />
            <span className="opacity-80">{purchaseReady ? "Payment confirmed ✓" : "Confirming payment…"}</span>
          </div>

          <h1 className="text-2xl font-bold md:text-3xl mb-4">
            Thank you for your purchase.
          </h1>

          {loading ? (
            <div className="rounded-2xl bg-[#F5F6F8] p-4 text-sm opacity-70">Verifying payment…</div>
          ) : purchaseReady ? (
            <>
              <p className="text-sm opacity-75 leading-relaxed mb-6">
                Your report is being prepared and will be delivered to <strong>{purchase?.customer_email}</strong> shortly. Check your inbox (and spam folder).
              </p>

              {/* Download button — only if slug is present (legacy brief) */}
              {slug && (
                <div className="flex flex-col gap-3 sm:flex-row mb-6">
                  <button
                    onClick={startDownload}
                    className="inline-flex items-center justify-center rounded-xl bg-[#FF6A00] px-6 py-3 font-semibold text-white hover:bg-[#e65f00] active:scale-95 transition-all"
                  >
                    Download PDF
                  </button>
                  <Link
                    href="/evaltree"
                    className="inline-flex items-center justify-center rounded-xl border border-[#0F1C3F]/15 bg-white px-6 py-3 font-semibold hover:bg-[#F5F6F8] transition-all"
                  >
                    Back to landing
                  </Link>
                </div>
              )}

              {/* ── UPSELL CARD ── */}
              <MapUpsellCard
                email={purchase?.customer_email || ""}
                plan={purchase?.plan || ""}
              />

              {/* Refund window note */}
              <div className="mt-6 rounded-2xl border border-amber-200 bg-amber-50 p-4">
                <p className="text-xs font-semibold text-amber-800 mb-1">Refund window</p>
                <p className="text-xs text-amber-700 opacity-80">
                  We offer a satisfaction review within 48 hours of delivery. If your report failed to generate or was incorrectly matched, contact support and we'll investigate. Digital products are otherwise non-refundable per our Terms.
                </p>
              </div>
            </>
          ) : (
            <div className="space-y-4">
              <p className="text-sm opacity-75 leading-relaxed">
                Your selected brief(s) are undergoing final compliance and quality verification. This is part of our commitment to ensuring all Evaltree content meets required legal, licensing, and disclosure standards.
              </p>
              <p className="text-sm opacity-75">
                Your report(s) will be delivered shortly. <strong>No action required</strong> from your side.
              </p>
              <p className="text-sm opacity-75">
                Questions? Reach us at{" "}
                <a className="font-medium underline underline-offset-4" href="mailto:support@crowbarltd.com">
                  support@crowbarltd.com
                </a>
              </p>
            </div>
          )}

          {/* Email reminder */}
          <div className="mt-6 rounded-2xl bg-[#F5F6F8] p-4">
            <p className="text-xs font-semibold mb-1">Email delivery</p>
            <p className="text-xs opacity-70">
              A purchase confirmation and download link will be sent to your email after payment is confirmed. Please check spam/junk as well.
            </p>
          </div>

          <div className="mt-6 text-xs opacity-40 space-y-1">
            <div>Payments processed securely by Crowbar Ltd.</div>
            <div>Transactions handled by Stripe and delivered upon payment confirmation.</div>
          </div>

          <div className="mt-6 border-t border-[#0F1C3F]/10 pt-5 text-xs opacity-50">
            © Crowbar Ltd 2025. Evaltree Insights by Crowbar.
          </div>
        </div>
      </div>
    </main>
  );
}
