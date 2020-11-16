import { Switch, Route, useLocation } from "react-router-dom"
import { AnimatePresence } from "framer-motion"

import GlobalStyle from "./components/GlobalStyle"
import About from "./pages/About"
import Nav from "./components/Nav"
import Contact from "./pages/Contact"
import OurWork from "./pages/OurWork"
import MovieDetail from "./pages/MovieDetail"

function App() {
  const location = useLocation()

  return (
    <div>
      <GlobalStyle />
      <Nav />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.pathname}>
          <Route path="/" exact>
            <About />
          </Route>
          <Route path="/our-work" exact>
            <OurWork />
          </Route>
          <Route to="/our-work/:id">
            <MovieDetail />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  )
}

export default App
