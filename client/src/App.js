import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Parent from './components/Pages/Parent/Parent'
import Signup from './components/Pages/Signup/Signup'

class App extends React.Component {

    render() {
        return (
                <BrowserRouter>
                    {
                        // PUT ALWAYS DISPLAYED THINGS HERE
                    }<Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/signup" component={Signup}/>
                        <Route path="/inscription" component={Signup}/>
                        <Route path="/parent" component={Parent} />
                    </Switch>
                </BrowserRouter>
        );
    }
}

export default App
