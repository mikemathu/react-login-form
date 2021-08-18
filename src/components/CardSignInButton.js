import {  useLocation } from 'react-router-dom'
// import { Link } from 'react-router-dom'


const CardSignInButton = ({onChange}) => {
    const location = useLocation()

   

    return (
    
    <div className="row">

        <div className="col-8">
            <div className="icheck-primary">
                {location.pathname === '/'  && 
                    <>
                        <input 
                            name="checked" 
                            type="checkbox"
                            autoComplete='off'
                            onChange={onChange}
                            
                            /> 
                        <label htmlFor="remember">
                            Remember Me
                        </label>
                    </>
                }
                {location.pathname === '/register'  && 
                    <>
                        <input 
                            name="checked" 
                            type="checkbox" 
                            value="agree" 
                            autoComplete='off'
                            onChange={onChange}                            
                         />
                        <label htmlFor="agreeTerms">
                            I agree to the terms
                        </label>
                     </>
                }            
            </div>
        </div>

        <div className="col-4">
            {location.pathname === '/'  &&            
                //  <Link to='/profile' className="btn btn-primary btn-block" type="submit">Signn In</Link> 
                 
                 < input
                    className="btn btn-primary btn-block" 
                    type="submit"
                 />
                 
                }
            {location.pathname === '/register'  && 
                // <Link to='/' className="btn btn-primary btn-block" type="submit">Register</Link>
                < input
                   className="btn btn-primary btn-block" 
                   type="submit"
                />
            }
        </div>
    </div>
    
    )
}

export default CardSignInButton
