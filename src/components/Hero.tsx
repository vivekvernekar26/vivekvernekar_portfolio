import { useState, useEffect } from "react"
import { ArrowDown, Download, Eye, Terminal, Cpu } from "lucide-react"

const Hero = () => {
  const [displayText, setDisplayText] = useState("")
  const fullText = "const developer = 'Vivek Vernekar S';"

  useEffect(() => {
    let index = 0
    let isDeleting = false
    let timer: any

    const type = () => {
      setDisplayText(fullText.substring(0, index))

      if (!isDeleting && index < fullText.length) {
        index++
        timer = setTimeout(type, 100)
      } else if (isDeleting && index > 0) {
        index--
        timer = setTimeout(type, 50)
      } else if (!isDeleting && index === fullText.length) {
        isDeleting = true
        timer = setTimeout(type, 3000)
      } else if (isDeleting && index === 0) {
        isDeleting = false
        timer = setTimeout(type, 500)
      }
    }

    type()

    return () => clearTimeout(timer)
  }, [])

  const scrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Technical Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#2e106540,transparent)]"></div>

      {/* Floating Tech Elements */}
      <div className="absolute top-20 left-10 opacity-20 animate-float hidden md:block">
        <Cpu className="w-24 h-24 text-primary" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-20 animate-float-delayed hidden md:block">
        <Terminal className="w-24 h-24 text-secondary" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* System Status Tag */}
        <div className="mb-8 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm animate-fade-in-up">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
          </span>
          <span className="text-sm font-mono text-muted-foreground">
            System Online <span className="text-white/20">|</span> v2.0.26
          </span>
        </div>

        {/* Main Heading with Terminal Style */}
        <div className="mb-8 animate-fade-in-up [animation-delay:200ms]">
          <h1 className="heading-xl text-white leading-tight mb-4">
            Building The <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-purple-400 to-accent">
              Future of Web
            </span>
          </h1>

          {/* Code Snippet Display */}
          <div className="h-12 md:h-16 flex items-center justify-center">
            <p className="font-mono text-lg md:text-2xl text-secondary bg-black/30 px-4 py-2 rounded-lg border border-white/5 inline-block">
              <span className="text-pink-500">import</span> future <span className="text-pink-500">from</span> <span className="text-green-400">'./innovation'</span>;
            </p>
          </div>
          <div className="mt-4 h-8">
            <p className="font-mono text-base md:text-xl text-muted-foreground">
              {displayText}<span className="animate-pulse text-primary">_</span>
            </p>
          </div>
        </div>

        {/* Subtitle */}
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed animate-fade-in-up [animation-delay:400ms]">
          Full-Stack & Freelance Developer constructing secure, scalable, and intelligent digital ecosystems.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-5 justify-center items-center animate-fade-in-up [animation-delay:600ms]">
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-primary text-white rounded-full font-medium transition-all hover:shadow-[0_0_40px_rgba(124,58,237,0.5)] hover:bg-primary/90 overflow-hidden font-mono"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Terminal className="w-5 h-5" />
              ~/view-work
            </span>
          </button>

          <a
            href="/Vivek_Vernekar_Resume.pdf"
            download="Vivek_Vernekar_Resume.pdf"
            className="group px-8 py-4 glass rounded-full text-white font-medium transition-all hover:bg-white/10 flex items-center gap-2 font-mono"
          >
            <Download className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
            ./get_resume.sh
          </a>
        </div>

      </div>
    </section>
  )
}
export default Hero
