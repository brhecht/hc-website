"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";

/* ── Scroll reveal hook ── */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.unobserve(el);
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}

/* ── Animated counter ── */
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1200;
          const start = performance.now();

          const animate = (now: number) => {
            const elapsed = now - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };

          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return <span ref={ref}>{count.toLocaleString()}{suffix}</span>;
}

export default function Home() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [headerScrolled, setHeaderScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setHeaderScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = useCallback(async (e: React.FormEvent) => {
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
  }, [email, name]);

  const quizRef = useReveal<HTMLDivElement>();
  const newsletterRef = useReveal<HTMLDivElement>();
  const videosRef = useReveal<HTMLDivElement>();
  const foundersRef = useReveal<HTMLDivElement>();
  const bioTextRef = useReveal<HTMLDivElement>();
  const bioImageRef = useReveal<HTMLDivElement>();
  const statsRef = useReveal<HTMLDivElement>();

  return (
    <div className="min-h-screen bg-background text-foreground font-body">

      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          headerScrolled
            ? "backdrop-blur-lg bg-background/90 border-b border-navy-light shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="flex justify-between items-center px-6 md:px-12 py-4 max-w-7xl mx-auto">
          <span className="text-base font-bold tracking-tight text-navy">
            Humble Conviction
          </span>
          <a
            href="https://quiz.humbleconviction.com"
            className="bg-coral text-white px-5 py-2 rounded-xl text-sm font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 pulse-glow"
          >
            Take the Assessment
          </a>
        </div>
      </header>

      <main>

        {/* Hero */}
        <section className="px-6 md:px-16 lg:px-24 pt-16 pb-20 md:pt-24 md:pb-28 bg-surface relative overflow-hidden border-t-2 border-coral">
          {/* Subtle background gradient orb */}
          <div className="absolute top-[-20%] right-[-10%] w-[500px] h-[500px] bg-coral/[0.04] rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-navy/[0.03] rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center max-w-6xl mx-auto relative">
            <div>
              <div className="hero-animate">
                <p className="text-xs font-bold tracking-widest uppercase text-coral mb-4 dot-accent">
                  For Startup Founders
                </p>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight tracking-[-1.5px] text-navy hero-animate-delay-1">
                What&apos;s Your Founder Story?
              </h1>
            </div>
            <div className="hero-animate-delay-2">
              <h2 className="text-2xl md:text-3xl font-extrabold mb-6 leading-tight tracking-[-0.3px] text-navy">
                Pitch Better, Get Funded Faster
              </h2>
              <p className="text-base md:text-lg leading-relaxed mb-3 text-muted">
                Hi, I&apos;m{" "}
                <a
                  href="https://www.linkedin.com/in/brianhecht/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral font-semibold animated-underline"
                >
                  Brian
                </a>
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-3 text-muted">
                I&apos;m an investor who&apos;s spent a decade helping hundreds of founders find
                investment faster through better storytelling.
              </p>
              <p className="text-base md:text-lg leading-relaxed mb-3 text-muted">
                I&apos;m now building Humble Conviction to bring the same proven strategies to
                you &mdash; free of cost.
              </p>
              <p className="text-base md:text-lg leading-relaxed font-semibold text-navy">
                Because it&apos;s time to stop raising and start building.
              </p>
            </div>
          </div>
        </section>

        {/* Social Proof Stats */}
        <section className="px-6 md:px-16 lg:px-24 py-10 bg-navy">
          <div ref={statsRef} className="reveal max-w-4xl mx-auto grid grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                <AnimatedNumber target={2500} suffix="+" />
              </p>
              <p className="text-xs md:text-sm text-white/50 mt-1 font-medium uppercase tracking-wide">Pitches Coached</p>
            </div>
            <div className="border-x border-white/10">
              <p className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                <AnimatedNumber target={10} suffix="+" />
              </p>
              <p className="text-xs md:text-sm text-white/50 mt-1 font-medium uppercase tracking-wide">Years Investing</p>
            </div>
            <div>
              <p className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                <AnimatedNumber target={4} />
              </p>
              <p className="text-xs md:text-sm text-white/50 mt-1 font-medium uppercase tracking-wide">Exits as Founder</p>
            </div>
          </div>
        </section>

        {/* Quiz CTA */}
        <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24">
          <div ref={quizRef} className="reveal-scale bg-white rounded-2xl p-10 md:p-16 max-w-3xl mx-auto text-center card-lift gradient-border">
            <p className="text-xs font-bold tracking-widest uppercase text-coral mb-4">
              Free 3-minute assessment
            </p>
            <h2 className="text-2xl md:text-4xl font-extrabold mb-3 tracking-[-0.3px] text-navy">
              Find Out What Investors See — Before They Tell You
            </h2>
            <p className="text-muted text-sm mb-8">
              Based on 2,500+ pitches analyzed
            </p>
            <a
              href="https://quiz.humbleconviction.com"
              className="inline-block bg-coral text-white px-8 py-4 rounded-xl font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 text-lg coral-glow coral-glow-hover"
            >
              Take the Founder Assessment
            </a>
          </div>
        </section>

        {/* Newsletter */}
        <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 bg-surface">
          <div ref={newsletterRef} className="reveal max-w-3xl mx-auto text-center">
            <p className="text-xs font-bold tracking-widest uppercase text-coral mb-4">
              Weekly insights
            </p>
            <h2 className="text-2xl md:text-3xl font-extrabold mb-3 tracking-[-0.3px] text-navy">
              Stay in the loop
            </h2>
            <p className="text-muted text-sm mb-8">
              Get investor-tested insights in your inbox every week
            </p>

            {submitted ? (
              <div className="bg-white border border-navy-light rounded-xl p-8 animate-[scaleIn_0.4s_cubic-bezier(0.16,1,0.3,1)_both]">
                <div className="w-12 h-12 bg-coral/10 rounded-full flex items-center justify-center mx-auto mb-3">
                  <svg className="w-6 h-6 text-coral" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <p className="text-xl font-bold text-navy">You&apos;re in! Check your inbox.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
                <div>
                  <label htmlFor="email" className="sr-only">Email</label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    aria-required="true"
                    className="sm:w-56 px-5 py-3.5 border border-navy-light rounded-xl focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral text-base transition-all duration-200 hover:border-slate/30"
                  />
                </div>
                <div>
                  <label htmlFor="name" className="sr-only">Name</label>
                  <input
                    id="name"
                    type="text"
                    placeholder="Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="sm:w-48 px-5 py-3.5 border border-navy-light rounded-xl focus:outline-none focus:ring-2 focus:ring-coral/40 focus:border-coral text-base transition-all duration-200 hover:border-slate/30"
                  />
                </div>
                <button
                  type="submit"
                  disabled={submitting}
                  className="bg-navy text-white px-8 py-3.5 rounded-xl font-bold hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 disabled:opacity-50 whitespace-nowrap text-base navy-glow"
                >
                  {submitting ? "Sending..." : "Join Free"}
                </button>
              </form>
            )}
          </div>
        </section>

        {/* Videos + Call for Founders */}
        <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 max-w-6xl mx-auto">
            <div ref={videosRef} className="reveal-left">
              <p className="text-xs font-bold tracking-widest uppercase text-coral mb-3 dot-accent">
                Watch
              </p>
              <h3 className="text-xl md:text-2xl font-extrabold mb-4 tracking-[-0.3px] text-navy">
                Watch the Videos
              </h3>
              <p className="mb-5 text-base text-muted">
                Subscribe to my YouTube channel:{" "}
                <a
                  href="https://www.youtube.com/@HumbleConvictionStartups"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-coral font-medium animated-underline"
                >
                  @HumbleConvictionStartups
                </a>
              </p>
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-navy shadow-lg group">
                <iframe
                  src="https://www.youtube.com/embed/_3601d3OpYY"
                  title="Humble Conviction - Startup Pitch Essentials"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full transition-transform duration-500 group-hover:scale-[1.02]"
                />
              </div>
            </div>

            <div ref={foundersRef} className="reveal-right flex flex-col justify-center">
              <p className="text-xs font-bold tracking-widest uppercase text-coral mb-3 dot-accent">
                Get Featured
              </p>
              <h3 className="text-xl md:text-2xl font-extrabold mb-4 tracking-[-0.3px] text-navy">
                Call for Founders
              </h3>
              <p className="text-base leading-relaxed mb-4 text-muted">
                If you&apos;re a founder who would like to level up their investor pitch, you may
                be a candidate to be featured on Humble Conviction&apos;s YouTube channel...We&apos;ll
                fine tune your story and workshop your pitch. It&apos;s great practice...and great
                publicity!
              </p>
              <p className="text-base leading-relaxed mb-8 text-muted">
                If you&apos;re interested, reach out by email and we&apos;ll have a chat to see if
                there might be a match.
              </p>
              <div>
                <a
                  href="mailto:brhnyc1970@gmail.com"
                  className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-xl font-semibold hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 navy-glow"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="px-6 md:px-16 lg:px-24 py-16 md:py-24 bg-surface relative overflow-hidden">
          <div className="absolute top-[10%] right-[-5%] w-[300px] h-[300px] bg-coral/[0.03] rounded-full blur-[80px] pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12 md:gap-20 items-start max-w-6xl mx-auto relative">
            <div ref={bioTextRef} className="reveal-left">
              <h3 className="text-3xl md:text-4xl font-extrabold leading-tight mb-10 tracking-[-0.3px] text-navy">
                Why Humble Conviction? And why me?
              </h3>
              <div className="text-base leading-relaxed space-y-4 text-muted">
                <p>
                  I&apos;ve spent my entire career in the world of startups, mostly here in <span className="text-emphasis">NYC</span>.
                  I&apos;ve exited four companies, three as founder, and one as the first hire
                  (still counts!)
                </p>
                <p>
                  I&apos;ve also spent the past ten years with <span className="text-emphasis">ERA</span>, the top accelerator in New
                  York, first as a mentor, then investing as a partner overseeing the accelerator.
                </p>
                <p>
                  In that time, I&apos;ve mentored hundreds of companies, interviewed thousands of
                  founders, and coached more than 2,500 pitches.
                </p>
                <div className="w-12 h-0.5 bg-coral/40 my-6" />
                <p>
                  <strong className="text-navy font-bold">Here&apos;s what motivates me:</strong> Startup founders have one
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
                <p className="font-semibold text-navy">
                  So let&apos;s go! I&apos;m here to help you pitch strong...and <span className="text-coral">stay humble!</span>
                </p>
              </div>
            </div>

            <div ref={bioImageRef} className="reveal-right flex items-start justify-center pt-4">
              <Image
                src="/images/headshot.jpg"
                alt="Brian Hecht — investor, founder, and pitch coach"
                width={440}
                height={550}
                className="w-full max-w-[440px] rounded-2xl object-cover shadow-lg hover:shadow-xl transition-shadow duration-300"
              />
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="bg-navy text-white/50 py-12 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-base font-bold tracking-tight text-white/80 mb-4">Humble Conviction</p>
          <div className="flex items-center justify-center gap-6 mb-6">
            <a
              href="https://www.linkedin.com/in/brianhecht/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-coral transition-colors duration-200 text-sm"
            >
              LinkedIn
            </a>
            <span className="text-white/20">|</span>
            <a
              href="https://www.youtube.com/@HumbleConvictionStartups"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/40 hover:text-coral transition-colors duration-200 text-sm"
            >
              YouTube
            </a>
            <span className="text-white/20">|</span>
            <a
              href="mailto:brhnyc1970@gmail.com"
              className="text-white/40 hover:text-coral transition-colors duration-200 text-sm"
            >
              Email
            </a>
          </div>
          <p className="text-xs tracking-widest uppercase text-white/30">
            &copy; 2026 Humble Conviction Corp.
          </p>
        </div>
      </footer>
    </div>
  );
}
