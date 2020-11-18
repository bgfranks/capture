import { useState } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const ToggleStyle = styled(motion.div)`
  h4 {
    cursor: pointer;
  }
`

const Toggle = ({ children, title }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <ToggleStyle layout onClick={() => setToggle(!toggle)}>
      <motion.h4 layout className="question">
        {title}
      </motion.h4>
      {toggle ? children : ""}
      <div className="faq-line" />
    </ToggleStyle>
  )
}

export default Toggle
