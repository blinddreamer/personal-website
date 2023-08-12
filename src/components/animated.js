import React, { Fragment } from "react";
import { motion } from "framer-motion";

const Animated = ({ children }) => {
  return (
    <Fragment>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </Fragment>
  );
};

export default Animated;
