import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowRight } from "react-icons/fa";
import profile from "../assets/profile_new.jpeg";

const AboutSection = () => {
  // Config animasi muncul scroll
  const revealSettings = {
    initial: { opacity: 0, y: 50 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: false, amount: 0.3 }, 
    transition: { duration: 0.8, ease: "easeOut" }
  };

  const services = [
    "Fullstack Development",
    "Network Infrastructure",
    "IoT Solutions",
    "UI/UX Implementation"
  ];

  return (
    <section id="about" className="py-5 position-relative overflow-hidden">
      <Container className="py-5">
        <Row className="gx-lg-5 align-items-center">
          
          {/* ================= BAGIAN KIRI: FOTO ================= */}
          <Col lg={5} className="mb-5 mb-lg-0 pe-lg-5">
             <motion.div 
               {...revealSettings} 
               className="position-relative"
             >
                
                {/* 1. ORNAMEN GRID DOTS (TITIK-TITIK) DI BELAKANG */}
                <div style={{
                  position: "absolute", 
                  top: "20px", 
                  left: "-20px",
                  width: "100%", 
                  height: "100%", 
                  zIndex: -1,
                  // Pola titik-titik rapi
                  backgroundImage: "radial-gradient(#333 1.5px, transparent 1.5px)",
                  backgroundSize: "20px 20px", 
                  opacity: 0.3,
                  border: "1px solid #333" // Garis pinggir tipis
                }}></div>

                {/* 2. FOTO UTAMA (FULL COLOR) */}
                <div className="overflow-hidden border border-2 border-dark position-relative z-1 bg-white">
                  <motion.img 
                    src= {profile} 
                    alt="Profile" 
                    className="img-fluid w-100"
                    style={{ 
                      cursor: "pointer"
                    }}
                    whileHover={{ scale: 1.05 }} 
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>

             </motion.div>
          </Col>
          
          {/* ================= BAGIAN KANAN: KONTEN TEKS ================= */}
          <Col lg={7} className="ps-lg-5">
            <motion.h5 {...revealSettings} className="text-secondary mb-3 spacing-3 fw-bold fs-6">
              WHO AM I?
            </motion.h5>

            <motion.h2 {...revealSettings} transition={{ duration: 0.8, delay: 0.2 }} className="display-5 fw-black text-uppercase mb-4 lh-1" style={{ fontWeight: 900 }}>
              Transforming complex problems into <br />
              <span style={{ textDecoration: "underline", textDecorationThickness: "3px" }}>simple Solutions.</span>
            </motion.h2>

            <motion.p {...revealSettings} transition={{ duration: 0.8, delay: 0.3 }} className="lead text-dark mb-5 fw-medium" style={{ textAlign: "justify" }}>
             I am a Telecommunication Engineering graduate from Telkom University with a strong interest in technology, particularly network infrastructure and system development.
            <br /><br />To me, connectivity goes beyond cables and signals, it's about building efficient and secure digital ecosystems. My focus lies in network infrastructure, with growing exploration into Cloud Computing, Network Security, and modern system integration.
            </motion.p>
            
            {/* List Services */}
            <motion.div {...revealSettings} transition={{ duration: 0.8, delay: 0.4 }} className="row">
              <div className="col-12 border-top border-dark mb-4"></div>
              
              {services.map((item, i) => (
                <div key={i} className="col-md-6 mb-3">
                  <div className="d-flex align-items-center gap-3 group-hover-text">
                    <FaArrowRight size={14} />
                    <h6 className="m-0 fw-bold text-uppercase" style={{ letterSpacing: "1px" }}>{item}</h6>
                  </div>
                </div>
              ))}
            </motion.div>

          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;