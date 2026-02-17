import { useState, useEffect } from "react"
import { Menu, X, Shield, Terminal } from "lucide-react"

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: "About", href: "#about" },
    // { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "Contact", href: "#contact" }
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsOpen(false)
  }

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-mono ${isScrolled
      ? 'bg-black/80 backdrop-blur-md border-b border-white/10 shadow-lg'
      : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 bg-primary/20 border border-primary/50 rounded flex items-center justify-center text-primary shadow-[0_0_10px_rgba(34,197,94,0.3)] group-hover:scale-110 transition-transform">
              <Shield className="h-5 w-5" />
            </div>
            <span className="font-bold text-xl text-white tracking-tight">VIVEK<span className="text-primary">_SEC</span></span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault()
                  scrollToSection(item.href)
                }}
                className="px-5 py-2 rounded-sm text-sm font-medium text-white/70 hover:text-primary hover:bg-white/5 transition-all"
              >
                {">"} {item.label}
              </a>
            ))}

            <div className="ml-4 pl-4 border-l border-white/10">
              <a
                href="/Vivek_Vernekar_Resume.pdf"
                download="Vivek_Vernekar_Resume.pdf"
                className="px-6 py-2.5 bg-primary/10 border border-primary/50 text-white hover:bg-primary/20 transition-all flex items-center gap-2 text-sm"
              >
                <Terminal className="w-4 h-4" />
                ./Resume
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white/70 hover:text-white transition-colors"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden absolute top-20 left-0 right-0 bg-black/95 backdrop-blur-xl border-b border-white/10 p-4 animate-in slide-in-from-top-5">
            <div className="space-y-2">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault()
                    scrollToSection(item.href)
                  }}
                  className="block px-4 py-3 rounded-sm text-white/70 hover:text-primary hover:bg-white/5 transition-colors font-medium border-l-2 border-transparent hover:border-primary"
                >
                  {">"} {item.label}
                </a>
              ))}
              <div className="pt-4 mt-2 border-t border-white/5">
                <a
                  href="/Vivek_Vernekar_Resume.pdf"
                  download="Vivek_Vernekar_Resume.pdf"
                  className="block w-full py-3 bg-primary/10 border border-primary/50 text-white text-center font-bold hover:bg-primary/20 transition-all rounded-sm"
                >
                  Download Resume
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation