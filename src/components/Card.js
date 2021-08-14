import CardForm from "./CardForm"
import CardHeading from "./CardHeading"
import RegisterButton from "./RegisterButton"
import ResetPasswordButton from "./ResetPasswordButton"

const Card = () => {
    return (
        <div className="card">
        <div className="card-body login-card-body">

            <CardHeading />

            <CardForm/>

            <div className="social-auth-links text-center mb-3">
                <p>- OR -</p>
                <ResetPasswordButton/>
                <RegisterButton/>
            </div>
        </div>
        {/* <!-- /.login-card-body --> */}
    </div>
    )
}

export default Card
