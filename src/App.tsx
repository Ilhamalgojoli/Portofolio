import './App.css'
import Navbar from './components/Navbar.tsx'
import Welcome from './components/Welcome.tsx'
import Project from './components/Project.tsx'
import Skills from './components/Skills.tsx'

function App() {
  return (
    <>
      <Navbar className='flex gap-2 justify-between text-white' />
      <Welcome />
      <Project />
      <Skills />   
    </>
  )
}

export default App
