import { motion } from "framer-motion"
import styled from "styled-components"

import { pageAnimation } from "../animation"

const ContactPage = styled(motion.div)`
  h1 {
    color: white;
  }
`

const Contact = () => {
  return (
    <ContactPage
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>Hi there, render please</h1>
    </ContactPage>
  )
}

export default Contact
