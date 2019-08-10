import React, { Component } from "react";
import "./style.css";
import "../share/UIbasics.css";
import Background from "./background";
import Homebtn from "./homebtn";
import Descriptionleft from "./descriptionleft";
import Descriptionright from "./descriptionright"


class Homepage extends Component {


    render() {
       
        const moreMargin={
            marginLeft:'12vw'
        }
        return (
            <div>
                <div className="logo">Dandelion</div>
                <Background />
                <Homebtn location="/wisher/" text="Make a wish"/>
                <Homebtn style={moreMargin} location="/giver/" text="Fullfill a wish"/>

                <div className="descrp-container">
                        <Descriptionleft  className="home-lefthf" />
                    
                        <Descriptionright className="home-righthf"/>
                </div>
            </div>
        );
    }
}

export default Homepage;
