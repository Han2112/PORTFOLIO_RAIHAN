import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const Preloader = ({ onComplete }) => {
  const [count, setCount] = useState(0);
  const [message, setMessage] = useState("INITIALIZING...");

  useEffect(() => {
    // INTERVAL: Kecepatan update angka (60ms = Natural Slow)
    const timer = setInterval(() => {
      setCount((prev) => {
        
        // --- LOGIC SAAT 100% (SELESAI) ---
        if (prev >= 100) {
          clearInterval(timer);
          
          // UBAH PESAN JADI 'WELCOME' SAAT 100%
          setMessage("WELCOME.");

          // Tahan selama 2 detik sebelum hilang (Biar kebaca Welcome-nya)
          setTimeout(() => {
            onComplete(); 
          }, 2000); 
          
          return 100;
        }

        // --- LOGIC NAIK ANGKA ---
        const increment = Math.floor(Math.random() * 3) + 1; 
        const nextValue = Math.min(prev + increment, 100);

        // --- STATUS MESSAGE ---
        if (nextValue < 20) setMessage("INITIALIZING...");
        if (nextValue >= 20 && nextValue < 40) setMessage("LOADING ASSETS...");
        if (nextValue >= 40 && nextValue < 60) setMessage("VERIFYING DATA...");
        if (nextValue >= 60 && nextValue < 80) setMessage("ESTABLISHING CONNECTION...");
        if (nextValue >= 80 && nextValue < 100) setMessage("FINALIZING...");
        
        // Pas nyentuh 100, langsung set Welcome juga biar sinkron
        if (nextValue === 100) setMessage("WELCOME.");

        return nextValue;
      });
    }, 60);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      className="position-fixed top-0 start-0 w-100 vh-100 bg-black text-white d-flex flex-column justify-content-between z-3"
      style={{ zIndex: 99999 }}
      // Animasi Keluar: Slide ke Atas
      exit={{ y: "-100%", transition: { duration: 1, ease: [0.76, 0, 0.24, 1] } }}
    >
      
      {/* 1. HEADER KECIL */}
      <div className="d-flex justify-content-between p-4 px-md-5">
        <span className="small fw-bold tracking-wider">PORTFOLIO © 2026</span>
        <div className="d-flex align-items-center gap-2">
           <motion.div 
             className="bg-success rounded-circle" 
             style={{ width: "8px", height: "8px" }}
             animate={{ opacity: [1, 0.2, 1] }}
             transition={{ duration: 1, repeat: Infinity }}
           />
           {/* Header Status berubah jadi ONLINE saat 100% */}
           <span className="small fw-bold">
             {count < 100 ? "BOOTING SYSTEM" : "ONLINE"}
           </span>
        </div>
      </div>

      {/* 2. CENTER CONTENT */}
      <div className="d-flex flex-column align-items-center justify-content-center flex-grow-1">
        <div className="overflow-hidden">
          <motion.h1 
            className="fw-black m-0 lh-1"
            style={{ fontSize: "clamp(5rem, 15vw, 12rem)", letterSpacing: "-5px" }}
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {count}%
          </motion.h1>
        </div>
        
        {/* PESAN STATUS (NANTI JADI 'WELCOME.') */}
        <motion.p 
          // key={message} bikin animasi 'pop' kecil tiap ganti teks
          key={message}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-secondary fw-bold small mt-2 spacing-3 text-uppercase"
          style={{ letterSpacing: "3px" }}
        >
          {message}
        </motion.p>
      </div>

      {/* 3. FOOTER */}
      <div className="w-100">
        <div className="d-flex justify-content-between px-4 px-md-5 mb-2 small text-secondary fw-bold">
            <span>[ SEQUENCE ]</span>
            {/* INI YANG BERUBAH JADI 'COMPLETE' */}
            <span className="text-uppercase">
              {count < 100 ? "PROCESSING..." : "COMPLETE"}
            </span>
        </div>
        
        {/* Garis Progress */}
        <div className="w-100 bg-secondary bg-opacity-25" style={{ height: "4px" }}>
          <motion.div 
            className="h-100 bg-white"
            initial={{ width: "0%" }}
            animate={{ width: `${count}%` }}
            transition={{ ease: "linear" }}
          />
        </div>
      </div>

      <style>{`
        .fw-black { font-weight: 900; }
        .spacing-3 { letter-spacing: 3px; }
        .tracking-wider { letter-spacing: 1px; }
      `}</style>
    </motion.div>
  );
};

export default Preloader;