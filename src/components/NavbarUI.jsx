import { Navbar, Container, Nav } from "react-bootstrap";
import { motion, useScroll, useSpring } from "framer-motion";

const NavbarUI = () => {
  // Logic Scroll Progress
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed-top" // Pindah class fixed-top ke wrapper utama
    >
      <Navbar 
        expand="lg" 
        className="py-3" 
        style={{ 
          background: "rgba(0,0,0,0.9)", // Agak transparan dikit biar modern
          backdropFilter: "blur(10px)",   // Blur background navbar
          borderBottom: "1px solid #222"
        }}
        variant="dark"
      >
        <Container fluid className="px-4 px-md-5">
          <Navbar.Brand href="#home" className="fw-bold fs-4 text-white" style={{ letterSpacing: "-1px" }}>
            PORTFOLIO.
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" className="border-0 shadow-none" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-4">
              {['About', 'Experience', 'Projects','Gallery', 'Contact'].map((item, index) => (
                <Nav.Link 
                  key={index} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-white small fw-bold position-relative nav-hover-white"
                  style={{ letterSpacing: "1px" }}
                >
                  {item.toUpperCase()}
                </Nav.Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* --- SCROLL PROGRESS BAR --- */}
      <motion.div
        className="progress-bar"
        style={{
          scaleX, // Value dari framer motion
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "#fff", // Warna garis (Putih kontras dengan hitam navbar)
          transformOrigin: "0%",
          zIndex: 10000
        }}
      />
    </motion.div>
  );
};

export default NavbarUI;