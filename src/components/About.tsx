import { GlassCard } from "@/components/ui/glass-card"
import { Code, Shield, Brain, Server, Globe, Terminal, UserCheck, Lock } from "lucide-react"

const About = () => {
  return (
    <section id="about" className="py-24 px-6 relative overflow-hidden">
      {/* Grid Pattern Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-6">
          <UserCheck className="w-8 h-8 text-secondary" />
          <div>
            <h2 className="text-2xl font-mono text-white">
              <span className="text-secondary">admin@portfolio:</span>~/identity_check
            </h2>
            <p className="text-sm text-muted-foreground font-mono">
              Verifying user credentials and background...
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Bio Section / ID Card */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
              <GlassCard className="relative p-0 overflow-hidden border-white/10">
                {/* ID Header */}
                <div className="bg-white/5 p-4 border-b border-white/10 flex justify-between items-center">
                  <span className="font-mono text-xs text-muted-foreground">ID: #DEV-2026-SECURE</span>
                  <span className="flex items-center gap-2 px-2 py-1 bg-green-500/10 text-green-400 text-xs rounded border border-green-500/20 font-mono uppercase">
                    <Lock className="w-3 h-3" /> Verified
                  </span>
                </div>

                <div className="p-8 space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-3xl font-bold text-white font-mono">
                      Vivek Vernekar S
                    </h3>
                    <Terminal className="w-8 h-8 text-muted-foreground/30" />
                  </div>

                  <div className="space-y-4 text-muted-foreground text-sm font-mono leading-relaxed border-l-2 border-white/10 pl-4">
                    <p>
                      <span className="text-primary">{">"} ACCESSING BIO_DATA...</span>
                    </p>
                    <p>
                      I am a Full-Stack Developer and Security Researcher operating at the intersection of creative design and robust engineering.
                    </p>
                    <p>
                      My directive is to build applications that are not found wanting in aesthetics or security. Validating inputs, securing endpoints, and crafting pixel-perfect UIs are part of my core protocol.
                    </p>
                    <p>
                      <span className="text-blue-400">{">"} CURRENT STATUS:</span> Exploring new web technologies, participating in CTF challenges, and refining AI/ML models.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-4 pt-4 border-t border-white/10">
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <span className="text-white">STATUS: AVAIL</span>
                    </div>
                    <div className="flex items-center gap-2 px-3 py-1 bg-white/5 rounded border border-white/10 text-xs font-mono">
                      <Globe className="w-3 h-3 text-secondary" />
                      <span className="text-white">REGION: DIGITAL</span>
                    </div>
                  </div>
                </div>
              </GlassCard>
            </div>
          </div>

          {/* Highlights Grid / Skill Matrix */}
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                icon: Code,
                title: "FULL_STACK",
                desc: "React, Node, Django",
                gradient: "text-blue-400"
              },
              {
                icon: Shield,
                title: "SECURITY",
                desc: "Ethical Hacking, Pentesting",
                gradient: "text-red-400"
              },
              {
                icon: Brain,
                title: "AI_CORE",
                desc: "TensorFlow, Data Analysis",
                gradient: "text-purple-400"
              },
              {
                icon: Server,
                title: "DEVOPS",
                desc: "Docker, AWS, Linux",
                gradient: "text-yellow-400"
              }
            ].map((item, idx) => (
              <GlassCard key={idx} className="p-6 hover:bg-white/5 transition-colors border-white/10" hoverEffect>
                <div className="flex items-start justify-between mb-4">
                  <item.icon className={`h-8 w-8 ${item.gradient}`} />
                  <span className="font-mono text-[10px] text-muted-foreground">MOD_{idx + 1}</span>
                </div>
                <h4 className="text-lg font-bold text-white mb-1 font-mono tracking-wide">{item.title}</h4>
                <p className="text-xs text-muted-foreground font-mono">{item.desc}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About