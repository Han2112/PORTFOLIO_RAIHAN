import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { experienceData } from "../data/experienceData"; 
import ExperienceModal from "../components/ExperienceModal";
import { FaArrowRight } from "react-icons/fa";

const ExperienceSection = () => {
  const [selectedExp, setSelectedExp] = useState(null);
  // State untuk melacak item mana yang sedang di-hover
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section id="experience" className="py-5 position-relative">
      <Container>
        <div className="mb-5">
           <h5 className="text-secondary spacing-3 fw-bold mb-3">CAREER PATH</h5>
           <h2 className="display-4 fw-bold text-uppercase">Experience & <br/> Education.</h2>
        </div>

        {/* List Experience */}
        <div className="border-top border-dark">
          {experienceData.map((item) => {
            const isHovered = hoveredId === item.id;

            return (
              <motion.div 
                key={item.id}
                className="py-5 border-bottom border-dark cursor-pointer position-relative overflow-hidden px-3 px-md-4"
                
                // EVENT HOVER
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                onClick={() => setSelectedExp(item)}

                // ANIMASI PERUBAHAN WARNA & SCALE
                animate={{
                  backgroundColor: isHovered ? "#000000" : "rgba(255,255,255,0)", 
                  scale: isHovered ? 1.02 : 1,
                  color: isHovered ? "#ffffff" : "#000000", 
                }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <Row className="align-items-center">
                  {/* TAHUN */}
                  <Col md={3}>
                    <motion.span 
                      className="fs-5 fw-bold"
                      animate={{ color: isHovered ? "#999" : "#6c757d" }}
                    >
                      {item.year}
                    </motion.span>
                  </Col>
                  
                  {/* ROLE & COMPANY */}
                  <Col md={5}>
                    <h3 className="fw-bold text-uppercase m-0">{item.role}</h3>
                    <motion.p 
                      className="mb-0"
                      animate={{ color: isHovered ? "#ccc" : "#6c757d" }}
                    >
                      {item.company}
                    </motion.p>
                  </Col>
                  
                  {/* TOMBOL VIEW DETAILS */}
                  <Col md={4} className="text-md-end mt-3 mt-md-0">
                     <motion.div 
                        className="d-inline-flex align-items-center gap-2"
                        // Muncul hanya saat hover
                        animate={{ 
                          opacity: isHovered ? 1 : 0,
                          x: isHovered ? 0 : -20 
                        }}
                     >
                        <span className="fw-bold small">VIEW DETAILS</span>
                        <FaArrowRight />
                     </motion.div>
                  </Col>
                </Row>
              </motion.div>
            );
          })}
        </div>
      </Container>

      {/* Modal Detail */}
      <AnimatePresence>
        {selectedExp && (
          <ExperienceModal 
            data={selectedExp} 
            onClose={() => setSelectedExp(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

export default ExperienceSection;