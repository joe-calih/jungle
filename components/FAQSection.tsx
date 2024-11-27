import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion"; // Adjust as needed

const FAQSection = () => {
  return (
    <section id="faq" className="py-12 bg-secondary">
      <div className="container mx-auto max-w-[800px] px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base font-medium leading-loose">
              What is the Jungle Foundations mission?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed">
              The Jungle Foundation is a non-profit initiative dedicated to positively impacting society through highly motivating micropayment incentives. Its goal is to inspire meaningful change by supporting noble causes and encouraging local consumption under the tagline Consume Kenyan by Choice.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base font-medium leading-loose">
              How does the Jungle Foundation support communities?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed">
              The foundation supports communities by funding projects that promote education, health, environmental conservation, and economic empowerment. It collaborates with local partners to create sustainable solutions and maximize the impact of its initiatives.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base font-medium leading-loose">
              How can I contribute to the Jungle Foundation?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed">
              You can contribute by making a donation, volunteering your time, or partnering with us to implement impactful projects. Visit our Support Us page for more information on how to get involved.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base font-medium leading-loose">
              What does Consume Kenyan by Choice mean?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed">
              Consume Kenyan by Choice is our call to action, encouraging individuals and organizations to prioritize local products and services. By doing so, we aim to support Kenyan businesses, create jobs, and strengthen the local economy.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-5">
            <AccordionTrigger className="text-base font-medium leading-loose">
              How are donations used?
            </AccordionTrigger>
            <AccordionContent className="leading-relaxed">
              Donations are used to fund various projects aligned with our mission, such as educational programs, healthcare initiatives, and environmental conservation efforts. We ensure transparency and accountability in how funds are allocated and spent.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  );
};

export default FAQSection;
