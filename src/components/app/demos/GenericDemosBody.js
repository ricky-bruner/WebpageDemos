import React, { Component } from 'react';
import GenericDemo from './GenericDemo';
// import './cards.css';
import DemoTypes from '../../../modules/helpers/DemoTypes';
import DemoTypeOptionsFactory from '../../../modules/DemoTypeOptionsFactory';
import DemoHeaderFactory from '../../../modules/DemoHeaderFactory';
import DemoFetcher from '../../../modules/helpers/DemoFetcher';

export default class GenericDemosBody extends Component {
    state = {
    };
    
    render(){
        return (
            <div className="demos-body">
                {
                    DemoHeaderFactory(this.props.demoType)
                }
                {
                    DemoFetcher(this.props.demoType).map(demo => {
                        if(this.props.selectedDemo === demo.demoName || this.props.selectedDemo === "All"){
                            return <GenericDemo demoType={this.props.demoType} options={DemoTypeOptionsFactory(this.props.demoType, demo.demoName)} demoName={demo.demoName} demoClass={demo.demoClass} title={demo.demoTitle} />
                        } else {
                            return null;
                        }
                    })
                }
            </div>
        )
    }
}