import React from 'react'
import Navbar from './components/Navbar' 
import About from './components/About'
import Form from './form/Form'
import Footer from './components/Footer'

 const App=()=> {
  const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

  return (
    <div>
      <Navbar
         darkMode={darkMode} 
         toggleDarkMode={toggleDarkMode}
      />
      <About
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
      />
      <Form
         darkMode={darkMode} 
         toggleDarkMode={toggleDarkMode}
      />
      <Footer
         darkMode={darkMode} 
         toggleDarkMode={toggleDarkMode}
      />
    </div>
  )
}
export default App