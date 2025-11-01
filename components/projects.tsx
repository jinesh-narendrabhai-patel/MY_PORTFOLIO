"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github } from "lucide-react"

const projects = [
  {
    title: "AIvest – AI-Powered Stock Market Trading Assistant",
    description:
      "Developed a web-based platform using ReactJS and Node.js to deliver real-time stock trading insights. Integrated OpenAI's ChatGPT API for sentiment analysis on financial news and social media. Combined NLP outputs with technical indicators (RSI, MACD, Bollinger Bands) for data-driven trade recommendations.",
    technologies: ["ReactJS", "Node.js", "OpenAI API", "NLP", "Technical Analysis"],
    achievements: [
      "Designed intuitive dashboard with real-time buy/sell signals",
      "12-month stock forecasts",
      "Close alignment with expert analysts' advice",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Facial Expression Recognition",
    description:
      "Developed a machine learning-based system to classify facial expressions into seven distinct categories. Implemented Convolutional Neural Networks (CNNs) for accurate emotion detection and recognition. Utilized deep learning techniques to analyze user expressions, enhancing mood-based interaction capabilities.",
    technologies: ["Python", "CNN", "Deep Learning", "TensorFlow", "Computer Vision"],
    achievements: [
      "Seven emotion categories classification",
      "Real-time expression analysis",
      "Enhanced mood-based interactions",
    ],
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    title: "Heart Attack Prediction",
    description:
      "Developed a machine learning model to predict a patient's risk of heart attack, enabling early diagnosis and preventive care. Utilized Python for data preprocessing, feature selection, and model training using SVM and Random Forest classifiers. Analyzed Kaggle-sourced medical datasets on Google Colab to enhance model accuracy and performance.",
    technologies: ["Python", "SVM", "Random Forest", "Google Colab", "Data Analysis"],
    achievements: [
      "Early diagnosis prediction system",
      "Multiple ML classifier comparison",
      "Enhanced model accuracy through feature engineering",
    ],
    github: "#",
    demo: "#",
    featured: false,
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Innovative solutions in AI, machine learning, and web development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 ${
                project.featured ? "lg:col-span-1" : ""
              }`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative p-6 md:p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    {project.featured && (
                      <Badge className="mb-3 bg-primary/10 text-primary border-primary/20 text-xs">Featured</Badge>
                    )}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">{project.description}</p>

                {project.achievements && (
                  <ul className="mb-4 space-y-1">
                    {project.achievements.map((achievement, idx) => (
                      <li key={idx} className="text-xs text-muted-foreground flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                )}

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary" className="bg-secondary/50 hover:bg-secondary text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Button
                    size="sm"
                    variant="outline"
                    className="group/btn border-primary/30 hover:bg-primary/10 hover:border-primary bg-transparent text-xs"
                  >
                    <Github className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Code
                  </Button>
                  <Button size="sm" className="bg-primary hover:bg-primary/90 group/btn text-xs">
                    <ExternalLink className="mr-2 h-4 w-4 group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
