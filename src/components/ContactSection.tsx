import { motion } from "framer-motion";
import { Send, Mail, User, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name too long"),
  email: z.string().trim().email("Invalid email address").max(255, "Email too long"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message too long (max 1000 chars)"),
});

type ContactForm = z.infer<typeof contactSchema>;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] as [number, number, number, number] },
  },
};

const ContactSection = () => {
  const [form, setForm] = useState<ContactForm>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Partial<Record<keyof ContactForm, string>>>({});
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleChange = (field: keyof ContactForm, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const result = contactSchema.safeParse(form);
    if (!result.success) {
      const fieldErrors: Partial<Record<keyof ContactForm, string>> = {};
      result.error.errors.forEach((err) => {
        const field = err.path[0] as keyof ContactForm;
        if (!fieldErrors[field]) fieldErrors[field] = err.message;
      });
      setErrors(fieldErrors);
      return;
    }
    setErrors({});
    setStatus("sending");
    // Simulate send
    setTimeout(() => {
      setStatus("sent");
      setForm({ name: "", email: "", message: "" });
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-24 sm:py-32 overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary/3 blur-[150px]" />

      <div className="container relative z-10 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <span className="text-primary font-mono text-sm tracking-widest uppercase">Get In Touch</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-3 mb-4">
            Let's <span className="text-gradient-cyan">Connect</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-sm sm:text-base">
            Have a project in mind? We'd love to hear about it. Send us a message and we'll get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          <motion.form
            variants={itemVariants}
            onSubmit={handleSubmit}
            className="glass-card p-6 sm:p-8 md:p-10 space-y-5 sm:space-y-6"
          >
            {/* Name */}
            <motion.div variants={itemVariants}>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <User className="w-4 h-4 text-primary" />
                Name
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                placeholder="Your full name"
                maxLength={100}
                className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border text-foreground placeholder:text-muted-foreground/50 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all ${
                  errors.name ? "border-destructive" : "border-border/50"
                }`}
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-destructive text-xs mt-1.5"
                >
                  {errors.name}
                </motion.p>
              )}
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <Mail className="w-4 h-4 text-primary" />
                Email
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                placeholder="you@example.com"
                maxLength={255}
                className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border text-foreground placeholder:text-muted-foreground/50 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all ${
                  errors.email ? "border-destructive" : "border-border/50"
                }`}
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0, y: -5 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-destructive text-xs mt-1.5"
                >
                  {errors.email}
                </motion.p>
              )}
            </motion.div>

            {/* Message */}
            <motion.div variants={itemVariants}>
              <label className="flex items-center gap-2 text-sm font-medium text-foreground mb-2">
                <MessageSquare className="w-4 h-4 text-primary" />
                Message
              </label>
              <textarea
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                placeholder="Tell us about your project..."
                maxLength={1000}
                rows={5}
                className={`w-full px-4 py-3 rounded-lg bg-secondary/50 border text-foreground placeholder:text-muted-foreground/50 text-sm sm:text-base focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition-all resize-none ${
                  errors.message ? "border-destructive" : "border-border/50"
                }`}
              />
              <div className="flex justify-between items-center mt-1.5">
                {errors.message ? (
                  <motion.p
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-destructive text-xs"
                  >
                    {errors.message}
                  </motion.p>
                ) : (
                  <span />
                )}
                <span className="text-xs text-muted-foreground/50">
                  {form.message.length}/1000
                </span>
              </div>
            </motion.div>

            {/* Submit */}
            <motion.div variants={itemVariants}>
              <motion.button
                type="submit"
                disabled={status !== "idle"}
                whileHover={status === "idle" ? { scale: 1.02 } : {}}
                whileTap={status === "idle" ? { scale: 0.98 } : {}}
                className={`w-full inline-flex items-center justify-center gap-2 px-8 py-3.5 sm:py-4 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                  status === "sent"
                    ? "bg-green-600 text-white"
                    : "bg-gradient-cyan text-primary-foreground hover:shadow-[var(--shadow-cyan-lg)]"
                } disabled:opacity-70 disabled:cursor-not-allowed`}
              >
                {status === "idle" && (
                  <>
                    Send Message
                    <Send className="w-4 h-4" />
                  </>
                )}
                {status === "sending" && (
                  <>
                    Sending...
                    <Loader2 className="w-4 h-4 animate-spin" />
                  </>
                )}
                {status === "sent" && (
                  <>
                    Message Sent!
                    <CheckCircle className="w-4 h-4" />
                  </>
                )}
              </motion.button>
            </motion.div>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
