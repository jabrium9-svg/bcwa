export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <TheProblem />
      <WhyBCWA />
      <Footer />
    </div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-[#E8F5E9] via-[#FFFEF7] to-[#FFFEF7]" />
        <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-gradient-radial from-[#FFD54F]/30 via-[#F5A623]/10 to-transparent blur-3xl" />

        {/* Subtle tropical shapes */}
        <svg className="absolute top-20 left-10 w-32 h-32 text-[#4A7C23]/15" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5 C60 25, 80 30, 95 50 C80 55, 60 75, 50 95 C40 75, 20 55, 5 50 C20 30, 40 25, 50 5" />
        </svg>
        <svg className="absolute bottom-40 right-16 w-20 h-20 text-[#0077B6]/10 rotate-45" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 5 C60 25, 80 30, 95 50 C80 55, 60 75, 50 95 C40 75, 20 55, 5 50 C20 30, 40 25, 50 5" />
        </svg>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl">
        {/* Wordmark */}
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-[0.15em] sm:tracking-[0.2em] text-[#2D5016] mb-6">
          <span className="inline-block">Bot</span>
          <span className="inline-block mx-2 sm:mx-3 text-[#F5A623]">Chee</span>
          <span className="inline-block">Wa</span>
          <span className="inline-block ml-2 sm:ml-3 text-[#FF6B6B]">Wa</span>
        </h1>

        {/* Tagline */}
        <p className="text-2xl sm:text-3xl md:text-4xl text-[#2C2416] font-light mb-4 tracking-wide">
          Your group. Your conversation. Off-platform.
        </p>

        {/* Subhead */}
        <p className="text-lg sm:text-xl text-[#6B5D4D] mb-10 max-w-2xl leading-relaxed">
          Maintain real, ongoing conversations with your Facebook group members — outside the algorithm, outside the noise.
        </p>

        {/* Conversational nature callout */}
        <p className="text-[#8B7355] mb-10 italic">
          You built the community. Now own the relationship.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center">
          <a
            href="https://app.jabrium.com"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#2D5016] to-[#4A7C23] text-white px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#2D5016]/20 hover:scale-105"
          >
            <span>Get started</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-[#6B5D4D]">
            For Facebook Group Admins ready to connect beyond the feed.
          </p>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-[#8B7355]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Sign up & brand it",
      description: "Choose your colors and fonts. Make it feel like your community, not ours.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Invite your members",
      description: "Share a link in your group, send emails, or DM your most engaged members directly.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Start real conversations",
      description: "Voice-first threads that continue over time. No algorithm. No noise. Just you and your people.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#F5F1E3]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2D5016] text-center mb-6">
          How it works
        </h2>
        <p className="text-center text-[#6B5D4D] mb-16 max-w-xl mx-auto">
          Take your community off-platform in three simple steps.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line (hidden on mobile, visible on md+) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-[60%] w-full h-px bg-[#E8DFC6]" />
              )}

              <div className="flex flex-col items-center text-center">
                {/* Step number with icon */}
                <div className="relative mb-6">
                  <div className="w-24 h-24 rounded-full bg-white shadow-sm flex items-center justify-center text-[#4A7C23]">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#F5A623] text-white flex items-center justify-center font-semibold text-sm">
                    {step.number}
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-[#2C2416] mb-3">
                  {step.title}
                </h3>
                <p className="text-[#6B5D4D] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TheProblem() {
  const problems = [
    {
      problem: "The algorithm buries your posts",
      solution: "Direct conversation — no feed, no algorithm, no competition for attention.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6" />
        </svg>
      ),
    },
    {
      problem: "Members go inactive and ghost",
      solution: "Ongoing threads that never die. Pick up where you left off, whenever they're ready.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
        </svg>
      ),
    },
    {
      problem: "Everything is public and performative",
      solution: "Private, personal conversations. Members speak freely, not for an audience.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
        </svg>
      ),
    },
    {
      problem: "Facebook owns the relationship",
      solution: "You own it. Your members, your conversations, your data — off their platform.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="problems" className="py-24 px-6 bg-[#FFFEF7]">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2D5016] mb-4">
            Sound familiar?
          </h2>
          <p className="text-lg text-[#6B5D4D] max-w-2xl mx-auto">
            70+ million Facebook group admins face these problems every day. Here&apos;s how BCWA solves them.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((item, index) => (
            <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-sm">
              {/* Top accent bar */}
              <div className="h-1 bg-gradient-to-r from-[#FF6B6B] to-[#F5A623]" />

              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#FF6B6B]/10 flex items-center justify-center text-[#FF6B6B] shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-[#2C2416] mb-2">{item.problem}</h4>
                    <p className="text-[#4A7C23] font-medium text-sm mb-1">With BCWA:</p>
                    <p className="text-[#6B5D4D] text-sm leading-relaxed">{item.solution}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WhyBCWA() {
  const benefits = [
    {
      title: "Voice-first conversations",
      description: "Members speak naturally. You respond when you can. Deeper connection, less typing.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      title: "Conversations at scale",
      description: "Maintain ongoing threads with hundreds of members. AI helps you stay on top of it all.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      title: "No context lost",
      description: "Every conversation picks up where it left off. Full history, always available.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: "Your brand, your space",
      description: "Custom colors and fonts. It feels like your community, not another platform.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 px-6 bg-[#F5F1E3]">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2D5016] text-center mb-4">
          Why BCWA?
        </h2>
        <p className="text-center text-[#6B5D4D] mb-16 max-w-xl mx-auto">
          Built for admins who want real relationships with their community — not just engagement metrics.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/60 rounded-2xl p-6 flex gap-4">
              <div className="w-12 h-12 rounded-full bg-[#4A7C23]/10 flex items-center justify-center text-[#4A7C23] shrink-0">
                {benefit.icon}
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2C2416] mb-1">{benefit.title}</h3>
                <p className="text-[#6B5D4D] text-sm leading-relaxed">{benefit.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-12 px-6 bg-[#2D5016] text-white/80">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <p className="text-xl tracking-[0.15em] text-white mb-1">
              Bot Chee Wa Wa
            </p>
            <p className="text-sm text-white/60">
              A Jabrium Engage Property
            </p>
          </div>

          <div className="flex items-center gap-8 text-sm">
            <a href="#" className="hover:text-white transition-colors">About</a>
            <a href="#" className="hover:text-white transition-colors">Contact</a>
            <a href="#" className="hover:text-white transition-colors">Terms</a>
            <a href="#" className="hover:text-white transition-colors">Privacy</a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10 text-center">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Jabrium. Your group. Your conversation. Off-platform.
          </p>
        </div>
      </div>
    </footer>
  );
}
