import React from 'react'
import {BrowserRouter, Route} from 'react-router-dom'
import Home from './Pages/Home'
import Parent from './Pages/Parent'
import Signup from './Pages/Signup'

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
                <BrowserRouter>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/signup" component={Signup}/>
                    <Route exact path="/inscription" component={Signup}/>
                    <Route exact path="/parent" component={Parent} />
                </BrowserRouter>
        );
    }

}

export default App
