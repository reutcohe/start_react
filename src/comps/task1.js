import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class Task1 extends Component {

    state = { num: 0 };
    add = () => {
        this.setState({ num: this.state.num + 1 })
        if(this.state.num+1 >= 6){
            this.setState({num:0});
          }
    }
    render() {
        return (
            <div>
                <h2>{this.state.num}</h2>
                <button onClick={this.add}>Add 1 </button>

            </div>
        )
    }
}