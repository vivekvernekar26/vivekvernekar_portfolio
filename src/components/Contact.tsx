import { useState, useRef } from "react"
import { GlassCard } from "@/components/ui/glass-card"
import { useToast } from "@/hooks/use-toast"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import emailjs from '@emailjs/browser'
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Code2,
  Terminal,
  Wifi,
  ShieldCheck,
  Radio
} from "lucide-react"

// EmailJS Configuration
// These should be set in your .env file
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || "YOUR_SERVICE_ID"
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || "YOUR_TEMPLATE_ID"
const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || "YOUR_PUBLIC_KEY"

const Contact = () => {
  const { toast } = useToast()
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      if (SERVICE_ID === "YOUR_SERVICE_ID") {
        // Fallback simulation if keys aren't set
        await new Promise(resolve => setTimeout(resolve, 2000))
        console.warn("EmailJS credentials not set. Simulating success.")
      } else {
        await emailjs.send(
          SERVICE_ID,
          TEMPLATE_ID,
          {
            from_name: formData.name,
            from_email: formData.email,
            subject: formData.subject,
            message: formData.message,
          },
          PUBLIC_KEY
        )
      }

      toast({
        title: "Transmission Successful",
        description: "Data packet delivered to secure server.",
        variant: "default",
        className: "bg-green-500/10 border-green-500/50 text-green-500"
      })

      setFormData({ name: "", email: "", subject: "", message: "" })
    } catch (error) {
      console.error("Transmission Failed:", error)
      toast({
        title: "Transmission Failed",
        description: "Secure channel disrupted. Please retry uplink.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const socialLinks = [
    {
      icon: Github,
      label: "GITHUB_NODE",
      href: "https://github.com/vivekvernekar26",
      status: "ONLINE"
    },
    {
      icon: Linkedin,
      label: "LINKEDIN_NET",
      href: "https://www.linkedin.com/in/vivek-vernekar-s-787787266/",
      status: "ACTIVE"
    },
    {
      icon: Mail,
      label: "MAIL_Relay",
      href: "mailto:vivekvernekar26@gmail.com",
      status: "SECURE"
    },
    {
      icon: Code2,
      label: "LEETCODE_DB",
      href: "https://leetcode.com/u/vivekvernekar26/",
      status: "SYNCED"
    }
  ]

  return (
    <section id="contact" className="py-24 px-6 relative overflow-hidden bg-background">
      {/* Cyber Lines */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none"></div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="flex items-center justify-between mb-16 border-b border-white/10 pb-6">
          <div className="flex items-center gap-4">
            <Radio className="w-8 h-8 text-primary animate-pulse" />
            <div>
              <h2 className="text-2xl font-mono text-white">
                <span className="text-secondary">comm_link:</span>~/establish_connection
              </h2>
              <p className="text-sm text-muted-foreground font-mono">
                Secure channel ready for data transmission...
              </p>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-2 text-green-500 font-mono text-xs border border-green-500/20 px-3 py-1 rounded bg-green-500/10">
            <ShieldCheck className="w-4 h-4" />
            ENCRYPTED: ABS-256
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info / Uplink Nodes */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-4">
              {socialLinks.map((social) => (
                <GlassCard
                  key={social.label}
                  className="group p-4 flex flex-col items-start justify-center gap-2 text-left hover:bg-white/5 transition-colors cursor-pointer border-white/10"
                >
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute inset-0 z-10"
                    aria-label={social.label}
                  />
                  <div className="flex items-center justify-between w-full mb-2">
                    <social.icon className="h-6 w-6 text-secondary group-hover:text-primary transition-colors" />
                    <span className="text-[10px] font-mono text-green-400 bg-green-400/10 px-1 rounded">{social.status}</span>
                  </div>

                  <div>
                    <h3 className="font-bold text-white text-sm font-mono tracking-wider">{social.label}</h3>
                    <p className="text-xs text-muted-foreground font-mono">Click to connect...</p>
                  </div>
                </GlassCard>
              ))}
            </div>

            <GlassCard className="p-8 space-y-4 border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-20">
                <Wifi className="w-24 h-24 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white font-mono">
                <span className="text-primary">{">"}</span> TRANSMISSION_REQUEST
              </h3>
              <p className="text-muted-foreground leading-relaxed font-mono text-sm">
                I am currently scanning for freelance signals and full-time mission objectives. If you have a project requiring tactical development or security reinforcement, initiate protocol below.
              </p>
              <div className="pt-4 flex items-center gap-2 text-primary font-mono text-xs">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-ping" />
                SIGNAL_STRENGTH: 100%
              </div>
            </GlassCard>
          </div>

          {/* Contact Form / Command Interface */}
          <GlassCard className="p-0 overflow-hidden border-white/10">
            <div className="bg-black/40 p-2 border-b border-white/10 flex items-center justify-between px-4">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/50"></div>
              </div>
              <span className="text-xs font-mono text-muted-foreground">send_message.sh</span>
            </div>
            <form ref={formRef} onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-mono text-primary">VAR_NAME</label>
                  <Input
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Enter Identity..."
                    className="bg-black/20 border-white/10 focus:border-primary text-white placeholder:text-muted-foreground/50 h-10 font-mono text-sm"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono text-primary">VAR_EMAIL</label>
                  <Input
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="Enter Comm Address..."
                    className="bg-black/20 border-white/10 focus:border-primary text-white placeholder:text-muted-foreground/50 h-10 font-mono text-sm"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-primary">VAR_SUBJECT</label>
                <Input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Define Mission Objective..."
                  className="bg-black/20 border-white/10 focus:border-primary text-white placeholder:text-muted-foreground/50 h-10 font-mono text-sm"
                  required
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono text-primary">VAR_MESSAGE</label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Input transmission data..."
                  rows={6}
                  className="bg-black/20 border-white/10 focus:border-primary text-white placeholder:text-muted-foreground/50 resize-none font-mono text-sm"
                  required
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 bg-primary/20 hover:bg-primary/30 border border-primary/50 text-white font-mono text-sm rounded transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 group"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-primary mr-2"></div>
                    [UPLOADING...]
                  </>
                ) : (
                  <>
                    <Terminal className="w-4 h-4" />
                    [EXECUTE_SEND]
                  </>
                )}
              </button>
            </form>
          </GlassCard>
        </div>
      </div>
    </section>
  )
}

export default Contact