import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What Are Some Signs That I Need Crawl Space Repair?",
    a: "There are several signs that you may need crawl space repair. These can include things like cracks in your crawl space, doors or windows that are hard to open or close, and problems with your crawl space itself, like water damage, mold, or pests.",
  },
  {
    q: "How Much Does Crawl Space Repair Cost?",
    a: "The cost of crawl space repair can vary depending on the severity of the damage and the size of your crawl space. However, our team at Nashville Home Improvements always provides a free estimate so that you know exactly what the cost will be before we begin any work.",
  },
  {
    q: "How Long Will Crawl Space Repair Take?",
    a: "The length of time it takes to complete crawl space repair can also vary depending on the extent of the damage. However, our team works quickly and efficiently to get the job done right.",
  },
  {
    q: "Can I Repair My Crawl Space Myself?",
    a: "We do not recommend that homeowners try to repair their crawl spaces themselves. Crawl space repair can be a complex and dangerous job, so it's best left to the professionals.",
  },
  {
    q: "What Are Some Crawl Space Repair Techniques?",
    a: "There are a variety of crawl space repair techniques that our team is trained to use. These can include vapor barrier installation and crawl space encapsulation.",
  },
];

const FAQSection = () => {
  return (
    <section className="bg-background py-12 md:py-16" id="faq">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-8 text-center">
            Frequently Asked Questions About Crawl Space Repair
          </h2>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="bg-card border border-border rounded-lg px-5 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:text-primary py-4">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
