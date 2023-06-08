import React, { Component } from 'react'
import Message from './message'

export default class AppHw extends Component {
    render() {
        return (
            <div className='container'>
                <Message msg="First 1" bg="red" />
            </div>
        )
    }
}