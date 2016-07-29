import React, {Component} from 'react'
import $ from 'jquery'
import Radium from 'radium'

@Radium
class NewObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked:false
        }
    }
    handleClick(){
        this.setState({liked: !this.state.liked})
        // console.log(this.state.liked)
    }

    render() {
        let YY = {
            height:'500px',
            width:'500px',
            borderRadius:'50%',
            transition:'1s',
            backgroundColor:'red',
        };
        let NN = {
            backgroundColor:'green',
            height:'20px',
            width:'20px',
            borderRadius:'0%',
        };

        let styleChange = this.state.liked ? YY:NN;

        return (
            <button className="N_object" onClick={this.handleClick.bind(this)} style={styleChange}>
            </button>
        )
    }
}

export default NewObject
