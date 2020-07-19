import React, { Component } from 'react';
import Dumbledore from "../../img/dumbledore.jpg";
import Snape from "../../img/snape.jpg";
import CodeWindow from '../codewindows/CodeWindow';

export default class QuoteMovementTestimonialDemo extends Component {
    state = {
        html: ".quote-movement-testimonial-demo"
    };

    render(){
        return (
            <div className="demo-section">
                <div className="quote-movement-testimonial-demo">
                    <div className="container">
                        <div className="box">
                            <div className="imgBox">
                                <img src={Dumbledore} alt="Dumbledore"></img>
                            </div>
                            <p>"Upon many occasions, their level of skill and adeptness in technical prowess has surpassed even my wildest hopes. Bravo!"</p>
                            <h4>Albus Dumbledore<br /><span>Technical Wizard</span></h4>
                        </div>
                        <div className="box">
                            <div className="imgBox">
                                <img src={Snape} alt="Snape"></img>
                            </div>
                            <p>"...Despite the clear lack or even the most baseline skills at rudimentary potion brewing, they have, on rare occasion, produced exceptional code."</p>
                            <h4>Severus Snape<br /><span>Dev Ops Engineer</span></h4>
                        </div>
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow"/>
            </div>
        );
    }
}