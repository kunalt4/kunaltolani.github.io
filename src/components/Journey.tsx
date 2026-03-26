import React from "react";

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
  return (
    <div className="relative pl-8 lg:pl-10 pb-12 last:pb-0 group">
      {/* Vertical line */}
      <div className="absolute left-0 top-2 bottom-0 w-px bg-gray-700 group-last:bg-gradient-to-b group-last:from-gray-700 group-last:to-transparent" />
      {/* Dot */}
      <div className="absolute left-[-5px] top-2 w-2.5 h-2.5 rounded-full bg-crimson border-2 border-ink" />

      {/* Card */}
      <div className="bg-white rounded-xl p-5 sm:p-7 shadow-level2 hover:shadow-level3 transition-shadow duration-200">
        <span className="inline-block text-xs font-bold uppercase tracking-widest text-crimson mb-3">
          {year}
        </span>
        <h3 className="font-space-grotesk font-bold text-base sm:text-xl text-ink leading-snug">
          {title}
        </h3>
        <div className="flex flex-wrap items-center gap-2 mt-1 mb-4">
          <span className="text-sm font-semibold text-gray-700">{company}</span>
          <span className="text-gray-400">·</span>
          <span className="text-sm text-gray-500">{location}</span>
        </div>

        <ul className="space-y-2">
          {description.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm sm:text-base text-gray-600">
              <span className="w-1 h-1 rounded-full bg-crimson mt-2 flex-shrink-0"></span>
              {item}
            </li>
          ))}
        </ul>

        {technologies && (
          <div className="flex flex-wrap gap-2 mt-5">
            {technologies.map((tech, index) => (
              <span
                key={index}
                className="px-2.5 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
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
  const experiences = [
    {
      year: "March 2022 – Present",
      title: "Software Engineer II, Design System Champion",
      company: "Toast",
      location: "Dublin, Ireland",
      description: [
        "Designed and delivered Kotlin-based backend microservices powering online ordering and restaurant availability workflows used by thousands of restaurant partners.",
        "Built and maintained REST and GraphQL APIs supporting React-based merchant tools and order management interfaces.",
        "Implemented full-stack features across Kotlin backend services and React frontends, delivering functionality from design through production rollout.",
        "Supported deployment, monitoring, and operational reliability of services in a cloud-based environment, troubleshooting incidents and improving system stability.",
        "Collaborated with cross-functional teams including product managers and frontend engineers in an agile environment.",
        "Acted as Design System Champion, driving adoption of shared UI components and improving consistency across React-based applications.",
      ],
      technologies: ["Kotlin", "React", "GraphQL", "Java", "JavaScript", "TypeScript", "DynamoDB"],
    },
    {
      year: "December 2020 – March 2022",
      title: "Software Engineer",
      company: "Toast",
      location: "Dublin, Ireland",
      description: [
        "Built and maintained backend microservices and REST/GraphQL APIs in Kotlin.",
        "Developed React and TypeScript frontend applications for merchant-facing tools.",
        "Contributed to code reviews, testing practices, and development standards to maintain high code quality.",
        "Worked on systems handling order volume and restaurant availability.",
      ],
      technologies: ["Kotlin", "React", "GraphQL", "Java", "JavaScript", "TypeScript", "DynamoDB"],
    },
    {
      year: "June 2020 – August 2020",
      title: "Software Engineer Intern",
      company: "HubSpot",
      location: "Dublin, Ireland",
      description: [
        "Backend engineer on the Email Analytics Team, maintaining data pipelines at large scale using Hadoop, Kafka, and HBase.",
        "Performed exploratory data analysis to determine event thresholds and reduce processing delays using Pandas.",
      ],
      technologies: ["Java", "Hadoop", "HBase", "HDFS", "Kafka", "Python", "Pandas", "Numpy", "Matplotlib", "Plotly"],
    },
    {
      year: "June 2017 – June 2018",
      title: "Analyst",
      company: "Capgemini",
      location: "Mumbai, India",
      description: [
        "Trained in Business Intelligence, using IBM DataStage, MS SSIS, SSRS, SSAS, and Power BI to extract, analyse, and report on sales data.",
      ],
      technologies: ["Microsoft SSIS", "SSAS", "SSRS", "Power BI", "IBM DataStage", "SQL"],
    },
  ];

  return (
    <div id="journey" className="bg-ink py-20 sm:py-28 lg:py-36">
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">

        {/* Section Header */}
        <div className="mb-14 sm:mb-20">
          <h2 className="font-space-grotesk font-black text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight">
            Experience
          </h2>
          <div className="mt-3 h-1 w-12 bg-crimson"></div>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl">
          {experiences.map((experience, index) => (
            <TimelineItem key={index} {...experience} />
          ))}
        </div>

      </div>
    </div>
  );
}
