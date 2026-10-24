import CPS from "../assets/CPS.png"
import vice_cps from "../assets/vice_cps.png"
import cps_lab from "../assets/cps_lab.jpeg"
import komdigi from "../assets/komdigi.png"
import cert_komdigi from "../assets/cert_komdigi.png"
import komdigi1 from "../assets/komdigi1.jpeg"
import komdigi2 from "../assets/komdigi2.jpeg"
import cps1 from "../assets/sertifikat_cps.png"

export const experienceData = [
  {
    id: 1,
    year: "2024 - 2026",
    role: "Vice Assistance Coordinator (Internal)",
    company: "Cyber Physical System Laboratory",
    logo: CPS, 
    details: "As Vice Internal Coordinator at the Cyber Physical Systems Laboratory, I coordinated internal operations across the Practicum and Research divisions to support laboratory activities. I developed and implemented internal laboratory regulations to improve organizational governance, and worked with laboratory coordinators and members to support operational objectives. I also managed cross-divisional coordination to keep communication clear and operations running efficiently.",
    tags: ["Leadership", "Operational Management", "Research", "Practicum"],
    gallery: [
      vice_cps
    ]
  },
  {
    id: 2,
    year: "2023 - 2026",
    role: "Practicum Assistance",
    company: "Cyber Physical System Laboratory",
    logo: CPS,
    details: "As a Practicum Assistant at the Cyber Physical Systems Laboratory, I developed practical modules on Network Topology, Routing Protocols, Queuing Systems, VoIP, and 5G Technology before the semester began, then provided hands-on technical guidance to undergraduate students. Alongside teaching, I managed and maintained Linux-based servers and virtualization platforms, configured network services, and regularly troubleshot and restored laboratory devices through reinstallation and reconfiguration to keep laboratory operations stable.",
    tags: ["Cisco Packet Tracer", "GNS3", "Linux", "IoT", "VoIP", "MathLab"],
    gallery: [
       cps_lab,cps1
    ]
  },
  {
    id: 3,
    year: "2024",
    role: "CyberSecurity Internship",
    company: "Ministry of Communication and Information Technology of Indonesia",
    logo: komdigi,
    details: "As a Cyber Security Intern at the Ministry of Communication and Digital Affairs, I performed vulnerability assessments on five government websites. I installed and configured Linux-based operating systems, including Kali Linux, as the working environment, and used OWASP ZAP to identify vulnerabilities. I analyzed security risks, documented the findings, developed mitigation recommendations to improve web application security, and prepared technical reports to support remediation activities.",
    tags: ["Kali", "OWaspZAP", "BurpSuite"],
    gallery: [
        cert_komdigi,komdigi1,komdigi2
    ] 
  }
];