import styled from "styled-components"
import { Link } from "react-router-dom"
import { motion } from "framer-motion"

import athlete from "../img/athlete-small.png"
import theracer from "../img/theracer-small.png"
import goodtimes from "../img/goodtimes-small.png"

import { pageAnimation } from "../animation"

const Work = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 10rem;

  h2 {
    padding: 1rem 0rem;
  }
`
const Movie = styled.div`
  padding-bottom: 10rem;

  .line {
    height: 0.5rem;
    background: #ccc;
    margin-bottom: 3rem;
  }

  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`

const OurWork = () => {
  return (
    <Work
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
      style={{ background: "#fff" }}
    >
      <Movie>
        <h2>The Athelete</h2>
        <div className="line" />
        <Link to="/our-work/the-athlete">
          <img src={athlete} alt="Athlete" />
        </Link>
      </Movie>
      <Movie>
        <h2>The Racer</h2>
        <div className="line" />
        <Link to="/our-work/the-racer">
          <img src={theracer} alt="The Racer" />
        </Link>
      </Movie>
      <Movie>
        <h2>Good Times</h2>
        <div className="line" />
        <Link to="/our-work/good-times">
          <img src={goodtimes} alt="Good Times" />
        </Link>
      </Movie>
    </Work>
  )
}

export default OurWork
