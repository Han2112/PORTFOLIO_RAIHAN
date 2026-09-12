import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { IoClose, IoRibbonOutline } from "react-icons/io5";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const modalVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1, transition: { type: "spring", damping: 25, stiffness: 300 } },
  exit: { y: 50, opacity: 0 }
};

const CertificateDetailModal = ({ cert, onClose }) => {
  if (!cert) return null;

  return (
    <motion.div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center"
      style={{ 
        zIndex: 10000,
        background: "rgba(0,0,0,0.8)", 
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
        className="bg-white p-1 position-relative"
        style={{ width: "90%", maxWidth: "800px", border: "1px solid #333" }}
        variants={modalVariants}
        onClick={(e) => e.stopPropagation()}
      >
        <Button 
          variant="link" 
          className="position-absolute top-0 end-0 p-3 text-white z-3 bg-black rounded-0" 
          onClick={onClose}
        >
          <IoClose size={24} />
        </Button>

        <div className="row g-0">
          {/* Gambar Sertifikat Full */}
          <div className="col-lg-8 bg-light border-end border-dark">
            <img 
              src={cert.image} 
              alt={cert.title} 
              className="w-100 h-100 object-fit-contain p-4"
              style={{ minHeight: "300px", maxHeight: "500px" }}
            />
          </div>

          {/* Detail Teks */}
          <div className="col-lg-4 p-4 d-flex flex-column justify-content-center bg-white">
            <IoRibbonOutline size={40} className="mb-3 text-secondary" />
            <h6 className="text-secondary fw-bold small text-uppercase tracking-wider mb-2">
              Issued By {cert.issuer}
            </h6>
            <h3 className="fw-black text-uppercase mb-3 lh-sm">
              {cert.title}
            </h3>
            <div className="border-top border-dark pt-3 mt-auto">
              <p className="mb-1 small fw-bold">Issued: {cert.date}</p>
              <p className="mb-0 small text-secondary">ID: {cert.credentialId}</p>
            </div>
          </div>
        </div>

      </motion.div>
    </motion.div>
  );
};

export default CertificateDetailModal;