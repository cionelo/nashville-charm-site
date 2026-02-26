import { useState } from "react";
import { Phone, FileText } from "lucide-react";

const CTASection = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ name: "", phone: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");
    try {
      const response = await fetch("https://formspree.io/f/mbdawvjk", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Form submission failed");
      setSubmitted(true);
    } catch (err) {
      console.error("Submission error:", err);
      setError("Something went wrong. Please call us directly or try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <section className="bg-primary py-12 md:py-16" id="schedule">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-heading font-extrabold text-primary-foreground mb-4">
          Schedule Your FREE Crawl Space Inspection in Nashville, Tennessee
        </h2>
        <p className="text-primary-foreground/90 max-w-2xl mx-auto mb-8 leading-relaxed">
          Homeowners in the Nashville area can depend on Nashville Home Improvements for all of their crawl space waterproofing and encapsulation needs. If you think you have a problem with your crawl space, reach out to our office today.
        </p>
        <a
          href="tel:+14053349493"
          className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-heading font-bold text-xl px-8 py-4 rounded-lg hover:bg-secondary/90 transition-colors shadow-lg"
        >
          <Phone className="w-6 h-6" />
          (405) 334-9493
        </a>
        <p className="text-primary-foreground/70 text-sm mt-3">
          Call us today for service to your home in Nashville, Tennessee and the surrounding areas.
        </p>

        {!showForm && !submitted && (
          <button
            onClick={() => setShowForm(true)}
            className="mt-6 inline-flex items-center gap-2 bg-accent text-accent-foreground font-heading font-bold text-sm px-6 py-3 rounded-lg hover:brightness-110 transition-all"
          >
            <FileText className="w-4 h-4" />
            No answer? Fill out an inspection form and we'll get back to you ASAP
          </button>
        )}

        {showForm && !submitted && (
          <form onSubmit={handleSubmit} className="mt-8 max-w-md mx-auto bg-secondary/10 backdrop-blur rounded-lg p-6 text-left space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="w-full px-4 py-2.5 rounded bg-secondary text-secondary-foreground placeholder:text-secondary-foreground/50 text-sm"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              required
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="w-full px-4 py-2.5 rounded bg-secondary text-secondary-foreground placeholder:text-secondary-foreground/50 text-sm"
            />
            <input
              type="email"
              placeholder="Email Address"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded bg-secondary text-secondary-foreground placeholder:text-secondary-foreground/50 text-sm"
            />
            <textarea
              placeholder="Describe your issue (optional)"
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              className="w-full px-4 py-2.5 rounded bg-secondary text-secondary-foreground placeholder:text-secondary-foreground/50 text-sm resize-none"
            />
            {error && <p className="text-destructive text-sm">{error}</p>}
            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-accent text-accent-foreground font-heading font-bold text-sm px-6 py-3 rounded hover:brightness-110 transition-all disabled:opacity-50"
            >
              {submitting ? "SENDING..." : "SUBMIT INSPECTION REQUEST"}
            </button>
          </form>
        )}

        {submitted && (
          <div className="mt-8 bg-secondary/10 backdrop-blur rounded-lg p-6 max-w-md mx-auto">
            <p className="text-primary-foreground font-heading font-bold text-lg">Thank you!</p>
            <p className="text-primary-foreground/80 text-sm mt-2">
              We've received your inspection request and will get back to you as soon as possible.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;
