/**
 * Created by meteorcyclops1104 on 2016/7/29.
 */

import React, {Component} from 'react'
import $ from 'jquery'
import Radium from 'radium'

@Radium 
class LifecycleComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            opacity : 1.0
        }
    }


    componentDidMount() {
        this.timer = setInterval(function () {
            let opacity = this.state.opacity;
            opacity -= 0.1;
            if(opacity<0.1){
                opacity = 1.0
            }
            this.setState({
                opacity:opacity
            })
        }.bind(this), 500)
    }

    componentWillMount() {

    }

    render() {
        return (
            <div style={{opacity:this.state.opacity}}>
                Hello {this.props.name}
            </div>
        )
    }
}

export default LifecycleComponent