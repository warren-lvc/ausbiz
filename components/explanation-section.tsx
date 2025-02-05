import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export default function ExplanationSection() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>How It Works</CardTitle>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible>
          <AccordionItem value="server-actions">
            <AccordionTrigger>Server Actions</AccordionTrigger>
            <AccordionContent>
              Server Actions process the input on the server-side. When the form is submitted, the 'submitName' action
              is called, which runs on the server, validates the input, and returns a greeting message.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="shadcn-ui">
            <AccordionTrigger>Shadcn UI Components</AccordionTrigger>
            <AccordionContent>
              This demo uses several Shadcn UI components: Input, Button, Card, and Accordion. These pre-styled
              components provide a consistent and modern look while being fully customizable.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="nextjs-features">
            <AccordionTrigger>Next.js 15.1 Features</AccordionTrigger>
            <AccordionContent>
              This application leverages Next.js 15.1 features such as Server Components, Client Components, and Server
              Actions. The main page is a Server Component, while the form is a Client Component to handle state. Server
              Actions allow for server-side processing without the need for API routes.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="edit-functionality">
            <AccordionTrigger>Edit Functionality</AccordionTrigger>
            <AccordionContent>
              The edit feature allows users to modify their submitted name. It uses React state to manage the editing
              mode and pre-fill the input field with the previous submission. This demonstrates the seamless integration
              of client-side interactivity with server-side processing.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  )
}

