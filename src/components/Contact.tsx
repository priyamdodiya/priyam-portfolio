import { useState } from "react";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Instagram, Linkedin, Github, MessageSquare } from "lucide-react";
import { toast, ToastContainer } from "react-toastify";
import emailjs from "@emailjs/browser";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = "service_yduwr1d";     // from EmailJS
    const templateID = "template_hxjsv4q";   // from EmailJS
    const publicKey = "xXp0DaaCRXMK5MX0P";     // from EmailJS

    const templateParams = {
      from_name: formData.name,
      from_email: formData.email,
      subject: formData.subject,
      message: formData.message,
    };

    try {
      await emailjs.send(serviceID, templateID, templateParams, publicKey);
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://www.instagram.com/_priyank_24_md_/",
      color: "hover:text-pink-500",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/priyam-dodiya/",
      color: "hover:text-blue-500",
    },
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/priyamdodiya",
      color: "hover:text-slate-700 dark:hover:text-white",
    },
    {
      name: "WhatsApp",
      icon: MessageSquare,
      href: "https://wa.me/9725332062",
      color: "hover:text-green-500",
    },
  ];

  return (
    <section id="contact" className="section-container">
      <h2 className="section-title">Get In Touch</h2>
      <p className="section-subtitle">
        Have a project in mind? Let's collaborate to bring your vision to life
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left - Contact Info */}
        <div>
          <h3 className="text-xl font-serif font-semibold mb-4">Contact Information</h3>
          <p className="text-muted-foreground mb-6">
            Feel free to reach out through any of these channels. I'm always excited to
            discuss new projects and opportunities.
          </p>

          <div className="space-y-4 mb-8">
            {/* Email */}
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <a href="mailto:priyamdodiya9464@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  priyamdodiya9464@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <a href="tel:+9725332062" className="text-muted-foreground hover:text-primary transition-colors">
                  +972 533 2062
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start">
              <div className="bg-primary/10 p-3 rounded-full mr-4">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">Surat, Gujarat, India</p>
              </div>
            </div>
          </div>

          <h3 className="text-xl font-serif font-semibold mb-4">Follow Me</h3>
          <div className="flex space-x-4">
            {socialLinks.map((link) => (
              <a key={link.name} href={link.href} target="_blank" rel="noreferrer" className={`p-3 bg-muted rounded-full transition-colors ${link.color}`} aria-label={link.name}>
                <link.icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </div>

        {/* Right - Contact Form */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="name">Your Name</label>
              <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">Your Email</label>
              <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="subject">Subject</label>
              <Input id="subject" name="subject" value={formData.subject} onChange={handleChange} required />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="message">Your Message</label>
              <Textarea id="message" name="message" rows={5} value={formData.message} onChange={handleChange} required />
            </div>

            <Button type="submit" className="w-full" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </form>
        </div>
      </div>

      {/* Toast Container */}
      <ToastContainer position="top-center" />
    </section>
  );
}
