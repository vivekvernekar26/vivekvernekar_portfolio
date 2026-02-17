import { useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import {
  Code,
  Server,
  Brain,
  Shield,
  Terminal,
  Cpu,
  Activity
} from "lucide-react"

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("Frontend")

  const skillCategories = {
    "Frontend": {
      icon: Code,
      color: "text-pink-500",
      description: "User Interface Systems",
      skills: [
        { name: "React", level: 90 },
        { name: "TypeScript", level: 85 },
        { name: "Tailwind CSS", level: 88 },
        { name: "Next.js", level: 82 },
        { name: "Three.js", level: 65 },
        { name: "Framer Motion", level: 75 }
      ]
    },
    "Backend": {
      icon: Server,
      color: "text-blue-500",
      description: "Server-Side Operations",
      skills: [
        { name: "Node.js", level: 85 },
        { name: "Python", level: 90 },
        { name: "Django", level: 85 },
        { name: "PostgreSQL", level: 80 },
        { name: "Redis", level: 70 },
        { name: "GraphQL", level: 75 }
      ]
    },
    "AI & Data": {
      icon: Brain,
      color: "text-purple-500",
      description: "Intelligence & Analytics",
      skills: [
        { name: "Machine Learning", level: 80 },
        { name: "TensorFlow", level: 75 },
        { name: "Python Data Stack", level: 85 },
        { name: "OpenAI API", level: 90 },
        { name: "Data Visualization", level: 82 }
      ]
    },
    "Security": {
      icon: Shield,
      color: "text-orange-500",
      description: "Defense Protocols",
      skills: [
        { name: "Ethical Hacking", level: 85 },
        { name: "Penetration Testing", level: 80 },
        { name: "OWASP Top 10", level: 90 },
        { name: "Network Security", level: 82 },
        { name: "Cryptography", level: 75 }
      ]
    }
  }

  return (
    <section id="skills" className="py-24 px-6 relative overflow-hidden bg-background">
      {/* Background Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="flex items-center gap-4 mb-16 border-b border-white/10 pb-6">
          <Terminal className="w-8 h-8 text-primary" />
          <div>
            <h2 className="text-2xl font-mono text-white">
              <span className="text-primary">root@portfolio:</span>~/skills
            </h2>
            <p className="text-sm text-muted-foreground font-mono">
              Displaying system capabilities and tech stack...
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-[300px_1fr] gap-8">
          {/* Sidebar / Category Logic */}
          <div className="space-y-4">
            <div className="border border-white/10 bg-black/40 backdrop-blur-md rounded-lg p-4">
              <div className="flex items-center gap-2 mb-4 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                <Activity className="w-4 h-4" />
                <span>Modules</span>
              </div>

              <div className="space-y-2">
                {Object.entries(skillCategories).map(([category, { icon: Icon, color }]) => (
                  <button
                    key={category}
                    onClick={() => setActiveCategory(category)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-md transition-all font-mono text-sm text-left border ${activeCategory === category
                        ? "bg-white/10 border-primary/50 text-white shadow-[0_0_15px_rgba(124,58,237,0.3)]"
                        : "border-transparent text-muted-foreground hover:bg-white/5 hover:text-white"
                      }`}
                  >
                    <Icon className={`w-4 h-4 ${activeCategory === category ? color : ""}`} />
                    <span>{category}</span>
                    {activeCategory === category && (
                      <span className="ml-auto animate-pulse w-2 h-2 rounded-full bg-green-500"></span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* System Stats Decor */}
            <div className="border border-white/10 bg-black/20 p-4 rounded-lg font-mono text-xs text-muted-foreground hidden lg:block">
              <div className="flex justify-between mb-2">
                <span>UPTIME:</span>
                <span className="text-green-400">99.9%</span>
              </div>
              <div className="flex justify-between mb-2">
                <span>MEMORY:</span>
                <span className="text-blue-400">64TB</span>
              </div>
              <div className="flex justify-between">
                <span>CPU:</span>
                <span className="text-purple-400">OPTIMAL</span>
              </div>
            </div>
          </div>

          {/* Main Display Area */}
          <div className="border border-white/10 bg-black/40 backdrop-blur-md rounded-lg p-1 overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center justify-between">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
              </div>
              <div className="text-xs font-mono text-muted-foreground flex items-center gap-2">
                <Cpu className="w-3 h-3" />
                {activeCategory.toLowerCase()}.config
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-4 mb-8">
                <div className={`p-3 rounded-lg bg-white/5 border border-white/10 ${skillCategories[activeCategory as keyof typeof skillCategories].color}`}>
                  {(() => {
                    const Icon = skillCategories[activeCategory as keyof typeof skillCategories].icon
                    return <Icon className="w-8 h-8" />
                  })()}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white font-mono">{activeCategory}</h3>
                  <p className="text-muted-foreground font-mono text-sm">
                    {">"} {skillCategories[activeCategory as keyof typeof skillCategories].description}
                  </p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-x-12 gap-y-8">
                {skillCategories[activeCategory as keyof typeof skillCategories].skills.map((skill, index) => (
                  <div key={skill.name} className="group">
                    <div className="flex justify-between text-sm font-mono mb-2">
                      <span className="text-white group-hover:text-primary transition-colors">
                        {">"} {skill.name}
                      </span>
                      <span className="text-white/50">{skill.level}%</span>
                    </div>
                    {/* Segmented Progress Bar */}
                    <div className="flex gap-1 h-2">
                      {[...Array(10)].map((_, i) => (
                        <div
                          key={i}
                          className={`flex-1 rounded-sm transition-all duration-500 ${i < Math.floor(skill.level / 10)
                              ? `bg-current ${skillCategories[activeCategory as keyof typeof skillCategories].color} opacity-80 shadow-[0_0_8px_currentColor]`
                              : "bg-white/10"
                            }`}
                          style={{ transitionDelay: `${index * 50 + i * 30}ms` }}
                        ></div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills