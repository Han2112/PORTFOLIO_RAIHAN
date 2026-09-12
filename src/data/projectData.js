import student_system from "../assets/student_system.png"
import security_door1 from "../assets/security_door1.png"
import sdn_topology from "../assets/sdn_topology.png"


export const projectData = [
  {
    id: 1,
    title: "Simple Door Security",
    category: "IoT System",
    tech: ["Arduino Uno", "MQTT", "Blynk"],
    image: security_door1, 
    description: "Designed an IoT-based door security system using Arduino Uno and ultrasonic sensors to detect unauthorized access. Integrated MQTT protocol for real-time data transmission and utilized the Blynk platform for remote monitoring and instant alerts.",
    githubUrl: null, 
    demoUrl: "https://wokwi.com/projects/422416856663307265"
  },
  {
    id: 2,
    title: "Prototype School Database Web",
    category: "Web Development",
    tech: ["HTML", "Tailwind", "Posgres", "Pyhton", "Docker", "Azure"],
    image: student_system,
    description: "Developed a scalable school database prototype using Python and PostgreSQL. Containerized the application with Docker for consistent environments and deployed the full-stack solution to Microsoft Azure cloud infrastructure.",
    githubUrl: "https://github.com/Han2112/Tubes-CC",
    demoUrl: "http://sekolahandrejaya.eastasia.cloudapp.azure.com/"
  },
  {
    id: 3,
    title: "Software Define Network",
    category: "Network",
    tech: ["Linux", "Mininet", "ONOS"],
    image: sdn_topology,
    description: "Architected a hybrid network topology simulation using Mininet and the ONOS controller. Implemented advanced network features including Quality of Service (QoS) management for traffic prioritization and redundancy protocols to ensure high availability and fault tolerance.",
    githubUrl: null,
    demoUrl: "https://hackmd.io/@8Vurp1GvReue0FxoOW-AnA/S1R-wBr7Wl"
  },
  {
    id: 4,
    title: "Wedding Planner",
    category: "Web Development",
    tech: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
    image: sdn_topology,
    description: "Developed a comprehensive wedding planning platform designed to bridge couples with vendors. Features include real-time budget tracking, dynamic guest list management, and a vendor marketplace system, simplifying the complex logistics of event coordination.",
    githubUrl: "https://github.com/username/wedding-planner",
    demoUrl: null
  },
  {
    id: 5,
    title: "Corporate HRIS System",
    category: "Web Development",
    tech: ["Laravel", "Blade", "MySQL", "Chart.js"],
    image: sdn_topology,
    description: "Engineered a centralized office management system for PT Sukamaju to streamline internal operations. The system integrates modules for employee attendance tracking, payroll automation, and performance analytics, significantly reducing administrative overhead and improving data accuracy.",
    githubUrl: "https://github.com/username/office-management",
    demoUrl: null
  },
  {
    id: 6,
    title: "Mentimeter for Mobile Application",
    category: "Mobile Development",
    tech: ["Flutter", "Supabase"],
    image: sdn_topology,
    description: "#",
    githubUrl: "#",
    demoUrl: null
  },
  {
    id: 7,
    title: "Uniflow, Water Quality Monitoring Application",
    category: "Software Development & IoT",
    tech: ["Arduino IDE", "Expo", "Express JS", "MySQL", "AI"],
    image: sdn_topology,
    description: "#",
    githubUrl: "#",
    demoUrl: null
  },
  {
    id: 8,
    title: "Proxmox Virtualization Infrastructure",
    category: "Virtualization",
    tech: ["Proxmox", "Debian"],
    image: sdn_topology,
    description: "#",
    githubUrl: "#",
    demoUrl: null
  },
];