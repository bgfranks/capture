import styled from "styled-components"
import { motion } from "framer-motion"

export const About = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
  overflow: hidden;

  @media (max-width: 1100px) {
    text-align: center;
    min-height: 60vh;

    p {
      padding: 40px 50px;
    }
  }
`

export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  z-index: 2;

  h2 {
    font-weight: lighter;
    font-size: 3rem;
  }
`

export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  z-index: 2;

  img {
    width: 100%;
    height: 80vh;
    object-fit: cover;
  }

  @media (max-width: 1100px) {
    display: none;
  }
`

export const Hide = styled.div`
  overflow: hidden;
`
