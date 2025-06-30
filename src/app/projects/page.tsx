// app/projects/page.tsx
import { Card } from '@/components/ui/card'

export default function ProjectsPage() {
  const projects = [
    {
      title: "Verizon Production Support",
      description: "Managed operations for Verizon's production servers supporting 30,000+ users",
      technologies: ["Python", "Selenium", "GCP"]
    },
    {
      title: "PyAutomation Testing Framework",
      description: "Developed automation scripts for system health checks and reporting",
      technologies: ["Python", "PyTest", "Selenium"]
    },
    {
      title: "SQL Optimization & ETL Framework",
      description: "Automated data workflows and optimized SQL queries for BigQuery",
      technologies: ["SQL", "Python", "BigQuery"]
    }
  ]

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold mb-8">My Projects</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
            <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
            <p className="text-gray-600 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech, i) => (
                <span 
                  key={i} 
                  className="bg-gray-100 px-3 py-1 rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </div>
  )
}