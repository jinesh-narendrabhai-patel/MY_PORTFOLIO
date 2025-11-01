"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar } from "lucide-react"

export function Experience() {
  const experiences = [
    {
      title: "Graduate Assistant",
      period: "Aug 2024 - Present",
      company: "SUNY Polytechnic Institute | College of Engineering",
      location: "Utica, NY",
      highlights: [
        {
          title: "FFT Workflow Development",
          description:
            "Designed a Jupyter-based FFT workflow to process terahertz medical imaging data and construct amplitude images at 1 THz.",
        },
        {
          title: "Data Visualization",
          description:
            "Produced and presented 30+ FFT visualizations (0.32, 0.64, 0.96 THz plus delay plots) across multiple datasets for research analysis.",
        },
        {
          title: "Research Communication",
          description:
            "Created weekly research slides and reports, effectively communicating progress, experimental results, and FFT concepts to faculty advisors.",
        },
        {
          title: "Technical Expertise",
          description:
            "Strengthened expertise in spectral image processing, signal analysis, and terahertz imaging applications through hands-on research.",
        },
      ],
      tags: ["Python", "Jupyter", "FFT", "Signal Processing", "THz Imaging"],
    },
    {
      title: "Technical Intern",
      period: "Jan 2022 - Apr 2022",
      company: "Myinfopie",
      location: "Gujarat, India",
      highlights: [
        {
          title: "Tourism Management System",
          description:
            "Developed a dynamic Tourism Management System web application using PHP, integrating MySQL for efficient data storage and retrieval.",
        },
        {
          title: "Frontend Development",
          description:
            "Designed and implemented an interactive frontend using HTML, CSS, and JavaScript to enhance user experience.",
        },
      ],
      tags: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Mobile App Development Intern",
      period: "Jul 2021 - Oct 2021",
      company: "Charusat University",
      location: "Gujarat, India",
      highlights: [
        {
          title: "Ensure Mask Application",
          description:
            "Developed Ensure Mask, a cross-platform mobile application using Flutter and Dart for real-time mask detection, integrating Firebase for backend services and machine learning for enhanced accuracy.",
        },
        {
          title: "Mobile Development Skills",
          description:
            "Gained hands-on experience with Android Studio, custom model training, and deploying mobile applications on both iOS and Android platforms.",
        },
      ],
      tags: ["Flutter", "Dart", "Firebase", "Machine Learning", "Android Studio"],
    },
  ]

  return (
    <section className="py-24 px-4 relative" id="experience">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(120,200,200,0.05),transparent_50%)]" />

      <div className="max-w-6xl mx-auto relative">
        <div className="text-center mb-12">
          <span className="text-primary text-xs font-semibold tracking-wider uppercase mb-3 block">My Journey</span>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Professional Experience
          </h2>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="group hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 bg-card/50 backdrop-blur-sm overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-primary to-accent transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />

              <CardHeader className="pb-4">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-2">
                  <div>
                    <CardTitle className="text-xl md:text-2xl mb-2 group-hover:text-primary transition-colors">
                      {exp.title}
                    </CardTitle>
                    <p className="text-base font-semibold text-foreground">{exp.company}</p>
                  </div>
                  <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                    {exp.period && (
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-primary" />
                        <span>{exp.period}</span>
                      </div>
                    )}
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-accent" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
                {exp.tags && (
                  <div className="flex flex-wrap gap-2 mt-4">
                    {exp.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="bg-primary/10 text-primary border-primary/20 text-xs"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {exp.highlights.map((highlight, idx) => (
                    <div key={idx} className="group/item hover:bg-muted/30 p-4 rounded-lg transition-colors">
                      <h4 className="font-semibold flex items-center gap-3 mb-2 text-foreground">
                        <span className="text-2xl">{highlight.icon}</span>
                        <span className="group-hover/item:text-primary transition-colors">{highlight.title}</span>
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed pl-11">{highlight.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
