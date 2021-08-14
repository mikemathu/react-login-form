import { useLocation } from 'react-router-dom'
import { Link } from 'react-router-dom'


const CardSignInButton = () => {
    const location = useLocation()

    return (
    
    <div className="row">

        <div className="col-8">
            <div className="icheck-primary">
                {location.pathname === '/'  && 
                    <>
                        <input id="remember" type="checkbox" autoComplete='off' /> 
                        <label htmlFor="remember">
                            Remember Me
                        </label>
                    </>
                }
                {location.pathname === '/register'  && 
                    <>
                        <input id="agreeTerms" name="terms" type="checkbox" value="agree" autoComplete='off' />
                        <label htmlFor="agreeTerms">
                            I agree to the terms
                        </label>
                     </>
                }            
            </div>
        </div>

        <div className="col-4">
            {location.pathname === '/'  && 
                <Link to='/profile' className="btn btn-primary btn-block" type="submit">Signn In</Link>
            }
            {location.pathname === '/register'  && 
                <Link to='/' className="btn btn-primary btn-block" type="submit">Register</Link>
            }
        </div>
    </div>
    
    )
}

export default CardSignInButton
