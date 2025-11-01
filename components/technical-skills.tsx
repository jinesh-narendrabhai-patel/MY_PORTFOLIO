"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Database, Cloud, Wrench, Users, FileText } from "lucide-react"

export function TechnicalSkills() {
  const skills = [
    {
      title: "Programming Languages",
      subtitle: "C++, Python, Java",
      description:
        "Proficient in multiple programming languages for various application domains, from data analysis to system development.",
      icon: Code,
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "Web Technologies",
      subtitle: "HTML, CSS, JavaScript",
      description: "Building responsive and interactive web applications with modern frontend technologies.",
      icon: Database,
      gradient: "from-accent/20 to-primary/20",
    },
    {
      title: "Cloud Technologies",
      subtitle: "AWS",
      description: "Experience with cloud platforms for deploying and scaling applications.",
      icon: Cloud,
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "Developer Tools",
      subtitle: "VS Code, Jupyter, Colab, Android Studio, GitHub",
      description: "Utilizing modern development environments and tools for efficient software development.",
      icon: Wrench,
      gradient: "from-accent/20 to-primary/20",
    },
    {
      title: "Soft Skills",
      subtitle: "Project Management, Presentation, Team Work",
      description: "Strong communication and collaboration skills with proven ability to manage projects effectively.",
      icon: Users,
      gradient: "from-primary/20 to-accent/20",
    },
    {
      title: "Miscellaneous",
      subtitle: "Microsoft Office Suite, Document Management",
      description: "Proficient in productivity tools and documentation for professional work environments.",
      icon: FileText,
      gradient: "from-accent/20 to-primary/20",
    },
  ]

  return (
    <section className="py-24 px-4 relative" id="skills">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-3 block">Expertise</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Technical Skills
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card
                key={index}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 hover:-translate-y-1 bg-card/50 backdrop-blur-sm overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${skill.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                />

                <CardHeader className="relative">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-1 group-hover:text-primary transition-colors">
                        {skill.title}
                      </CardTitle>
                      <p className="text-sm font-medium text-muted-foreground">{skill.subtitle}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-sm text-muted-foreground leading-relaxed">{skill.description}</p>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
