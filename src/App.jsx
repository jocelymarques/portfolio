import './output.css'
import NavBar from './components/NavBar.jsx'
import About from './components/About.jsx'
import Project from './components/Project.jsx'
import Experiences from './components/Experiences.jsx'
import Contacts from './components/Contacts.jsx'

function App() {


  return (
    <>
      <NavBar />
      <div className="h-20" />
      <div className='container p-1 sm:mx-auto'>
        <div className=' flex flex-col items-left min-h-screen p-4 '>
          <About />
          <Project />
          <Experiences />
          <Contacts />
        </div>
      </div>
    </>
  )
}

export default App
