import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"

export const metadata = {
  title: 'Team',
  description: 'Get in touch with Your Company Name for inquiries, support, and feedback. We are here to assist you.',
  keywords: ['Contact', 'Support', 'Customer Service', 'Your Company Name'],
  openGraph: {
    title: 'Team',
    description: 'Reach out to us for inquiries or support. Contact Your Company Name today!',
    url: 'https://yourwebsite.com/contact-us',
    images: [
      {
        url: 'https://yourwebsite.com/images/contact-us-banner.jpg',
        width: 800,
        height: 600,
        alt: 'Team Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Team',
    description: 'Have any questions? Contact Your Company Name for support and inquiries.',
    images: ['https://yourwebsite.com/images/contact-us-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

const teamMembers = [
  { name: "Name", role: "Role", description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo." },
  { name: "Name", role: "Role", description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo." },
  { name: "Name", role: "Role", description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo." },
  { name: "Name", role: "Role", description: "Elig doloremque mollitia fugiat omnis!" },
  { name: "Name", role: "Role", description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo." },
  { name: "Name", role: "Role", description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo." },
  { name: "Name", role: "Role", description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo." },
  { name: "Name", role: "Role", description: "Elig doloremque mollitia fugiat omnis! Porro facilis quo animi consequatur. Explicabo." },
]

export default function Component() {
  return (
    <div className="w-full bg-background min-h-screen">
      <div className="max-w-[1200px] mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <p className="text-sm text-muted-foreground mb-2">We&apos;re hiring</p>
          <h1 className="text-4xl font-bold mb-4">Meet our team</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Elig doloremque mollitia
            fugiat omnis! Porro facilis quo animi consequatur. Explicabo.
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="outline">Secondary</Button>
            <Button>Primary</Button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="bg-card  object-contain grayscale hover:grayscale-0 transition-all duration-300">
              <CardContent className="p-0">
                <Image
                  src="/placeholder.svg"
                  alt={`${member.name}&apos;s photo`}
                  width={300}
                  height={300}
                  className="w-full aspect-square object-cover"
                />
                <div className="p-4">
                  <h2 className="font-semibold">{member.name}</h2>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        <section id="cta" className="py-12">
          <div className="container mx-auto max-w-[1200px] px-4 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="mb-8 text-gray-600">Sign up now and supercharge your keyword research!</p>
            <Button size="lg">Start Your Free Trial</Button>
          </div>
        </section>
      </div>
    </div>
  )
}