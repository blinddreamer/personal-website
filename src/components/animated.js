import React from "react";
import { motion } from "framer-motion";

const Animated = ({ children }) => {
  return (
    <>
      {children}
      <motion.div
        className="in"
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        exit={{ opacity: 0.8 }}
        transition={{ duration: 0.75, ease: "easeOut" }}
      />
    </>
  );
};

export default Animated;
