import About from "./components/About";
import Contact from "./components/Contact";
import Experience from "./components/Experience";
import Home from "./components/Home";
import Portfolio from "./components/Portfolio";
import SocialLinks from "./components/SocialLinks";
import NavBar from "./components/NavBar";

function App() {
    return (
        <div>
            <NavBar />
            <Home />
            <About />
            <Portfolio />
            <Experience />
            <Contact />
            <SocialLinks />
        </div>
    );
}

export default App;