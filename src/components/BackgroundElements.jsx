import { motion } from "framer-motion";

const BackgroundElements = () => {
  const gridStyle = {
    backgroundImage: "radial-gradient(#999999 1.5px, transparent 1.5px)",
    backgroundSize: "40px 40px",
    opacity: 0.25,
  };

  const floatingItems = [
    // --- AREA HERO (0-20%) ---
    { type: "text", content: "</>", top: "5%", left: "5%", delay: 0 },
    { type: "shape", shape: "circle", top: "12%", left: "85%", size: 60, delay: 0.5 },
    { type: "text", content: "{ }", top: "18%", left: "15%", delay: 2 },
    
    // --- AREA ABOUT (20-40%) ---
    { type: "shape", shape: "square", top: "28%", left: "90%", size: 40, delay: 1.5 },
    { type: "text", content: "npm i", top: "35%", left: "8%", delay: 1 },
    { type: "shape", shape: "circle", top: "38%", left: "80%", size: 20, delay: 3 },
    
    // --- AREA EXPERIENCE (40-60%) ---
    { type: "text", content: "&&", top: "48%", left: "5%", delay: 2.5 },
    { type: "shape", shape: "square", top: "55%", left: "88%", size: 50, delay: 0 },
    { type: "text", content: "git push", top: "62%", left: "12%", delay: 1.8 },
    
    // --- AREA PROJECT (60-90%) ---
    { type: "shape", shape: "circle", top: "70%", left: "85%", size: 30, delay: 4 },
    { type: "text", content: "div", top: "78%", left: "5%", delay: 2 },
    { type: "shape", shape: "square", top: "85%", left: "92%", size: 25, delay: 3 },
    { type: "text", content: ";", top: "90%", left: "50%", delay: 1 },
  ];

  return (
    <div className="position-absolute top-0 start-0 w-100 h-100 overflow-hidden" style={{ zIndex: 0, pointerEvents: "none" }}>
      
      <div className="position-absolute w-100 h-100 bg-white" style={{ zIndex: -1 }}></div>

      <div className="position-absolute w-100 h-100" style={gridStyle}></div>

      <div 
        className="position-absolute rounded-circle"
        style={{
          width: "60vw", height: "60vw", top: "0%", left: "-10%",
          background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(60px)",
        }}
      ></div>
      <div 
        className="position-absolute rounded-circle"
        style={{
          width: "50vw", height: "50vw", top: "40%", right: "-10%",
          background: "radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(255,255,255,0) 70%)",
          filter: "blur(60px)",
        }}
      ></div>

      {/* 4. FLOATING OBJECTS */}
      {floatingItems.map((item, index) => (
        <motion.div
          key={index}
          className="position-absolute text-secondary fw-bold opacity-50"
          style={{
            top: item.top,
            left: item.left,
            fontSize: item.type === "text" ? "1.5rem" : undefined,
            width: item.type === "shape" ? item.size : undefined,
            height: item.type === "shape" ? item.size : undefined,
            border: item.type === "shape" ? "2px solid #ccc" : "none",
            borderRadius: item.shape === "circle" ? "50%" : "0%",
            fontFamily: "monospace"
          }}
          // Animasi Melayang Pelan
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
          }}
          transition={{
            duration: 8,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          {item.type === "text" ? item.content : null}
        </motion.div>
      ))}
    </div>
  );
};

export default BackgroundElements;