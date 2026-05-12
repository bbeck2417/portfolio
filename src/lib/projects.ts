// src/lib/projects.ts

export interface Project {
  slug: string;
  title: string;
  imageSrc: string;
  href: string;
  description: string;
  order: number;
}

export function getAllProjects(): Project[] {
  const projects: Project[] = [
    {
      slug: "web-development",
      title: "Web Development",
      imageSrc: "/images/space-discoveries-project-thumbnail.jpg",
      href: "https://bbeck2417.github.io/spacediscovery/",
      description:
        "Developed a responsive website using HTML, CSS, and JavaScript. Implemented modern design principles.",
      order: 1,
    },
    {
      slug: "data-analytics",
      title: "Data Analysis",
      imageSrc: "/images/data-analytics-placeholder.jp",
      href: "https://bbeck2417.github.io/spacediscovery/",
      description:
        "Analyzed large datasets using Python and Pandas to extract meaningful insights. Created visualizations.",
      order: 2,
    },
    {
      slug: "mobile-app",
      title: "Mobile App",
      imageSrc: "/images/mobile-app-placeholder.jpg",
      href: "https://bbeck2417.github.io/spacediscovery/",
      description:
        "Built a cross-platform mobile application using React Native. Focused on user experience and performance.",
      order: 3,
    },
    // You can easily add your other projects below:
    /*
    {
      slug: "mobile-app",
      title: "Mobile App Development",
      imageSrc: "/images/mobile-app-placeholder.jpg",
      href: "#",
      description: "Building an upcoming movie discovery application.",
      order: 2
    },
    */
  ];

  // Sort projects by their order property before returning
  return projects.sort((a, b) => (a.order > b.order ? 1 : -1));
}
