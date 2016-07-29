import React, {Component} from 'react'
import stateComponent from './state_train';
import NewObject from './stateTraining'

class Test extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>
                    <NewObject/>
                </h1>
            </div>
        )
    }
}

export default Test