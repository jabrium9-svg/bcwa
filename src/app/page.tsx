export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <HowItWorks />
      <DemoBooths />
      <WhyBCWA />
      <VBSTPSection />
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
          Your project. Your pace. Your vibe jockey.
        </p>

        {/* Subhead */}
        <p className="text-lg sm:text-xl text-[#6B5D4D] mb-10 max-w-2xl leading-relaxed">
          Connect with skilled humans — individuals or agencies — who deliver through conversation.
        </p>

        {/* Conversational nature callout */}
        <p className="text-[#8B7355] mb-10 italic">
          No forms. No browsing. Just tell us what you need.
        </p>

        {/* CTA */}
        <div className="flex flex-col items-center">
          <a
            href="#"
            className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-[#2D5016] to-[#4A7C23] text-white px-10 py-5 rounded-full text-lg font-medium transition-all duration-300 hover:shadow-xl hover:shadow-[#2D5016]/20 hover:scale-105"
          >
            <span>Start talking</span>
            <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
          <p className="mt-4 text-sm text-[#6B5D4D]">
            An agent will learn what you need and introduce you to the right people.
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
      title: "Tell us what you need",
      description: "Voice or text — just describe your project. Our agent listens, asks questions, and understands.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      number: "2",
      title: "Get introduced",
      description: "The agent matches you with a vibe jockey or agency. They reach out when they're ready.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: "3",
      title: "Work at your pace",
      description: "Conversation that never dies. Pick up where you left off. No lost context, no pressure.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
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
          Our agents do the matchmaking. You just talk.
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

function DemoBooths() {
  const vibeJockeys = [
    {
      name: "Marco V.",
      specialty: "Mobile apps & automation",
      bio: "10 years building apps that actually ship. Flutter, React Native, and backend automation.",
      type: "individual",
      color: "#0077B6",
    },
    {
      name: "Priya S.",
      specialty: "Brand identity & web design",
      bio: "Helping startups find their voice through design. Figma to production.",
      type: "individual",
      color: "#FF6B6B",
    },
  ];

  const agencies = [
    {
      name: "Greenline Digital",
      specialty: "Full-stack development",
      bio: "A team of 8 engineers. Satisfaction guaranteed or we keep working until it's right.",
      type: "agency",
      color: "#4A7C23",
    },
    {
      name: "Coral Creative Agency",
      specialty: "Design to deployment",
      bio: "End-to-end product design and build. We handle everything so you don't have to.",
      type: "agency",
      color: "#F5A623",
    },
  ];

  return (
    <section id="booths" className="py-24 px-6 bg-[#FFFEF7]">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-light text-[#2D5016] mb-4">
            Who you might meet
          </h2>
          <p className="text-lg text-[#6B5D4D] max-w-2xl mx-auto">
            These are the kinds of people our agents might introduce you to — vibe jockeys for personalized attention, agencies for team support and guarantees.
          </p>
        </div>

        {/* Vibe Jockeys */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#0077B6]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#0077B6]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#2C2416]">Vibe Jockeys</h3>
            <span className="text-sm text-[#6B5D4D]">— Skilled individuals</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {vibeJockeys.map((person, index) => (
              <PreviewCard key={index} {...person} />
            ))}
          </div>
        </div>

        {/* Agencies */}
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-[#4A7C23]/10 flex items-center justify-center">
              <svg className="w-5 h-5 text-[#4A7C23]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
            </div>
            <h3 className="text-xl font-medium text-[#2C2416]">Agencies</h3>
            <span className="text-sm text-[#6B5D4D]">— Teams with quality guarantees</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {agencies.map((agency, index) => (
              <PreviewCard key={index} {...agency} />
            ))}
          </div>
        </div>

        <p className="text-center mt-12 text-[#8B7355] text-sm">
          Demo profiles. Real vibe jockeys and agencies coming soon.
        </p>
      </div>
    </section>
  );
}

function PreviewCard({ name, specialty, bio, type, color }: { name: string; specialty: string; bio: string; type: string; color: string }) {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-sm">
      {/* Top accent bar */}
      <div className="h-1" style={{ backgroundColor: color }} />

      <div className="p-6">
        <div className="flex items-start gap-4">
          {/* Avatar placeholder */}
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center text-white font-medium text-lg shrink-0"
            style={{ backgroundColor: color }}
          >
            {type === "individual" ? name.charAt(0) : name.split(" ").map(w => w[0]).join("").slice(0, 2)}
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-1">
              <h4 className="text-lg font-semibold text-[#2C2416] truncate">{name}</h4>
              {type === "agency" && (
                <span className="shrink-0 text-xs px-2 py-0.5 rounded-full bg-[#4A7C23]/10 text-[#4A7C23] font-medium">
                  Agency
                </span>
              )}
            </div>
            <p className="text-[#2D5016] text-sm font-medium">{specialty}</p>
          </div>
        </div>

        {/* Bio */}
        <p className="mt-4 text-[#6B5D4D] text-sm leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  );
}

function WhyBCWA() {
  const benefits = [
    {
      title: "No ghosting",
      description: "Jabrium keeps the conversation alive. Even when life gets busy.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
      ),
    },
    {
      title: "No starting over",
      description: "Full context, always. Pick up exactly where you left off.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      title: "Your pace",
      description: "Async communication. No scheduling pressure. Respond when you can.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Quality options",
      description: "Work with individuals for personal touch, or agencies with guarantees.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
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
          Getting help shouldn&apos;t mean endless scheduling, lost threads, or starting from scratch every time.
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

function VBSTPSection() {
  return (
    <section className="py-16 px-6 bg-gradient-to-r from-[#48CAE4]/10 via-[#0077B6]/10 to-[#48CAE4]/10">
      <div className="max-w-3xl mx-auto text-center">
        <p className="text-[#6B5D4D] mb-3 text-lg">
          Just want it built without the back-and-forth?
        </p>
        <h3 className="text-2xl sm:text-3xl font-light text-[#023E8A] mb-6">
          Try <span className="font-medium">Vibesetup</span>.
        </h3>
        <p className="text-[#6B5D4D] mb-8 max-w-xl mx-auto">
          If you already know exactly what you need and want it handled start to finish, Vibesetup is the faster path.
        </p>
        <a
          href="https://vbstp.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-[#023E8A] text-white px-8 py-4 rounded-full font-medium transition-all duration-300 hover:bg-[#0077B6] hover:shadow-lg"
        >
          <span>Go to Vibesetup</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        </a>
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
            © {new Date().getFullYear()} Jabrium. Your project. Your pace. Your vibe jockey.
          </p>
        </div>
      </div>
    </footer>
  );
}
