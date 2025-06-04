import React, { useState } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { ResumeModal } from "./ResumeModal";
import { OrganicBackground } from "./OrganicBackground";
import { HandwrittenHeading } from "./HandwrittenHeading";
import profileImage from "../assets/_I2A7818b (1).jpg";

export function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const sharedProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  };

  const handleOpenResumeModal = () => {
    setIsResumeModalOpen(true);
  };

  const handleCloseResumeModal = () => {
    setIsResumeModalOpen(false);
  };

  return (
    <>
      <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-surface-base to-surface-bright overflow-hidden py-16 sm:py-24 lg:py-32">
        <OrganicBackground 
          className="opacity-50 sm:opacity-100"
          primaryColor="primary-30"
          secondaryColor="secondary-30"
          accentColor="accent-30"
          dotCount={15}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
            {/* Text Content */}
            <div className="flex-1 text-center md:text-left">
              <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
                <div className="relative">
                  <HandwrittenHeading 
                    size="large"
                    className="bg-clip-text text-transparent bg-gradient-to-r from-primary-60 via-primary-70 to-primary-80 animate-slide-up font-bold text-4xl sm:text-5xl lg:text-7xl"
                  >
                    Hello, I'm Kunal
                  </HandwrittenHeading>
                </div>
                
                <HandwrittenHeading
                  size="medium"
                  className="text-gray-700 animate-slide-up leading-relaxed"
                >
                  <div style={{ animationDelay: '200ms' }}>
                    A software engineer passionate about creating beautiful, functional, and user-friendly applications.
                  </div>
                </HandwrittenHeading>

                <Typography
                  className="text-base sm:text-lg lg:text-xl text-gray-600 animate-slide-up leading-relaxed"
                  style={{ animationDelay: '300ms' }}
                  {...sharedProps}
                >
                  Currently based in Dublin at Toast, building software for the restaurant industry.
                </Typography>

                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start animate-slide-up" style={{ animationDelay: '400ms' }}>
                  <Button
                    onClick={handleOpenResumeModal}
                    className="bg-primary-60 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-primary-70 transition-all duration-300 shadow-level2 hover:shadow-level3 hover:scale-105 flex items-center gap-2"
                    {...sharedProps}
                  >
                    <span className="material-icons text-lg sm:text-xl" aria-hidden="true">description</span>
                    View Resume
                  </Button>
                  <a
                    href="#contact"
                    className="bg-surface-container-high text-primary-60 px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-surface-container-highest hover:text-primary-70 transition-all duration-300 shadow-level1 hover:shadow-level2 hover:scale-105 flex items-center gap-2"
                  >
                    <span className="material-icons text-lg sm:text-xl" aria-hidden="true">mail</span>
                    Contact Me
                  </a>
                </div>

                <div className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start animate-slide-up" style={{ animationDelay: '600ms' }}>
                  <a
                    href="https://github.com/kunalt4"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-60 transition-colors duration-300 flex items-center gap-1.5 sm:gap-2 group"
                    aria-label="Visit my GitHub profile"
                  >
                    <span className="material-icons text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-500" aria-hidden="true">code</span>
                    GitHub
                  </a>
                  <a
                    href="https://linkedin.com/in/kunaltolani"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-primary-60 transition-colors duration-300 flex items-center gap-1.5 sm:gap-2 group"
                    aria-label="Connect with me on LinkedIn"
                  >
                    <span className="material-icons text-lg sm:text-xl group-hover:rotate-12 transition-transform duration-500" aria-hidden="true">person</span>
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>

            {/* Image Section */}
            <div className="flex-1 relative group animate-slide-up" style={{ animationDelay: '800ms' }}>
              {/* Multiple layered glows for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-30/20 via-secondary-30/20 to-accent-30/20 rounded-[40%_60%_30%_70%] blur-xl sm:blur-2xl group-hover:blur-3xl transition-all duration-500 animate-morph"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-accent-30/20 via-primary-30/20 to-secondary-30/20 rounded-[60%_40%_70%_30%] blur-xl sm:blur-2xl group-hover:blur-3xl transition-all duration-500 animate-morph" style={{ animationDelay: '2s' }}></div>
              
              {/* Image container with playful shape */}
              <div className="relative max-w-sm sm:max-w-md lg:max-w-lg mx-auto transform group-hover:scale-[1.02] group-hover:rotate-2 transition-all duration-500">
                {/* Border gradient animation */}
                <div className="absolute -inset-1 bg-gradient-to-r from-primary-60 via-secondary-60 to-accent-60 rounded-[35%_65%_30%_70%] opacity-75 group-hover:opacity-100 blur-sm group-hover:blur-md transition-all duration-500 animate-morph"></div>
                
                {/* Image with mask */}
                <div className="relative rounded-[35%_65%_30%_70%] overflow-hidden animate-morph">
                  <img
                    src={profileImage}
                    alt="Kunal Tolani - Software Engineer"
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 animate-morph"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ResumeModal open={isResumeModalOpen} onClose={handleCloseResumeModal} />
    </>
  );
} 