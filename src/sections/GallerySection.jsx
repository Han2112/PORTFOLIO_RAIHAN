import { useState, useEffect } from "react";
import { Container, Modal, Row, Col } from "react-bootstrap";
import { motion, AnimatePresence } from "framer-motion";
import { FaArrowRight, FaExpand, FaTimes } from "react-icons/fa";
import { galleryData } from "../data/galleryData"; 

const GallerySection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAllModal, setShowAllModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  // CONFIGURATION
  const itemsToShow = 4; 
  const autoSlideInterval = 3000; 

  // --- 1. LOGIC AUTO SLIDE ---
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, autoSlideInterval);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryData.length);
  };

  const getVisibleItems = () => {
    let items = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % galleryData.length;
      items.push(galleryData[index]);
    }
    return items;
  };

  return (
    <section id="gallery" className="py-5 bg-white border-top border-dark position-relative">
      <Container>
        {/* HEADER SECTION */}
        <div className="d-flex justify-content-between align-items-end mb-5">
          <div>
            <h6 className="spacing-3 text-secondary fw-bold mb-2">VISUAL DIARY</h6>
            <h2 className="display-5 fw-black text-uppercase m-0">
              Gallery <span className="text-secondary fw-light">&</span> Moments
            </h2>
          </div>
          
          <button 
            onClick={() => setShowAllModal(true)}
            className="btn-outline-black d-none d-md-flex"
          >
            VIEW ALL GALLERIES <FaArrowRight />
          </button>
        </div>

        {/* --- 2. THE CUSTOM SLIDER --- */}
        <div className="overflow-hidden w-100">
          <motion.div className="d-flex gap-3">
            <AnimatePresence mode="popLayout">
              {getVisibleItems().map((item, i) => (
                <motion.div
                  key={`${item.id}-${currentIndex}-${i}`} 
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }} 
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="flex-grow-1 position-relative group-hover-trigger border border-dark"
                  style={{ 
                    flexBasis: `calc(100% / ${itemsToShow})`, 
                    minWidth: "250px", 
                    height: "350px",
                    cursor: "pointer",
                    overflow: "hidden"
                  }}
                  onClick={() => setSelectedImage(item)}
                >
                  <img 
                    src={item.image} 
                    alt={item.title} 
                    className="w-100 h-100 object-fit-cover bnw-to-color transition-all"
                  />
                  <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-75 d-flex flex-column justify-content-center align-items-center opacity-0 hover-opacity-100 transition-all p-4 text-center">
                    <FaExpand className="text-white mb-3 fs-3" />
                    <h5 className="text-white fw-black text-uppercase spacing-3 border-bottom border-light pb-2 mb-2">
                      {item.title}
                    </h5>
                    <p className="text-light small fst-italic mb-0">Click to view details</p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>

        {/* Tombol View All (Mobile Only) */}
        <div className="mt-4 d-md-none">
           <button onClick={() => setShowAllModal(true)} className="btn-black w-100">
            VIEW ALL GALLERIES
          </button>
        </div>
      </Container>


      {/* --- 3. MODAL: VIEW ALL GALLERIES (GRID) --- */}
      <Modal 
        show={showAllModal} 
        onHide={() => setShowAllModal(false)} 
        size="xl" 
        centered
        backdropClassName="modal-backdrop-blur"
        contentClassName="bg-transparent border-0" 
      >
         {/* CONTAINER UTAMA GRID */}
         <div className="bg-white border border-2 border-dark rounded-0 overflow-hidden position-relative">
            
            <div 
                style={{ 
                    transition: "all 0.3s ease",
                    filter: selectedImage ? "blur(10px) brightness(40%)" : "none",
                    pointerEvents: selectedImage ? "none" : "auto" 
                }}
            >
                {/* Header Modal */}
                <div className="p-4 border-bottom border-dark d-flex justify-content-between align-items-center bg-light">
                    <h3 className="fw-black m-0 text-uppercase">All Collections</h3>
                    <button 
                        onClick={() => setShowAllModal(false)} 
                        className="btn btn-dark rounded-0 d-flex align-items-center gap-2"
                    >
                        <FaTimes /> CLOSE
                    </button>
                </div>
                
                {/* Body Grid Foto */}
                <div className="p-4 bg-white" style={{ maxHeight: "70vh", overflowY: "auto" }}>
                    <Row className="g-3">
                        {galleryData.map((item) => (
                        <Col md={4} sm={6} key={item.id}>
                            <div 
                                className="position-relative border border-dark border-1 group-hover-trigger"
                                style={{ height: "250px", cursor: "pointer", overflow:"hidden" }}
                                onClick={() => setSelectedImage(item)}
                            >
                                <img 
                                    src={item.image} 
                                    className="w-100 h-100 object-fit-cover bnw-to-color transition-all" 
                                    alt={item.title}
                                />
                                <div className="position-absolute top-0 start-0 w-100 h-100 bg-black bg-opacity-50 d-flex flex-column justify-content-center align-items-center opacity-0 hover-opacity-100 transition-all p-3 text-center">
                                    <FaExpand className="text-white mb-2" />
                                    <span className="fw-bold text-white spacing-3 text-uppercase border-bottom border-white pb-1">{item.title}</span>
                                </div>
                            </div>
                        </Col>
                        ))}
                    </Row>
                </div>
            </div>
            {/* === END WRAPPER === */}

         </div>
      </Modal>


      {/* --- 4. MODAL: SINGLE DETAIL VIEW --- */}
      <Modal 
        show={!!selectedImage} 
        onHide={() => setSelectedImage(null)} 
        size="lg" 
        centered
        backdrop={showAllModal ? false : true} 
        backdropClassName="modal-backdrop-blur"
        contentClassName="bg-transparent border-0"
        style={{ zIndex: 1060 }}
      >
        {selectedImage && (
          <div className="bg-white border border-2 border-dark rounded-0 overflow-hidden shadow-lg position-relative">
             <Row className="g-0">
               <Col md={7} className="bg-light">
                  <img 
                    src={selectedImage.image} 
                    alt={selectedImage.title} 
                    className="w-100 h-100 object-fit-cover" 
                    style={{ minHeight: "400px" }}
                  />
               </Col>
               <Col md={5} className="d-flex flex-column p-4 justify-content-center border-start border-dark bg-white">
                  <h6 className="text-secondary spacing-3 mb-2">GALLERY #{selectedImage.id}</h6>
                  <h2 className="fw-black text-uppercase display-6 mb-4">{selectedImage.title}</h2>
                  <p className="lead fs-6 text-dark border-start border-3 border-dark ps-3 text-justify">
                    "{selectedImage.desc}"
                  </p>
                  <div className="mt-auto pt-4">
                    <button 
                      onClick={() => setSelectedImage(null)} 
                      className="btn-outline-black w-100"
                    >
                      CLOSE VIEW
                    </button>
                  </div>
               </Col>
             </Row>
          </div>
        )}
      </Modal>

      {/* STYLE CSS KHUSUS */}
      <style>{`
        .transition-all { transition: all 0.4s ease-in-out; }
        .bnw-to-color { filter: grayscale(100%); transform: scale(1); }
        .group-hover-trigger:hover .bnw-to-color { filter: grayscale(0%); transform: scale(1.05); }
        .hover-opacity-100 { opacity: 0; }
        .group-hover-trigger:hover .hover-opacity-100 { opacity: 1; }
      `}</style>
    </section>
  );
};

export default GallerySection;