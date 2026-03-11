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
    <div className="min-h-screen bg-white text-black">
      <main className="mx-auto max-w-[980px] px-8 py-16 md:px-16 md:py-20">
        {/* Header */}
        <h1 className="text-center text-sm font-bold tracking-[0.3em] uppercase mb-16">
          Humble Conviction
        </h1>

        {/* Divider */}
        <hr className="section-divider mb-16" />

        {/* Hero: Two Column */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.5fr] gap-8 md:gap-12 mb-16">
          {/* Left: Big Question */}
          <div className="flex items-center">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
              What&apos;s Your Founder Story?
            </h2>
          </div>

          {/* Right: Pitch + Intro */}
          <div className="md:border-l md:border-[#e3e3e3] md:pl-10">
            <h3 className="text-xl md:text-2xl font-bold mb-4 text-center md:text-left">
              Pitch Better,<br />Get Funded Faster
            </h3>
            <p className="text-sm leading-relaxed mb-4">
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
            <p className="text-sm leading-relaxed mb-4">
              I&apos;m an investor who&apos;s spent a decade helping hundreds of founders find
              investment faster through better storytelling.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              I&apos;m now building Humble Conviction to bring the same proven strategies to
              you -- free of cost.
            </p>
            <p className="text-sm leading-relaxed font-medium">
              Because it&apos;s time to stop raising and start building.
            </p>
          </div>
        </div>

        {/* Divider */}
        <hr className="section-divider mb-16" />

        {/* Email Capture Section */}
        <div className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Your investor-tested insights are waiting
          </h2>
          <h3 className="text-sm font-bold tracking-wide uppercase mb-6">
            Get my free &quot;29-Second Pitch Playbook&quot; + Newsletter
          </h3>

          {submitted ? (
            <div className="bg-black text-white rounded-lg p-6 text-center">
              <p className="text-lg font-semibold">You&apos;re in! Check your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-start">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full sm:w-64 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black"
              />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full sm:w-48 px-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-black"
              />
              <button
                type="submit"
                disabled={submitting}
                className="bg-black text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors disabled:opacity-50 whitespace-nowrap"
              >
                {submitting ? "Sending..." : "Get the Playbook + Newsletter"}
              </button>
            </form>
          )}
        </div>

        {/* Divider */}
        <hr className="section-divider mb-16" />

        {/* Two Column: Videos + Call for Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Watch the Videos */}
          <div>
            <h3 className="text-xl font-bold mb-3">Watch the Videos:</h3>
            <p className="text-sm mb-4">
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
          <div>
            <h3 className="text-xl font-bold mb-3">Call for Founders:</h3>
            <p className="text-sm leading-relaxed mb-4">
              If you&apos;re a founder who would like to level up their investor pitch, you may
              be a candidate to be featured on Humble Conviction&apos;s YouTube channel...We&apos;ll
              fine tune your story and workshop your pitch. It&apos;s great practice...and great
              publicity!
            </p>
            <p className="text-sm leading-relaxed mb-6">
              If you&apos;re interested, reach out by email and we&apos;ll have a chat to see if
              there might be a match.
            </p>
            <a
              href="mailto:brhnyc1970@gmail.com"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-3 rounded-lg text-sm font-medium hover:bg-gray-800 transition-colors"
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

        {/* Bottom Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-12 mb-16">
          {/* Left: Text */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
              Why Humble Conviction?<br />And why me?
            </h3>
            <p className="text-sm leading-relaxed mb-4">
              I&apos;ve spent my entire career in the world of startups, mostly here in NYC.
              I&apos;ve exited four companies, three as founder, and one as the first hire
              (still counts!)
            </p>
            <p className="text-sm leading-relaxed mb-4">
              I&apos;ve also spent the past ten years with ERA, the top accelerator in New
              York, first as a mentor, then investing as a partner overseeing the accelerator.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              In that time, I&apos;ve mentored hundreds of companies, interviewed thousands of
              founders, and coached more than 2,500 pitches.
            </p>
            <p className="text-sm mb-4">******</p>
            <p className="text-sm leading-relaxed mb-4">
              <strong>Here&apos;s what motivates me:</strong> Startup founders have one
              overarching problem.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              It&apos;s not the lack of a good idea, an ingenious product, or a big enough
              market opportunity.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              It&apos;s that most of them simply can&apos;t explain what they&apos;re building
              and why. <em>They can&apos;t tell their own story.</em>
            </p>
            <p className="text-sm leading-relaxed mb-4">
              But here&apos;s the good news: it&apos;s fixable. And I&apos;m here to help.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              So I&apos;ve taken on a new mission: to make everything I&apos;ve learned and
              taught over decades available to every entrepreneur, wherever they are, cost-free.
            </p>
            <p className="text-sm leading-relaxed mb-4">
              I (and my content) are easy to find: Try my newsletter, watch on YouTube, follow
              me on LinkedIn, email me.
            </p>
            <p className="text-sm leading-relaxed font-medium">
              So let&apos;s go! I&apos;m here to help you pitch strong...and stay humble!
            </p>
          </div>

          {/* Right: Headshot */}
          <div className="flex items-start justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://humbleconviction.com/assets/images/image01.jpg?v=c9a6ec28"
              alt="Brian Hecht"
              className="w-full max-w-[320px] rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Footer */}
        <p className="text-center text-xs tracking-widest uppercase text-gray-500">
          &copy; 2025 Humble Conviction Corp.
        </p>
      </main>
    </div>
  );
}
