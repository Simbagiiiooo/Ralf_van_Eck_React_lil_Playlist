import React from 'react';
import Container from './Container'
import Nav from './Components/Nav/Nav'
import About from './Components/About/About'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

const App = () => {
    
    return (
        <Router>
            <Nav />
            <Switch>
                <Route path='/' exact component={Container}/>
                <Route path='/about' component={About}/>
            </Switch>
        </Router>
    )
}

export default App;
