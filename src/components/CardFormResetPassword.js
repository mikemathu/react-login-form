import CardFormEmail from "./CardFormEmail"
import CardRequestNewPassword from "./CardRequestNewPassword"

const ResetPasssword = () => {
    return (
        <>
            <p className="login-box-msg">You forgot your password? Here you can easily retrieve a new password.</p>

            <CardFormEmail/>
            <CardRequestNewPassword/>
        </>
    )
}

export default ResetPasssword
