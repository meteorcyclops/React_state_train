import React, {Component} from 'react'
import $ from 'jquery'

import './state_train.css!'
import Radium from 'radium'

@Radium
class Login extends Component {

	componentDidMount() {

	}

	componentWillMount() {

	}


	render() {
	    let styles = {
                base:{
                    borderRadius:'50%'
                }
        };
		return (
			<div className="login-page">
				<div className="form" style={styles.base}>
				</div>
			</div>
		)
	}
}

export default Login