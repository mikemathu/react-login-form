import { useLocation } from 'react-router-dom'
import Profile from './Profile'
import CardFormRegister from './CardFormRegister'
import CardFormResetPassword from './CardFormResetPassword'
import CardFormLogin from './CardFormLogin'

const CardForm = () => {
    const location = useLocation()

    return (
        <form>

            {location.pathname === '/'  && 
                <CardFormLogin/>
            }
            {location.pathname === '/reset-password'  && 
                <CardFormResetPassword/>
            }
            {location.pathname === '/register'  && 
                <CardFormRegister/>
            }
            {location.pathname === '/profile'  && 
                <Profile/>
            }

    </form>
    )
}

export default CardForm
