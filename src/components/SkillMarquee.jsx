import Marquee from "react-fast-marquee";

const SkillMarquee = () => {
  const skills = [
  "CYBERSECURITY", 
  "NETWORK ENGINEERING", 
  "IOT DEVELOPMENT", 
  "PYTHON", 
  "LINUX ADMINISTRATION",
  "PENETRATION TESTING", 
  "CLOUD COMPUTING", 
  "FULLSTACK DEVELOPER",
  "SWITCHING & ROUTING",
  "NETWORKING",
  "DOCKER",
  "VIRTUALIZATION",
  "GIT"
  ];

  return (
    <section className="py-4 border-top border-bottom border-dark bg-white position-relative" style={{ zIndex: 10 }}>
      <Marquee gradient={false} speed={50}>
        {skills.map((skill, index) => (
          <div key={index} className="d-flex align-items-center">
            <h2 
              className="mb-0 fw-black px-5 text-uppercase" 
              style={{ 
                fontSize: "3rem", 
                letterSpacing: "-1px",
                userSelect: "none" 
              }}
            >
              {skill}
            </h2>
            <span className="fs-2 text-secondary">•</span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default SkillMarquee;