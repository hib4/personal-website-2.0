import Footer from './components/Footer'
import Header from './components/Header'
import About from './sections/About'
import Blog from './sections/Blog'
import Contact from './sections/Contact'
import Hero from './sections/Hero'
import Projects from './sections/Projects'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
