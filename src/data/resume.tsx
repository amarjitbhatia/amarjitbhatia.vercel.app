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
      Email: {
        name: "Email",
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
      title: "Multi-Product Capacitive Touch UI Redesign ",
      href: "https://github.com/amarjitbhatia/touchpanel-ui/blob/main/Control_panel_touch_sensing_UI_optimization.pdf",
      dates: "Jan 2024 - April 2025",
      active: true,
      description:
        "I spearheaded a pan-organizational initiative to redesign the user interface (UI) touch architecture, transitioning from a dual-chip to a single-chip solution. This effort spanned multiple product lines and required close coordination with cross-functional engineering teams in Singapore, Boise, and San Diego. The objectives were to drive cost reductions, enhance touch performance, and simplify integration across the product portfolio. The successful rollout delivered substantial cost savings, improved user experience, and streamlined manufacturing processes, generating significant strategic and operational benefits for the organization.",
      technologies: [
        "Global team management",
        "Firmware Development",
        "Project management",
        "Operations Management",
        "Cadence Allegro",
        "PCB Design",
        "Solidworks Creo",
        "Cost Optimization",
        "Complaince testing",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/amarjitbhatia/touchpanel-ui/blob/main/Control_panel_touch_sensing_UI_optimization.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/CapUI.png",
      video:"",
    },
    {
      title: "Cross functional project to convert PCB finish from Immersion Tin to OSP ",
      href: "https://github.com/amarjitbhatia/OSP_conversion/blob/main/OSP_conversion.pdf",
      dates: "October 2022-August 2023",
      active: true,
      description:
        "I led the conversion of PCB surface finishe from Immersion Tin to Organic Solderability Preservative (OSP) on multiple products, delivering a cost-effective, environmentally sustainable, and reliable solution. I drove a multi-site initiative involving teams in Singapore, Shanghai, and San Diego product labs to manage R&D and factory qualifications, including PCB validation, solderability and electrical testing, and ensured OSP compatibility with HP ink through chemical and stability analysis. I executed a phased production rollout with continuous monitoring and quality control, achieving a smooth transition that upheld product quality and compliance while enhancing sustainability.",
      technologies: [
        "Cross-Functional Leadership",
        "R&D Qualification",
        "Material Science Analysis",
        "Reliability Testing",
        "Production Rollout",
        "Process Improvement",
        "Regulatory Compliance",
        "Project Management",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/amarjitbhatia/OSP_conversion/blob/main/OSP_conversion.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "OSP.png",
      video: "",
    },
    {
      title: "Quality management",
      href: "https://github.com/amarjitbhatia/Quality_System_management/blob/main/Amarjit_Bhatia_Quality.pdf",
      dates: "",
      active: true,
      description:
        "I led a global team of 20+ engineers across multiple regions, managing quality operations and driving CAPA improvements through data-driven root cause analysis. I maintained QMS with traceability and compliance, conducted design reviews, and integrated end-of-life feedback to prevent failures and enhance next-generation products. Leading sustaining efforts for real-time issue resolution, I analyzed field failures and incorporated customer feedback into design improvements. By leveraging KPI dashboards and Pareto analysis, I reduced warranty costs and improved product reliability.",
      technologies: [
        "Quality",
        "RootCause",
        "QMS",
        "Traceability",
        "DesignReview",
        "FailureAnalysis",
        "Sustaining",
        "KPI",
        "RiskManagement",
        "CAPA",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/amarjitbhatia/Quality_System_management/blob/main/Amarjit_Bhatia_Quality.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "QA.png",
      video: "",
    },
    {
      title: "NPI Management",
      href: "https://github.com/amarjitbhatia/NPI_management/blob/main/Amarjit_Bhatia_NPI.pdf",
      dates: "",
      active: true,
      description:
        "I led NPI teams to launch products scaling to 500K units/month, generating $1.4B+ in revenue. I managed program metrics from design validation to market launch, providing updates to leadership. I established a new manufacturing facility in Thailand, building production lines and quality systems to meet yield, cost, and throughput targets. Partnering with R&D and operations, I qualified tooling and expanded supplier capacity to ensure smooth volume ramp and redundancy. Collaborating across functions, I drove seamless product launches, rapid issue resolution, and supply chain readiness, achieving aggressive timelines, cost, and quality goals.",
      technologies: [
        "ProgramManagement",
        "NPI",
        "Manufacturing",
        "Collaboration",
        "Metrics",
        "StrategicPlanning",
        "Coordination",
        "Integration",
        "Scheduling",
      ],
      links: [
        {
          type: "Website",
          href: "https://github.com/amarjitbhatia/NPI_management/blob/main/Amarjit_Bhatia_NPI.pdf",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "NPI.png",
      video:
        "",
    },
  ],
  /*hackathons: [
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
  ],*/
} as const;