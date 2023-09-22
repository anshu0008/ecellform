import React from 'react'
import Navbar from './components/Navbar' 
import About from './components/About'
import Form from './form/Form'
import Footer from './components/Footer'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

 const App=()=> {
  const [darkMode, setDarkMode] = React.useState(true)
    
    function toggleDarkMode() {
        setDarkMode(prevMode => !prevMode)
    }

  return (
    <BrowserRouter>
      <div>
      <Navbar
         darkMode={darkMode} 
         toggleDarkMode={toggleDarkMode}
         />
      
      <About
        darkMode={darkMode} 
        toggleDarkMode={toggleDarkMode}
        />
        <Routes>
      <Route   path='/' element={
        
      <Form
         darkMode={darkMode} 
         toggleDarkMode={toggleDarkMode}
      /> } />
      
      </Routes>
      <Footer
   
         darkMode={darkMode} 
         toggleDarkMode={toggleDarkMode}
      />
    </div>
    </BrowserRouter>
  )
}
export default App