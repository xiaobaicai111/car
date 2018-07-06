import React, { Component } from 'react';
import Head from "./head";

class Cart extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <Head />
                <h1>购物车</h1>
            </div>
        );
    }
}

export default Cart;
