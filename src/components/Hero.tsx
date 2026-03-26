import React, { useState } from "react";
import { Button } from "@material-tailwind/react";
import { ResumeModal } from "./ResumeModal";
import profileImage from "../assets/profile-image.jpg";

export function Hero() {
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  const sharedProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  };

  return (
    <>
      <div className="bg-ink min-h-screen flex items-center py-16 sm:py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-20">

            {/* Text Content */}
            <div className="flex-1 text-center md:text-left animate-slide-up">
              <h1 className="font-space-grotesk font-black text-5xl sm:text-6xl lg:text-8xl text-white tracking-tight leading-none">
                Kunal<br />Tolani
              </h1>
              <div className="mt-4 h-1 w-16 bg-crimson mx-auto md:mx-0"></div>

              <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-gray-300 font-medium leading-snug max-w-lg mx-auto md:mx-0">
                Full-stack Software Engineer with 5+ years building scalable microservices and React applications in high-volume production systems.
              </p>
              <p className="mt-3 text-base sm:text-lg text-gray-500">
                Software Engineer II at Toast · Dublin, Ireland
              </p>

              <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
                <Button
                  onClick={() => setIsResumeModalOpen(true)}
                  className="bg-crimson text-white px-6 py-3 rounded-lg font-semibold text-sm tracking-wide hover:bg-red-700 transition-colors duration-200 shadow-none flex items-center gap-2 normal-case"
                  {...sharedProps}
                >
                  <span className="material-icons text-base" aria-hidden="true">description</span>
                  View Resume
                </Button>
                <a
                  href="#contact"
                  className="px-6 py-3 rounded-lg border border-gray-600 text-gray-300 font-semibold text-sm tracking-wide hover:border-white hover:text-white transition-colors duration-200 flex items-center gap-2"
                >
                  <span className="material-icons text-base" aria-hidden="true">mail</span>
                  Contact Me
                </a>
              </div>

              <div className="mt-8 flex gap-6 justify-center md:justify-start">
                <a
                  href="https://github.com/kunalt4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  aria-label="Visit my GitHub profile"
                >
                  <span className="material-icons text-base" aria-hidden="true">code</span>
                  GitHub
                </a>
                <a
                  href="https://linkedin.com/in/kunaltolani"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-gray-400 hover:text-white transition-colors duration-200 flex items-center gap-2"
                  aria-label="Connect with me on LinkedIn"
                >
                  <span className="material-icons text-base" aria-hidden="true">person</span>
                  LinkedIn
                </a>
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex-shrink-0 animate-slide-up" style={{ animationDelay: '200ms' }}>
              <div className="relative w-64 sm:w-80 lg:w-96 mx-auto">
                <div className="absolute -inset-1 bg-crimson rounded-2xl opacity-30"></div>
                <div className="relative rounded-2xl overflow-hidden border border-gray-700">
                  <img
                    src={profileImage}
                    alt="Kunal Tolani - Software Engineer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      <ResumeModal open={isResumeModalOpen} onClose={() => setIsResumeModalOpen(false)} />
    </>
  );
}
