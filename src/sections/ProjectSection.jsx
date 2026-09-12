import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { AnimatePresence } from "framer-motion";
import { projectData } from "../data/projectData"; 
import ProjectCard from "../components/ProjectCard";
import ProjectModal from "../components/ProjectModal";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";

const ProjectSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [visibleCount, setVisibleCount] = useState(4);

  const isAllShown = visibleCount >= projectData.length;

  const handleToggleLoad = (e) => {
    e.preventDefault();
    if (isAllShown) {
      setVisibleCount(4);
      document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
    } else {
      setVisibleCount((prev) => prev + 4);
    }
  };

  return (
    // TIDAK ADA CLASS bg-white
    <section id="projects" className="py-5 position-relative">
      <Container>
        <Row className="mb-5">
          <Col md={6}>
            <h5 className="text-black fw-bold spacing-3 mb-3">SELECTED WORKS</h5>
            <h2 className="display-4 fw-bold text-uppercase">
              Crafting Digital <br /> Solutions.
            </h2>
          </Col>
          <Col md={6} className="d-flex align-items-end justify-content-md-end">
            <p className="text-secondary mb-0 text-end">
              Click on any project to view details, <br /> code structure, and live demos.
            </p>
          </Col>
        </Row>

        <Row>
          {projectData.slice(0, visibleCount).map((project, index) => (
            <Col lg={6} md={6} sm={12} key={project.id} className="px-md-4">
              <div style={{ marginTop: index % 2 !== 0 ? "80px" : "0px" }}>
                <ProjectCard 
                  project={project} 
                  onClick={() => setSelectedProject(project)} 
                />
              </div>
            </Col>
          ))}
        </Row>

        {projectData.length > 4 && (
          <div className="text-center mt-5 pt-5">
            <button 
              onClick={handleToggleLoad}
              className="btn btn-black fs-5 px-5 py-3 d-inline-flex align-items-center gap-2"
            >
               {isAllShown ? (
                 <>SHOW LESS <FaArrowUp size={16} /></>
               ) : (
                 <>VIEW MORE ARCHIVES <FaArrowDown size={16} /></>
               )}
            </button>
          </div>
        )}

      </Container>

      <AnimatePresence>
        {selectedProject && (
          <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>

    </section>
  );
};

export default ProjectSection;