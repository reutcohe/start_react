import React, { Component } from 'react'

export default class ViewDate extends Component {
    state = { days: 999 }
    componentDidMount() {
        this.calcDays(this.props.deadline1)
    }
    componentDidUpdate(_oldPros, _oldState) {
        if (_oldPros.deadline1 !== this.props.deadline1) {
            this.calcDays(this.props.deadline1)
        }
    }
    calcDays = (_newDate) => {
        // let time = Date.parse(_newDate) - Date.now();
    }
    render() {
        return (

            <div className='text-center'>
                <h2>Countdown to: {this.props.deadline1}</h2>
                <h3>Days: {this.state.days}</h3>
            </div>
        )

    }
}