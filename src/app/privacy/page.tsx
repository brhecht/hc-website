import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Humble Conviction",
  description: "Privacy Policy for Humble Conviction",
};

export default function PrivacyPage() {
  return (
    <main style={{ maxWidth: "720px", margin: "0 auto", padding: "60px 24px", fontFamily: "Inter, sans-serif", color: "#1a1a1a", lineHeight: "1.7" }}>
      <h1 style={{ fontSize: "2rem", fontWeight: 700, marginBottom: "8px" }}>Privacy Policy</h1>
      <p style={{ color: "#666", marginBottom: "40px" }}>Last updated: April 6, 2025</p>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>1. Who We Are</h2>
        <p>Humble Conviction (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates the website humbleconviction.com and related tools that help startup founders improve their investor pitches. For questions about this policy, contact us at <a href="mailto:hello@humbleconviction.com" style={{ color: "#0070f3" }}>hello@humbleconviction.com</a>.</p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>2. Information We Collect</h2>
        <p>We may collect the following types of information:</p>
        <ul style={{ paddingLeft: "20px", marginTop: "8px" }}>
          <li><strong>Contact information</strong> — name and email address when you subscribe to our newsletter or fill out a form.</li>
          <li><strong>Usage data</strong> — pages visited, time spent on site, and interactions, collected via analytics tools.</li>
          <li><strong>Quiz responses</strong> — answers you provide in our founder pitch assessment quiz.</li>
          <li><strong>Device &amp; browser data</strong> — IP address, browser type, and operating system for analytics purposes.</li>
        </ul>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>3. How We Use Your Information</h2>
        <ul style={{ paddingLeft: "20px" }}>
          <li>To send you relevant content, newsletters, and pitch coaching resources you&apos;ve opted into.</li>
          <li>To personalize your experience and quiz results.</li>
          <li>To improve our website and services through analytics.</li>
          <li>To measure the effectiveness of our marketing (including via Meta Pixel).</li>
        </ul>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>4. Meta Pixel &amp; Advertising</h2>
        <p>We use the Meta Pixel (Facebook Pixel) to understand how visitors interact with our site and to deliver relevant ads on Meta platforms (Facebook and Instagram). This tool may collect data such as your IP address, browser type, and pages visited. You can opt out of Meta&apos;s data use at <a href="https://www.facebook.com/help/568137493302217" target="_blank" rel="noopener noreferrer" style={{ color: "#0070f3" }}>facebook.com/help/568137493302217</a>.</p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>5. Data Sharing</h2>
        <p>We do not sell your personal information. We may share data with trusted third-party service providers (email platforms, analytics tools) solely to operate our services. These providers are bound by their own privacy policies.</p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>6. Cookies</h2>
        <p>We use cookies to remember your preferences and analyze site traffic. You can disable cookies in your browser settings, though some features may not function properly.</p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>7. Your Rights</h2>
        <p>Depending on your location, you may have the right to access, correct, or delete your personal data. To make a request, email us at <a href="mailto:hello@humbleconviction.com" style={{ color: "#0070f3" }}>hello@humbleconviction.com</a>.</p>
      </section>

      <section style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>8. Changes to This Policy</h2>
        <p>We may update this policy from time to time. Changes will be posted on this page with a new &ldquo;Last updated&rdquo; date.</p>
      </section>

      <section>
        <h2 style={{ fontSize: "1.25rem", fontWeight: 600, marginBottom: "12px" }}>9. Contact</h2>
        <p>Questions? Email us at <a href="mailto:hello@humbleconviction.com" style={{ color: "#0070f3" }}>hello@humbleconviction.com</a>.</p>
      </section>
    </main>
  );
}
