import React, { Component } from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import DemoTypes from "../../../modules/helpers/DemoTypes";
// import MainContent from "../../../MainContent";
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
                            <Route exact path={"/WebpageDemos/" + DemoTypes.Navbars + "/" + demo.demoName}>
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
                            <Route exact path={"/WebpageDemos/" + DemoTypes.Icons + "/" + demo.demoName}>
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
                            <Route exact path={"/WebpageDemos/" + DemoTypes.Cards + "/" + demo.demoName}>
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
                            <Route exact path={"/WebpageDemos/" + DemoTypes.Testimonials + "/" + demo.demoName}>
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
                            <Route exact path={"/WebpageDemos/" + DemoTypes.Scrollbars + "/" + demo.demoName}>
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
                            <Route exact path={"/WebpageDemos/" + DemoTypes.Buttons + "/" + demo.demoName}>
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
                            <Route exact path={"/WebpageDemos/" + key + "/All"}>
                                <MainContent selectedDemo={"All"} 
                                    selectedDemoType={key} 
                                    expanded={this.state.expanded} />
                            </Route>
                        );
                    })
                }
                <Route exact path="/WebpageDemos/Home/">
                    <MainContent selectedDemo={""} 
                        selectedDemoType={DemoTypes.Home} 
                        expanded={this.state.expanded} />
                </Route>
                <Route exact path="/WebpageDemos">
                    <Redirect to="/WebpageDemos/Home/"></Redirect> 
                </Route>
                <Route exact path="/">
                    <Redirect to="/WebpageDemos/Home/"></Redirect> 
                </Route>
            </React.Fragment>
        );
    }
}