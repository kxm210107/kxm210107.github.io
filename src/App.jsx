import Nav from './components/Nav'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Nav />
      <Hero />
      <div className="container">
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </div>
      <Footer />
    </>
  )
}
