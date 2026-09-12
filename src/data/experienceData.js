import CPS from "../assets/CPS.png"
import vice_cps from "../assets/vice_cps.png"
import cps_lab from "../assets/cps_lab.jpeg"
import komdigi from "../assets/komdigi.png"
import cert_komdigi from "../assets/cert_komdigi.png"
import komdigi1 from "../assets/komdigi1.jpeg"
import komdigi2 from "../assets/komdigi2.jpeg"

export const experienceData = [
  {
    id: 1,
    year: "2024 - PRESENT",
    role: "Vice Assistance Coordinator (Internal)",
    company: "Cyber Physical System Laboratory",
    logo: CPS, 
    details: "As the Vice Coordinator of Internal Assistants at the Cyber-Physical Systems Laboratory, I oversee the strategic operations of the Practicum and Research divisions. I specialize in managing complex workflows, ensuring the seamless execution of academic laboratory modules while simultaneously driving the progress of innovative research projects. My role demonstrates a strong capacity for leadership, operational management, and technical oversight in a dynamic laboratory environment.",
    tags: ["Leadership", "Operational Management", "Research", "Practicum"],
    gallery: [
      vice_cps
    ]
  },
  {
    id: 2,
    year: "2023 - PRESENT",
    role: "Practicum Assistance",
    company: "Cyber Physical System Laboratory",
    logo: CPS,
    details: "Designed and assembled comprehensive laboratory modules for six key topics—Network Topology, Routing Protocols, Queuing Systems, VoIP, and 5G Technology—prior to the semester, and subsequently delivered hands-on instruction to students to ensure their technical mastery of these concepts.",
    tags: ["Cisco Packet Tracer", "GNS3", "Linux", "IoT", "VoIP", "MathLab"],
    gallery: [
       cps_lab
    ]
  },
  {
    id: 3,
    year: "2024",
    role: "CyberSecurity Internship",
    company: "Ministry of Communication and Information Technology of Indonesia",
    logo: komdigi,
    details: "Executed end-to-end security audits for the Ministry’s Digital Government Applications Division, performing penetration tests on six critical websites using Kali Linux, OWASP ZAP, and Burp Suite. The role involved analyzing vulnerabilities and implementing strategic mitigation measures to secure government infrastructure against potential cyber threats.",
    tags: ["Kali", "OWaspZAP", "BurpSuite"],
    gallery: [
        cert_komdigi,komdigi1,komdigi2
    ] 
  }
];