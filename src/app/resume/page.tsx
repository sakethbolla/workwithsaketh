// app/resume/page.tsx
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function ResumePage() {
  return (
    <div className="container mx-auto py-8">
      <Card className="p-6">
        <div className="flex flex-col items-center justify-center space-y-4">
          <h1 className="text-3xl font-bold">My Resume</h1>
          <p className="text-gray-600">
            Download my professional resume in PDF format
          </p>
          <Button asChild>
            <Link 
              href="/Saketh_Resume.pdf" 
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </Link>
          </Button>
          <div className="w-full h-screen mt-8">
            <iframe
              src="/Saketh_Resume.pdf"
              width="100%"
              height="100%"
              className="border rounded-lg"
            />
          </div>
        </div>
      </Card>
    </div>
  )
}