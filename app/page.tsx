export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || "#";

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9] font-sans">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#58a6ff]/10 text-[#58a6ff] text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-6">
          Browser Tool for E-commerce &amp; QA
        </span>
        <h1 className="text-4xl sm:text-5xl font-extrabold text-white leading-tight mb-5">
          Detect When Users{" "}
          <span className="text-[#58a6ff]">Rage-Click</span>{" "}
          Broken Form Buttons
        </h1>
        <p className="text-lg text-[#8b949e] max-w-xl mx-auto mb-8">
          Embed one script tag. Get instant webhook alerts when customers frantically click
          your checkout, login, or signup buttons — before they abandon and never come back.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold text-lg px-8 py-4 rounded-lg transition-colors"
        >
          Start Detecting — $25/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">Cancel anytime. No credit card required to try.</p>

        {/* Widget preview */}
        <div className="mt-14 bg-[#161b22] border border-[#30363d] rounded-xl p-6 text-left">
          <p className="text-xs text-[#8b949e] mb-3 uppercase tracking-widest">Embed snippet</p>
          <pre className="text-sm text-[#58a6ff] overflow-x-auto whitespace-pre-wrap break-all">
{`<script
  src="https://rageclickdetector.com/widget.js"
  data-key="YOUR_API_KEY"
  data-webhook="https://your-endpoint.com/alert"
  defer
></script>`}
          </pre>
        </div>

        {/* Feature pills */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {[
            "Real-time webhook alerts",
            "Dashboard incident log",
            "Configurable click threshold",
            "Works on any framework",
            "GDPR-safe — no PII collected"
          ].map((f) => (
            <span
              key={f}
              className="bg-[#161b22] border border-[#30363d] text-[#c9d1d9] text-sm px-4 py-2 rounded-full"
            >
              {f}
            </span>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold uppercase tracking-widest text-sm mb-2">Pro</p>
          <p className="text-5xl font-extrabold text-white mb-1">$25</p>
          <p className="text-[#8b949e] mb-6">/month</p>
          <ul className="text-left space-y-3 mb-8">
            {[
              "Unlimited sites",
              "Real-time webhook delivery",
              "Incident dashboard",
              "Email &amp; Slack notifications",
              "API access",
              "Priority support"
            ].map((item) => (
              <li key={item} className="flex items-center gap-2 text-[#c9d1d9]">
                <span className="text-[#58a6ff] font-bold">✓</span>
                <span dangerouslySetInnerHTML={{ __html: item }} />
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Get Started
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-10">FAQ</h2>
        <div className="space-y-6">
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">What counts as a rage-click?</h3>
            <p className="text-[#8b949e] text-sm">
              By default, 3 or more clicks on the same form element within 2 seconds triggers an alert.
              You can configure both the threshold and the time window via data attributes on the script tag.
            </p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Does it slow down my site?</h3>
            <p className="text-[#8b949e] text-sm">
              No. The widget is under 3 KB gzipped, loads with <code className="text-[#58a6ff]">defer</code>,
              and uses passive event listeners — zero impact on page performance or Core Web Vitals.
            </p>
          </div>
          <div className="bg-[#161b22] border border-[#30363d] rounded-xl p-6">
            <h3 className="font-semibold text-white mb-2">Where do alerts go?</h3>
            <p className="text-[#8b949e] text-sm">
              Alerts are sent to your configured webhook URL in real time and also appear in your
              RageClick Detector dashboard. You can forward them to Slack, PagerDuty, or any HTTP endpoint.
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-[#30363d] text-center py-8 text-[#8b949e] text-sm">
        &copy; {new Date().getFullYear()} RageClick Detector. All rights reserved.
      </footer>
    </main>
  );
}
