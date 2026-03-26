import React, { useState } from "react";
import {
  Input,
  Textarea,
  Button,
  Alert,
} from "@material-tailwind/react";
import { sendEmail, type ContactFormData } from "../services/emailService";

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null;
    message: string;
  }>({ type: null, message: '' });

  const sharedProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setSubmitStatus({ type: 'error', message: 'Please fill in all fields.' });
      return;
    }

    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: '' });

    try {
      const success = await sendEmail(formData);
      if (success) {
        setSubmitStatus({ type: 'success', message: "Message sent — I'll get back to you soon!" });
        setFormData({ name: '', email: '', message: '' });
      } else {
        setSubmitStatus({
          type: 'error',
          message: 'Failed to send message. Please try again or email me at kunal@kunaltolani.com',
        });
      }
    } catch {
      setSubmitStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact" className="bg-chalk py-20 sm:py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <h2 className="font-space-grotesk font-black text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
            Contact
          </h2>
          <div className="mt-3 h-1 w-12 bg-crimson"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Contact Info */}
          <div>
            <h3 className="font-space-grotesk font-bold text-xl sm:text-2xl text-ink mb-4">
              Let's Connect
            </h3>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-8">
              I'm always open to discussing new opportunities, interesting engineering problems, or potential collaborations. Feel free to reach out.
            </p>

            <div className="space-y-5">
              <a
                href="mailto:kunal@kunaltolani.com"
                className="flex items-center gap-3 text-ink hover:text-crimson transition-colors duration-200 group"
              >
                <span className="material-icons text-crimson text-lg" aria-hidden="true">email</span>
                <span className="text-base sm:text-lg font-medium">kunal@kunaltolani.com</span>
              </a>
              <div className="flex items-center gap-3 text-gray-600">
                <span className="material-icons text-crimson text-lg" aria-hidden="true">location_on</span>
                <span className="text-base sm:text-lg">Dublin, Ireland</span>
              </div>
            </div>

            <div className="flex gap-3 mt-8">
              <a
                href="https://github.com/kunalt4"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-ink text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors duration-200"
                aria-label="Visit my GitHub profile"
              >
                <span className="material-icons text-base" aria-hidden="true">code</span>
                GitHub
              </a>
              <a
                href="https://www.linkedin.com/in/kunaltolani"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-ink text-white rounded-lg text-sm font-semibold hover:bg-gray-800 transition-colors duration-200"
                aria-label="Connect with me on LinkedIn"
              >
                <span className="material-icons text-base" aria-hidden="true">person</span>
                LinkedIn
              </a>
            </div>
          </div>

          {/* Right: Contact Form */}
          <div>
            {submitStatus.type && (
              <div className="mb-5 relative">
                <Alert
                  color={submitStatus.type === 'success' ? 'green' : 'red'}
                  className="pr-10"
                >
                  <div className="flex items-center gap-2">
                    <span className="material-icons text-lg">
                      {submitStatus.type === 'success' ? 'check_circle' : 'error'}
                    </span>
                    {submitStatus.message}
                  </div>
                </Alert>
                <button
                  onClick={() => setSubmitStatus({ type: null, message: '' })}
                  className="absolute top-3 right-3 text-white hover:text-gray-200 transition-colors"
                  aria-label="Close alert"
                >
                  <span className="material-icons text-lg">close</span>
                </button>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="block text-sm font-semibold text-ink">
                    Name
                  </label>
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="!border !border-gray-300 focus:!border-ink bg-white text-gray-900 rounded-lg"
                    labelProps={{ className: "hidden" }}
                    crossOrigin={undefined}
                    {...sharedProps}
                  />
                </div>
                <div className="space-y-1.5">
                  <label htmlFor="email" className="block text-sm font-semibold text-ink">
                    Email
                  </label>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="!border !border-gray-300 focus:!border-ink bg-white text-gray-900 rounded-lg"
                    labelProps={{ className: "hidden" }}
                    crossOrigin={undefined}
                    {...sharedProps}
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="block text-sm font-semibold text-ink">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="!border !border-gray-300 focus:!border-ink bg-white text-gray-900 rounded-lg min-h-[140px]"
                  labelProps={{ className: "hidden" }}
                  {...sharedProps}
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className={`${
                  isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-crimson hover:bg-red-700'
                } text-white px-6 py-3 rounded-lg font-semibold text-sm tracking-wide transition-colors duration-200 shadow-none flex items-center gap-2 normal-case`}
                {...sharedProps}
              >
                {isSubmitting && (
                  <span className="material-icons text-base animate-spin">refresh</span>
                )}
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
}
