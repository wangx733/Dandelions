import React, { Component } from "react";
import "./style.css";
import "../share/UIbasics.css";
import Background from "./background";
import Homebtn from "./homebtn";
import Descriptionleft from "./descriptionleft";
import Descriptionright from "./descriptionright"


class Homepage extends Component {

<<<<<<< HEAD
=======
    dtWisher = (e) => {
        e.preventDefault();
    }
    dtGiver = (e) => {
        e.preventDefault();
    }

>>>>>>> 11d9ac1ae60fc1475494ee5b4899afb216fffd38

    render() {
       
        const someMargin={
<<<<<<< HEAD
            marginLeft:'25%',
            top:'32em'
        }
        const moreMargin={
            marginLeft:'12vw',
=======
            marginLeft:'15em',
            top:'32em'
        }
        const moreMargin={
            marginLeft:'10em',
>>>>>>> 11d9ac1ae60fc1475494ee5b4899afb216fffd38
           top:'32em'
        }
        return (
            <div>
                <div className="logo">Dandelion</div>
                <Background />
<<<<<<< HEAD
                <Homebtn style={someMargin} location="/wisher/" text="Make a wish"/>
                <Homebtn style={moreMargin} location="/giver/" text="Fullfill a wish"/>
=======
                <Homebtn style={someMargin} location="/wisher/" text="Make a wish" Click={this.dtWisher} />
                <Homebtn style={moreMargin} location="/giver/" text="Fullfill a wish" Click={this.dtGiver} />
>>>>>>> 11d9ac1ae60fc1475494ee5b4899afb216fffd38

                <div className="descrp-container">
                        <Descriptionleft  className="home-lefthf" />
                    
                        <Descriptionright className="home-righthf"/>
                </div>
            </div>
        );
    }
}

<<<<<<< HEAD
export default Homepage;
=======
export default Homepage;
>>>>>>> 11d9ac1ae60fc1475494ee5b4899afb216fffd38
