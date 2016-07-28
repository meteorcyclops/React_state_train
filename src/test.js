import React, {Component} from 'react'
import stateComponent from './state_train';

class Test extends Component {
    render() {
        return (
            <div>
                <h1 style={{ textAlign: "center" }}>Hello Login</h1>
                <stateComponent />
            </div>
        )
    }
}

export default Test