import React, { Component } from 'react';
import Head from "./head";

class Register extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>
                <Head/>
                <h1>注册</h1>
            </div>
        );
    }
}

export default Register;
