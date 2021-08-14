
import { useState } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Card from './components/Card'
import Profile from './components/Profile'
// import Login from './components/Login'
// import ResetPassword from './components/ResetPassword'
// import Register from './components/Register'

const App = () => {

  // const [showCard, setShowCard] = useState(true)
  // const [showProfile, setShowProfile] = useState(false)
  const [showCard] = useState(true)
  const [showProfile] = useState(false)

  


  return (

      <>
     
        <Router>
              { showCard && <Card />}
              { showProfile && <Profile/>}

              {/* { card && <Card />}
              { profile && <Profile/>} */}
            
            
          
        </Router>
       
   </>
   
  )
}

export default App
