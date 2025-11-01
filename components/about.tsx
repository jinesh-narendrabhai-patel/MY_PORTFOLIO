"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Code2, Brain, Database, Smartphone, Cloud, Wrench } from "lucide-react"

export function About() {
  const skills = [
    {
      category: "Programming",
      items: "C++, Python, Java",
      icon: Code2,
      color: "text-primary",
    },
    {
      category: "Web Technologies",
      items: "HTML, CSS, JavaScript",
      icon: Database,
      color: "text-accent",
    },
    {
      category: "Mobile Development",
      items: "Flutter, Dart, Android Studio",
      icon: Smartphone,
      color: "text-primary",
    },
    {
      category: "Cloud & Tools",
      items: "AWS, VS Code, Jupyter, GitHub",
      icon: Cloud,
      color: "text-accent",
    },
    {
      category: "Machine Learning",
      items: "TensorFlow, CNNs, NLP, SVM, Random Forest",
      icon: Brain,
      color: "text-primary",
    },
    {
      category: "Soft Skills",
      items: "Project Management, Team Work, Adaptability",
      icon: Wrench,
      color: "text-accent",
    },
  ]

  return (
    <section className="py-24 px-4 relative" id="about">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-3 block">About Me</span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Computer Science Graduate Student
          </h2>
        </div>

        <div className="mb-16 max-w-4xl mx-auto">
          <p className="text-base text-muted-foreground leading-relaxed text-center">
            Master's student in Computer Science with a strong foundation in{" "}
            <span className="text-primary font-medium">mobile and web development</span>. Skilled in Python, Java, and
            Flutter, with experience in{" "}
            <span className="text-accent font-medium">machine learning and software engineering</span>. A proactive
            learner and problem-solver, eager to apply technical expertise to real-world challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon
            return (
              <Card
                key={skill.category}
                className="group hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1 bg-card/50 backdrop-blur-sm"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div
                      className={`p-3 rounded-lg bg-primary/10 ${skill.color} group-hover:scale-110 transition-transform`}
                    >
                      <Icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-base mb-2 text-foreground">{skill.category}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">{skill.items}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
