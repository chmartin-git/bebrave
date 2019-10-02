import React, { Component } from 'react'

class InfoZone extends Component {
    render() {

        var align = "";
        if (this.props.left)
            align = "left";
        else if (this.props.right)
            align = "right";

        return (
                <div className="zone">
                    <div className={"inner-zone " + align}>
                        <div className="img-zone">
                            <img src={this.props.img} alt="Illustration image"/>
                        </div>
                        <div className="text-zone">
                            {this.props.text}
                        </div>
                    </div>
                </div>
        );
    }
}

export default InfoZone;
