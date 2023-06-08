import { render } from "@testing-library/react";
import React, { Component } from "react";

export default class Task2 extends Component {
    state = { pics: ["cake1.jpg", "cake2.jpg","cake3.jpg","cake4.jpg","cake5.jpg"], count: 0 };

    addCount = () => {
        let countCheng=this.state.count+1
        if(countCheng>4){
         countCheng=0
        }
          this.setState({count:countCheng});
      }
      lessCount = () => {
  
       let countCheng=this.state.count-1
       if(countCheng<0){
        countCheng=4
       }
         this.setState({count:countCheng});
      }


    render() {
        return (
            <div>

               <img src={"/images/" + this.state.pics[this.state.count]}  width="200"  height="200"/>
                <hr />
                <button onClick={this.lessCount}>back</button>
                <button onClick={this.addCount}>next</button>
            </div>
        )
    }
}