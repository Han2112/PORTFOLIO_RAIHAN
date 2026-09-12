import { useState } from "react";
import { Container, Row, Col, Modal, Button } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaThLarge } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import { certificateData } from "../data/certificateData";
import CertificateDetailModal from "../components/CertificateDetailModal";

const CertificateSection = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [showAllModal, setShowAllModal] = useState(false);

  // Hanya ambil 3 pertama untuk preview
  const previewCerts = certificateData.slice(0, 3);

  return (
    <section id="certificates" className="py-5 position-relative border-bottom border-dark">
      <Container>
        
        {/* HEADER SECTION */}
        <Row className="mb-5 align-items-end">
          <Col md={8}>
            <h5 className="text-secondary spacing-3 fw-bold mb-3">CREDENTIALS</h5>
            <h2 className="display-4 fw-bold text-uppercase">
              Licenses & <br /> Certifications.
            </h2>
          </Col>
          <Col md={4} className="text-md-end">
            <button 
              onClick={() => setShowAllModal(true)}
              className="btn btn-outline-black rounded-0 px-4 py-3 fw-bold d-inline-flex align-items-center gap-2 mt-3 mt-md-0"
            >
              <FaThLarge /> VIEW ALL CREDENTIALS
            </button>
          </Col>
        </Row>

        {/* GRID PREVIEW (3 ITEMS) */}
        <Row>
          {previewCerts.map((cert, index) => (
            <Col lg={4} md={6} key={cert.id} className="mb-4">
              <CertCard cert={cert} onClick={() => setSelectedCert(cert)} delay={index * 0.1} />
            </Col>
          ))}
        </Row>

      </Container>

      {/* --- MODAL 1: VIEW ALL LIST (Bootstrap Modal Fullscreen-ish) --- */}
      <Modal 
        show={showAllModal} 
        onHide={() => setShowAllModal(false)}
        size="xl"
        centered
        backdropClassName="modal-backdrop-blur"
        contentClassName="bg-transparent border-0 shadow-none"
      >
        <div className="bg-white border border-dark position-relative p-4 p-md-5" style={{ maxHeight: "90vh", overflowY: "auto" }}>
          <Button 
            variant="link" 
            className="position-absolute top-0 end-0 m-3 p-2 text-dark bg-light border border-dark rounded-0 z-3" 
            onClick={() => setShowAllModal(false)}
          >
            <IoClose size={24} />
          </Button>

          <h3 className="fw-black text-uppercase mb-5">All Certificates ({certificateData.length})</h3>
          
          <Row>
            {certificateData.map((cert) => (
              <Col lg={4} md={6} key={cert.id} className="mb-4">
                 <CertCard cert={cert} onClick={() => setSelectedCert(cert)} />
              </Col>
            ))}
          </Row>
        </div>
      </Modal>

      {/* --- MODAL 2: DETAIL VIEW (Custom Motion Modal) --- */}
      <AnimatePresence>
        {selectedCert && (
          <CertificateDetailModal 
            cert={selectedCert} 
            onClose={() => setSelectedCert(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  );
};

// Sub-Component: Kartu Sertifikat
const CertCard = ({ cert, onClick, delay = 0 }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: delay, duration: 0.5 }}
      className="border border-dark h-100 cursor-pointer position-relative overflow-hidden bg-white"
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Area */}
      <div className="overflow-hidden position-relative" style={{ height: "220px" }}>
        <img 
          src={cert.image} 
          alt={cert.title} 
          className="w-100 h-100 object-fit-cover transition-all"
          style={{ 
            filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "all 0.5s ease"
          }}
        />
        {/* Overlay Icon */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-25"
          style={{ opacity: isHovered ? 1 : 0, transition: "opacity 0.3s" }}
        >
          <span className="bg-white border border-dark px-3 py-2 fw-bold text-uppercase small text-dark">
            View Certificate
          </span>
        </div>
      </div>

      {/* Info Area */}
      <div className="p-4 border-top border-dark">
        <p className="text-secondary small fw-bold text-uppercase mb-1">{cert.issuer}</p>
        <h5 className="fw-bold text-uppercase mb-0 text-truncate">{cert.title}</h5>
        
        {/* Garis gerak pas hover */}
        <div 
          className="bg-black mt-3" 
          style={{ 
            height: "2px", 
            width: isHovered ? "100%" : "0%", 
            transition: "width 0.4s ease" 
          }}
        ></div>
      </div>
    </motion.div>
  );
};

export default CertificateSection;