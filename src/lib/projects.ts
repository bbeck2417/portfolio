import { StaticImageData } from "next/image";

// 1. Statically import your local images
import webDevImg from "../../public/images/space-discoveries-project-thumbnail.jpg";
import dataAnalyticsImg from "../../public/images/data-analytics-placeholder.jpg";
import mobileAppImg from "../../public/images/mobile-app-placeholder.jpg";

export interface Project {
  slug: string;
  title: string;
  imageSrc: StaticImageData | string; // 2. Allow StaticImageData
  href: string;
  description: string;
  order: number;
}

export function getAllProjects(): Project[] {
  const projects: Project[] = [
    {
      slug: "web-development",
      title: "Web Development",
      imageSrc: webDevImg, // 3. Use the imported object instead of a string
      href: "https://bbeck2417.github.io/spacediscovery/",
      description:
        "Developed a responsive website using HTML, CSS, and JavaScript. Implemented modern design principles.",
      order: 1,
    },
    {
      slug: "data-analytics",
      title: "Data Analysis",
      imageSrc: dataAnalyticsImg,
      href: "https://bbeck2417.github.io/spacediscovery/",
      description:
        "Analyzed large datasets using Python and Pandas to extract meaningful insights. Created visualizations.",
      order: 2,
    },
    {
      slug: "mobile-app",
      title: "Mobile App",
      imageSrc: mobileAppImg,
      href: "https://bbeck2417.github.io/spacediscovery/",
      description:
        "Built a cross-platform mobile application using React Native. Focused on user experience and performance.",
      order: 3,
    },
  ];

  return projects.sort((a, b) => (a.order > b.order ? 1 : -1));
}
