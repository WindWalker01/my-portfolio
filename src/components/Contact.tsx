import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  CheckCircle2,
  Mail,
  MapPin,
  Loader2,
  AlertCircle,
} from "lucide-react";
import { personal } from "../data/portfolio";

interface FormState {
  name: string;
  email: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export default function Contact() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [shake, setShake] = useState(false);

  function validate(): FormErrors {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      errs.email = "Invalid email address";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitError(null);

    const errs = validate();
    setErrors(errs);

    if (Object.keys(errs).length > 0) {
      setShake(true);
      setTimeout(() => setShake(false), 500);
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_WEB3FORMS_KEY,
          name: form.name,
          email: form.email,
          message: form.message,
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSubmitted(true);
        setForm({ name: "", email: "", message: "" });
        setTimeout(() => setSubmitted(false), 5000);
      } else {
        setSubmitError(
          data.message || "Something went wrong. Please try again.",
        );
      }
    } catch {
      setSubmitError(
        "Unable to send message. Please check your connection and try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  }

  function handleChange(field: keyof FormState, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  }

  return (
    <section id="contact" className="relative z-10 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          className="text-electric-blue font-mono text-sm tracking-widest uppercase"
        >
          Contact
        </motion.h2>

        <div className="mt-10 grid gap-12 md:grid-cols-[1fr_1.2fr]">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-gray-light text-lg leading-relaxed">
              Have a project in mind or just want to say hi? I'd love to hear
              from you.
            </p>

            <div className="space-y-4">
              <a
                href={`mailto:${personal.email}`}
                className="group text-gray-light hover:text-electric-blue flex items-center gap-3 transition-all"
              >
                <div className="bg-electric-blue/10 group-hover:bg-electric-blue/20 flex h-10 w-10 items-center justify-center rounded-lg transition-all">
                  <Mail size={18} className="text-electric-blue" />
                </div>
                <span className="text-base">{personal.email}</span>
              </a>

              <div className="text-gray-light flex items-center gap-3">
                <div className="bg-electric-blue/10 flex h-10 w-10 items-center justify-center rounded-lg">
                  <MapPin size={18} className="text-electric-blue" />
                </div>
                <span className="text-base">{personal.location}</span>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <form
              onSubmit={handleSubmit}
              className={`space-y-5 ${shake ? "animate-[shake_0.4s_ease-in-out]" : ""}`}
              noValidate
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  placeholder="Your name"
                  value={form.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                  className={`bg-dark-card text-off-white placeholder-gray-muted focus:border-electric-blue/50 focus:ring-electric-blue/30 w-full rounded-lg border px-4 py-3 text-base transition-all outline-none focus:ring-1 ${
                    errors.name ? "border-red-500" : "border-gray-subtle"
                  }`}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p id="name-error" className="mt-1 text-sm text-red-400">
                    {errors.name}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={form.email}
                  onChange={(e) => handleChange("email", e.target.value)}
                  className={`bg-dark-card text-off-white placeholder-gray-muted focus:border-electric-blue/50 focus:ring-electric-blue/30 w-full rounded-lg border px-4 py-3 text-base transition-all outline-none focus:ring-1 ${
                    errors.email ? "border-red-500" : "border-gray-subtle"
                  }`}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p id="email-error" className="mt-1 text-sm text-red-400">
                    {errors.email}
                  </p>
                )}
              </div>

              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  placeholder="Your message..."
                  value={form.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                  className={`bg-dark-card text-off-white placeholder-gray-muted focus:border-electric-blue/50 focus:ring-electric-blue/30 w-full resize-none rounded-lg border px-4 py-3 text-base transition-all outline-none focus:ring-1 ${
                    errors.message ? "border-red-500" : "border-gray-subtle"
                  }`}
                  aria-invalid={!!errors.message}
                  aria-describedby={
                    errors.message ? "message-error" : undefined
                  }
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p id="message-error" className="mt-1 text-sm text-red-400">
                    {errors.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group bg-electric-blue text-near-black hover:bg-electric-blue/90 inline-flex w-full items-center justify-center gap-2 rounded-lg px-6 py-3 font-medium transition-all hover:shadow-[0_0_25px_-6px_#00d4ff] active:scale-[0.98] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send
                      size={16}
                      className="transition-transform group-hover:translate-x-0.5"
                    />
                    Send Message
                  </>
                )}
              </button>
            </form>

            {/* Success toast */}
            <AnimatePresence>
              {submitted && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-3 text-base text-emerald-400"
                >
                  <CheckCircle2 size={16} />
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
            </AnimatePresence>

            {/* Error toast */}
            <AnimatePresence>
              {submitError && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 flex items-center gap-2 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-base text-red-400"
                >
                  <AlertCircle size={16} />
                  {submitError}
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
