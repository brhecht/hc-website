"use client";

import { useState, useCallback } from "react";
import Image from "next/image";

export default function Home() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }, [email]);

  return (
    <div className="hc-page">
      <div className="hc-container">

        {/* NAV */}
        <nav className="hc-nav">
          <span className="hc-logo">Humble Conviction</span>
          <div className="hc-nav-links">
            <a href="https://www.youtube.com/@HumbleConvictionStartups" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="https://www.linkedin.com/in/brianhecht/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="mailto:brian@humbleconviction.com">Contact</a>
          </div>
        </nav>

        {/* HERO */}
        <section className="hc-hero">
          {/* Photo */}
          <div className="hc-hero-photo">
            <div className="hc-accent-circle">
              <Image
                src="/brian-headshot.png"
                alt="Brian Hecht"
                width={420}
                height={420}
                priority
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", mixBlendMode: "multiply" }}
              />
            </div>
          </div>

          {/* Text */}
          <div className="hc-hero-text">
            <h1>What&apos;s Your<br />Founder Story?</h1>
            <p>
              Hi, I&apos;m{" "}
              <a href="https://www.linkedin.com/in/brianhecht/" target="_blank" rel="noopener noreferrer">Brian</a>.
              {" "}I&apos;m a 4x exited founder and investor who&apos;s spent a decade at NYC&apos;s top accelerator coaching 2,500+ startup pitches.
            </p>
            <p className="hc-spacer">
              I built Humble Conviction to help founders tell better stories and get funded faster.
            </p>

            {/* Newsletter */}
            <div className="hc-nl-label">Get investor-tested insights weekly</div>
            {submitted ? (
              <p style={{ fontSize: 15, fontWeight: 600, color: "#E8845A" }}>You&apos;re in! Check your inbox.</p>
            ) : (
              <form onSubmit={handleSubmit} className="hc-nl-form">
                <input
                  type="email"
                  placeholder="Your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  aria-label="Email address"
                />
                <button type="submit" disabled={submitting}>
                  {submitting ? "..." : "Subscribe"}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* VIDEO + WAYS TO CONNECT */}
        <section>
          <div className="hc-card hc-video-connect">
            <div className="hc-video-wrap">
              <div className="hc-embed">
                <iframe
                  src="https://www.youtube.com/embed/_3601d3OpYY"
                  title="Humble Conviction"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
            <div className="hc-connect-right">
              <h2>Ways to Connect</h2>
              <a href="https://www.youtube.com/@HumbleConvictionStartups" target="_blank" rel="noopener noreferrer" className="hc-connect-link">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="#FF0000">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg>
                <div>
                  <div className="hc-link-label">YouTube</div>
                  <div className="hc-link-sub">20K+ subscribers · Pitch breakdowns &amp; founder stories</div>
                </div>
              </a>
              <a href="https://www.linkedin.com/in/brianhecht/" target="_blank" rel="noopener noreferrer" className="hc-connect-link">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="#0A66C2">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                </svg>
                <div>
                  <div className="hc-link-label">LinkedIn</div>
                  <div className="hc-link-sub">Follow for startup insights &amp; founder advice</div>
                </div>
              </a>
              <a href="mailto:brian@humbleconviction.com" className="hc-connect-link">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#1A1A1A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                <div>
                  <div className="hc-link-label">Email Me</div>
                  <div className="hc-link-sub">Say hi or tell me your founder story</div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* QUIZ CTA */}
        <section style={{ marginTop: 32 }}>
          <div className="hc-card hc-quiz">
            <h2>Find Out What Investors See...But Will Never Tell You</h2>
            <p>Try my free 3-minute assessment based on 2,500+ pitches analyzed</p>
            <a href="https://quiz.humbleconviction.com">Take the Founder Assessment</a>
          </div>
        </section>

        {/* FOOTER */}
        <footer className="hc-footer">
          <span className="hc-copy">&copy; 2026 Humble Conviction Corp.</span>
          <div className="hc-footer-links">
            <a href="https://www.linkedin.com/in/brianhecht/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href="https://www.youtube.com/@HumbleConvictionStartups" target="_blank" rel="noopener noreferrer">YouTube</a>
            <a href="mailto:brian@humbleconviction.com">Email</a>
          </div>
        </footer>

      </div>
    </div>
  );
}
