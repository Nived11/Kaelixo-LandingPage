"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

export default function PageLoader({ children }: { children: React.ReactNode }) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2800); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {isLoading ? (
        <motion.div
          key="loader"
          className="fixed inset-0 z-[99999] flex items-center justify-center bg-[#070d1f]"
          exit={{ opacity: 0, y: -30 }} 
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="flex items-center justify-center">
            
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative z-10"
            >
              <Image
                src="/kaelixo-logo.png"
                alt="Kaelixo Icon"
                width={100}
                height={100}
                className="w-[70px] md:w-[100px] h-auto object-contain drop-shadow-[0_0px_25px_rgba(255,0,82,0.4)]"
                
                priority
              />
            </motion.div>

            <motion.div
              initial={{ maxWidth: 0, opacity: 0, marginLeft: 0 }}
              animate={{ maxWidth: 300, opacity: 1, marginLeft: 16 }} 
              transition={{ delay: 0.8, duration: 0.9, ease: "easeOut" }}
              className="overflow-hidden flex items-center"
            >
              <div className="w-[160px] md:w-[240px] shrink-0">
                <Image
                  src="/kaelixo-name.png"
                  alt="Kaelixo Name"
                  width={240}
                  height={60}
                  className="w-full h-auto object-contain"
                  priority
                />
              </div>
            </motion.div>

          </div>
        </motion.div>
      ) : (
        <motion.div key="content">
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
}