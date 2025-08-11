import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Amarjit Bhatia",
  initials: "AJ",
  url: "https://amarjitbhatia.vercel.app/",
  location: "San Diego, CA",
  locationLink: "https://www.google.com/maps/place/sanDiego",
  description:
    "Senior Engineering professional with experience in Technical Program Management, Hardware Design, NPI, Quality and Sustaining Engineering",
  summary:
    "I am a seasoned, cross-functional engineering leader with over two decades of experience delivering complex hardware and system solutions across global markets. I bring a rare blend of deep technical fluency, disciplined program management, and a quality-first mindset. My strength lies in connecting the dots from design and development to manufacturing and customer impact,ensuring that innovation scales with precision and reliability.",
  avatarUrl: "/me.png",
  skills: [
    "Hardware Engineering",
    "Cross Functional Leadership",
    "Stakeholder Management",
    "Project Planning",
    "Program Lifecycle (PLC)",
    "Matrix Organization Management",
    "Planning & Scheduling",
    "Communication",
    "Road Mapping",
    "Milestone Tracking",
    "Risk Mitigation",
    "Waterfall Development",
    "Agile Development",
    "Metrics Tracking",
    "KPI Management",
    "Change Management", 
    "Quality Management System(QMS)",
    "Quality Assurance Plan(QAP)", 
    "Managing Up and Across",
    "Engineering Leadership",
    "Executive Reporting",
    "Conflict Resolution",
    "Customer Focus",
    "Vendor Management",
    "Business Strategy",
    "Product Strategy", 
    "Cost-Benefit Analysis",
    "Operational Efficiency",
    "Customer Impact Evaluation",
    "Leadership & People Skills",
    "Team Mentorship", 
    "Leading Without Authority",
    "Decision-Making under uncertainty",
    "Emotional Intelligence",
    "Organizational Awareness",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    /*{ href: "/blog", icon: NotebookIcon, label: "Blog" }*/
  ],
  contact: {
    email: "amarjitbhatia1@gmail.com",
    tel: "+18583354631",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/amarjitbhatia",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/amarjit-bhatia-3627207/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://dub.sh/dillion-twitter",
        icon: Icons.x,

        navbar: false,
      },
      Youtube: {
        name: "Youtube",
        url: "https://dub.sh/dillion-youtube",
        icon: Icons.youtube,
        navbar: false,
      },
      email: {
        name: "Send Email",
        url: "https://mail.google.com/mail/u/0/#inbox?compose=new",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "HP Inc.",
      href: "https://www.hp.com",
      badges: [],
      location: "San Diego, CA",
      title: "Senior Technical Program Manager | Hardware Delivery & Cost Optimization",
      logoUrl: "/hp.png",
      start: "July 2015",
      end: "Present",
      description:
        "Strategic and execution-focused hardware program leader with a strong track record of delivering complex, cross-functional systems from concept through high-volume production. I serve as the single-threaded owner of hardware programs—accountable for end-to-end delivery, from architecture through validation, supplier alignment, and production readiness.",
    },
    {
      company: "HP Inc.",
      badges: [],
      href: "https://www.hp.com",
      location: "San Diego, CA",
      title: "Senior New product Introduction- NPI Manager ",
      logoUrl: "/hp.png",
      start: "June 2013",
      end: "July 2015",
      description:
        "Drove successful launch of multiple products in the portfolio , adding 10.5 million units to the global install base and generating over $1.4B in hardware revenue."
    },
    {
      company: "HP Inc.",
      href: "https://www.hp.com",
      badges: [],
      location: "San Diego, CA",
      title: "Quality & Sustaining Engineering Manager | Hardware Systems | Production & Field Quality.",
      logoUrl: "/hp.png",
      start: "October 2008",
      end: "June 2013",
      description:
        "Achieved a 20% reduction in warranty rates by leading proactive root cause analysis and implementing robust corrective and preventive actions (CAPA). Built and institutionalized an end-to-end quality system spanning design, production, and end-of-life, significantly improving product reliability and customer satisfaction.",
    },
    {
      company: "HP Inc.",
      href: "https://www.hp.com",
      badges: [],
      location: "San Diego, CA",
      title: "Electrical Hardware Design Engineer",
      logoUrl: "/hp.png",
      start: "August 2002",
      end: "October 2008",
      description:
        "Led electrical design for main circuit boards and control panels, prioritizing cost-effective, reliable, and manufacturable designs, Expanded design-for-cost practices regionally and globally, supporting strategic cost-out initiatives in collaboration with procurement and operations. Performed rigorous validation and reliability testing: HALT, worst-case circuit analysis, thermal profiling, and environmental stress evaluations. Ensured compliance with global safety, EMI/EMC, and regulatory standards, coordinating with certification labs to meet international market requirements",
    },
    {
      company: "HP Inc.",
      href: "https://www.hp.com",
      badges: [],
      location: "San Diego, CA",
      title: "Electrical Engineer OEM/ODM Design",
      logoUrl: "/hp.png",
      start: "September 1999",
      end: "August 2002",
      description:
        "Successfully led the development and launch of two major HP products in collaboration with Taiwanese ODM partners, driving the full lifecycle from concept to production. Ensured product innovation, on-time delivery, and cost-effective execution aligned with HP’s strategic goals. Strengthened cross-border engineering collaboration and streamlined technical issue resolution, ensuring quality, compliance, and smooth manufacturing ramp.",
    },
    {
      company: "CDIL Semiconductors",
      href: "https://www.cdil.com/",
      badges: [],
      location: "Chandigarh, India",
      title: "Semiconductor Process engineer",
      logoUrl: "/CDIL.png",
      start: "September 1996",
      end: "July 1999",
      description:
        "Managed programming, maintenance, and troubleshooting of ASMPT pick-and-place machines—gaining hands-on expertise in precision automation essential for semiconductor assembly and testing. Oversaw end-to-end production processes including die bonding, wire bonding, molding, and quality control in a cleanroom environment. Directed manufacturing operations for BJT transistors (TO-92, TO-220), diodes, and TO-3 packages, from wafer fabrication to packaging. Implemented robust process controls to enhance product consistency, yield, and reliability in volume manufacturin",
    },
  ],
  education: [
    {
      school: "Punjabi University",
      href: "https://www.punjabiuniversity.ac.in/",
      degree: "Bachelors of Engineering in Electronics and Instrumentation  ",
      logoUrl: "/PunjabiUniv.png",
      start: "1992",
      end: "1996",
    },
  ],
  projects: [
    {
      title: "Control Panel Capacitive touch redesign- Pan HP project",
      href: "https://github.com/amarjitbhatia/touchpanel-ui/blob/main/Control_panel_touch_sensing_UI_optimization.pdf",
      dates: "Jan 2024 - April 2025",
      active: true,
      description:
        "A pan-organizational initiative I led to redesign the user interface (UI) touch architecture from a dual-chip to a single-chip solution. This project spanned multiple products and involved coordinating cross-functional engineering teams across Singapore, Boise, and San Diego labs. The primary goals were to achieve cost savings, improve touch performance, and streamline integration across the product portfolio. The successful implementation of this initiative resulted in significant benefits for the organization.",
      technologies: [
        "Cadence Allegro",
        "PCB Design",
        "Firmware Development",
        "Solidworks Creo",
        "Global team management",
        "Cost Optimization",
        "Complaince testing",
        "Project management",
        "Operations Management"
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/amarjitbhatia/touchpanel-ui/blob/main/Control_panel_touch_sensing_UI_optimization.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:"/CapUI.png",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  hackathons: [
    {
      title: "HackMining",
      dates: "May 12th - 14th, 2017",
      location: "Toronto, Ontario",
      description: "Developed neural network to optimize a mining process",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-mining.png",
      links: [],
    },
    {
      title: "Waterloo Equithon",
      dates: "May 5th - 7th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Pocketdoc, an app in which you take a picture of a physical wound, and the app returns common solutions or cures to the injuries or diseases.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/waterloo-equithon.png",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/pocketdoc-react-native",
        },
        {
          title: "YouTube",
          icon: <Icons.youtube className="h-4 w-4" />,
          href: "https://www.youtube.com/watch?v=XwFdn5Rmx68",
        },
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/pocketdoc-react-native",
        },
      ],
    },
    {
      title: "SpaceApps Waterloo",
      dates: "April 28th - 30th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed Earthwatch, a web application which allows users in a plane to virtually see important points of interest about the world below them. They can even choose to fly away from their route and then fly back if they choose. Special thanks to CesiumJS for providing open source world and plane models.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/space-apps.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/earthwatch",
        },
      ],
    },
    {
      title: "MHacks 9",
      dates: "March 24th - 26th, 2017",
      location: "Ann Arbor, Michigan",
      description:
        "Developed Super Graphic Air Traffic, a VR website made to introduce people to the world of air traffic controlling. This project was built completely using THREE.js as well as a node backend server.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/mhacks-9.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/threejs-planes",
        },
      ],
    },
    {
      title: "StartHacks I",
      dates: "March 4th - 5th, 2017",
      location: "Waterloo, Ontario",
      description:
        "Developed at StartHacks 2017, Recipic is a mobile app which allows you to take pictures of ingredients around your house, and it will recognize those ingredients using ClarifAI image recognition API and return possible recipes to make. Recipic recieved 1st place at the hackathon for best pitch and hack.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/starthacks.png",
      win: "1st Place Winner",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-ionic",
        },
        {
          title: "Source (Server)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/recipic-rails",
        },
      ],
    },
    {
      title: "QHacks II",
      dates: "February 3rd - 5th, 2017",
      location: "Kingston, Ontario",
      description:
        "Developed a mobile game which enables city-wide manhunt with random lobbies",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/qhacks.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2017/white.svg",
      links: [
        {
          title: "Source (Mobile)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/dillionverma/human-huntr-react-native",
        },
        {
          title: "Source (API)",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/mattBlackDesign/human-huntr-rails",
        },
      ],
    },
    {
      title: "Terrible Hacks V",
      dates: "November 26th, 2016",
      location: "Waterloo, Ontario",
      description:
        "Developed a mock of Windows 11 with interesting notifications and functionality",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/terrible-hacks-v.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/justinmichaud/TerribleHacks2016-Windows11",
        },
      ],
    },
    {
      title: "Portal Hackathon",
      dates: "October 29, 2016",
      location: "Kingston, Ontario",
      description:
        "Developed an internal widget for uploading assignments using Waterloo's portal app",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/portal-hackathon.png",
      links: [
        {
          title: "Source",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/UWPortalSDK/crowmark",
        },
      ],
    },
  ],
} as const;