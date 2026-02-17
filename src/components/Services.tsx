import { GlassCard } from "@/components/ui/glass-card";
import { Layers, Bug, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Layers,
    title: "Full Stack Development",
    description: "End-to-end web application development, from responsive frontend interfaces to robust backend architectures. Building scalable solutions that grow with your business.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Bug,
    title: "Bug Fixing & Optimization",
    description: "Diagnosing and resolving critical issues, refactoring legacy code, and optimizing application performance for speed and reliability.",
    gradient: "from-purple-500 to-pink-500"
  }
];

const Services = () => (
  <section id="services" className="py-24 px-6 bg-black/20">
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-20">
        <span className="text-secondary tracking-widest font-semibold uppercase text-sm">Create & Optimize</span>
        <h2 className="heading-xl mt-4 mb-6">
          <span className="text-gradient">My Services</span>
        </h2>
        <div className="w-20 h-1 bg-gradient-to-r from-secondary to-primary mx-auto rounded-full"></div>
      </div>

      {/* Services Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {services.map(({ icon: Icon, title, description, gradient }) => (
          <GlassCard key={title} className="group relative overflow-hidden p-8 min-h-[300px] flex flex-col justify-between" hoverEffect>
            {/* Hover Gradient Background */}
            <div className={`absolute inset-0 bg-gradient-to-br ${gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

            <div>
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
              <p className="text-muted-foreground leading-relaxed">{description}</p>
            </div>

            <div className="mt-8 flex items-center text-sm font-semibold text-white/50 group-hover:text-white transition-colors">
              Learn more <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </div>
          </GlassCard>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-20">
        <a href="#contact">
          <button className="px-10 py-5 bg-white text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:scale-105 transition-transform text-lg">
            Start a Project with Me
          </button>
        </a>
      </div>
    </div>
  </section>
);

export default Services;