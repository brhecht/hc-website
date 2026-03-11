"use client";

import { useState } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, name }),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black" style={{ fontSize: "clamp(16px, 1.1vw, 20px)" }}>
      {/* Use viewport-relative width so it scales proportionally on any screen */}
      <main className="mx-auto w-[85%] py-16 md:py-24">

        {/* Header */}
        <h1 className="text-center font-bold tracking-[0.3em] uppercase mb-20" style={{ fontSize: "0.85em" }}>
          Humble Conviction
        </h1>

        {/* Divider */}
        <hr className="section-divider mb-20" />

        {/* Hero: Two Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-20 items-center">
          {/* Left: Big Question */}
          <div>
            <h2 className="font-bold leading-[1.1] tracking-tight" style={{ fontSize: "clamp(2.5rem, 4vw, 4.5rem)" }}>
              What&apos;s<br />Your<br />Founder<br />Story?
            </h2>
          </div>

          {/* Right: Pitch + Intro */}
          <div className="md:border-l md:border-[#e3e3e3] md:pl-16">
            <h3 className="font-bold mb-6" style={{ fontSize: "clamp(1.5rem, 2vw, 2.2rem)" }}>
              Pitch Better,<br />Get Funded Faster
            </h3>
            <p className="leading-relaxed mb-3">
              Hi, I&apos;m{" "}
              <a
                href="https://www.linkedin.com/in/brianhecht/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-semibold"
              >
                Brian
              </a>
            </p>
            <p className="leading-relaxed mb-3">
              I&apos;m an investor who&apos;s spent a decade helping hundreds of founders find
              investment faster through better storytelling.
            </p>
            <p className="leading-relaxed mb-3">
              I&apos;m now building Humble Conviction to bring the same proven strategies to
              you -- free of cost.
            </p>
            <p className="leading-relaxed font-medium">
              Because it&apos;s time to stop raising and start building.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="section-divider mb-20" />

        {/* Email Capture Section */}
        <div className="mb-20">
          <h2 className="font-bold mb-2" style={{ fontSize: "clamp(1.8rem, 2.5vw, 3rem)" }}>
            Your investor-tested insights are waiting
          </h2>
          <p className="font-bold tracking-wide uppercase mb-8" style={{ fontSize: "0.8em" }}>
            Get my free &quot;29-Second Pitch Playbook&quot; + Newsletter
          </p>

          {submitted ? (
            <div className="bg-black text-white rounded-lg p-8 text-center">
              <p className="text-xl font-semibold">You&apos;re in! Check your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 items-start">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:flex-1 sm:max-w-sm px-5 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full sm:flex-1 sm:max-w-xs px-5 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                disabled={submitting}
                className="bg-black text-white px-10 py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {submitting ? "Sending..." : "Get the Playbook + Newsletter"}
              </button>
            </form>
          )}
        </div>

        {/* Divider */}
        <hr className="section-divider mb-20" />

        {/* Two Column: Videos + Call for Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-20">
          {/* Watch the Videos */}
          <div>
            <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.3rem, 1.6vw, 1.8rem)" }}>Watch the Videos:</h3>
            <p className="mb-5">
              Subscribe to my YouTube channel:{" "}
              <a
                href="https://www.youtube.com/@HumbleConvictionStartups"
                target="_blank"
                rel="noopener noreferrer"
                className="underline font-medium"
              >
                @HumbleConvictionStartups
              </a>
            </p>
            <div className="aspect-video w-full rounded-lg overflow-hidden bg-black">
              <iframe
                src="https://www.youtube.com/embed/_3601d3OpYY"
                title="Humble Conviction - Startup Pitch Essentials"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          {/* Call for Founders */}
          <div className="flex flex-col justify-center">
            <h3 className="font-bold mb-4" style={{ fontSize: "clamp(1.3rem, 1.6vw, 1.8rem)" }}>Call for Founders:</h3>
            <p className="leading-relaxed mb-4">
              If you&apos;re a founder who would like to level up their investor pitch, you may
              be a candidate to be featured on Humble Conviction&apos;s YouTube channel...We&apos;ll
              fine tune your story and workshop your pitch. It&apos;s great practice...and great
              publicity!
            </p>
            <p className="leading-relaxed mb-8">
              If you&apos;re interested, reach out by email and we&apos;ll have a chat to see if
              there might be a match.
            </p>
            <div>
              <a
                href="mailto:brhnyc1970@gmail.com"
                className="inline-flex items-center gap-2 bg-black text-white px-10 py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email Me!
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="section-divider mb-20" />

        {/* Bottom Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-20 items-start">
          {/* Left: Text */}
          <div>
            <h3 className="font-bold leading-tight mb-10" style={{ fontSize: "clamp(1.8rem, 2.5vw, 3rem)" }}>
              Why Humble Conviction?<br />And why me?
            </h3>
            <p className="leading-relaxed mb-4">
              I&apos;ve spent my entire career in the world of startups, mostly here in NYC.
              I&apos;ve exited four companies, three as founder, and one as the first hire
              (still counts!)
            </p>
            <p className="leading-relaxed mb-4">
              I&apos;ve also spent the past ten years with ERA, the top accelerator in New
              York, first as a mentor, then investing as a partner overseeing the accelerator.
            </p>
            <p className="leading-relaxed mb-4">
              In that time, I&apos;ve mentored hundreds of companies, interviewed thousands of
              founders, and coached more than 2,500 pitches.
            </p>
            <p className="mb-4">******</p>
            <p className="leading-relaxed mb-4">
              <strong>Here&apos;s what motivates me:</strong> Startup founders have one
              overarching problem.
            </p>
            <p className="leading-relaxed mb-4">
              It&apos;s not the lack of a good idea, an ingenious product, or a big enough
              market opportunity.
            </p>
            <p className="leading-relaxed mb-4">
              It&apos;s that most of them simply can&apos;t explain what they&apos;re building
              and why. <em>They can&apos;t tell their own story.</em>
            </p>
            <p className="leading-relaxed mb-4">
              But here&apos;s the good news: it&apos;s fixable. And I&apos;m here to help.
            </p>
            <p className="leading-relaxed mb-4">
              So I&apos;ve taken on a new mission: to make everything I&apos;ve learned and
              taught over decades available to every entrepreneur, wherever they are, cost-free.
            </p>
            <p className="leading-relaxed mb-4">
              I (and my content) are easy to find: Try my newsletter, watch on YouTube, follow
              me on LinkedIn, email me.
            </p>
            <p className="leading-relaxed font-medium">
              So let&apos;s go! I&apos;m here to help you pitch strong...and stay humble!
            </p>
          </div>

          {/* Right: Headshot */}
          <div className="flex items-start justify-center pt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/headshot.jpg"
              alt="Brian Hecht"
              className="w-full max-w-[500px] rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Footer */}
        <hr className="section-divider mb-10" />
        <p className="text-center tracking-widest uppercase text-gray-500" style={{ fontSize: "0.75em" }}>
          &copy; 2026 Humble Conviction Corp.
        </p>
      </main>
    </div>
  );
}
