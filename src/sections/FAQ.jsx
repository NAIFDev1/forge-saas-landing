import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion'
import { FadeIn } from '../components/ui/motion'
import { SectionHeading } from '../components/SectionHeading'
import { FAQS } from '../data/content'

export default function FAQ() {
  return (
    <section id="faq" className="py-24 md:py-32">
      <div className="container">
        <SectionHeading
          tag="FAQ"
          title="Frequently asked questions"
          description="Everything you need to know about the product. Can't find an answer? Reach out to our team."
        />

        <FadeIn className="mx-auto mt-12 max-w-2xl">
          <Accordion type="single" collapsible className="w-full">
            {FAQS.map((f, i) => (
              <AccordionItem key={f.question} value={`item-${i}`}>
                <AccordionTrigger className="text-left">{f.question}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </FadeIn>
      </div>
    </section>
  )
}