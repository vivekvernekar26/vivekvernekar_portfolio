import { useState } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { ExternalLink, Github, Zap, ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"

const Projects = () => {
  const [activeProject, setActiveProject] = useState(0)

  const projects = [
    {
      id: 1,
      title: "ERP System",
      category: "Full-Stack Web Application",
      description: "To digitize their business processes streamline communication, manage suppliers and subcontractors, and handle client workflows and payments in a unified system.",
      tech: ["Django", "Django REST Framework", "Bootstrap", "PostgreSQL", "JavaScript"],
      features: [
        "Role - Based Dashboards for Admin, Subcontractors, Suppliers, and Clients with tailored access.",
        "Project Workflow Tracking to assign, update, and monitor tasks across project stages.",
        "Supplier Management Module for handling invoices, material requests, and inventory status.",
        "Client Panel where clients can view progress, raise support issues, and download invoices.",
        "Payment Tracker to log transactions, generate PDF invoices, and track payment history.",
        "Notification System for real - time updates on status changes, deadlines, and payments."
      ],
      status: "Production",
      badge: "Featured",
    },
    {
      id: 2,
      title: "E-commerce Website",
      category: "Full-Stack Development",
      description: "A full-stack e-commerce platform featuring dynamic weight-based pricing, secure Razorpay payments, an AI-powered support chatbot, and a comprehensive admin dashboard for inventory and sales analytics.",
      tech: ["HTML", "Tailwind CSS", "React", "Razorpay", "Firebase"],
      features: [
        "Secure Razorpay Integration (UPI, Cards, NetBanking)",
        "Dynamic Product Store with Variable Weight Options",
        "Admin Dashboard with Sales Analytics & Inventory Control",
        "AI-Powered 'Masala' Customer Support Chatbot",
        "User Auth & Order History via Firebase",
        "Interactive Review & Rating System"
      ],
      status: "Deployed",
      badge: "New",
      links: {
        demo: "https://mahalaxmifoods.in/",
      }
    }
  ]

  const currentProject = projects[activeProject]

  const handleDemoClick = () => {
    if (currentProject.links?.demo && currentProject.links.demo !== "#") {
      window.open(currentProject.links.demo, '_blank', 'noopener,noreferrer')
    }
  }

  return (
    <section id="projects" className="py-24 px-6 relative overflow-hidden">
      {/* Background Splashes */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] -z-10" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[100px] -z-10" />

      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="text-accent tracking-widest font-semibold uppercase text-sm">Selected Works</span>
          <h2 className="heading-xl mt-4 mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-accent mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* Project List / Navigation */}
          <div className="lg:col-span-4 space-y-4">
            {projects.map((project, index) => (
              <div
                key={project.id}
                onClick={() => setActiveProject(index)}
                className={cn(
                  "group p-6 rounded-2xl cursor-pointer transition-all duration-300 border",
                  activeProject === index
                    ? "glass border-primary/50 translate-x-2"
                    : "border-transparent hover:bg-white/5 hover:translate-x-1"
                )}
              >
                <div className="flex justify-between items-start mb-2">
                  <span className={cn(
                    "text-3xl font-bold transition-colors",
                    activeProject === index ? "text-primary" : "text-muted-foreground/40 group-hover:text-muted-foreground"
                  )}>
                    0{index + 1}
                  </span>
                  {activeProject === index && <ArrowRight className="text-primary animate-pulse" />}
                </div>
                <h3 className={cn(
                  "text-xl font-bold mb-1",
                  activeProject === index ? "text-white" : "text-muted-foreground group-hover:text-white"
                )}>
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground">{project.category}</p>
              </div>
            ))}
          </div>

          {/* Project Details Display */}
          <div className="lg:col-span-8">
            <GlassCard className="min-h-[600px] flex flex-col relative overflow-hidden">
              {/* Decorative top gradient */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-purple-500 to-accent" />

              <div className="space-y-8 relative z-10">
                {/* Header */}
                <div className="flex flex-wrap items-center gap-4 border-b border-white/10 pb-6">
                  <span className="px-3 py-1 bg-gradient-to-r from-primary/20 to-purple-500/20 text-primary border border-primary/20 rounded-full text-xs font-semibold uppercase tracking-wider">
                    {currentProject.badge}
                  </span>
                  <span className="text-muted-foreground text-sm flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                    {currentProject.status}
                  </span>
                </div>

                {/* Content */}
                <div>
                  <h3 className="text-3xl font-bold text-white mb-4">{currentProject.title}</h3>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {currentProject.description}
                  </p>
                </div>

                {/* Tech Stack */}
                <div>
                  <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {currentProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-white/5 hover:bg-white/10 border border-white/5 rounded-lg text-sm transition-colors text-white/80"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div className="bg-white/5 rounded-xl p-6 border border-white/5">
                  <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider opacity-80">Key Features</h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {currentProject.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <Zap className="h-4 w-4 text-accent shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Output/Action Area */}
                <div className="flex gap-4 pt-4">
                  <button
                    onClick={handleDemoClick}
                    disabled={!currentProject.links?.demo}
                    className="flex items-center gap-2 px-6 py-3 bg-white text-black font-bold rounded-lg hover:bg-white/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </button>
                </div>
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects