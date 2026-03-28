import { useState } from "react";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (e: any) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("Query sent successfully!");
        setForm({
          name: "",
          email: "",
          phone: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Failed to send query");
      }
    } catch (err) {
      console.error(err);
      setStatus("Server error. Please try later.");
    }

    setLoading(false);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Send Your Query</h2>
          <p className="text-foreground/60">
            Tell us about your project and our team will contact you shortly.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 glass-card p-8 rounded-3xl"
        >
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            type="text"
            placeholder="Your Name"
            required
            className="px-4 py-3 rounded-xl bg-background border border-white/10 outline-none"
          />

          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            type="email"
            placeholder="Email Address"
            required
            className="px-4 py-3 rounded-xl bg-background border border-white/10 outline-none"
          />

          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            type="text"
            placeholder="Phone Number"
            className="px-4 py-3 rounded-xl bg-background border border-white/10 outline-none md:col-span-2"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            placeholder="Describe your requirement"
            rows={5}
            required
            className="px-4 py-3 rounded-xl bg-background border border-white/10 outline-none md:col-span-2 resize-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 w-fit mx-auto rounded-full bg-yellow-400 text-black px-8 py-3 font-semibold hover:bg-yellow-500 shadow-lg shadow-yellow-400/30 transition-all duration-300"
          >
            {loading ? "Sending..." : "Submit Query"}
          </button>

          {status && (
            <p className="md:col-span-2 text-center text-sm text-foreground/70">{status}</p>
          )}
        </form>
      </div>
    </section>
  );
}
