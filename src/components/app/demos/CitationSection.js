import React, { Component } from "react";

export default class CitationSection extends Component {
    state = {
        showCitationVideo: false
    };

    toggleCitationVideo = () => {
        this.setState({ showCitationVideo: !this.state.showCitationVideo});
    }

    render() {
        return (
            <div className="options-box source-box">
                <div className="option-section citation-box">
                    <h4>Source:</h4>
                    <button className={(this.state.showCitationVideo === true) ? "active" : ""} onClick={() => this.toggleCitationVideo()}>Toggle Video Tutorial</button>
                    <button><a href={this.props.externalLink} target="_blank" rel="noopener noreferrer">View on Youtube</a></button>
                    {
                        this.state.showCitationVideo &&
                        <div className="citation-embedded-video">
                            <iframe title="Source Video" src={this.props.embeddedLink} frameborder="0" allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    }
                </div>
            </div>
        );
    }
}