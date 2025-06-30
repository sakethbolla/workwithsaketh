// app/page.tsx (About page)
import { Card } from '@/components/ui/card'

export default function Home() {
  return (
    <div className="container mx-auto py-8">
      <Card className="p-6">
        <h1 className="text-3xl font-bold mb-4">About Me</h1>
        <div className="prose max-w-none">
          <p>
            Detail-oriented professional with experience in technical operations, data analysis, 
            and process automation. Proficient in report generation, website support, and 
            cross-functional team coordination.
          </p>
          <h2 className="text-xl font-semibold mt-6">Education</h2>
          <p>
            <strong>University of Maryland, College Park</strong><br />
            MEng, Software Engineering<br />
            Relevant Coursework: Software Engineering, System and Software Requirements, Cloud Computing
          </p>
          <h2 className="text-xl font-semibold mt-6">Contact</h2>
          <p>
            College Park, MD, 20783<br />
            240-423-9350<br />
            sakethb@umd.edu
          </p>
        </div>
      </Card>
    </div>
  )
}