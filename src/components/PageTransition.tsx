"use client";

import React, { ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion"; // Thêm import này
import { usePathname } from "next/navigation"; // Sử dụng đúng hook
const PageTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname(); // Sử dụng usePathname

  return (
    <AnimatePresence>
      <div key={pathname}></div>
      <motion.div
        initial={{ opacity: 1 }}
        animate={{
          opacity: 0,
          transition: { delay: 1, duration: 0.4, ease: "easeInOut" },
        }}
        className="h-screen w-screen fixed bg-primary top-0 pointer-events-none"
      ></motion.div>
      {children}
    </AnimatePresence>
  );
};

export default PageTransition;
