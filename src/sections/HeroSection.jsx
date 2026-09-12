import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaArrowDown, FaCircle } from "react-icons/fa";
import { heroData } from "../data/heroData"; 

const HeroSection = () => {
  const textVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
  };

  const lineVariant = {
    hidden: { width: 0 },
    visible: { width: "100%", transition: { duration: 1, delay: 0.5, ease: "easeInOut" } }
  };

  return (
    <section id="home" className="min-vh-100 d-flex flex-column justify-content-center position-relative overflow-hidden pt-5">
      
      <Container className="flex-grow-1 d-flex flex-column justify-content-center">
        <Row className="align-items-center">
          
          {/* BAGIAN KIRI: HEADLINE BESAR */}
          <Col lg={8}>
            <motion.div 
              variants={textVariant} 
              initial="hidden" 
              animate="visible"
            >
              <div className="d-flex align-items-center gap-2 mb-3">
                <span className="bg-black" style={{ width: "30px", height: "2px" }}></span>
                <span className="fw-bold small text-uppercase spacing-2">{heroData.greeting}</span>
              </div>

              {/* NAMA UTAMA */}
              <h1 
                className="display-1 fw-black text-uppercase lh-1 mb-2"
                style={{ fontSize: "clamp(3.5rem, 8vw, 6rem)", letterSpacing: "-3px", color: "#000" }}
              >
                {heroData.name}
              </h1>
              
              {/* ROLE */}
              <h2 className="display-6 fw-bold text-secondary text-uppercase mb-4" style={{ letterSpacing: "-1px" }}>
                {heroData.role}
              </h2>
            </motion.div>
          </Col>

          {/* BAGIAN KANAN: DESKRIPSI & TOMBOL */}
          <Col lg={4} className="mt-4 mt-lg-0">
             <motion.div 
               variants={textVariant} 
               initial="hidden" 
               animate="visible" 
               transition={{ delay: 0.3 }}
             >
               {/* Ornamen Garis Kecil di atas deskripsi */}
               <div className="border-top border-dark w-25 mb-4"></div>

               <p className="lead text-dark mb-4 fw-medium" style={{ fontSize: "1.1rem" }}>
                 {heroData.description}
               </p>

               <div className="d-flex flex-column gap-3">
                  {/* Tombol CV */}
                  <a 
                    href={heroData.cvPdf} 
                    download="CV_Raihan_Setiawan.pdf"
                    target="_blank" 
                    rel="noreferrer"
                    className="btn btn-black rounded-0 py-3 text-uppercase fw-bold d-flex justify-content-between align-items-center"
                  >
                    <span>Download CV</span>
                    <FaArrowDown />
                  </a>
                  
                  {/* Tombol Projects */}
                  <a 
                    href="#projects" 
                    className="btn btn-outline-black rounded-0 py-3 text-uppercase fw-bold"
                  >
                    View Selected Works
                  </a>
               </div>
             </motion.div>
          </Col>
        </Row>
      </Container>

      {/* === LIST PEMANIS (INFO BAR DI BAWAH) === */}
      <div className="mt-auto">
        <Container>
          {/* Garis Horizontal Animasi */}
          <motion.div 
            variants={lineVariant}
            initial="hidden"
            animate="visible"
            className="border-top border-dark border-2 mb-4"
          ></motion.div>

          {/* List Info Horizontal */}
          <motion.div 
            variants={textVariant}
            initial="hidden"
            animate="visible" 
            transition={{ delay: 0.8 }}
            className="row pb-5 text-uppercase small fw-bold tracking-wider"
          >
            {/* Item List 1: Lokasi */}
            <div className="col-md-4 mb-3 mb-md-0 d-flex align-items-center gap-2">
              <span className="text-secondary">BASED IN:</span>
              <span>INDONESIA (GMT+7)</span>
            </div>

            {/* Item List 2: Status (Ada titik hijau kedip-kedip) */}
            <div className="col-md-4 mb-3 mb-md-0 d-flex align-items-center gap-2">
              <span className="text-secondary">STATUS:</span>
              <span className="d-flex align-items-center gap-2 text-success">
                 <motion.div 
                   animate={{ opacity: [1, 0.5, 1] }} 
                   transition={{ duration: 1.5, repeat: Infinity }}
                 >
                   <FaCircle size={8} />
                 </motion.div>
                 OPEN FOR WORK
              </span>
            </div>

            {/* Item List 3: Scroll Hint */}
            <div className="col-md-4 text-md-end text-secondary">
              SCROLL TO EXPLORE ↓
            </div>
          </motion.div>
        </Container>
      </div>

      <style>{`
        .spacing-2 { letter-spacing: 2px; }
        .fw-black { font-weight: 900; }
        .tracking-wider { letter-spacing: 1px; }
      `}</style>

    </section>
  );
};

export default HeroSection;