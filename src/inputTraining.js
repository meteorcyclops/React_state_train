/**
 * Created by meteorcyclops1104 on 2016/7/29.
 */

import React, {Component} from 'react'
import $ from 'jquery'
import Radium from 'radium'

@Radium
class InputProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value:'Hello!'
        }
    }

    handleChange(){
        this.setState({value:event.target.value})
    }

    componentDidMount() {

    }

    componentWillMount() {

    }

    render() {
        let value = this.state.value;
        return (
            <div>
                <input type="text" value={value} onChange={this.handleChange.bind(this)}/>
                <p>{value}</p>
            </div>
        )
    }
}

export default InputProject
