import React, {Component} from 'react'
import $ from 'jquery'
import { StyleRoot } from 'radium'
import Radium from 'radium'

@Radium
class NewObject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: false
        }
    }

    handleClick() {
        this.setState({liked: !this.state.liked})
        // console.log(this.state.liked)
    }


    render() {
        let pulseKeyframes = Radium.keyframes({
            '0%': {width: '10%',height:'400px',borderRadius:'100%',backgroundColor:'#ffff00'},
            '50%': {width: '50%',height:'200px',borderRadius:'50%',backgroundColor:'#000'},
            '100%': {width: '10%',height:'100px',borderRadius:'20%',backgroundColor:'00ffff'},
        }, 'pulse');

        let styles = {
            inner: {
                // Use a placeholder animation name in `animation`
                animation: '3s ease 0s infinite',
                // Assign the result of `keyframes` to `animationName`
                animationName: pulseKeyframes,
                background: 'blue',
                position:'relative',
                display:'block',
                width:'30px',
                height: '30px',
                margin: '0 auto',
            }
        };
        let YY = {
            height: '500px',
            width: '500px',
            borderRadius: '50%',
            transition: '1s',
            backgroundColor: 'red',
        };
        let NN = {
            backgroundColor: 'green',
            height: '20px',
            width: '20px',
            borderRadius: '0%',
        };

        let styleChange = this.state.liked ? YY : styles.inner;

        return (
                <button className="N_object" onClick={this.handleClick.bind(this)} style={styles.inner}>
                </button>
        )
    }
}


export default NewObject
