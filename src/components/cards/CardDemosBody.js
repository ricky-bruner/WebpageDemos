import React, { Component } from 'react';
import CardDemos from '../../modules/cards/CardDemos';
import CardDemoHeader from './CardDemoHeader';
import CardDemoOptionsFactory from '../../modules/cards/CardDemoOptionsFactory';
import GenericDemo from '../app/demos/GenericDemo';
import './cards.css';

export default class CardDemosBody extends Component {
    state = {
    };
    
    render(){
        return (
            <div className="card-demos-body">
                <CardDemoHeader />
                {
                    CardDemos().map(demo => {
                        if(this.props.selectedDemo === demo.friendlyName || this.props.selectedDemo === "All"){
                            return <GenericDemo demoType="card" options={CardDemoOptionsFactory(demo.demoName)} demoName={demo.demoName} demoClass={demo.demoClass} title={demo.demoTitle} />
                        } else {
                            return null;
                        }
                    })
                }
            </div>
        )
    }
}