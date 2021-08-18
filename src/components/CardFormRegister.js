import CardFormEmail from "./CardFormEmail"
import CardFormPassword from "./CardFormPassword"
import CardFormRegNumber from "./CardFormRegNumber"
import CardSignInButton from "./CardSignInButton"

const Register = ({onChange}) => {
    return (
        <>
        <p className="login-box-msg">Register a new account</p>        
            <CardFormRegNumber onChange={onChange}/>
            <CardFormEmail onChange={onChange}/>
            <CardFormPassword onChange={onChange}/>
            <CardFormPassword onChange={onChange}/>
            <CardSignInButton onChange={onChange}/>
        </>
    )
}

export default Register
