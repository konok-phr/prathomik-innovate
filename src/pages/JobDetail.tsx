import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, MapPin, Clock, Briefcase, Building2, Send, CheckCircle2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEOHead from "@/components/SEOHead";
import PageTransition from "@/components/PageTransition";
import { jobOpenings } from "@/data/jobs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { toast } from "@/hooks/use-toast";
import { useState } from "react";

const applicationSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(6, "Please enter a valid phone number"),
  portfolio: z.string().url("Please enter a valid URL").or(z.literal("")),
  experience: z.string().min(1, "Please enter your years of experience"),
  coverLetter: z.string().min(20, "Cover letter must be at least 20 characters"),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const JobDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const job = jobOpenings.find((j) => j.slug === slug);
  const [submitted, setSubmitted] = useState(false);

  const form = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
    defaultValues: { name: "", email: "", phone: "", portfolio: "", experience: "", coverLetter: "" },
  });

  const onSubmit = (data: ApplicationForm) => {
    console.log("Application submitted:", data);
    setSubmitted(true);
    toast({ title: "Application Submitted!", description: "We'll review your application and get back to you soon." });
  };

  if (!job) {
    return (
      <div className="min-h-screen bg-background">
        <TopBar />
        <Navbar />
        <div className="container px-4 py-32 text-center">
          <h1 className="text-3xl font-bold mb-4">Position Not Found</h1>
          <p className="text-muted-foreground mb-8">This job opening may no longer be available.</p>
          <Link to="/careers" className="text-primary hover:underline inline-flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> Back to Careers
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <PageTransition>
      <div className="min-h-screen bg-background">
        <SEOHead title={`${job.title} — Careers`} description={job.summary} path={`/careers/${job.slug}`} />
        <TopBar />
        <Navbar />

        {/* Hero */}
        <section className="relative pt-28 pb-16 sm:pt-36 sm:pb-20 overflow-hidden">
          <div className="absolute inset-0 grid-pattern opacity-40" />
          <motion.div
            className="absolute top-1/3 left-1/4 w-[400px] h-[400px] rounded-full bg-primary/5 blur-[120px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="container relative z-10 px-4 sm:px-6">
            <Link
              to="/careers"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Careers
            </Link>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <span className="text-primary font-mono text-sm tracking-widest uppercase">{job.department}</span>
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-5">{job.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <Briefcase className="w-4 h-4 text-primary" /> {job.type}
                </span>
                <span className="flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-primary" /> {job.location}
                </span>
                <span className="flex items-center gap-1.5">
                  <Clock className="w-4 h-4 text-primary" /> {job.experience}
                </span>
                <span className="flex items-center gap-1.5">
                  <Building2 className="w-4 h-4 text-primary" /> {job.department}
                </span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12 sm:py-16">
          <div className="container px-4 sm:px-6">
            <div className="grid lg:grid-cols-[1fr_400px] gap-10 lg:gap-14">
              {/* Left — Job Details */}
              <div className="space-y-10">
                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h2 className="text-xl font-bold mb-3">About the Role</h2>
                  <p className="text-muted-foreground leading-relaxed">{job.summary}</p>
                </motion.div>

                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h2 className="text-xl font-bold mb-4">Responsibilities</h2>
                  <ul className="space-y-3">
                    {job.responsibilities.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h2 className="text-xl font-bold mb-4">Requirements</h2>
                  <ul className="space-y-3">
                    {job.requirements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h2 className="text-xl font-bold mb-4">Nice to Have</h2>
                  <ul className="space-y-3">
                    {job.niceToHave.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>

                <motion.div variants={sectionVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                  <h2 className="text-xl font-bold mb-4">What We Offer</h2>
                  <ul className="space-y-3">
                    {job.benefits.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-1 shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              </div>

              {/* Right — Application Form */}
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass-card p-6 sm:p-8 sticky top-28"
                >
                  {submitted ? (
                    <div className="text-center py-8">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                        <CheckCircle2 className="w-8 h-8 text-primary" />
                      </div>
                      <h3 className="text-xl font-bold mb-2">Application Sent!</h3>
                      <p className="text-muted-foreground text-sm mb-6">
                        Thank you for your interest. We'll review your application and get back to you shortly.
                      </p>
                      <Link
                        to="/careers"
                        className="text-primary text-sm hover:underline inline-flex items-center gap-2"
                      >
                        <ArrowLeft className="w-4 h-4" /> Browse more positions
                      </Link>
                    </div>
                  ) : (
                    <>
                      <h3 className="text-lg font-bold mb-1">Apply for this Position</h3>
                      <p className="text-sm text-muted-foreground mb-6">Fill in your details below.</p>
                      <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                          <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Full Name *</FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Email *</FormLabel>
                                <FormControl>
                                  <Input placeholder="john@example.com" type="email" {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Phone *</FormLabel>
                                <FormControl>
                                  <Input placeholder="+880 1XXX-XXXXXX" {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="portfolio"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Portfolio / LinkedIn</FormLabel>
                                <FormControl>
                                  <Input placeholder="https://..." {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="experience"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Years of Experience *</FormLabel>
                                <FormControl>
                                  <Input placeholder="e.g. 3" {...field} className="bg-background/50" />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <FormField
                            control={form.control}
                            name="coverLetter"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Cover Letter *</FormLabel>
                                <FormControl>
                                  <Textarea
                                    placeholder="Tell us why you're a great fit for this role..."
                                    rows={4}
                                    {...field}
                                    className="bg-background/50 resize-none"
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                          <Button type="submit" className="w-full bg-gradient-cyan text-primary-foreground hover:shadow-[var(--shadow-cyan)] transition-all">
                            <Send className="w-4 h-4 mr-2" /> Submit Application
                          </Button>
                        </form>
                      </Form>
                    </>
                  )}
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </PageTransition>
  );
};

export default JobDetail;
