/**
 * @copyright 2024 Nigmatullin Gleb
 * @license Apache-2.0 * 
 */

/**
 * Components
 */
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const App = () => {
    return (
        <>
        <Header />
        <main>
            <Hero />
            <About />
            <Skill />
            <Projects />
            <Contact />
        </main>
        </>

    )


}

export default App;