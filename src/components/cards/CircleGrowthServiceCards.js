import React, { Component } from 'react';

export default class CircleGrowthServiceCards extends Component {
    state = {
    };

    render(){
        return (
            <div id="circle-growth-service-card-demo" className={"circle-growth-service-cards " + this.props.settings.theme}>
                <div className="container">
                    <div className="box">
                        <div className="icon">01</div>
                        <div className="content">
                            <h3>Service Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <a href="circle-growth-service-card-demo">Read More</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">02</div>
                        <div className="content">
                            <h3>Service Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <a href="circle-growth-service-card-demo">Read More</a>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">03</div>
                        <div className="content">
                            <h3>Service Name</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <a href="circle-growth-service-card-demo">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}