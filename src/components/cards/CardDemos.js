import React, { Component } from 'react';
import SkewedBorderDemo from './SkewedBorderDemo';
import './cards.css';
import GlowingCardDemo from './GlowingCardDemo';

export default class CardDemos extends Component {
    state = {

    }
    
    render(){
        return (
            <div className="card-demos-body">
                <SkewedBorderDemo />
                <GlowingCardDemo />
            </div>
        )
    }
}