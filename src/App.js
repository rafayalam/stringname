import "./App.css";
import "./styles/Contact.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import About from "./pages/About";
import ImageSlider from "./pages/Tips";
import { TipsData } from './components/TipsData';
import Contact from "./pages/Contact";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/menu" exact component={Menu} />
          <Route path="/about" exact component={About} />
          <Route path="/contact" exact component={Contact} />
          <ImageSlider slides={TipsData} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
