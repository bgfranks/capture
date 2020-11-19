import { Link } from "react-router-dom"
import styled from "styled-components"
import { motion } from "framer-motion"
import { useLocation } from "react-router-dom"

const Navbar = styled.div`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  background: #1c1c1c;
  padding: 1rem 10rem;
  position: sticky;
  top: 0;
  z-index: 5;

  a {
    color: white;
    text-decoration: none;
  }

  ul {
    display: flex;
    list-style: none;
  }

  .logo {
    font-size: 1.8rem;
    font-family: "Lobster", cursive;
    font-weight: lighter;
  }

  li {
    padding-left: 10rem;
    position: relative;
  }

  @media (max-width: 800px) {
    flex-direction: column;
    padding: 1rem;

    ul {
      padding: 2rem;
      justify-content: space-around;
      width: 100px;

      li {
        padding: 0rem 5rem;
      }
    }
  }
`
const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  left: 60%;
`

const Nav = () => {
  const { pathname } = useLocation()

  return (
    <Navbar>
      <h1>
        <Link className="logo" to="/">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "55%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/our-work">Work</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/our-work" ? "55%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "50%" : "0%" }}
          />
        </li>
      </ul>
    </Navbar>
  )
}

export default Nav
