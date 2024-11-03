import { Check, Badge } from "lucide-react"; // Adjust imports as necessary
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const PricingSection = () => {
  return (
    <section id="pricing" className="py-12 bg-secondary">
      <div className="container mx-auto max-w-[1200px] px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <Card className="relative hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Basic</CardTitle>
              <CardDescription>For individuals and small teams</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">$19<span className="text-xl font-normal">/month</span></p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  100 keyword searches per day
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  Basic filtering options
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  Email support
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  Keyword Research
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  24/7 Support
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Try for free</Button>
            </CardFooter>
          </Card>

          {/* Pro Plan */}
          <Card className="border-primary relative hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle className="flex items-center justify-between">
                Pro
                <Badge>Most Popular</Badge>
              </CardTitle>
              <CardDescription>For growing businesses</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">$49<span className="text-xl font-normal">/month</span></p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  Unlimited keyword searches
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  Advanced filtering and analysis
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  Priority support
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  API access
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  PPC Research
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="default">Get Started</Button>
            </CardFooter>
          </Card>

          {/* Enterprise Plan */}
          <Card className="relative hover:shadow-lg transition-shadow duration-300">
            <CardHeader>
              <CardTitle>Enterprise</CardTitle>
              <CardDescription>For large organizations</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-3xl font-bold mb-4">$89<span className="text-xl font-normal">/year</span></p>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  Custom keyword limits
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  Advanced API access
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  Dedicated account manager
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  Custom integrations
                </li>
                <li className="flex items-center">
                  <Check className="h-5 w-5 mr-2 text-green-500" />
                  Data Engineering
                </li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button className="w-full" variant="outline">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
