import { useState, useEffect } from 'react'
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

        // Add user
    const addUser = async (user) => {

        const res = await fetch('http://localhost:5000/users', {
          method: 'POST',
          headers: {
            'Content-type': 'application/json',
          },
          body: JSON.stringify(user),
        })
      
        const data = await res.json()
        setFormData(data)      
        
        console.log(user)
      }

      addUser(formData)


}

// Fetch User
const users = useEffect (() => {
    // const getTasks = async () => {
    //   const taskFromServer = await fetchTasks()
    //   setFormData(taskFromServer)
    // }  

    // getTasks()
    fetchTasks()

    // console.log('Mikeee here')
},[])

// Fetch Tasks
const fetchTasks = async () => {
    // const res = await fetch('http://localhost:5000/users')
    // const data = await res.json()

    const url = 'http://localhost:5000/users'
    try{
        const response = await fetch(url)
        const data = await response.json()
        setFormData(data)

    } catch (err){
        console.log(err)
    }
    
    // console.log(data)
    // return data
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
                <CardFormLogin onChange={onChange} users={users}/>
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
