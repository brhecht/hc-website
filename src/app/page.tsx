"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [latestVideoId, setLatestVideoId] = useState("bKFXxGx6JhI");
  const [latestVideoTitle, setLatestVideoTitle] = useState("Humble Conviction - Latest Episode");

  useEffect(() => {
    fetch("/api/latest-video")
      .then((r) => r.json())
      .then(({ videoId, title }) => {
        if (videoId) setLatestVideoId(videoId);
        if (title) setLatestVideoTitle(title);
      })
      .catch(() => {});
  }, []);

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
    <div className="min-h-screen bg-white text-black font-sans">
      <main className="w-full px-[8%] py-16 md:py-24">

        {/* Header */}
        <h1 className="text-center text-sm font-bold tracking-[0.35em] uppercase mb-16">
          Humble Conviction
        </h1>

        <hr className="border-t border-[#e3e3e3] mb-16" />

        {/* Hero: Two Column */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16 items-center max-w-6xl mx-auto">
          <div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight">
              What&apos;s<br />Your<br />Founder<br />Story?
            </h2>
          </div>
          <div className="md:border-l md:border-[#e3e3e3] md:pl-14">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 leading-tight">
              Pitch Better,<br />Get Funded Faster
            </h3>
            <p className="text-lg leading-relaxed mb-3">
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
            <p className="text-lg leading-relaxed mb-3">
              I&apos;m an investor who&apos;s spent a decade helping hundreds of founders find
              investment faster through better storytelling.
            </p>
            <p className="text-lg leading-relaxed mb-3">
              I&apos;m now building Humble Conviction to bring the same proven strategies to
              you &mdash; free of cost.
            </p>
            <p className="text-lg leading-relaxed font-medium">
              Because it&apos;s time to stop raising and start building.
            </p>
          </div>
        </div>

        <hr className="border-t border-[#e3e3e3] mb-16" />

        {/* Quiz CTA — Primary */}
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-2">
            Find Out What Investors See — Before They Tell You
          </h2>
          <p className="text-sm font-bold tracking-wide uppercase mb-8 text-gray-500">
            Free 3-minute assessment based on 2,500+ pitches analyzed
          </p>
          <a
            href="https://quiz.humbleconviction.com"
            className="inline-block bg-black text-white px-10 py-4 rounded-lg font-semibold hover:bg-gray-800 transition-colors text-lg"
          >
            Take the Founder Assessment
          </a>
        </div>

        <hr className="border-t border-[#e3e3e3] mb-16" />

        {/* Newsletter — Secondary */}
        <div className="mb-16 max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">
            Stay in the loop
          </h2>
          <p className="text-sm font-bold tracking-wide uppercase mb-8 text-gray-500">
            Get investor-tested insights in your inbox every week
          </p>

          {submitted ? (
            <div className="bg-black text-white rounded-lg p-8">
              <p className="text-xl font-semibold">You&apos;re in! Check your inbox.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="sm:w-56 px-5 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-base"
              />
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="sm:w-48 px-5 py-3.5 border border-gray-300 rounded-lg focus:outline-none focus:border-black text-base"
              />
              <button
                type="submit"
                disabled={submitting}
                className="bg-black text-white px-8 py-3.5 rounded-lg font-semibold hover:bg-gray-800 transition-colors disabled:opacity-50 whitespace-nowrap text-base"
              >
                {submitting ? "Sending..." : "Subscribe to Newsletter"}
              </button>
            </form>
          )}
        </div>

        <hr className="border-t border-[#e3e3e3] mb-16" />

        {/* Videos + Call for Founders */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 mb-16 max-w-6xl mx-auto">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">Watch the Videos:</h3>
            <p className="mb-5 text-base">
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
                src={`https://www.youtube.com/embed/${latestVideoId}`}
                title={latestVideoTitle}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center">
            <h3 className="text-xl md:text-2xl font-bold mb-4">Call for Founders:</h3>
            <p className="text-base leading-relaxed mb-4">
              If you&apos;re a founder who would like to level up their investor pitch, you may
              be a candidate to be featured on Humble Conviction&apos;s YouTube channel...We&apos;ll
              fine tune your story and workshop your pitch. It&apos;s great practice...and great
              publicity!
            </p>
            <p className="text-base leading-relaxed mb-8">
              If you&apos;re interested, reach out by email and we&apos;ll have a chat to see if
              there might be a match.
            </p>
            <div>
              <a
                href="mailto:brhnyc1970@gmail.com"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-3.5 rounded-lg font-medium hover:bg-gray-800 transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                Email Me!
              </a>
            </div>
          </div>
        </div>

        <hr className="border-t border-[#e3e3e3] mb-16" />

        {/* Bio Section */}
        <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-20 mb-16 items-start max-w-6xl mx-auto">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold leading-tight mb-10">
              Why Humble Conviction?<br />And why me?
            </h3>
            <div className="text-base leading-relaxed space-y-4">
              <p>
                I&apos;ve spent my entire career in the world of startups, mostly here in NYC.
                I&apos;ve exited four companies, three as founder, and one as the first hire
                (still counts!)
              </p>
              <p>
                I&apos;ve also spent the past ten years with ERA, the top accelerator in New
                York, first as a mentor, then investing as a partner overseeing the accelerator.
              </p>
              <p>
                In that time, I&apos;ve mentored hundreds of companies, interviewed thousands of
                founders, and coached more than 2,500 pitches.
              </p>
              <p className="text-center text-gray-400">&#x2022; &#x2022; &#x2022;</p>
              <p>
                <strong>Here&apos;s what motivates me:</strong> Startup founders have one
                overarching problem.
              </p>
              <p>
                It&apos;s not the lack of a good idea, an ingenious product, or a big enough
                market opportunity.
              </p>
              <p>
                It&apos;s that most of them simply can&apos;t explain what they&apos;re building
                and why. <em>They can&apos;t tell their own story.</em>
              </p>
              <p>
                But here&apos;s the good news: it&apos;s fixable. And I&apos;m here to help.
              </p>
              <p>
                So I&apos;ve taken on a new mission: to make everything I&apos;ve learned and
                taught over decades available to every entrepreneur, wherever they are, cost-free.
              </p>
              <p>
                I (and my content) are easy to find: Try my newsletter, watch on YouTube, follow
                me on LinkedIn, email me.
              </p>
              <p className="font-medium">
                So let&apos;s go! I&apos;m here to help you pitch strong...and stay humble!
              </p>
            </div>
          </div>

          <div className="flex items-start justify-center pt-4">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/images/headshot.jpg"
              alt="Brian Hecht"
              className="w-full max-w-[440px] rounded-lg object-cover"
            />
          </div>
        </div>

        {/* Footer */}
        <hr className="border-t border-[#e3e3e3] mb-10" />
        <p className="text-center text-xs tracking-widest uppercase text-gray-400">
          &copy; 2026 Humble Conviction Corp.
        </p>
      </main>
    </div>
  );
}
