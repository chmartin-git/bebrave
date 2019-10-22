// Dependencies import
import React from 'react'
import ReactDOM from 'react-dom'
import {createStore, compose, applyMiddleware} from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";

//reducers import
import rootReducer from "./store/reducers/rootReducer";

// Components import
import App from './App'


const enhancers = compose(
        applyMiddleware(thunk)
        //window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const store = createStore(rootReducer, enhancers);

ReactDOM.render(<Provider store={store}> <App /></Provider>, document.getElementById("root"));
