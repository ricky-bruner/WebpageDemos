import React, { Component } from 'react';

export default class DirectionAwareCards extends Component {
    state = {
    };

    render(){
        return (
            <div className={"direction-aware-cards " + this.props.settings.theme}>
                <div className="container">
                    <div className="card">
                        <h2>1</h2>
                    </div>
                    <div className="card">
                        <h2>2</h2>
                    </div>
                    <div className="card">
                        <h2>3</h2>
                    </div>
                    <div className="card">
                        <h2>4</h2>
                    </div>
                    <div className="card">
                        <h2>5</h2>
                    </div>
                </div>
            </div>
        );
    }
}