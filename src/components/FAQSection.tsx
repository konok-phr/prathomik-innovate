import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    q: "What services does Prathomik offer?",
    a: "We specialize in custom Web & Mobile application development, Machine Learning & AI solutions, SaaS product development, and IT consulting. From MVPs to enterprise-grade systems, we deliver end-to-end solutions.",
  },
  {
    q: "How long does a typical project take?",
    a: "Timelines vary based on scope. A simple web application takes 4–8 weeks, while complex enterprise solutions may take 3–6 months. We provide detailed timelines after the discovery phase.",
  },
  {
    q: "Do you offer ongoing support and maintenance?",
    a: "Yes! We provide post-launch support packages including bug fixes, performance monitoring, feature updates, and dedicated account management to ensure your product runs smoothly.",
  },
  {
    q: "What technologies do you work with?",
    a: "Our stack includes React, Next.js, Flutter, Laravel, Python, TensorFlow, AWS, Docker, and more. We choose the best technologies based on your project requirements and scalability needs.",
  },
  {
    q: "Can you work with our existing development team?",
    a: "Absolutely. We offer team augmentation services and can seamlessly integrate with your existing workflows, version control, and project management tools.",
  },
  {
    q: "How do you handle project communication?",
    a: "We use agile methodology with regular standups, sprint reviews, and progress reports. You'll have a dedicated project manager and direct access to the development team via Slack, WhatsApp, or your preferred communication tool.",
  },
];

const FAQSection = () => {
  return (
    <section id="faq" className="relative py-20 sm:py-32">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-6">
            <HelpCircle className="w-4 h-4" />
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Frequently Asked{" "}
            <span className="text-gradient-cyan">Questions</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with us
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, i) => (
              <AccordionItem
                key={i}
                value={`faq-${i}`}
                className="glass-card px-6 border border-border/50 data-[state=open]:border-primary/30 data-[state=open]:glow-cyan transition-all"
              >
                <AccordionTrigger className="text-left text-foreground font-medium hover:text-primary transition-colors py-5 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
