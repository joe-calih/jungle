import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Head from 'next/head';

const ContactPage = () => {
  return (
    <>
      {/* SEO Metadata and Schema Markup */}
      <Head>
        {/* Primary Meta Tags */}
        <title>Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Your Company Name for inquiries, support, and feedback. We're here to assist you with any questions you may have."
        />
        <meta name="keywords" content="Contact, Support, Customer Service, Your Company Name" />
        <meta name="author" content="Your Company Name" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />

        {/* Open Graph / Facebook */}
        <meta property="og:title" content="Contact Us | Your Company Name" />
        <meta property="og:description" content="Reach out to us for inquiries or support. Contact Your Company Name today!" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://yourwebsite.com/contact-us" />
        <meta property="og:image" content="https://yourwebsite.com/images/contact-us-banner.jpg" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Contact Us | Your Company Name" />
        <meta name="twitter:description" content="Have any questions? Contact Your Company Name for support and inquiries." />
        <meta name="twitter:image" content="https://yourwebsite.com/images/contact-us-banner.jpg" />
        <meta name="twitter:site" content="@yourtwitterhandle" />

        {/* Canonical Link */}
        <link rel="canonical" href="https://yourwebsite.com/contact-us" />

        {/* Schema Markup for ContactPage */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "url": "https://yourwebsite.com/contact-us",
            "name": "Contact Us | Your Company Name",
            "description": "Get in touch with us for inquiries, support, or feedback. We're here to assist you!",
            "image": "https://yourwebsite.com/images/contact-us-banner.jpg",
            "mainEntity": {
              "@type": "Organization",
              "name": "Your Company Name",
              "url": "https://yourwebsite.com",
              "logo": "https://yourwebsite.com/images/logo.png",
              "contactPoint": [
                {
                  "@type": "ContactPoint",
                  "telephone": "+1234567890",
                  "contactType": "Customer Service",
                  "areaServed": "Worldwide",
                  "availableLanguage": ["English"]
                }
              ],
              "sameAs": [
                "https://www.facebook.com/yourcompany",
                "https://twitter.com/yourcompany",
                "https://www.linkedin.com/company/yourcompany"
              ]
            }
          })}
        </script>
      </Head>

      {/* Contact Us Page Content */}
      <div className="flex flex-col min-h-screen">
        <main className="flex-1">
          <section className="py-20 bg-muted">
            <div className="container mx-auto max-w-[1200px]">
              <h2 className="text-3xl font-bold mb-8">Contact Us</h2>
              <p className="mb-4">Feel free to reach out for any inquiries or support. We are here to help!</p>
              <Card className="shadow-lg">
                <CardHeader>
                  <CardTitle>Get In Touch</CardTitle>
                  <CardDescription>Fill out the form and we will get back to you as soon as possible.</CardDescription>
                </CardHeader>
                <CardContent>
                  <form>
                    <div className="mb-4">
                      <Input
                        type="text"
                        placeholder="Your Name"
                        aria-label="Your Name"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        type="email"
                        placeholder="Your Email"
                        aria-label="Your Email"
                        required
                      />
                    </div>
                    <div className="mb-4">
                      <Input
                        type="tel"
                        placeholder="Your Phone Number"
                        aria-label="Your Phone Number"
                      />
                    </div>
                    <div className="mb-4">
                      <textarea
                        className="w-full p-2 border rounded-md"
                        placeholder="Your Message"
                        aria-label="Your Message"
                        rows={5}
                        required
                      />
                    </div>
                  </form>
                </CardContent>
                <CardFooter>
                  <Button type="submit">Send Message</Button>
                </CardFooter>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default ContactPage;
