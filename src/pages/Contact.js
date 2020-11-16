import { motion } from "framer-motion"
import styled from "styled-components"

import { pageAnimation } from "../animation"

const ContactPage = styled(motion.div)`
  color: #fff;
`

const Contact = () => {
  return (
    <ContactPage
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <h1>hi there</h1>
    </ContactPage>
  )
}

export default Contact
