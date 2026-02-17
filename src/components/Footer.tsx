import { Shield, ChevronUp, Github, Linkedin, Mail, Twitter } from "lucide-react"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-black/80 backdrop-blur-md border-t border-white/5 pt-20 pb-10 font-mono">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="md:col-span-2 space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded flex items-center justify-center text-primary shadow-[0_0_10px_rgba(34,197,94,0.3)]">
                <Shield className="h-6 w-6" />
              </div>
              <span className="text-2xl font-bold text-white tracking-tight">VIVEK<span className="text-primary">_SEC</span></span>
            </div>
            <p className="text-muted-foreground leading-relaxed max-w-sm text-sm">
              Securing the digital frontier, one line of code at a time.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Github, href: "https://github.com/vivekvernekar26" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/vivek-vernekar-s-787787266/" },
                { icon: Mail, href: "mailto:vivekvernekar26@gmail.com" }
              ].map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  className="w-10 h-10 rounded border border-white/10 bg-white/5 hover:bg-primary/20 hover:border-primary/50 hover:text-primary flex items-center justify-center text-white transition-all hover:scale-110"
                >
                  <social.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider text-primary">Explore</h3>
            <ul className="space-y-4 text-sm">
              {['About', 'Services', 'Projects', 'Skills', 'Contact'].map((item) => (
                <li key={item}>
                  <a href={`#${item.toLowerCase()}`} className="text-muted-foreground hover:text-primary transition-colors hover:translate-x-1 block">
                    {">"} {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-wider text-primary">Get in Touch</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="mailto:vivekvernekar26@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  vivekvernekar26@gmail.com
                </a>
              </li>
              <li className="text-muted-foreground">
                <span className="text-primary">LOC:</span> India
              </li>
              <li>
                <button
                  onClick={scrollToTop}
                  className="mt-4 flex items-center gap-2 text-sm font-bold text-white/50 hover:text-primary transition-colors"
                >
                  [BACK_TO_TOP] <ChevronUp className="h-4 w-4" />
                </button>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p className="text-muted-foreground">
            © {currentYear} Vivek Vernekar. All systems functional.
          </p>
          <div className="flex gap-8 text-muted-foreground">
            <a href="#" className="hover:text-primary transition-colors">Privacy_Protocol</a>
            <a href="#" className="hover:text-primary transition-colors">Terms_of_Service</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer