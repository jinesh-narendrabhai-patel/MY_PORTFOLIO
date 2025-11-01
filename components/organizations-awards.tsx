"use client"

import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Award, Users, Trophy } from "lucide-react"

export function OrganizationsAwards() {
  const organizations = [
    {
      name: "IEEE Dept Charotar University",
      role: "Team In-Charge",
      period: "2020 - 2022",
      description: "Led technical initiatives and coordinated team activities for IEEE student chapter.",
    },
    {
      name: "Cognizance Charusat",
      role: "Member",
      period: "2019 - 2020",
      description: "Active participant in technical and cultural events at Charotar University.",
    },
  ]

  const awards = [
    {
      title: "Runner Up - Debate Competition",
      event: "Annual Inter-Institute Cultural Festival",
      description: "Secured second place in the debate competition at college cultural festival.",
      type: "Individual",
    },
    {
      title: "Group Debate Competition",
      event: "College Competition",
      description: "Participated in group debate competition demonstrating teamwork and communication skills.",
      type: "Team",
    },
  ]

  return (
    <section id="organizations" className="py-24 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent" />

      <div className="max-w-7xl mx-auto relative">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-gradient-to-r from-foreground to-accent bg-clip-text text-transparent">
            Organizations & Awards
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl mx-auto">
            Leadership roles and recognition for excellence
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/10 text-primary">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Organizations</h3>
            </div>
            <div className="space-y-4">
              {organizations.map((org, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative p-6">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors">
                          {org.name}
                        </h4>
                        <p className="text-sm font-semibold text-foreground mb-2">{org.role}</p>
                      </div>
                      <Badge variant="secondary" className="bg-primary/10 text-primary text-xs">
                        {org.period}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">{org.description}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-3 rounded-xl bg-accent/10 text-accent">
                <Trophy className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Awards & Recognition</h3>
            </div>
            <div className="space-y-4">
              {awards.map((award, index) => (
                <Card
                  key={index}
                  className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:border-accent/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent/10"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative p-6">
                    <div className="flex items-start gap-3 mb-3">
                      <Award className="h-5 w-5 text-accent mt-1 flex-shrink-0" />
                      <div className="flex-1">
                        <h4 className="text-lg font-bold mb-1 group-hover:text-accent transition-colors">
                          {award.title}
                        </h4>
                        <p className="text-sm font-semibold text-foreground mb-2">{award.event}</p>
                        <Badge variant="secondary" className="bg-accent/10 text-accent text-xs mb-3">
                          {award.type}
                        </Badge>
                        <p className="text-sm text-muted-foreground leading-relaxed">{award.description}</p>
                      </div>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
