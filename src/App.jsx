import Intro from './components/Intro'
import Navbar from './components/Navbar'
import AboutMe from './components/AboutMe'
import SkillsSection from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'
import ProjectShowcase from './components/ProjectShowcase'

function App() {
  return (
    <>
      <Navbar />
      <Intro/>
      <AboutMe/>
      <SkillsSection/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}
export default App