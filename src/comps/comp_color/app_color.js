import React, { Component } from 'react'
import Color from './color'


export default class AppColor extends Component {
    state = { color: "silver" }
    changTextColor = (_newColor) => {
        this.setState({ color: _newColor })
    }


    render() {
        return (
            <div className='container'>
                <h1 style={{color:this.state.color}}>Welcom to custom</h1>
                <Color changTextColor={this.changTextColor}/>

            </div>
        )
    }

}