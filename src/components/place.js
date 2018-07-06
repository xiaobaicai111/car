import React, { Component } from 'react';
import Head from "./head";

class Place extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <Head/>
                <h1>目的地</h1>
            </div>
        );
    }
}

export default Place;
