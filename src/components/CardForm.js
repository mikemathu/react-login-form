import { useState } from 'react'
import { useLocation } from 'react-router-dom'
import Profile from './Profile'
import CardFormRegister from './CardFormRegister'
import CardFormResetPassword from './CardFormResetPassword'
import CardFormLogin from './CardFormLogin'

const CardForm = () => {
    const location = useLocation()

    const initialState = {
        email: '',
        password: '',
        regNumber: '',
        checked: false
    }    
    
    // const [ email, setEmail ] = useState('')
    // const [ password, setPassword ] = useState('')
    
    const [ formData, setFormData ] = useState(initialState)
    
    
    const onSubmit = (e) => {
        e.preventDefault()        
        
        // setEmail('')
        // setPassword('')

       console.log(formData)
    }


    const onChange = (e) => {
    //     setEmail(e.target.value)
    //     setPassword(e.target.value)

    const { name, value, type, checked } = e.target
    
        if(type === 'checkbox' ) {
            setFormData({...formData, [name]: checked})
        } else {

            setFormData({...formData, [name]: value})
        }

    }

    return (
        <form onSubmit={onSubmit}>

            {location.pathname === '/'  && 
                // <CardFormLogin inputValue={email} onChange={(e) => setEmail(e.target.value)}/>
                <CardFormLogin onChange={onChange}/>
            }
            {location.pathname === '/reset-password'  && 
                <CardFormResetPassword />
            }
            {location.pathname === '/register'  && 
                <CardFormRegister onChange={onChange}/>
            }
            {location.pathname === '/profile'  && 
                <Profile/>
            }

    </form>
    )
}

export default CardForm
