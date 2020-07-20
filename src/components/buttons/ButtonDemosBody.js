import React, { Component } from 'react';
import ButtonDemoHeader from './ButtonDemoHeader';
import ButtonDemos from '../../modules/buttons/ButtonDemos';
import ButtonDemoOptionsFactory from '../../modules/buttons/ButtonDemoOptionsFactory';
import GenericDemo from '../app/demos/GenericDemo';

export default class ButtonDemosBody extends Component {
    state = {}
    
    render(){
        return (
            <div className="button-demos-body">
                <ButtonDemoHeader />
                {
                    ButtonDemos().map(demo => {
                        if(this.props.selectedDemo === demo.friendlyName || this.props.selectedDemo === "All"){
                            return <GenericDemo demoType="button" options={ButtonDemoOptionsFactory(demo.demoName)} demoName={demo.demoName} demoClass={demo.demoClass} title={demo.demoTitle} />
                        } else {
                            return null;
                        }
                    })
                }
            </div>
        )
    }
}