"use client";

import { useState } from "react";
import Image from "next/image";

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
        body: JSON.stringify({ email, name, source: "newbuilder-homepage" }),
      });
      setSubmitted(true);
    } catch {
      alert("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans flex flex-col">
      <main className="flex-1 w-full px-[8%] py-16 md:py-24 max-w-5xl mx-auto">

        {/* Nav */}
        <nav className="flex justify-between items-center mb-20">
          <span className="text-sm font-bold tracking-[0.35em] uppercase text-gray-400">
            The New Builder
          </span>
          <div className="hidden sm:flex gap-6">
            <a href="https://www.youtube.com/@the_new_builder" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 font-medium hover:text-black transition-colors">YouTube</a>
            <a href="https://www.linkedin.com/in/brianhecht/" target="_blank" rel="noopener noreferrer" className="text-sm text-gray-400 font-medium hover:text-black transition-colors">LinkedIn</a>
            <a href="mailto:brian@humbleconviction.com" className="text-sm text-gray-400 font-medium hover:text-black transition-colors">Contact</a>
          </div>
        </nav>

        {/* Hero: Tagline + Photo */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16 mb-16 items-center">
          <div>
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.02] tracking-tight mb-8">
              Navigating<br />
              the AI era.<br />
              Together.
            </h1>
            <p className="text-xl md:text-2xl leading-relaxed text-gray-500 max-w-lg">
              Bringing founders together to rethink how companies get built, with AI as the foundation, not just a tool.
            </p>
          </div>
          <div className="flex justify-center md:justify-end">
            <Image
              src="/images/headshot.jpg"
              alt="Brian Hecht"
              width={420}
              height={420}
              priority
              className="w-full max-w-[400px] rounded-2xl object-cover"
            />
          </div>
        </section>

        <hr className="border-t border-[#e3e3e3] mb-16" />

        {/* The Story */}
        <section className="grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-12 md:gap-20 mb-16 items-start max-w-4xl">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              Why I&apos;m<br />building this.
            </h2>
          </div>
          <div className="text-lg leading-relaxed space-y-5 text-gray-700">
            <p>
              I was a founder for 20 years and an investor for 10. I never wrote a line of code. Then I started building with AI, and couldn&apos;t stop.
            </p>
            <p>
              Every serious conversation I was having about startups had shifted to the same question: what does it actually mean to build a company now that the rules have changed?
            </p>
            <p>
              The people who figure it out will be the ones building right now and comparing notes, not reading about it from the sidelines. The New Builder is where that happens, through content, conversations, and community.
            </p>
            <p className="font-medium text-black">
              Because the founders who figure this out are going to do it together.
            </p>
          </div>
        </section>

        <hr className="border-t border-[#e3e3e3] mb-16" />

        {/* Where to Find Me */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Where to find me</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {/* Podcast */}
            <a
              href="https://www.youtube.com/@the_new_builder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-[#e3e3e3] hover:border-gray-400 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/>
                  <path d="M19 10v2a7 7 0 0 1-14 0v-2"/>
                  <line x1="12" x2="12" y1="19" y2="22"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-sm group-hover:text-black">Podcast</div>
                <div className="text-sm text-gray-400">Conversations with AI-era builders</div>
              </div>
            </a>

            {/* YouTube */}
            <a
              href="https://www.youtube.com/@the_new_builder"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-[#e3e3e3] hover:border-gray-400 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <path d="m16 13-4-2.25V13l-4-2.25V13"/>
                  <polygon points="5 3 19 12 5 21 5 3"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-sm group-hover:text-black">YouTube</div>
                <div className="text-sm text-gray-400">Full episodes + clips</div>
              </div>
            </a>

            {/* Newsletter */}
            <a
              href="#subscribe"
              className="flex items-center gap-4 p-5 rounded-xl border border-[#e3e3e3] hover:border-gray-400 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <rect width="20" height="16" x="2" y="4" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-sm group-hover:text-black">Newsletter</div>
                <div className="text-sm text-gray-400">Multi-voice weekly edition</div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/brianhecht/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-5 rounded-xl border border-[#e3e3e3] hover:border-gray-400 transition-colors group"
            >
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center flex-shrink-0">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-gray-600">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                  <rect width="4" height="12" x="2" y="9"/>
                  <circle cx="4" cy="4" r="2"/>
                </svg>
              </div>
              <div>
                <div className="font-semibold text-sm group-hover:text-black">LinkedIn</div>
                <div className="text-sm text-gray-400">AI-era observations + builds</div>
              </div>
            </a>

          </div>
        </section>

        <hr className="border-t border-[#e3e3e3] mb-16" />

        {/* Latest Episode */}
        <section className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-8">Latest episode</h2>
          <div className="aspect-video w-full max-w-3xl rounded-xl overflow-hidden bg-black">
            <iframe
              src="https://www.youtube.com/embed/bKFXxGx6JhI"
              title="The New Builder Podcast"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          </div>
        </section>

        <hr className="border-t border-[#e3e3e3] mb-16" />

        {/* Email Capture */}
        <section id="subscribe" className="mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Stay in the loop</h2>
          <p className="text-lg text-gray-500 mb-8 max-w-lg">
            A weekly newsletter for founders building in the AI era. Brian&apos;s take + hot takes from builders in the field.
          </p>

          {submitted ? (
            <div className="inline-block bg-black text-white rounded-lg px-10 py-5">
              <p className="text-lg font-semibold">You&apos;re in. Watch your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 max-w-xl">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="sm:w-64 px-5 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-base"
              />
              <input
                type="text"
                placeholder="First name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="sm:w-44 px-5 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-base"
              />
              <button
                type="submit"
                disabled={submitting}
                className="bg-black text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 whitespace-nowrap text-base"
              >
                {submitting ? "..." : "Subscribe"}
              </button>
            </form>
          )}
        </section>

        <hr className="border-t border-[#e3e3e3] mb-16" />

        {/* Bio */}
        <section className="mb-16 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">About Brian</h2>
          <div className="text-lg leading-relaxed space-y-4 text-gray-700">
            <p>
              Brian Hecht is a 4x exited founder and former Managing Director of ERA, New York&apos;s top startup accelerator, where he spent a decade coaching 2,500+ pitches and investing in early-stage companies.
            </p>
            <p>
              He now spends most of his time building with AI, advising founders, and hosting live events in NYC. The New Builder is where all of that comes together.
            </p>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="w-full px-[8%] py-8 border-t border-[#e3e3e3]">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs tracking-widest uppercase text-gray-400">
            &copy; 2026 The New Builder
          </p>
          <div className="flex gap-6">
            <a href="https://www.linkedin.com/in/brianhecht/" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors">LinkedIn</a>
            <a href="https://www.youtube.com/@the_new_builder" target="_blank" rel="noopener noreferrer" className="text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors">YouTube</a>
            <a href="mailto:brian@humbleconviction.com" className="text-xs tracking-widest uppercase text-gray-400 hover:text-black transition-colors">Email</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
