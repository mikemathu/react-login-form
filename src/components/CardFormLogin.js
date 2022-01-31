import CardFormEmail from "./CardFormEmail"
import CardFormPassword from "./CardFormPassword"
import CardSignInButton from "./CardSignInButton"

const Login = ({onChange, users}) => {
    return (
        <>
            <p className="login-box-msg">Sign in to start your session</p>

            <CardFormEmail onChange={onChange} />

            <CardFormPassword onChange={onChange}/>
            
            <CardSignInButton  onChange={onChange} users={users}/>
        </>
    )
}

export default Login
