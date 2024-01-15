"use client";
import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useDrawerStore } from "@/store/drawer";
import PrimaryDrawer from "./PrimaryDrawer";

const Drawer = () => {
  const { showDrawer, toggleDrawer } = useDrawerStore((state) => ({
    showDrawer: state.showDrawer,
    toggleDrawer: state.toggleDrawer,
  }));
  const handleToggleDrawer = (e: any) => {
    e.stopPropagation();
    toggleDrawer();
  };

  const BackDropVariant = {
    initial: {
      opacity: 0,
    },
    animate: {
      opacity: 1,
      transition: {
        duration: 0.2,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.4,
        duration: 0.5,
      },
    },
  };

  return (
    <AnimatePresence mode="wait" onExitComplete={() => null} key="backdrop">
      {showDrawer && (
        <motion.div
          layout
          initial="initial"
          animate="animate"
          exit="exit"
          variants={BackDropVariant}
          onClick={(e) => handleToggleDrawer(e)}
          className="flex items-center justify-end h-screen w-full fixed top-0 right-0 z-50 bg-black bg-opacity-10 cursor-pointer transition-all duration-150"
        >
          {/* initial drawer */}
          <PrimaryDrawer />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Drawer;
