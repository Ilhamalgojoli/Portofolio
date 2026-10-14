import './App.css'
import Navbar from './components/Navbar.tsx'
import Welcome from './components/Welcome.tsx'
import Project from './components/Project.tsx'
import Skills from './components/Skills.tsx'
import AboutMe from './components/AboutMe.tsx'

function App() {
  return (
    <>
      <div className="fixed top-0 w-full z-50 p-6">
        <Navbar />
      </div>
      <Welcome />
      <AboutMe />
      <div className="pb-36">
        <Skills />
      </div>
      <Project />
    </>
  );
}

export default App
