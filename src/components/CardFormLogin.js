import CardFormEmail from "./CardFormEmail"
import CardFormPassword from "./CardFormPassword"
import CardSignInButton from "./CardSignInButton"

const Login = () => {
    return (
        <>
            <p className="login-box-msg">Sign in to start your session</p>

            <CardFormEmail/>

            <CardFormPassword/>
            
            <CardSignInButton/>
        </>
    )
}

export default Login
