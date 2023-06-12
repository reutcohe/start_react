
import React, { Component } from "react";
// import ShopItem from "./shopItem";
import "./shopList.css";
import TestComp from './testComp'


export default class ShopList extends Component {

    state={ar:[]}

    componentDidMount(){
        this.doApi();
    }

    doApi = async () => {
        let url = "http://fs1.co.il/bus/shop.php";
        let resp = await fetch(url);
        let data = await resp.json();
        console.log(data);
        this.setState({ ar: data });
    }



    render() {
        return (
            <div className="container">
                <h2 className="title2">shop list:</h2>
                <h2>Test</h2>
                <TestComp />
                <div className="row">
                {this.state.ar.map(item => {
                    return (
                        // console.log(item)
                         <ShopItem key={item.id} item={item.name} />
                    )
                })}
                </div >
            </div>
        )
    }
}