import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Home from './components/Pages/Home/Home'
import Parent from './components/Pages/Parent/Parent'
import Register from './components/Pages/Register/Register'

class App extends React.Component {
    render() {
        return (
                <BrowserRouter>
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/signup" component={Register}/>
                        <Route path="/inscription" component={Register}/>
                        <Route path="/application" component={Parent} />
                    </Switch>
                </BrowserRouter>
        );
    }
}

export default App
