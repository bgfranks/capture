import { Switch, Route } from "react-router-dom"

import GlobalStyle from "./components/GlobalStyle"
import About from "./pages/About"
import Nav from "./components/Nav"
import Contact from "./pages/Contact"
import OurWork from "./pages/OurWork"

function App() {
  return (
    <div>
      <GlobalStyle />
      <Nav />
      <Switch>
        <Route path="/" exact>
          <About />
        </Route>
        <Route path="/our-work">
          <OurWork />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
      </Switch>
    </div>
  )
}

export default App
