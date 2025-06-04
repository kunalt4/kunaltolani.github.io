import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import { HandwrittenHeading } from "./HandwrittenHeading";

export function About() {
  const techStack = {
    "Frontend Development": [
      { name: "React", description: "Building modern SPAs and component libraries" },
      { name: "TypeScript", description: "Type-safe development and better DX" },
      { name: "GraphQL", description: "Efficient data fetching and management" }
    ],
    "Backend Development": [
      { name: "Kotlin", description: "Building scalable microservices" },
      { name: "Java", description: "Enterprise application development" },
      { name: "Python", description: "Data analysis and ML implementations" }
    ],
    "Data & Analytics": [
      { name: "Hadoop", description: "Large-scale data processing" },
      { name: "Kafka", description: "Real-time data streaming" },
      { name: "SQL & NoSQL", description: "Data modeling and querying" }
    ],
    "Tools & Infrastructure": [
      { name: "DynamoDB", description: "NoSQL database management" },
      { name: "Docker", description: "Containerization" },
      { name: "Git", description: "Version control and collaboration" }
    ]
  };

  const education = [
    {
      degree: "MSc. Computer Science (Negotiated Learning)",
      school: "University College Dublin",
      period: "2019 - 2020",
      highlights: ["Machine Learning", "Text Analytics", "Data Mining", "Data Science"],
      gpa: "GPA: 3.98 / 1st"
    },
    {
      degree: "Bachelor of Engineering: Computer Engineering",
      school: "VESIT, Mumbai University",
      period: "2013 - 2017",
      highlights: ["Cloud Computing", "Network Programming", "Soft Computing", "OOP"],
      gpa: "CGPI: 8.11/10"
    }
  ];

  const sharedProps = {
    placeholder: "",
    onResize: () => {},
    onResizeCapture: () => {},
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
  };

  const cardProps = {
    ...sharedProps,
    variant: "gradient" as const,
    shadow: true,
  };

  return (
    <div id="about" className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary-95 via-surface-bright to-secondary-95 overflow-hidden">
      {/* Organic background elements - Adjusted for better mobile performance */}
      <div className="absolute inset-0 pointer-events-none opacity-50 sm:opacity-100">
        <div className="absolute w-[400px] sm:w-[600px] lg:w-[800px] h-[400px] sm:h-[600px] lg:h-[800px] -top-48 sm:-top-64 lg:-top-96 -right-48 sm:-right-64 lg:-right-96 bg-primary-30/10 rounded-[60%_40%_25%_75%] blur-2xl sm:blur-3xl animate-morph"></div>
        <div className="absolute w-[300px] sm:w-[400px] lg:w-[600px] h-[300px] sm:h-[400px] lg:h-[600px] -bottom-32 sm:-bottom-48 lg:-bottom-64 -left-32 sm:-left-48 lg:-left-64 bg-secondary-30/10 rounded-[35%_65%_50%_50%] blur-2xl sm:blur-3xl animate-morph" style={{ animationDelay: '2s' }}></div>
        <div className="absolute w-[200px] sm:w-[300px] lg:w-[400px] h-[200px] sm:h-[300px] lg:h-[400px] top-1/2 left-1/4 bg-accent-30/10 rounded-[45%_55%_70%_30%] blur-2xl sm:blur-3xl animate-morph" style={{ animationDelay: '3s' }}></div>
        {/* Reduced number of dots for mobile */}
        <div className="absolute inset-0 mix-blend-overlay opacity-20">
          {[...Array(10)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-primary-60 rounded-full animate-float hidden sm:block"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                transform: `scale(${Math.random() * 2 + 1})`
              }}
            ></div>
          ))}
        </div>
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
                  <span className="material-icons text-3xl sm:text-4xl lg:text-5xl text-accent-50 absolute -left-8 sm:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 group-hover/title:rotate-12 transition-transform duration-500" aria-hidden="true">person_outline</span>
                  About Me
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
            Passionate about building impactful solutions through innovative technology
          </HandwrittenHeading>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Bio Section - Improved mobile layout */}
          <Card className="p-6 sm:p-8 lg:p-10 shadow-level3 hover:shadow-level5 transition-all duration-500 bg-surface-container/90 backdrop-blur-sm border border-primary-80/20 group animate-slide-up rounded-[20px] sm:rounded-[40px_20px_50px_30px] hover:rounded-[30px_50px_20px_40px] overflow-hidden transform hover:rotate-1" {...cardProps}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary-30/0 via-primary-30/10 to-primary-30/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer"></div>
              <div className="mb-8 sm:mb-12">
                <Typography variant="h5" className="text-xl sm:text-2xl font-semibold mb-6 sm:mb-8 text-primary-60 flex items-center gap-3 sm:gap-4 group/title transform -rotate-1" {...sharedProps}>
                  <span className="material-icons text-2xl sm:text-3xl group-hover/title:rotate-12 transition-transform duration-500 text-accent-50" aria-hidden="true">emoji_objects</span>
                  <span className="relative">
                    A Bit About Me
                    <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-accent-50/30 rounded-full transform -rotate-2"></div>
                  </span>
                </Typography>
                <Typography variant="paragraph" className="text-base sm:text-lg lg:text-xl text-gray-800 leading-relaxed relative" {...sharedProps}>
                  <span className="relative inline-block mb-4 sm:mb-6">
                    <span className="absolute -inset-1 bg-primary-30/5 rounded-xl -rotate-1"></span>
                    <span className="relative">I'm a software engineer with a strong foundation in computer science, holding an MSc. from UCD and a Bachelor's in Computer Engineering. My journey in tech has been diverse and exciting, spanning from data science and machine learning to full-stack web development.</span>
                  </span>
                  <br /><br />
                  <span className="relative inline-block mb-4 sm:mb-6">
                    <span className="absolute -inset-1 bg-secondary-30/5 rounded-xl rotate-1"></span>
                    <span className="relative">Currently, I'm working as a Software Engineer II at Toast, where I champion design systems and build scalable solutions for the restaurant industry. I work on the Backend Off Premise team, handling critical systems for order volume, restaurant availability, and online order scheduling.</span>
                  </span>
                  <br /><br />
                  <span className="relative inline-block mb-4 sm:mb-6">
                    <span className="absolute -inset-1 bg-accent-30/5 rounded-xl -rotate-[0.5deg]"></span>
                    <span className="relative">My experience includes working with large-scale data systems at HubSpot, where I handled email analytics using technologies like Hadoop and Kafka. I've also worked in Business Intelligence at Capgemini, giving me a strong foundation in data analysis and reporting.</span>
                  </span>
                  <br /><br />
                  <span className="relative inline-block mb-4 sm:mb-6">
                    <span className="absolute -inset-1 bg-primary-30/5 rounded-xl rotate-[0.5deg]"></span>
                    <span className="relative">I'm particularly interested in building efficient, scalable systems and have experience with both frontend and backend development. My work involves everything from designing microservices architectures to creating intuitive user interfaces.</span>
                  </span>
                </Typography>
              </div>

              {/* Education Section - Improved mobile layout */}
              <div>
                <Typography variant="h6" className="text-lg sm:text-xl font-semibold mb-6 sm:mb-8 text-primary-60 flex items-center gap-3 sm:gap-4 group/title transform rotate-1" {...sharedProps}>
                  <span className="material-icons text-2xl sm:text-3xl group-hover/title:rotate-12 transition-transform duration-500 text-accent-50" aria-hidden="true">school</span>
                  <span className="relative">
                    Education
                    <div className="absolute -bottom-1 sm:-bottom-2 left-0 w-full h-1 bg-accent-50/30 rounded-full transform rotate-1"></div>
                  </span>
                </Typography>
                <div className="space-y-6 sm:space-y-8">
                  {education.map((edu, index) => (
                    <div key={index} className="relative pl-6 sm:pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[2px] sm:before:w-[3px] before:bg-gradient-to-b from-primary-60 via-primary-70 to-primary-80 hover:translate-x-2 transition-transform duration-300 group/edu transform hover:-rotate-1">
                      <div className="absolute -left-[4px] sm:-left-[5px] top-0 w-2.5 sm:w-3 h-2.5 sm:h-3 rounded-full bg-primary-60 group-hover/edu:scale-150 transition-transform duration-300"></div>
                      <Typography variant="h6" className="text-base sm:text-lg font-medium text-primary-60 mb-2 transform -rotate-[0.5deg]" {...sharedProps}>
                        {edu.degree}
                      </Typography>
                      <Typography variant="small" className="text-sm sm:text-base text-primary-80 block mb-2 font-medium transform rotate-[0.5deg]" {...sharedProps}>
                        {edu.school} | {edu.period}
                      </Typography>
                      <Typography variant="small" className="text-sm text-accent-50 block mb-2 sm:mb-3 transform -rotate-[0.25deg]" {...sharedProps}>
                        {edu.gpa}
                      </Typography>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {edu.highlights.map((highlight, i) => (
                          <span 
                            key={i} 
                            className="px-2 sm:px-3 py-1 bg-surface-container-high text-primary-60 rounded-full text-xs sm:text-sm hover:bg-surface-container-highest hover:scale-105 transition-all duration-300 transform rotate-[0.5deg] hover:-rotate-1"
                            style={{ transformOrigin: 'center' }}
                          >
                            {highlight}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          {/* Tech Stack Section - Improved mobile layout */}
          <div className="space-y-6 sm:space-y-8">
            <Card className="p-6 sm:p-8 lg:p-10 shadow-level3 hover:shadow-level5 transition-all duration-500 bg-surface-container/90 backdrop-blur-sm border border-primary-80/20 group animate-slide-up rounded-[20px] sm:rounded-[50px_30px_40px_20px] hover:rounded-[20px_40px_30px_50px] overflow-hidden transform hover:-rotate-1" style={{ animationDelay: '200ms' }} {...cardProps}>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-30/0 via-primary-30/10 to-primary-30/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 animate-shimmer"></div>
                <Typography variant="h5" className="font-semibold mb-12 text-primary-60 flex items-center gap-4 group/title transform rotate-1" {...sharedProps}>
                  <span className="material-icons text-3xl group-hover/title:rotate-12 transition-transform duration-500 text-accent-50">code</span>
                  <span className="relative">
                    Tech Stack
                    <div className="absolute -bottom-2 left-0 w-full h-1 bg-accent-50/30 rounded-full transform -rotate-1"></div>
                  </span>
                </Typography>
                <div className="space-y-12">
                  {Object.entries(techStack).map(([category, skills], categoryIndex) => (
                    <div key={category} className="space-y-6">
                      <Typography 
                        variant="h6" 
                        className="text-lg font-medium text-primary-60 border-b border-primary-60/20 pb-2 transform" 
                        style={{ transform: `rotate(${categoryIndex % 2 === 0 ? '1deg' : '-1deg'})` }}
                        {...sharedProps}
                      >
                        {category}
                      </Typography>
                      <div className="grid grid-cols-1 gap-4">
                        {skills.map((skill, skillIndex) => (
                          <div 
                            key={skill.name} 
                            className="group/skill hover:translate-x-2 transition-transform duration-300 transform"
                            style={{ transform: `rotate(${skillIndex % 2 === 0 ? '0.5deg' : '-0.5deg'})` }}
                          >
                            <div className="flex items-center gap-3">
                              <span className="w-2 h-2 rounded-full bg-primary-60 group-hover/skill:scale-150 transition-transform duration-300"></span>
                              <Typography variant="h6" className="text-base font-medium text-primary-60" {...sharedProps}>
                                {skill.name}
                              </Typography>
                            </div>
                            <Typography variant="small" className="text-gray-700 text-sm ml-5" {...sharedProps}>
                              {skill.description}
                            </Typography>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
} 