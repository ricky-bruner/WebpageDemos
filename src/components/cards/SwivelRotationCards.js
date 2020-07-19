import React, { Component } from'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHatWizard, faPizzaSlice } from '@fortawesome/free-solid-svg-icons';
import { faOldRepublic } from '@fortawesome/free-brands-svg-icons';

export default class SwivelRotationCards extends Component {
    state = {
    };

    render(){
        return (
            <div id="swivel-rotation-card-demo" className="swivel-rotation-cards">
                <div className="container">
                    <div className="card">
                        <div className="face front">
                            <h2>Project 1</h2>
                            <FontAwesomeIcon icon={faPizzaSlice} color="red" />
                        </div>
                        <div className="face back">
                            <h2>Details</h2>
                            <p>Project Description lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua. dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                            <a href="swivel-rotation-card-demo">Read More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face front">
                            <h2>Project 2</h2>
                            <FontAwesomeIcon icon={faOldRepublic} color="gold" />
                        </div>
                        <div className="face back">
                            <h2>Details</h2>
                            <p>Project Description lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua. dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                            <a href="swivel-rotation-card-demo">Read More</a>
                        </div>
                    </div>
                    <div className="card">
                        <div className="face front">
                            <h2>Project 3</h2>
                            <FontAwesomeIcon icon={faHatWizard} color="purple" />
                        </div>
                        <div className="face back">
                            <h2>Details</h2>
                            <p>Project Description lorem ipsum dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua. dolar sit amet, consectetur adipisicing elit, sed do eiusmod tempor et dolore magna aliqua.</p>
                            <a href="swivel-rotation-card-demo">Read More</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}