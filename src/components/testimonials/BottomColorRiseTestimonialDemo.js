import React, { Component } from 'react';
import Dumbledore from "../../img/dumbledore.jpg";
import Hagrid from "../../img/hagrid.jpg";
import Snape from "../../img/snape.jpg";

export default class BottomColorRiseTestimonialDemo extends Component {
    state = {};

    render(){
        return (
            <div className="bottom-color-rise-testimonial-demo">
                <div className="testimonials">
                    <div className="card">
                        <div className="layer"></div>
                        <div className="content">
                            <p>"Upon many occasions, their level of skill and adeptness in technical prowess has surpassed even my wildest hopes. Bravo!"</p>
                            <div className="image">
                                <img src={Dumbledore} alt="Dumbledore"></img>
                            </div>
                            <div className="details">
                                <h2>Albus Dumbledore<br/><span>Technical Wizard</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="layer"></div>
                        <div className="content">
                            <p>"What'er ye askin' me fer? 'Sall right, if ye ask me, at the technical what-have-ye...good? Righ', anywho..."</p>
                            <div className="image">
                                <img src={Hagrid} alt="Hagrid"></img>
                            </div>
                            <div className="details">
                                <h2>Rubeus Hagrid<br/><span>Functional Programmer</span></h2>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="layer"></div>
                        <div className="content">
                            <p>"...Despite the clear lack or even the most baseline skills at rudimentary potion brewing, they have, on rare occasion, produced exceptional code."</p>
                            <div className="image">
                                <img src={Snape} alt="Snape"></img>
                            </div>
                            <div className="details">
                                <h2>Severus Snape<br/><span>Dev Ops Engineer</span></h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}