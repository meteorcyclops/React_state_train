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
        let styleChange = this.state.liked ? 'YY':'NN'

        return (
            <button className="N_object" onClick={this.handleClick.bind(this)} style={styleChange}>
            </button>
        )
    }
}

export default NewObject
