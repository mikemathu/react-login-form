import { BrowserRouter as Router, useLocation, Switch } from 'react-router-dom'
import CardForm from './CardForm'
import CardLoginButton from './CardLoginButton'
import CardRegisterButton from './CardRegisterButton'
import CardResetPasswordButton from './CardResetPasswordButton'

const Card = () => {

    const location = useLocation()


    return (

    <Router>
        <div  className="hold-transition login-page">
            <div className="login-box">
                <div className='card'>
                    <div className='card-body login-card-body'>

                        <CardForm/>
                        <div className="social-auth-links text-center mb-3">
                            
                            <p>- OR -</p>

                            <Switch>                    
                           
                            {location.pathname === '/reset-password'  && 
                                <>
                                    <CardLoginButton/>
                                    <CardRegisterButton/>
                                </>
                            }
                             {location.pathname === '/register'  && 
                                <>
                                    <CardLoginButton/>
                                    <CardResetPasswordButton/>
                                </>
                            }
                             {location.pathname === '/'  && 
                                <>
                                    <CardResetPasswordButton/>
                                    <CardRegisterButton/>
                                </>
                            }
                            </Switch>

                        </div>

                    </div>
                </div>
            </div>
        </div>
    </Router>
    )
}

export default Card
