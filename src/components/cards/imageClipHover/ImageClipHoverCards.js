import React, { Component } from 'react';
import './imageClipHoverCards.css';

export default class ImageClipHoverCards extends Component {
    state = {
    };

    render(){
        return (
            <div className={"image-clip-hover-cards " + this.props.settings.theme}>
                <div className="container">
                    <div className="box">
                        <div className="content">
                            <div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                <a href="image-clip-hover-card-demo">Read More</a>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1515185095702-1bcba5179830?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=80" alt="Phone Booth"></img>
                    </div>
                    <div className="box">
                        <div className="content">
                            <div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                <a href="image-clip-hover-card-demo">Read More</a>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1575887339850-1acc9d8daf3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="Phone Booth"></img>
                    </div>
                    <div className="box">
                        <div className="content">
                            <div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                <a href="image-clip-hover-card-demo">Read More</a>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1533462506003-13c20d204b58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Phone Booth"></img>
                    </div>
                    <div className="box">
                        <div className="content">
                            <div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                <a href="image-clip-hover-card-demo">Read More</a>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1465433360938-e02f97448763?ixlib=rb-1.2.1&auto=format&fit=crop&w=1334&q=80" alt="Phone Booth"></img>
                    </div>
                    <div className="box">
                        <div className="content">
                            <div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                <a href="image-clip-hover-card-demo">Read More</a>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1547756536-cde3673fa2e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1711&q=80" alt="Phone Booth"></img>
                    </div>
                    <div className="box">
                        <div className="content">
                            <div>
                                <h2>Title</h2>
                                <p>Lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                                <a href="image-clip-hover-card-demo">Read More</a>
                            </div>
                        </div>
                        <img src="https://images.unsplash.com/photo-1551269901-5c5e14c25df7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80" alt="Phone Booth"></img>
                    </div>
                </div>
            </div>
        );
    }
}