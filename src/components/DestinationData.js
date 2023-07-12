import { Component } from "react";
import "./DestinationStyle.css"

class DestinationData extends Component{
    render(){
        return(
            <div className={this.props.className}>
            <div className="des-text">
                <h2>{this.props.heding}</h2>
                <p>{this.props.text}</p>
            </div>
            <div className="image1">
               
                {/* <img alt="" src={mountain1}/> */}
                <img alt="" src={this.props.image1}></img>
                <img alt="" src={this.props.image2}></img>
            </div>
        </div>
        )
    }
}

export default DestinationData;
