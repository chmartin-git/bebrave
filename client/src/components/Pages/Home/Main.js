import React, {Component} from 'react';

import '../../../assets/style/css/main.min.css'
import Page1 from "./Page1";
import Page2 from "./Page2";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            more: false
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        console.log(this);
        this.setState((prev) => ({
            more: !prev.more
        }))
    }

    render() {
        const {title} = this.props;
        return (
                <div id="main">
                    <Page1 title={title} state={!this.state.more?"active":"inactive"} handler={this.handleClick} />
                    <Page2 state={(this.state.more)?"active":"inactive"} handler={this.handleClick} />
                </div>
        );
    }
}


export default Main
