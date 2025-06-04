import React from "react";
import { Typography } from "@material-tailwind/react";
import { HandwrittenHeading } from "./HandwrittenHeading";
import { OrganicBackground } from "./OrganicBackground";

interface TimelineItemProps {
  year: string;
  title: string;
  company: string;
  location: string;
  description: string[];
  technologies?: string[];
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  company,
  location,
  description,
  technologies,
}) => {
  const sharedProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  };

  return (
    <div className="relative pl-4 sm:pl-4 lg:pl-32 py-6 group">
      {/* Timeline line - only on desktop */}
      <div className="hidden lg:block absolute top-0 left-0 h-full w-[2px] bg-gradient-to-b from-primary-50 via-primary-60 to-primary-70 group-last:bg-gradient-to-b group-last:from-primary-50 group-last:to-transparent" />

      {/* Timeline dot - only on desktop */}
      <div className="hidden lg:block absolute -left-3 top-9 w-6 h-6 bg-surface-container-high rounded-full border-[3px] border-primary-60 shadow-level2 group-hover:scale-125 group-hover:border-primary-70 transition-all duration-300" />

      {/* Mobile and tablet timeline connector */}
      <div className="lg:hidden absolute left-1/2 -translate-x-1/2 -top-3 h-6 w-[2px] bg-gradient-to-b from-transparent via-primary-60 to-primary-70"></div>
      <div className="lg:hidden absolute left-1/2 -translate-x-1/2 -bottom-3 h-6 w-[2px] bg-gradient-to-b from-primary-50 via-primary-60 to-transparent"></div>

      {/* Content */}
      <div className="relative bg-surface-container-low/50 backdrop-blur-sm rounded-[15px] sm:rounded-[20px] p-3 sm:p-6 shadow-level2 group-hover:shadow-level3 group-hover:bg-surface-container-low/70 transition-all duration-300">
        {/* Year badge */}
        <span className="absolute -top-2 sm:-top-3 left-3 lg:left-6 bg-primary-60 text-white px-2 sm:px-4 py-0.5 sm:py-1 rounded-full text-xs sm:text-sm font-medium shadow-level1 group-hover:shadow-level2 group-hover:scale-105 transition-all duration-300">
          {year}
        </span>

        <HandwrittenHeading
          size="medium"
          className="text-base sm:text-xl lg:text-2xl mt-3 sm:mt-1 mb-1 font-semibold text-gray-800"
        >
          {title}
        </HandwrittenHeading>
        
        <div className="flex flex-wrap items-center gap-1.5 sm:gap-3 mb-2 sm:mb-4">
          <Typography
            variant="h6"
            className="text-sm sm:text-lg text-primary-60"
            {...sharedProps}
          >
            {company}
          </Typography>
          <span className="text-gray-500">•</span>
          <div className="flex items-center gap-1 sm:gap-2 text-gray-600">
            <span className="material-icons text-xs sm:text-base text-accent-50">location_on</span>
            <Typography
              variant="small"
              className="text-xs sm:text-base"
              {...sharedProps}
            >
              {location}
            </Typography>
          </div>
        </div>

        <ul className="mb-3 sm:mb-6 list-disc list-inside space-y-1 sm:space-y-2">
          {description.map((item, index) => (
            <Typography
              key={index}
              variant="small"
              className="text-xs sm:text-base text-gray-700"
              {...sharedProps}
            >
              {item}
            </Typography>
          ))}
        </ul>

        {technologies && (
          <div className="flex flex-wrap gap-1 sm:gap-2">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-1.5 sm:px-3 py-0.5 sm:py-1 bg-surface-container-high rounded-full text-[10px] sm:text-sm text-primary-60 shadow-level1 hover:shadow-level2 hover:scale-105 transition-all duration-300"
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export function Journey() {
  const sharedProps = {
    placeholder: "",
    onPointerEnterCapture: () => {},
    onPointerLeaveCapture: () => {},
    onResize: () => {},
    onResizeCapture: () => {},
  };

  const experiences = [
    {
      year: "March 2022 - Present",
      title: "Software Engineer II, Design System Champion",
      company: "Toast",
      location: "Dublin, Ireland",
      description: [
        "Working as a full stack software engineer on the Backend Off Premise team",
        "Building APIs and configs in a microservice architecture using Kotlin",
        "Developing front end Single Page Applications (SPAs) in React",
        "End-to-end handling of projects from requirements to deployment",
        "Managing systems relating to order volume, restaurant availability and online order scheduling"
      ],
      technologies: ["Kotlin", "React", "GraphQL", "Java", "JavaScript", "TypeScript", "DynamoDB"]
    },
    {
      year: "December 2020 - March 2022",
      title: "Software Engineer",
      company: "Toast",
      location: "Dublin, Ireland",
      description: [
        "Built and maintained backend services in a microservice architecture",
        "Developed frontend applications using React and TypeScript",
        "Performed peer code reviews and contributed to team's technical decisions",
        "Worked on systems handling order volume and restaurant availability"
      ],
      technologies: ["Kotlin", "React", "GraphQL", "Java", "JavaScript", "TypeScript", "DynamoDB"]
    },
    {
      year: "June 2020 - August 2020",
      title: "Software Engineer Intern",
      company: "HubSpot",
      location: "Remote",
      description: [
        "Worked as a Backend Engineer for the Email Analytics Team",
        "Maintained data at scale using Hadoop, Kafka and HBase",
        "Performed Exploratory Data Analysis to optimize event thresholds and reduce delays",
        "Used Python data science tools for analysis and visualization"
      ],
      technologies: ["Java", "Hadoop", "HBase", "HDFS", "Kafka", "Python", "Pandas", "Numpy"]
    },
    {
      year: "June 2017 - June 2018",
      title: "Analyst",
      company: "Capgemini",
      location: "Mumbai, India",
      description: [
        "Trained in Business Intelligence and data analysis",
        "Used IBM DataStage and Microsoft BI tools for data extraction and analysis",
        "Developed reports on sales data using various BI tools",
        "Worked with SSIS, SSRS, SSAS and Power BI"
      ],
      technologies: ["Microsoft SSIS", "SSAS", "SSRS", "Power BI", "IBM DataStage", "SQL"]
    }
  ];

  return (
    <div id="journey" className="relative py-16 sm:py-24 lg:py-32 bg-gradient-to-br from-primary-95 via-surface-bright to-secondary-95 overflow-hidden">
      {/* Background with reduced complexity for mobile */}
      <OrganicBackground 
        className="opacity-50 sm:opacity-100"
        dotCount={10}
        primaryColor="primary-30"
        secondaryColor="secondary-30"
        accentColor="accent-30"
      />

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
                  <span className="material-icons text-3xl sm:text-4xl lg:text-5xl text-accent-50 absolute -left-8 sm:-left-12 lg:-left-16 top-1/2 -translate-y-1/2 group-hover/title:rotate-12 transition-transform duration-500" aria-hidden="true">timeline</span>
                  My Journey
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
            A timeline of my professional experiences and growth
          </HandwrittenHeading>
        </div>

        {/* Timeline */}
        <div className="relative">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} {...experience} />
          ))}
        </div>
      </div>
    </div>
  );
} 