"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Calendar } from "lucide-react"

export function Education() {
  const education = [
    {
      degree: "Master's in Computer Science",
      school: "SUNY Polytechnic Institute",
      location: "Utica, NY",
      period: "Aug 2024 - May 2026",
      description:
        "Advanced coursework in computer science, machine learning, and software engineering with focus on practical applications and research.",
      tags: ["Machine Learning", "Software Engineering", "Data Science", "Research"],
    },
    {
      degree: "Bachelor of Technology in Information Technology",
      school: "Charotar University of Science and Technology",
      location: "Gujarat, India",
      period: "Jun 2018 - Apr 2022",
      description:
        "Comprehensive undergraduate program covering software development, mobile applications, web technologies, and computer science fundamentals.",
      tags: ["Software Development", "Mobile Apps", "Web Development", "IT"],
    },
  ]

  return (
    <section className="py-24 px-4 relative" id="education">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(120,200,200,0.05),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-3 block">
            Academic Background
          </span>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Education
          </h2>
        </div>

        <div className="space-y-6 max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-primary via-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-700" />

              <CardHeader className="pb-4">
                <div className="flex items-start gap-6">
                  <div className="p-4 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 text-primary group-hover:scale-110 transition-transform duration-300">
                    <GraduationCap className="h-8 w-8" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">
                      {edu.degree}
                    </CardTitle>
                    <p className="text-base font-semibold text-foreground mb-3">{edu.school}</p>
                    <div className="flex flex-col gap-2 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4 text-accent" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {edu.tags.map((tag) => (
                        <Badge key={tag} className="bg-primary/10 text-primary border-primary/20 text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground leading-relaxed">{edu.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
