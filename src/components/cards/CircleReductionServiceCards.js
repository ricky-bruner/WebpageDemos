import React, { Component } from 'react';

export default class CircleReductionServiceCards extends Component {
    state = {
    };

    render(){
        return (
            <div id="circle-reduction-service-cards" className="circle-reduction-service-cards">
                <div className="container">
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <h2>Service One</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="circle-reduction-service-cards">Read More</a>
                            </div>
                        </div>
                        <div className="face face2">
                            <h2>01</h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <h2>Service Two</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="circle-reduction-service-cards">Read More</a>
                            </div>
                        </div>
                        <div className="face face2">
                            <h2>02</h2>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face face1">
                            <div className="content">
                                <h2>Service Three</h2>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                                <a href="circle-reduction-service-cards">Read More</a>
                            </div>
                        </div>
                        <div className="face face2">
                            <h2>03</h2>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}