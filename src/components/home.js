import React, { Component } from 'react';
import Ylbt from './Ylbt';

import Footer from "./footer"

import Hmid from "./hmid";

class Home extends Component {
    constructor(props){
        super(props)
    }

    render() {
        return (
            <div>

                <Ylbt/>
                <Hmid/>
                <Footer></Footer>
            </div>
        );
    }
}

export default Home;
