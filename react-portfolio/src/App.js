import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar"
import Contact from "./pages/contact"
import Home from "./pages/home"
import Portfolio from "./pages/portfolio"
// import Portfolio from "./pages/portfolio"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
   <Router>
     <Navbar />
     <Switch>
       <Route path="/aboutme">
          <Home />
       </Route>
       <Route path="/contact">
          <Contact />
       </Route>
       <Route path="/portfolio">
          <Portfolio />
       </Route>
       <Route path="/">
          <Home />
       </Route>
     </Switch>
   </Router>
   

  
  );
}

export default App;
