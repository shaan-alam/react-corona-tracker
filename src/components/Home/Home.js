import React from "react";
import DataPanels from "./DataPanels";
import Header from "./Header";
import CountryData from "./CountryData";
import Graph from "./Graph";
import { motion } from "framer-motion";
import Modal from "../Modal";

function Home({ error }) {
  return (
    <motion.div
      className="home-wrapper"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Modal />
      <Header />
      <DataPanels />
      <CountryData />
      <Graph />
    </motion.div>
  );
}

export default Home;
