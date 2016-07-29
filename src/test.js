import React, {Component} from 'react'
import stateComponent from './state_train';
import NewObject from './stateTraining'
import { StyleRoot } from 'radium'

class Test extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>
                    <StyleRoot>
                        <NewObject/>
                    </StyleRoot>
                </h1>
            </div>
        )
    }
}

export default Test