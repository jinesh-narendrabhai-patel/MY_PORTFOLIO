"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail, FileDown } from "lucide-react"

export function Hero() {
  const [mounted, setMounted] = useState(false)
  const [currentRole, setCurrentRole] = useState(0)

  useEffect(() => {
    setMounted(true)
    const interval = setInterval(() => {
      setCurrentRole((prev) => (prev + 1) % 3)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const roles = ["Software Developer", "Mobile App Developer", "Machine Learning Engineer"]

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center px-4 py-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a1a2e_1px,transparent_1px),linear-gradient(to_bottom,#1a1a2e_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_110%)] opacity-20" />

      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/30 rounded-full blur-[150px] animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-accent/30 rounded-full blur-[150px] animate-float"
        style={{ animationDelay: "2s" }}
      />

      <div
        className={`relative max-w-6xl mx-auto text-center transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <div className="mb-6 inline-block">
          <span className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-xs font-semibold backdrop-blur-sm">
            Available for opportunities
          </span>
        </div>

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
          <span className="block text-foreground mb-4">Hi, I'm</span>
          <span className="block bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent animate-gradient">
            Jinesh Patel
          </span>
        </h1>

        <div className="h-10 md:h-12 mb-8 flex items-center justify-center">
          <p className="text-xl md:text-2xl font-light text-muted-foreground">
            <span className="text-foreground font-medium">{roles[currentRole]}</span>
          </p>
        </div>

        <p
          className="text-base md:text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed mb-8 animate-fade-in"
          style={{ animationDelay: "0.3s", opacity: 0 }}
        >
          Master's student in <span className="text-primary font-semibold">Computer Science</span> with a strong
          foundation in mobile and web development. Skilled in{" "}
          <span className="text-accent font-semibold">Python, Java, and Flutter</span>, with experience in machine
          learning and software engineering.
        </p>

        <div
          className="flex flex-wrap items-center justify-center gap-4 mb-10 animate-fade-in"
          style={{ animationDelay: "0.5s", opacity: 0 }}
        >
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground group shadow-lg shadow-primary/25"
          >
            View My Work
            <ArrowDown className="ml-2 h-4 w-4 group-hover:translate-y-1 transition-transform" />
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-primary/50 text-foreground hover:bg-primary/10 hover:border-primary bg-transparent backdrop-blur-sm group"
          >
            <FileDown className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
            Download Resume
          </Button>
        </div>

        <div
          className="flex items-center justify-center gap-4 animate-fade-in"
          style={{ animationDelay: "0.7s", opacity: 0 }}
        >
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
            asChild
          >
            <a href="https://github.com/Jinesh-Patel" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
            asChild
          >
            <a href="https://linkedin.com/in/jinesh-patel" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            className="rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
            asChild
          >
            <a href="mailto:pateljinesh32@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-primary rounded-full animate-glow" />
        </div>
      </div>
    </section>
  )
}
