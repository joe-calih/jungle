import { Button } from "@/components/ui/button"

export const metadata = {
  title: 'Studio',
  description: 'Get in touch with Your Company Name for inquiries, support, and feedback. We are here to assist you.',
  keywords: ['Contact', 'Support', 'Customer Service', 'Your Company Name'],
  openGraph: {
    title: 'Studio',
    description: 'Reach out to us for inquiries or support. Contact Your Company Name today!',
    url: 'https://yourwebsite.com/contact-us',
    images: [
      {
        url: 'https://yourwebsite.com/images/contact-us-banner.jpg',
        width: 800,
        height: 600,
        alt: 'Studio Banner',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Studio',
    description: 'Have any questions? Contact Your Company Name for support and inquiries.',
    images: ['https://yourwebsite.com/images/contact-us-banner.jpg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function Component() {
  return (
    <section className="w-full bg-white">
      <div className="mx-auto max-w-[1200px] px-4 py-20 relative">
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute border border-gray-100 rounded-full"
              style={{
                width: `${(i + 1) * 10}%`,
                height: `${(i + 1) * 10}%`,
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            />
          ))}
        </div>
        <div className="relative z-10 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Start building your<br />websites faster
          </h1>
          <p className="text-lg text-gray-600 mb-10 max-w-2xl mx-auto">
            Try our tools and services to build your website faster. Start with a 14-day free trial. No credit card required. No setup fees. Cancel anytime.
          </p>
          <div className="flex justify-center gap-4">
            <Button className="bg-gray-900 text-white hover:bg-gray-800" size="lg">
              Get Started
            </Button>
            <Button variant="outline" size="lg">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}