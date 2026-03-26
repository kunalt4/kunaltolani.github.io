import React from "react";
import { Typography } from "@material-tailwind/react";

export function About() {
  const techStack = {
    "Frontend": [
      { name: "React", description: "Building modern SPAs and component libraries" },
      { name: "TypeScript", description: "Type-safe development and better DX" },
      { name: "GraphQL", description: "Efficient data fetching and management" },
    ],
    "Backend": [
      { name: "Kotlin", description: "Building scalable microservices" },
      { name: "Java", description: "Enterprise application development" },
      { name: "Python", description: "Data analysis and ML implementations" },
    ],
    "Data & Analytics": [
      { name: "Hadoop", description: "Large-scale data processing" },
      { name: "Kafka", description: "Real-time data streaming" },
      { name: "SQL & NoSQL", description: "Data modeling and querying" },
    ],
    "Infrastructure": [
      { name: "DynamoDB", description: "NoSQL database management" },
      { name: "Docker", description: "Containerization" },
      { name: "Git", description: "Version control and collaboration" },
    ],
  };

  const education = [
    {
      degree: "MSc. Computer Science (Negotiated Learning)",
      school: "University College Dublin",
      period: "2019 – 2020",
      highlights: ["Machine Learning", "Text Analytics", "Data Mining", "Data Science"],
      gpa: "GPA: 3.98 / 1st Class Honours",
    },
    {
      degree: "Bachelor of Engineering: Computer Engineering",
      school: "VESIT, Mumbai University",
      period: "2013 – 2017",
      highlights: ["Cloud Computing", "Network Programming", "Soft Computing", "OOP"],
      gpa: "CGPI: 8.11 / 10",
    },
  ];

  const sharedProps = {
    placeholder: "",
    onResize: () => {},
    onResizeCapture: () => {},
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
  };

  return (
    <div id="about" className="bg-chalk py-20 sm:py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <h2 className="font-space-grotesk font-black text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight">
            About Me
          </h2>
          <div className="mt-3 h-1 w-12 bg-crimson"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20">

          {/* Left: Bio + Education */}
          <div>
            <div className="space-y-5 text-base sm:text-lg text-gray-700 leading-relaxed">
              <p>
                I'm a full-stack software engineer with 5+ years of experience building scalable microservices and React applications in high-volume production systems, with an MSc. from UCD and a Bachelor's in Computer Engineering.
              </p>
              <p>
                Currently at Toast as a Software Engineer II, I design and deliver Kotlin-based backend microservices powering online ordering and restaurant availability workflows used by thousands of restaurant partners — owning features from design through production rollout.
              </p>
              <p>
                Previously at HubSpot, I worked with large-scale data systems for email analytics using Hadoop, Kafka, and HBase. My earlier work in Business Intelligence at Capgemini gave me a solid grounding in data analysis and reporting.
              </p>
              <p>
                I enjoy working across the stack — from microservices architecture to React frontends — and I care about strong ownership, code quality, and systems that hold up at scale.
              </p>
              <p>
                Outside of work, my wife Bhavya is a PhD researcher in Economics at Trinity College Dublin, researching development economics, financial inclusion, and gender empowerment. You can explore her work at{' '}
                <a
                  href="https://bhavyashrivastava.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-crimson hover:underline font-medium"
                >
                  bhavyashrivastava.com
                </a>.
              </p>
            </div>

            {/* Education */}
            <div className="mt-14">
              <h3 className="font-space-grotesk font-bold text-xl sm:text-2xl text-ink mb-6">
                Education
              </h3>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div key={index} className="border-l-2 border-crimson pl-5">
                    <p className="font-semibold text-ink text-base sm:text-lg leading-snug">
                      {edu.degree}
                    </p>
                    <p className="text-sm text-muted mt-1">
                      {edu.school} · {edu.period}
                    </p>
                    <p className="text-sm text-gray-500 mt-0.5">{edu.gpa}</p>
                    <div className="flex flex-wrap gap-2 mt-3">
                      {edu.highlights.map((h, i) => (
                        <span key={i} className="px-2.5 py-1 bg-gray-200 text-gray-700 rounded text-xs font-medium">
                          {h}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Tech Stack */}
          <div>
            <h3 className="font-space-grotesk font-bold text-xl sm:text-2xl text-ink mb-6">
              Tech Stack
            </h3>
            <div className="space-y-8">
              {Object.entries(techStack).map(([category, skills]) => (
                <div key={category}>
                  <h4 className="text-xs font-bold uppercase tracking-widest text-crimson mb-4">
                    {category}
                  </h4>
                  <div className="space-y-3">
                    {skills.map((skill) => (
                      <div key={skill.name} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 rounded-full bg-ink mt-2 flex-shrink-0"></div>
                        <div>
                          <span className="font-semibold text-ink text-sm sm:text-base">{skill.name}</span>
                          <span className="text-gray-500 text-sm"> — {skill.description}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
