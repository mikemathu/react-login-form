import { useLocation } from 'react-router-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Login from './Login'
import Profile from './Profile'
import Register from './Register'
import ResetPassword from './ResetPassword'

const Card = () => {
    const location = useLocation()



    return (

<Router>

        <div  className="hold-transition login-page">
            <div className="login-box"></div>
        <div className='card'>
        <div className='card-body login-card-body'>

        {/* <Login/>
        <ResetPassword/>
        <Register/> */}


            {location.pathname === '/'  && 
                <Login/>
            }
            {location.pathname === '/reset-password'  && 
                <ResetPassword/>
            }

            {location.pathname === '/register'  && 
                <Register/>
            }
            {location.pathname === '/profile'  && 
                <Profile/>
            }

        </div>
    </div>
    </div>
    </Router>
    )
}

export default Card
