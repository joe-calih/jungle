import { Card } from "@/components/ui/card"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-gray-200 py-12 px-4">
      <Card className="mx-auto max-w-[1170px] p-8">
        <h1 className="mb-6 text-3xl font-bold">Privacy Policy</h1>
        <p className="mb-6 text-sm text-muted-foreground">
          Last updated: {new Date().toLocaleDateString()}
        </p>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger>1. Introduction</AccordionTrigger>
            <AccordionContent>
              <p>
                Welcome to our SEO SaaS application. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the application.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger>2. Information We Collect</AccordionTrigger>
            <AccordionContent>
              <p>
                We collect information that you provide directly to us when you register for an account, use our services, or communicate with us. This may include:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Personal identifiers (e.g., name, email address)</li>
                <li>Account credentials</li>
                <li>Payment information</li>
                <li>Usage data related to SEO, SEM, PPC, CPM, and YouTube analytics</li>
                <li>Images uploaded for conversion</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger>3. How We Use Your Information</AccordionTrigger>
            <AccordionContent>
              <p>We use the information we collect for various purposes, including:</p>
              <ul className="list-disc pl-6 mt-2">
                <li>Providing and maintaining our services</li>
                <li>Improving and personalizing user experience</li>
                <li>Processing transactions and sending related information</li>
                <li>Sending administrative information and service updates</li>
                <li>Responding to customer service requests</li>
                <li>Conducting research and analysis to improve our services</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger>4. Data Sharing and Disclosure</AccordionTrigger>
            <AccordionContent>
              <p>
                We may share your information with third parties in certain situations, including:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>With your consent</li>
                <li>To comply with legal obligations</li>
                <li>To protect and defend our rights and property</li>
                <li>With service providers who help us operate our business</li>
                <li>In connection with a merger, sale, or acquisition</li>
              </ul>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger>5. Data Security</AccordionTrigger>
            <AccordionContent>
              <p>
                We implement appropriate technical and organizational security measures to protect your information. However, please note that no method of transmission over the Internet or electronic storage is 100% secure, and we cannot guarantee absolute security.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-6">
            <AccordionTrigger>6. Your Rights and Choices</AccordionTrigger>
            <AccordionContent>
              <p>
                Depending on your location, you may have certain rights regarding your personal information, including:
              </p>
              <ul className="list-disc pl-6 mt-2">
                <li>Access to your personal information</li>
                <li>Correction of inaccurate or incomplete information</li>
                <li>Deletion of your personal information</li>
                <li>Restriction of processing</li>
                <li>Data portability</li>
                <li>Objection to processing</li>
              </ul>
              <p className="mt-2">
                To exercise these rights, please contact us using the information provided in the &quot;Contact Us&quot; section.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-7">
            <AccordionTrigger>7. Cookies and Tracking Technologies</AccordionTrigger>
            <AccordionContent>
              <p>
                We use cookies and similar tracking technologies to collect and store information about your interactions with our service. You can control cookies through your browser settings and other tools.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-8">
            <AccordionTrigger>8. Children&apos;s Privacy</AccordionTrigger>
            <AccordionContent>
              <p>
                Our service is not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-9">
            <AccordionTrigger>9. Changes to This Privacy Policy</AccordionTrigger>
            <AccordionContent>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date at the top of this Privacy Policy.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-10">
            <AccordionTrigger>10. Contact Us</AccordionTrigger>
            <AccordionContent>
              <p>
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mt-2">
                Email: privacy@seosaasapp.com<br />
                Address: 123 SEO Street, Analytics City, 12345, Country
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </Card>
    </div>
  )
}