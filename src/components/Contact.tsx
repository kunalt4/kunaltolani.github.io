import React, { useState } from "react";
import {
  Typography,
  Card,
  Input,
  Textarea,
  Button,
} from "@material-tailwind/react";
import { HandwrittenHeading } from "./HandwrittenHeading";
import { OrganicBackground } from "./OrganicBackground";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const sharedProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  };

  const cardProps = {
    ...sharedProps,
    variant: "gradient" as const,
    shadow: true,
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically integrate with an email service
    console.log("Form submitted:", formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-surface-base to-surface-bright overflow-hidden">
      {/* Background Elements - Optimized for mobile */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Primary gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-95 via-surface-bright to-secondary-95 opacity-40"></div>
        
        {/* Animated shapes - Reduced size and blur for mobile */}
        <div className="absolute w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] -top-24 sm:-top-32 lg:-top-48 -right-24 sm:-right-32 lg:-right-48 bg-primary-30/10 rounded-[60%_40%_25%_75%] blur-xl sm:blur-2xl animate-morph"></div>
        <div className="absolute w-[150px] sm:w-[200px] lg:w-[300px] h-[150px] sm:h-[200px] lg:h-[300px] -bottom-16 sm:-bottom-24 lg:-bottom-32 -left-16 sm:-left-24 lg:-left-32 bg-secondary-30/10 rounded-[35%_65%_50%_50%] blur-xl sm:blur-2xl animate-morph" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-[100px] sm:w-[150px] lg:w-[200px] h-[100px] sm:h-[150px] lg:h-[200px] top-1/2 right-1/4 bg-accent-30/10 rounded-[45%_55%_70%_30%] blur-xl sm:blur-2xl animate-morph" style={{ animationDelay: '3s' }}></div>
        
        {/* Reduced number of dots for mobile */}
        <div className="absolute inset-0 hidden sm:block">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-60/30 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                transform: `scale(${Math.random() * 1.5 + 0.5})`
              }}
            ></div>
          ))}
        </div>
        
        {/* Subtle grid pattern - Adjusted for mobile */}
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: 'linear-gradient(to right, rgb(var(--color-primary-60) / 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgb(var(--color-primary-60) / 0.1) 1px, transparent 1px)',
            backgroundSize: '20px 20px'
          }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header - Improved spacing for mobile */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-24">
          <div className="inline-block">
            <HandwrittenHeading 
              className="text-3xl sm:text-4xl lg:text-5xl text-primary-80 relative group/title hover:scale-[1.02] transition-transform duration-500"
            >
              <span className="relative inline-block rotate-[-1deg] hover:rotate-[0.5deg] transition-transform duration-500">
                <span className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-primary-30/20 via-secondary-30/20 to-accent-30/30 blur-[20px] sm:blur-[30px] group-hover/title:blur-[25px] sm:group-hover/title:blur-[40px] transition-all duration-500"></span>
                <span className="relative">
                  <span className="material-icons text-3xl sm:text-4xl lg:text-5xl text-accent-50 absolute -left-8 sm:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 group-hover/title:rotate-12 transition-transform duration-500" aria-hidden="true">mail</span>
                  Get in Touch
                </span>
              </span>
            </HandwrittenHeading>
            <div className="mt-4 sm:mt-6 lg:mt-8 flex items-center justify-center gap-4 sm:gap-8 opacity-80">
              <div className="h-[2px] w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-transparent via-primary-70 to-transparent transform -rotate-[1deg]"></div>
              <HandwrittenHeading size="medium" className="text-primary-70 transform rotate-[2deg] -mt-2">
                ~
              </HandwrittenHeading>
              <div className="h-[2px] w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-transparent via-primary-70 to-transparent transform rotate-[1deg]"></div>
            </div>
          </div>
          <HandwrittenHeading size="small" className="mt-6 sm:mt-8 lg:mt-10 text-base sm:text-lg lg:text-xl text-gray-700 transform rotate-[0.5deg] max-w-xl sm:max-w-2xl mx-auto px-4">
            Let's collaborate and create something amazing together
          </HandwrittenHeading>
        </div>

        {/* Let's Connect Card */}
        <Card className="p-6 sm:p-8 lg:p-10 shadow-level3 hover:shadow-level5 transition-all duration-500 bg-white/90 backdrop-blur-sm border border-surface-container-high rounded-[20px] sm:rounded-[30px_50px_20px_40px] hover:rounded-[40px_20px_50px_30px] overflow-hidden animate-slide-up mb-12 sm:mb-16 lg:mb-24" {...cardProps}>
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary-30/0 via-primary-30/10 to-primary-30/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer"></div>
            <Typography variant="h5" className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-primary-60 flex items-center gap-3 sm:gap-4 group/title transform -rotate-1" {...sharedProps}>
              <span className="material-icons text-2xl sm:text-3xl group-hover/title:rotate-12 transition-transform duration-500 text-accent-50" aria-hidden="true">favorite</span>
              <HandwrittenHeading size="medium" className="relative">
                Let's Connect!
                <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-accent-50/30 rounded-full transform rotate-1"></div>
              </HandwrittenHeading>
            </Typography>
            <div className="space-y-6 sm:space-y-8">
              <Typography variant="paragraph" className="text-base sm:text-lg text-gray-800 transform rotate-[0.5deg]" {...sharedProps}>
                I'm always open to discussing new opportunities, tech innovations, or potential collaborations. Whether it's about software engineering, design systems, or data analytics, I'd love to connect! Feel free to reach out through any of the following channels or use the contact form below.
              </Typography>
              <div className="flex flex-wrap gap-6 sm:gap-8">
                <a 
                  href="mailto:kunaltolani17@gmail.com"
                  className="flex items-center text-primary-60 gap-3 sm:gap-4 group/email hover:text-primary-50 transition-colors transform -rotate-[0.5deg]"
                  aria-label="Send me an email"
                >
                  <span className="material-icons text-2xl sm:text-3xl group-hover/email:rotate-12 transition-transform duration-500 text-accent-50" aria-hidden="true">email</span>
                  <Typography variant="paragraph" className="text-base sm:text-lg group-hover/email:underline" {...sharedProps}>
                    kunaltolani17@gmail.com
                  </Typography>
                </a>
                <div className="flex items-center text-primary-60 gap-3 sm:gap-4 group/location hover:text-primary-50 transition-colors transform rotate-[0.5deg]">
                  <span className="material-icons text-2xl sm:text-3xl group-hover/location:rotate-12 transition-transform duration-500 text-accent-50" aria-hidden="true">location_on</span>
                  <Typography variant="paragraph" className="text-base sm:text-lg" {...sharedProps}>
                    Dublin, Ireland (GMT/IST)
                  </Typography>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 sm:gap-4">
                <a 
                  href="https://github.com/kunalt4" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-[15px] sm:rounded-[20px_10px_15px_25px] bg-surface-container-high text-primary-60 hover:bg-surface-container-highest hover:text-primary-50 transition-all duration-300 gap-2 sm:gap-3 group/link hover:scale-105 shadow-level1 hover:shadow-level3 transform rotate-1 hover:-rotate-1"
                  aria-label="Visit my GitHub profile"
                >
                  <span className="material-icons text-xl sm:text-2xl group-hover/link:rotate-12 transition-transform duration-500" aria-hidden="true">code</span>
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/kunaltolani" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-center px-4 sm:px-6 py-2 sm:py-3 rounded-[15px] sm:rounded-[15px_25px_20px_10px] bg-surface-container-high text-primary-60 hover:bg-surface-container-highest hover:text-primary-50 transition-all duration-300 gap-2 sm:gap-3 group/link hover:scale-105 shadow-level1 hover:shadow-level3 transform -rotate-1 hover:rotate-1"
                  aria-label="Connect with me on LinkedIn"
                >
                  <span className="material-icons text-xl sm:text-2xl group-hover/link:rotate-12 transition-transform duration-500" aria-hidden="true">person</span>
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </Card>

        {/* Contact Form Card - Improved mobile layout */}
        <Card className="p-6 sm:p-8 lg:p-10 shadow-level3 hover:shadow-level5 transition-all duration-500 bg-white/90 backdrop-blur-sm border border-surface-container-high rounded-[20px] sm:rounded-[30px_60px_30px_60px] hover:rounded-[60px_30px_60px_30px] overflow-hidden animate-slide-up mb-6 sm:mb-8" {...cardProps}>
          <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="space-y-2 group">
                <Typography variant="h6" className="text-sm sm:text-base font-medium text-primary-60 flex items-center gap-2" {...sharedProps}>
                  <span className="material-icons text-lg sm:text-xl text-accent-50 group-hover:rotate-12 transition-transform duration-500" aria-hidden="true">person</span>
                  <label htmlFor="name">Your Name</label>
                </Typography>
                <div className="relative">
                  <Input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="!border-2 !border-surface-container-high focus:!border-primary-60 bg-white/50 text-gray-900 rounded-extra-large !px-4 !py-2"
                    labelProps={{
                      className: "text-gray-600 peer-focus:text-primary-60",
                    }}
                    containerProps={{
                      className: "group-hover:scale-[1.02] transition-transform duration-300",
                    }}
                    crossOrigin={undefined}
                    {...sharedProps}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-30/0 via-primary-30/10 to-primary-30/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                </div>
              </div>

              <div className="space-y-2 group">
                <Typography variant="h6" className="text-sm sm:text-base font-medium text-primary-60 flex items-center gap-2" {...sharedProps}>
                  <span className="material-icons text-lg sm:text-xl text-accent-50 group-hover:rotate-12 transition-transform duration-500" aria-hidden="true">email</span>
                  <label htmlFor="email">Your Email</label>
                </Typography>
                <div className="relative">
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="!border-2 !border-surface-container-high focus:!border-primary-60 bg-white/50 text-gray-900 rounded-extra-large !px-4 !py-2"
                    labelProps={{
                      className: "text-gray-600 peer-focus:text-primary-60",
                    }}
                    containerProps={{
                      className: "group-hover:scale-[1.02] transition-transform duration-300",
                    }}
                    crossOrigin={undefined}
                    {...sharedProps}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-30/0 via-primary-30/10 to-primary-30/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
                </div>
              </div>
            </div>

            <div className="space-y-2 group">
              <Typography variant="h6" className="text-sm sm:text-base font-medium text-primary-60 flex items-center gap-2" {...sharedProps}>
                <span className="material-icons text-lg sm:text-xl text-accent-50 group-hover:rotate-12 transition-transform duration-500" aria-hidden="true">message</span>
                <label htmlFor="message">Your Message</label>
              </Typography>
              <div className="relative">
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className="!border-2 !border-surface-container-high focus:!border-primary-60 bg-white/50 text-gray-900 rounded-extra-large min-h-[120px] !px-4 !py-2"
                  labelProps={{
                    className: "text-gray-600 peer-focus:text-primary-60",
                  }}
                  containerProps={{
                    className: "group-hover:scale-[1.02] transition-transform duration-300",
                  }}
                  {...sharedProps}
                />
                <div className="absolute inset-0 bg-gradient-to-r from-primary-30/0 via-primary-30/10 to-primary-30/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 pointer-events-none"></div>
              </div>
            </div>

            <div className="flex justify-center pt-4">
              <Button
                type="submit"
                className="bg-primary-60 text-white px-6 py-3 rounded-full hover:bg-primary-70 transition-all duration-300 shadow-level2 hover:shadow-level3 hover:scale-105"
                {...sharedProps}
              >
                Send Message
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </div>
  );
} 