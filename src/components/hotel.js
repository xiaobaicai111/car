import React, { Component } from 'react';
import Head from "./head";

class Hotel extends Component {
    constructor(props){
        super(props)
    }
    componentDidMount() {
    }
    render() {
        return (
            <div>
                <Head />
                <h1>酒店</h1>
            </div>
        );
    }
}

export default Hotel;
