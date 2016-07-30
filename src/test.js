import React, {Component} from 'react'
import stateComponent from './state_train';
import NewObject from './stateTraining'
import InputProject from './inputTraining'
import LifeCycleComponent from './lifeCycleComponent'

class Test extends Component {
    render() {
        return (
            <div>
                <h1 style={{textAlign: "center"}}>
                    <LifeCycleComponent name="Kurt"/>
                </h1>
            </div>
        )
    }
}

export default Test