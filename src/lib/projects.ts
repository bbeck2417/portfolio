import { StaticImageData } from "next/image";

// 1. Statically import your local images
import webDevImg from "../../public/images/space-discoveries-project-thumbnail.jpg";
import dataAnalyticsImg from "../../public/images/data-analytics-placeholder.jpg";
import mobileAppImg from "../../public/images/easeScreenshot.png";
import vercelFullStack from "../../public/images/vercelNext.png";

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
      title: "Vanilla JS, HTML, and CSS",
      imageSrc: webDevImg, // 3. Use the imported object instead of a string
      href: "https://bbeck2417.github.io/spacediscovery/",
      description:
        "Developed a responsive website using HTML, CSS, and JavaScript. Implemented modern design principles.",
      order: 1,
    },
    {
      slug: "data-analytics",
      title: "Data Analysis Coming Soon",
      imageSrc: dataAnalyticsImg,
      href: "https://bbeck2417.github.io/spacediscovery/",
      description:
        "Analyzed large datasets using Python and Pandas to extract meaningful insights. Created visualizations.",
      order: 4,
    },
    {
      slug: "mobile-app",
      title: "Mobile App",
      imageSrc: mobileAppImg,
      href: "https://github.com/bbeck2417/ease/",
      description:
        "A React Native mental health tracker designed to monitor daily well-being. Built with TypeScript and SQLite, it features mood logging, resource management, and historical data visualization to support personal growth.",
      order: 3,
    },
    {
      slug: "course-management",
      title: "Next.js, Prisma, and Supabase",
      imageSrc: vercelFullStack,
      href: "https://sdev-255-final-project-error-404-te.vercel.app/",
      description:
        "A full-stack course management platform for 'Xavier's School for Gifted Youngsters' built with Next.js, Prisma, and Supabase. Features a dynamic shopping cart and course registration system with seamless Vercel deployment.",
      order: 2,
    },
  ];

  return projects.sort((a, b) => (a.order > b.order ? 1 : -1));
}
