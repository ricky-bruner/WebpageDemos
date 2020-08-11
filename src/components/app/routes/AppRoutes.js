import React, { Component } from "react";
import { Route, Redirect } from 'react-router-dom';
import DemoTypes from "../../../modules/helpers/DemoTypes";
import DemoFetcher from "../../../modules/helpers/DemoFetcher";
import MainContent from "../content/MainContent";

export default class AppRoutes extends Component {
    state = {
        expanded: true
    }

    render() {
        return (
            <React.Fragment>
                {
                    DemoFetcher(DemoTypes.Navbars).map(demo => {
                        return (
                            <Route exact path={"/" + DemoTypes.Navbars + "/" + demo.demoName}>
                                <MainContent selectedDemo={demo.demoName} 
                                    selectedDemoType={DemoTypes.Navbars} 
                                    expanded={this.state.expanded} />
                            </Route>
                        );
                    })
                }
                {
                    DemoFetcher(DemoTypes.Icons).map(demo => {
                        return (
                            <Route exact path={"/" + DemoTypes.Icons + "/" + demo.demoName}>
                                <MainContent selectedDemo={demo.demoName} 
                                    selectedDemoType={DemoTypes.Icons} 
                                    expanded={this.state.expanded} />
                            </Route>
                        );
                    })
                }
                {
                    DemoFetcher(DemoTypes.Cards).map(demo => {
                        return (
                            <Route exact path={"/" + DemoTypes.Cards + "/" + demo.demoName}>
                                <MainContent selectedDemo={demo.demoName} 
                                    selectedDemoType={DemoTypes.Cards} 
                                    expanded={this.state.expanded} />
                            </Route>
                        );
                    })
                }
                {
                    DemoFetcher(DemoTypes.Testimonials).map(demo => {
                        return (
                            <Route exact path={"/" + DemoTypes.Testimonials + "/" + demo.demoName}>
                                <MainContent selectedDemo={demo.demoName} 
                                    selectedDemoType={DemoTypes.Testimonials} 
                                    expanded={this.state.expanded} />
                            </Route>
                        );
                    })
                }
                {
                    DemoFetcher(DemoTypes.Scrollbars).map(demo => {
                        return (
                            <Route exact path={"/" + DemoTypes.Scrollbars + "/" + demo.demoName}>
                                <MainContent selectedDemo={demo.demoName} 
                                    selectedDemoType={DemoTypes.Scrollbars} 
                                    expanded={this.state.expanded} />
                            </Route>
                        );
                    })
                }
                {
                    DemoFetcher(DemoTypes.Buttons).map(demo => {
                        return (
                            <Route exact path={"/" + DemoTypes.Buttons + "/" + demo.demoName}>
                                <MainContent selectedDemo={demo.demoName} 
                                    selectedDemoType={DemoTypes.Buttons} 
                                    expanded={this.state.expanded} />
                            </Route>
                        );
                    })
                }
                {
                    Object.keys(DemoTypes).map(key => {
                        return (
                            <Route exact path={"/" + key + "/All"}>
                                <MainContent selectedDemo={"All"} 
                                    selectedDemoType={key} 
                                    expanded={this.state.expanded} />
                            </Route>
                        );
                    })
                }
                <Route exact path="/Home/">
                    <MainContent selectedDemo={""} 
                        selectedDemoType={DemoTypes.Home} 
                        expanded={this.state.expanded} />
                </Route>
                <Route exact path="/WebpageDemos">
                    <Redirect to="/Home/"></Redirect> 
                </Route>
                <Route exact path="/">
                    <Redirect to="/Home/"></Redirect> 
                </Route>
            </React.Fragment>
        );
    }
}