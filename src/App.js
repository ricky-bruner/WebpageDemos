import React, { Component } from 'react';
import AppView from './AppView';
import './modules/helpers/StringConverters';


export default class App extends Component {
    state = {};

    render(){
        return (
            <div>
                <AppView />
            </div>
        );
    }
}