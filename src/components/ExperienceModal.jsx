import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button, Row, Col } from "react-bootstrap";
import { IoClose, IoChevronBack, IoChevronForward } from "react-icons/io5";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: "100vh", opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { type: "spring", stiffness: 50, damping: 20 } 
  },
  exit: { y: "100vh", opacity: 0, transition: { duration: 0.5 } }
};

const ExperienceModal = ({ data, onClose }) => {
  const [isDescExpanded, setIsDescExpanded] = useState(false);
  const [activeImageIndex, setActiveImageIndex] = useState(null);
  
  if (!data) return null;

  const MAX_LENGTH = 150;
  const isLongText = data.details.length > MAX_LENGTH;
  const displayDetails = isDescExpanded ? data.details : `${data.details.slice(0, MAX_LENGTH)}...`;

  const openLightbox = (index) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const nextImage = (e) => {
    e.stopPropagation();
    if (activeImageIndex < data.gallery.length - 1) {
      setActiveImageIndex(activeImageIndex + 1);
    } else {
      setActiveImageIndex(0);
    }
  };

  const prevImage = (e) => {
    e.stopPropagation();
    if (activeImageIndex > 0) {
      setActiveImageIndex(activeImageIndex - 1);
    } else {
      setActiveImageIndex(data.gallery.length - 1);
    }
  };

  return (
    <>
      <motion.div
        className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
        style={{ 
          zIndex: 9990, 
          background: "rgba(0,0,0,0.6)", 
          backdropFilter: "blur(15px)",
          WebkitBackdropFilter: "blur(15px)" 
        }}
        variants={backdropVariants}
        initial="hidden"
        animate="visible"
        exit="hidden"
        onClick={onClose}
      >
        <motion.div
          className="bg-white p-4 p-md-5 position-relative d-flex flex-column"
          style={{ 
            width: "90%", 
            maxWidth: "700px", 
            maxHeight: "90vh", 
            overflowY: "auto", 
            border: "1px solid #333" 
          }}
          variants={modalVariants}
          onClick={(e) => e.stopPropagation()}
        >
          <Button 
            variant="link" 
            className="position-absolute top-0 end-0 p-3 text-dark z-3" 
            onClick={onClose}
          >
            <IoClose size={30} />
          </Button>

          <div className="d-flex align-items-center gap-3 mb-4">
            <div 
              className="rounded-circle overflow-hidden border border-secondary d-flex align-items-center justify-content-center"
              style={{ width: "60px", height: "60px", backgroundColor: "#f8f9fa", flexShrink: 0 }}
            >
              {data.logo ? (
                <img src={data.logo} alt="Logo" className="w-100 h-100 object-fit-contain p-1" />
              ) : (
                <span className="fw-bold fs-4">{data.company.charAt(0)}</span>
              )}
            </div>
            <div>
              <h5 className="text-secondary mb-0 small fw-bold tracking-wider">{data.year}</h5>
              <h4 className="fw-bold mb-0 border-bottom border-dark d-inline-block pb-1">{data.company}</h4>
            </div>
          </div>

          <h2 className="display-5 fw-bold mb-3 text-uppercase lh-1">{data.role}</h2>

          <div className="mb-4">
            <p className="lead text-dark mb-1" style={{ fontSize: "1.1rem" }}>
              {!isLongText ? data.details : displayDetails}
            </p>
            {isLongText && (
              <button 
                onClick={() => setIsDescExpanded(!isDescExpanded)}
                className="btn btn-link p-0 text-secondary text-decoration-none fw-bold small"
                style={{ fontSize: "0.9rem" }}
              >
                {isDescExpanded ? "SHOW LESS [-]" : "READ MORE [+]"}
              </button>
            )}
          </div>

          <div className="d-flex flex-wrap gap-2 mb-4">
            {data.tags && data.tags.map((tag, i) => (
              <span key={i} className="border border-dark px-3 py-1 small fw-bold text-uppercase bg-light">
                {tag}
              </span>
            ))}
          </div>

          {data.gallery && data.gallery.length > 0 && (
            <div className="mt-2 pt-4 border-top border-secondary">
              <h6 className="fw-bold mb-3 text-secondary spacing-3" style={{ fontSize: "0.8rem" }}>
                DOCUMENTATION ({data.gallery.length})
              </h6>
              <div 
                className="d-flex gap-3 overflow-auto pb-3"
                style={{ scrollbarWidth: "thin" }}
              >
                {data.gallery.map((imgUrl, idx) => (
                  <div 
                    key={idx}
                    className="flex-shrink-0 border border-light overflow-hidden position-relative"
                    style={{ width: "150px", height: "100px", cursor: "pointer" }}
                    onClick={() => openLightbox(idx)}
                  >
                    <img 
                      src={imgUrl} 
                      alt={`Doc ${idx}`} 
                      className="w-100 h-100 object-fit-cover"
                      style={{ transition: "transform 0.3s" }}
                      onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                      onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
                    />
                    <div className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-25 opacity-0 hover-opacity-100 transition">
                       <span className="text-white small fw-bold">VIEW</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </motion.div>

      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black"
            style={{ zIndex: 9995 }} 
            onClick={closeLightbox}
          >
            <motion.img 
              key={activeImageIndex}
              src={data.gallery[activeImageIndex]}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
              className="img-fluid"
              style={{ maxHeight: "90vh", maxWidth: "90vw", objectFit: "contain" }}
              onClick={(e) => e.stopPropagation()}
            />
            <button 
              className="position-absolute top-0 end-0 m-4 btn btn-outline-light rounded-circle p-2"
              onClick={closeLightbox}
            >
              <IoClose size={30} />
            </button>
            {data.gallery.length > 1 && (
              <>
                <button 
                  className="position-absolute start-0 m-4 btn btn-outline-light rounded-circle p-3"
                  onClick={prevImage}
                >
                  <IoChevronBack size={30} />
                </button>
                <button 
                  className="position-absolute end-0 m-4 btn btn-outline-light rounded-circle p-3"
                  onClick={nextImage}
                >
                  <IoChevronForward size={30} />
                </button>
              </>
            )}
            <div className="position-absolute bottom-0 mb-4 text-white bg-black bg-opacity-50 px-3 py-1 rounded-pill">
              {activeImageIndex + 1} / {data.gallery.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default ExperienceModal;