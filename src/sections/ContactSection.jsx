import { useState } from "react";
import { Container, Row, Col, Toast, ToastContainer } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";
import ContactModal from "../components/ContactModal";

const ContactSection = () => {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <>
      <section id="contact" className="py-5 bg-black text-white position-relative overflow-hidden">
        <Container className="py-5">
          <Row className="justify-content-center text-center">
            <Col lg={10}>
              
              <motion.h5 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-secondary mb-4 spacing-3 fw-bold"
              >
                WHAT'S NEXT?
              </motion.h5>

              <motion.div
                onClick={() => setShowModal(true)} 
                className="text-decoration-none text-white d-block cursor-pointer"
                initial={{ scale: 0.9, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                whileHover={{ scale: 1.05, color: "#ccc" }}
                style={{ cursor: "pointer" }}
              >
                <h2 
                  className="fw-black mb-5 display-super" 
                  style={{ 
                    fontSize: "clamp(3rem, 8vw, 7rem)", 
                    lineHeight: "0.9",
                    color: "#fff"
                  }}
                >
                  LET'S WORK <br /> TOGETHER.
                </h2>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
                className="d-flex justify-content-center gap-4 align-items-center mt-5"
              >
                <button 
                  onClick={() => setShowModal(true)} 
                  className="btn btn-outline-light rounded-0 px-4 py-3 fw-bold group-hover d-flex align-items-center gap-2"
                >
                  SEND AN EMAIL <FaArrowRight />
                </button>
              </motion.div>

            </Col>
          </Row>
        </Container>
        
        <div style={{
          position: 'absolute', bottom: '-50px', left: '-50px', width: '300px', height: '300px',
          border: '1px solid #333', borderRadius: '50%', zIndex: 0
        }}></div>
      </section>

      <ContactModal 
        show={showModal} 
        handleClose={() => setShowModal(false)}
        onSuccess={() => setShowToast(true)} 
      />

      <ToastContainer className="p-3" position="bottom-end" style={{ zIndex: 99999 }}>
        <Toast 
          onClose={() => setShowToast(false)} 
          show={showToast} 
          delay={5000} 
          autohide
          bg="white"
        >
          <Toast.Header closeButton={true}>
            <FaCheckCircle className="text-success me-2" size={20} />
            <strong className="me-auto text-dark">Message Sent!</strong>
            <small>Just now</small>
          </Toast.Header>
          <Toast.Body className="text-dark">
            Thank you for contacting me. I will respond to your message shortly.
          </Toast.Body>
        </Toast>
      </ToastContainer>
    </>
  );
};

export default ContactSection;