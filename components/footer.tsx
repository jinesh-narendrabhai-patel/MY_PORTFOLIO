"use client"

import { Github, Linkedin, Mail, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Footer() {
  const socialLinks = [
    { icon: Github, href: "https://github.com/Jinesh-Patel", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/jinesh-patel", label: "LinkedIn" },
    { icon: Mail, href: "mailto:pateljinesh32@gmail.com", label: "Email" },
    { icon: Phone, href: "tel:+19432665542", label: "Phone" },
  ]

  return (
    <footer className="relative py-20 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col items-center gap-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Let's Connect
            </h3>
            <p className="text-muted-foreground max-w-md mb-4">
              Interested in collaborating or discussing projects? Feel free to reach out!
            </p>
            <div className="flex flex-col gap-2 text-sm text-muted-foreground">
              <a href="mailto:pateljinesh32@gmail.com" className="hover:text-primary transition-colors">
                pateljinesh32@gmail.com
              </a>
              <a href="tel:+19432665542" className="hover:text-primary transition-colors">
                +1 (943) 266-5542
              </a>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {socialLinks.map((link) => {
              const Icon = link.icon
              return (
                <Button
                  key={link.label}
                  variant="outline"
                  size="icon"
                  className="rounded-full hover:border-primary hover:text-primary hover:scale-110 transition-all bg-transparent"
                  aria-label={link.label}
                  asChild
                >
                  <a href={link.href} target="_blank" rel="noopener noreferrer">
                    <Icon className="h-5 w-5" />
                  </a>
                </Button>
              )
            })}
          </div>

          <div className="text-center text-sm text-muted-foreground">
            <p>© 2025 Jinesh Narendrabhai Patel. All rights reserved.</p>
            <p className="mt-2">Built with Next.js & Tailwind CSS</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
