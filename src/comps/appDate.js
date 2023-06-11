import React, { Component } from 'react'
import ViewDate from './viewDate';
import InputDate from './inputDate';

export default class AppDate extends Component {

    state = { deadline: "2024-01-01" }
    changeDate = (_newDate) => {
        this.setState({ deadline: _newDate })
    }

    render() {
        return (
            <div className='container'>

                <ViewDate deadline1={this.state.deadline} />
                <InputDate changeDate={this.changeDate} />


            </div>
        )
    }

}