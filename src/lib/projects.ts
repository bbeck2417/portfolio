import { StaticImageData } from "next/image";

// 1. Statically import your local images
import webDevImg from "../../public/images/space-discoveries-project-thumbnail.jpg";
import mobileAppImg from "../../public/images/easeScreenshot.png";
import vercelFullStack from "../../public/images/vercelNext.png";
import weatherly from "../../public/images/weatherly.png";
import newsAssignmentApp from "../../public/images/news-assignment-app-uiux.png";

export interface Project {
  slug: string;
  title: string;
  imageSrc: StaticImageData | string; // 2. Allow StaticImageData
  href?: string;
  githubHref?: string;
  figmaHref?: string;
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
      githubHref: "https://github.com/bbeck2417/spacediscovery",
      description:
        "Developed a responsive website using HTML, CSS, and JavaScript. Implemented modern design principles.",
      order: 1,
    },

    {
      slug: "mobile-app",
      title: "React Native, TypeScript, SQLite, and Expo",
      imageSrc: mobileAppImg,
      href: "https://snack.expo.dev/@bbeck2417/ease-?platform=ios",
      githubHref: "https://github.com/bbeck2417/ease/",
      description:
        "A React Native mental health tracker designed to monitor daily well-being. Built with TypeScript and SQLite, it features mood logging, resource management, and historical data visualization to support personal growth.",
      order: 3,
    },
    {
      slug: "course-management",
      title: "Next.js, Prisma, and Supabase",
      imageSrc: vercelFullStack,
      href: "https://sdev-255-final-project-error-404-te.vercel.app/",
      githubHref:
        "https://github.com/bbeck2417/sdev_255_final_project_error_404_team_not_found",
      description:
        "A full-stack course management platform for 'Xavier's School for Gifted Youngsters' built with Next.js, Prisma, and Supabase. Features a dynamic shopping cart and course registration system with seamless Vercel deployment.",
      order: 2,
    },
    {
      slug: "weatherly",
      title: "Weatherly — Next.js Weather App",
      imageSrc: weatherly,
      href: "https://weather-app-kappa-ivory-64.vercel.app/",
      githubHref: "https://github.com/bbeck2417/weather-app",
      description:
        "A responsive weather dashboard built with Next.js and TypeScript. Search cities with a debounced typeahead, select among duplicate locations, and view live current conditions and a five-day forecast from the Open-Meteo API. Features weather-responsive backgrounds, Vitest unit tests, GitHub Actions CI, and automatic Vercel deployments.",
      order: 4,
    },
    {
      slug: "news-assignment-app-uiux",
      title: "News Assignment App UI/UX",
      imageSrc: newsAssignmentApp,
      figmaHref:
        "https://www.figma.com/design/Wdwu2gGTw3cVSKAVp2pIoP/News-Assignment-App?node-id=0-1&t=FkjhPzSpy4pvYx3N-1",
      description:
        "A desktop UI/UX concept for coordinating newsroom assignments, with date-based planning, live RSS updates, organized coverage sections, time-slot scheduling, and a focused detail panel.",
      order: 5,
    },
  ];

  return projects.sort((a, b) => (a.order > b.order ? 1 : -1));
}
