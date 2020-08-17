import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';
import DemoTypeFactory from '../../../modules/DemoTypeFactory';
import DemoTypeCitationsFactory from '../../../modules/DemoTypeCitationsFactory';
import './demos.css';
import AdvancedCodeWindow from '../codewindows/AdvancedCodeWindow';

export default class GenericDemo extends Component {
    state = {
        border: "",
        color: "",
        theme: "",
        size: "",
        speed: "",
        reflective: "",
        overflowing: false,
        showAllBorders: false,
        showAllColors: false,
        showAllSizes: false,
        showAllSpeeds: false
    };

    componentDidMount() {
        this.setState({
            border: this.props.options.border,
            color: this.props.options.color,
            size: this.props.options.size,
            speed: this.props.options.speed,
            theme: this.props.options.theme,
            reflective: this.props.options.reflective,
            overflowing: this.props.options.overflowing
        })
    }

    getSettings = () => {
        let settings = {
            border: this.state.border,
            borders: this.props.options.borders,
            showAllBorders: this.state.showAllBorders,
            color: this.state.color,
            colors: this.props.options.colors,
            showAllColors: this.state.showAllColors,
            reflective: this.state.reflective,
            overflowing: this.state.overflowing,
            size: this.state.size,
            sizes: this.props.options.sizes,
            showAllSizes: this.state.showAllSizes,
            speed: this.state.speed,
            speeds: this.props.options.speeds,
            showAllSpeeds: this.state.showAllSpeeds,
            theme: this.state.theme
        }

        return settings;
    }

    toggleColor = (color) => {
        this.setState({ color: color, showAllColors: false }, () => {
            this.refs.CodeWindow.reRenderCodeWindow();
        });
    }

    toggleSpeed = (speed) => {
        this.setState({ speed: speed, showAllSpeeds: false }, () => {
            this.refs.CodeWindow.reRenderCodeWindow();
        });
    }

    toggleSize = (size) => {
        let color = this.state.color === "" ? this.props.options.color : this.state.color;
        this.setState({ color: color, size: size, showAllColors: false, showAllSizes: false }, () => {
            this.refs.CodeWindow.reRenderCodeWindow();
        });
    }

    toggleBorder = (border) => {
        this.setState({ border: border, showAllBorders: false }, () => {
            this.refs.CodeWindow.reRenderCodeWindow();
        });
    }

    toggleTheme = (theme) => {
        this.setState({ theme: theme }, () => {
            this.refs.CodeWindow.reRenderCodeWindow();
        });
    }

    toggleReflective = () => {
        let newState = this.getToggledState("reflective");
        
        this.setState(newState, () => {
            this.refs.CodeWindow.reRenderCodeWindow();
        });
    }

    toggleOverflowing = () => {
        let newState = this.getToggledState("overflowing");
        
        this.setState(newState, () => {
            this.refs.CodeWindow.reRenderCodeWindow();
        });
    }

    toggleAllColors = () => {
        let newState = this.getToggledState("color");
        newState.size = !this.state.showAllColors ? "xs" : this.props.options.size;
        
        this.setState(newState, () => {
            this.refs.CodeWindow.reRenderCodeWindow();
        });
    }   

    toggleAllSpeeds = () => {
        let newState = this.getToggledState("speed");

        this.setState(newState, () => {
            this.refs.CodeWindow.reRenderCodeWindow();
        });
    }

    toggleAllBorders = () => {
        let newState = this.getToggledState("border");

        this.setState(newState, () => {
            this.refs.CodeWindow.reRenderCodeWindow();
        });
    }

    toggleAllSizes = () => {
        let newState = this.getToggledState("size");
        
        this.setState(newState, () => {
            this.refs.CodeWindow.reRenderCodeWindow();
        });
    }

    getToggledState = (type) => {
        let toggledState = {
            border: type === "border" ? (!this.state.showAllBorders ? "" : this.props.options.border) : (this.state.border === "" ? this.props.options.border : this.state.border),
            color: type === "color" ? (!this.state.showAllColors ? "" : this.props.options.color) : (this.state.color === "" ? this.props.options.color : this.state.color),
            reflective: type === "reflective" ? (this.state.reflective === "reflective" ? "" : "reflective") : (this.state.reflective),
            overflowing: type === "overflowing" ? !this.state.overflowing : false,
            size: type === "size" ? (!this.state.showAllSizes ? "" : this.props.options.size) : (this.state.size === "" ? this.props.options.size : this.state.size),
            speed: type === "speed" ? (!this.state.showAllSpeeds ? "" : this.props.options.speed) : (this.state.speed === "" ? this.props.options.speed : this.state.speed),
            showAllBorders: type === "border" ? !this.state.showAllBorders : false, 
            showAllColors: type === "color" ? !this.state.showAllColors : false, 
            showAllSizes: type === "size" ? !this.state.showAllSizes : false, 
            showAllSpeeds: type === "speed" ? !this.state.showAllSpeeds : false
        };

        return toggledState;
    }

