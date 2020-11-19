import { Link } from "react-router-dom"
import styled from "styled-components"

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

const Nav = () => {
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
        </li>
        <li>
          <Link to="/our-work">Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </Navbar>
  )
}

export default Nav
