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
            Have a project in mind? We'd love to hear about it. Reach out via WhatsApp, email, or the form below.
          </p>
        </motion.div>

        {/* Quick contact cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto mb-10"
        >
          <a
            href="https://wa.me/8801XXXXXXXXX"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-cyan-soft flex items-center justify-center shrink-0">
              <svg viewBox="0 0 24 24" className="w-6 h-6 fill-primary" xmlns="http://www.w3.org/2000/svg">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">WhatsApp</p>
              <p className="text-sm text-muted-foreground">+880 1XXX-XXXXXX</p>
            </div>
          </a>
          <a
            href="mailto:hello@prathomik.com"
            className="glass-card p-5 flex items-center gap-4 hover:border-primary/30 transition-all group"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-cyan-soft flex items-center justify-center shrink-0">
              <Mail className="w-6 h-6 text-primary" />
            </div>
            <div>
              <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">Email Us</p>
              <p className="text-sm text-muted-foreground">hello@prathomik.com</p>
            </div>
          </a>
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
