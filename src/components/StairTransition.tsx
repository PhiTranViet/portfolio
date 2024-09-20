"use client";

import React, { ReactNode } from "react";
import { AnimatePresence } from "framer-motion"; // Thêm import này
import { usePathname } from "next/navigation"; // Sử dụng đúng hook
import Stairs from "./Stairs";
const StairTransition = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname(); // Sử dụng usePathname

  return (
    <>
      <AnimatePresence>
        <div key={pathname}>
          <div className="h-screen w-screen fixed top-0 left-0 right-0 pointer-events-none z-48 flex">
            <Stairs></Stairs>
          </div>
          
        </div>
      </AnimatePresence>
    </>
  );
};

export default StairTransition;
