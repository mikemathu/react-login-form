import CardFormEmail from "./CardFormEmail"
import CardFormPassword from "./CardFormPassword"
import CardFormRegNumber from "./CardFormRegNumber"
import CardSignInButton from "./CardSignInButton"

const Register = () => {
    return (
        <>
        <p className="login-box-msg">Register a new account</p>        
            <CardFormRegNumber/>
            <CardFormEmail/>
            <CardFormPassword/>
            <CardFormPassword/>
            <CardSignInButton/>
        </>
    )
}

export default Register