    render(){
        return (
            <div className="demo">
                <h2 className="demo-title">{this.props.title}</h2>
                <div className="options-container">
                    <h3>Options</h3>
                    <div className="options-box">
                        {
                            this.props.options.themes.length > 0 &&
                            <div className="option-section">
                                <h4>Theme:</h4>
                                {
                                    this.props.options.themes.map(theme => {
                                        return <button className={(this.state.theme === theme) ? "active" : ""} onClick={() => this.toggleTheme(theme)}>{theme}</button>
                                    })
                                }
                            </div>
                        }
                        {
                            this.props.options.sizes.length > 0 &&
                            <div className="option-section">
                                <h4>Sizes:</h4>
                                {
                                    this.props.options.useShowAllSizes &&
                                    <button className={(this.state.showAllSizes === true) ? "active" : ""} onClick={() => this.toggleAllSizes()}>Show All</button>
                                }
                                {
                                    this.props.options.sizes.map(s => <button className={(this.state.size === s) ? "active" : ""} onClick={() => this.toggleSize(s)}>{s.toUpperCase()}</button>)
                                } 
                            </div>
                        }
                        {
                            this.props.options.speeds.length > 0 &&
                            <div className="option-section">
                                <h4>Speeds:</h4>
                                {
                                    this.props.options.useShowAllSpeeds &&
                                    <button className={(this.state.showAllSpeeds === true) ? "active" : ""} onClick={() => this.toggleAllSpeeds()}>Show All</button>
                                }
                                {
                                    this.props.options.speeds.map(sp => {
                                        return <button className={(this.state.speed === sp) ? "active" : ""} onClick={() => this.toggleSpeed(sp)}>{sp.toUpperCase()}</button>
                                    })
                                }
                            </div>
                        }
                        {
                            this.props.options.borders.length > 0 &&
                            <div className="option-section">
                                <h4>Borders:</h4>
                                {
                                    this.props.options.useShowAllBorders &&
                                    <button className={(this.state.showAllBorders === true) ? "active" : ""} onClick={() => this.toggleAllBorders()}>Show All</button>
                                }
                                {
                                    this.props.options.borders.map(bd => {
                                    return <button className={(this.state.border === bd) ? "active" : ""} onClick={() => this.toggleBorder(bd)}>{bd.toUpperCase()}</button>
                                    })
                                }
                            </div>
                        }
                        {
                            this.props.options.useReflective &&
                            <div className="option-section">
                                <h4>Reflective:</h4>
                                <button className={this.state.reflective ? "active" : ""} onClick={() => this.toggleReflective()}>Toggle Reflection</button>
                            </div>
                        }
                        {
                            this.props.options.useOverflowing &&
                            <div className="option-section">
                                <h4>Overflowing:</h4>
                                <button className={this.state.overflowing ? "active" : ""} onClick={() => this.toggleOverflowing()}>Toggle Overflowing</button>
                            </div>
                        }
                    </div>
                    {
                        this.props.options.colors.length > 0 &&
                        <div className="options-box">
                            <div className="option-section">
                                <h4>Colors:</h4>
                                {
                                    this.props.options.useShowAllColors &&
                                    <button className={(this.state.showAllColors === true) ? "active" : ""} onClick={() => this.toggleAllColors()}>Show All</button>
                                }
                                {
                                    this.props.options.colors.map(c => <button className={(this.state.color === c) ? "active" : ""} onClick={() => this.toggleColor(c)}>{c.charAt(0).toUpperCase() + c.slice(1)}</button>)
                                }
                            </div>
                        </div>
                    }
                </div>
                <div className="demo-container">
                    {DemoTypeFactory(this.props.demoType, this.props.demoName, this.getSettings())}
                </div>
                <CodeWindow html={"." + this.props.demoClass} ref="CodeWindow" />
                {/* <AdvancedCodeWindow html={"." + this.props.demoClass} ref="CodeWindow" /> */}
                <div className="options-container">
                    <h3>Sources:</h3>
                    {
                        DemoTypeCitationsFactory(this.props.demoType, this.props.demoName)
                    }
                </div>
                <div className="underline"></div>
            </div>
        );
    }
}