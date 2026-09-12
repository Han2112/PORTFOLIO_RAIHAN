import { Container, Row, Col } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsInstagram } from "react-icons/bs"; 
import { heroData } from "../data/heroData"; // Import Data

const FooterUI = () => {
  return (
    <footer 
      className="bg-black text-white py-5 position-relative" 
      style={{ zIndex: 10, borderTop: "1px solid #333" }}
    >
      <Container fluid className="px-4 px-md-5">
        <Row className="justify-content-between align-items-center">
          
          {/* Bagian Kiri */}
          <Col md={6} className="mb-4 mb-md-0 text-start">
             <h2 className="fw-bold mb-3 text-uppercase" style={{ letterSpacing: "-1px" }}>
               PORTFOLIO.
             </h2>
             <p className="text-secondary small mb-0">
               © {new Date().getFullYear()} Raihan Ramadhan Setiawan <br />
               Based in Indonesia.
             </p>
          </Col>
          
          {/* Bagian Kanan: Social Icons dari heroData */}
          <Col md={6}>
            <div className="d-flex justify-content-start justify-content-md-end gap-4">
               
               {/* LinkedIn */}
               <a 
                 href={heroData.socialLinks.linkedin} 
                 target="_blank" 
                 rel="noreferrer"
                 className="text-white social-icon"
               >
                 <BsLinkedin size={24} />
               </a>
               
               {/* Github */}
               <a 
                 href={heroData.socialLinks.github} 
                 target="_blank" 
                 rel="noreferrer"
                 className="text-white social-icon"
               >
                 <BsGithub size={24} />
               </a>
               
               {/* Instagram */}
               <a 
                 href={heroData.socialLinks.instagram} 
                 target="_blank" 
                 rel="noreferrer"
                 className="text-white social-icon"
               >
                 <BsInstagram size={24} />
               </a>

            </div>
          </Col>
          
        </Row>
      </Container>

      <style>{`
        .social-icon {
          transition: all 0.3s ease;
          display: inline-block;
        }
        .social-icon:hover {
          color: #adb5bd !important;
          transform: translateY(-5px);
        }
      `}</style>
    </footer>
  );
};

export default FooterUI;