
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Card from './components/Card'
import Profile from './components/Profile'

const App = () => {

  return (
        <Router>
             <Switch>
                <Route exact strict path='/profile' component={Profile}  /> 
                { (<Route exact strict path='/ || /register || /reset-password'   />) && 
                // <Card onClick={<Route exact strict path='/profile' component={Profile}  /> } />  
                <Card />  
                }
            </Switch>          
        </Router>
  )
}

export default App
