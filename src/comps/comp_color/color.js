import React, { Component } from 'react'


export default class Color extends Component {

chengeColor=(_newColor)=>{
this.props.changTextColor(_newColor)

}
    render() {
        return (
            <div className='container'>
               <button onClick={()=>{this.chengeColor("red")}} >Red</button>
               <button onClick={()=>{this.chengeColor("Blue")}}>Blue</button>
               <button onClick={()=>{this.chengeColor("White")}}>White</button>


            </div>
        )
    }

}