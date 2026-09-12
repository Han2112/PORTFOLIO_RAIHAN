import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "react-bootstrap";
import { IoClose, IoLogoGithub, IoDocumentTextOutline } from "react-icons/io5";

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

const ProjectModal = ({ project, onClose }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  if (!project) return null;

  const MAX_LENGTH = 180;
  const isLongText = project.description.length > MAX_LENGTH;
  const displayDescription = isExpanded ? project.description : `${project.description.slice(0, MAX_LENGTH)}...`;

  return (
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
        className="bg-white position-relative d-flex flex-column"
        style={{ 
          width: "90%", 
          maxWidth: "800px", 
          maxHeight: "90vh", 
          overflowY: "auto", 
          border: "1px solid #333" 
        }}
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

        <div className="w-100 position-relative" style={{ height: "300px" }}>
          <img 
            src={project.image} 
            alt={project.title} 
            className="w-100 h-100 object-fit-cover"
          />
          <div className="position-absolute bottom-0 start-0 w-100 p-4 bg-gradient-to-t from-black to-transparent"></div>
        </div>

        <div className="p-4 p-md-5">
          <div className="d-flex justify-content-between align-items-start mb-2">
            <div>
               <span className="text-secondary fw-bold small tracking-wider text-uppercase border-bottom border-dark pb-1 mb-2 d-inline-block">
                 {project.category}
               </span>
               <h2 className="display-5 fw-black text-uppercase lh-1 mb-3">{project.title}</h2>
            </div>
          </div>

          <div className="d-flex flex-wrap gap-2 mb-4">
            {project.tech.map((t, i) => (
              <span key={i} className="bg-black text-white px-3 py-1 small fw-bold text-uppercase">
                {t}
              </span>
            ))}
          </div>

          <div className="mb-5">
            <p className="lead text-secondary mb-1">
              {!isLongText ? project.description : displayDescription}
            </p>

            {isLongText && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="btn btn-link p-0 text-black text-decoration-none fw-bold small mt-2"
                style={{ fontSize: "0.9rem" }}
              >
                {isExpanded ? "SHOW LESS [-]" : "READ MORE [+]"}
              </button>
            )}
          </div>

          <div className="d-flex flex-wrap gap-3 pt-4 border-top border-light">
            {project.githubUrl && (
              <a 
                href={project.githubUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-black d-inline-flex align-items-center gap-2"
              >
                <IoLogoGithub size={20} /> VIEW SOURCE CODE
              </a>
            )}

            {project.demoUrl && (
              <a 
                href={project.demoUrl} 
                target="_blank" 
                rel="noreferrer"
                className="btn btn-outline-black d-inline-flex align-items-center gap-2"
              >
                <IoDocumentTextOutline size={20} /> DOCUMENTATION
              </a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectModal;