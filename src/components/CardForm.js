import CardFormEmail from "./CardFormEmail"
import CardFormPassword from "./CardFormPassword"
import RemeberMeCheckBox from "./RemeberMeCheckBox"
import SignInButton from "./SignInButton"

const CardForm = () => {
    return (
        <form action="profile.html" method="post">              
            <CardFormEmail/>
            <CardFormPassword/>
            <div className="row">
                <RemeberMeCheckBox/>
                <SignInButton/>
            </div>
        </form>
    )
}

export default CardForm
