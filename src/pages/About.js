import { motion } from "framer-motion"

import AboutSection from "../components/AboutSection"
import ServicesSection from "../components/ServicesSection"
import FaqSection from "../components/FaqSection"
import ScrollTop from "../components/ScrollTop"

import { pageAnimation } from "../animation"

const About = () => {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
      <ScrollTop />
    </motion.div>
  )
}

export default About
