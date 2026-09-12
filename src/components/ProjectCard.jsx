import { useState } from "react"; // <-- Tambah useState
import { motion } from "framer-motion";
import { Badge } from "react-bootstrap";

const ProjectCard = ({ project, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="project-card mb-5"
      initial={{ opacity: 0, y: 100, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={onClick}
    >
      {/* 1. Wrapper Gambar (Event Hover dipindah ke sini) */}
      <motion.div
        className="overflow-hidden mb-4 position-relative border border-dark"
        style={{ cursor: "pointer" }}

        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}

        animate={{ y: isHovered ? -10 : 0 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img
          src={project.image}
          alt={project.title}
          className="img-fluid w-100"
          style={{
            filter: isHovered ? "grayscale(0%)" : "grayscale(100%)",
            transform: isHovered ? "scale(1.05)" : "scale(1)",
            transition: "filter 0.5s ease, transform 0.5s ease",
            objectFit: "cover",
            height: "300px"
          }}
        />

        {/* Overlay Teks 'VIEW DETAILS' */}
        <div 
          className="position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center bg-black bg-opacity-25"
          style={{ 
            opacity: isHovered ? 1 : 0, 
            transition: "opacity 0.3s ease" 
          }}
        >
           <span className="text-white fw-bold border border-white px-3 py-2 bg-black">
             VIEW DETAILS
           </span>
        </div>
      </motion.div>

      {/* 2. Detail Singkat */}
      <div className="project-info">
        <div className="d-flex justify-content-between align-items-center mb-2">
           <h3 className="fw-bold text-uppercase m-0">{project.title}</h3>
           <span className="small text-secondary fw-bold border-bottom border-dark pb-1">
             {project.category}
           </span>
        </div>
        
        <p className="text-secondary mb-3 text-truncate">{project.description}</p>

        <div className="d-flex flex-wrap gap-2">
          {project.tech.map((tech, index) => (
            <Badge 
              key={index} 
              bg="white" 
              className="text-dark border border-dark rounded-0 px-2 py-1 fw-normal"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;