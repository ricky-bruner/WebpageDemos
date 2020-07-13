import React, { Component } from "react";
import "./homepage.css";

export default class HomePage extends Component {
    state = {};

    render(){
        return (
            <div className="homepage">
                <h1>Online Tutorials</h1>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;In celebration of the Youtube channel "Online Tutorials", I have created this page to pool together the many demos that I have coded along to. I have learned so much about CSS and webpage layouts, incredible options, and various ways to achieve truly tranformative styles that I wanted to share them and encourage others to also follow along. 99% of what you will see here comes directly from the talented individual behind that channel's videos</p>
                <p>&nbsp;&nbsp;&nbsp;&nbsp;During the course of gathering these into one location, I decided to try and challenge myself to be able to display the code behind the UI, in the way that you may see on the various style libraries across front end development. In reality, when I first started my journey into development, I craved new and interesting styles. In the time since beginning my career, focused in back-end and far and away from styles, I found myself yearning to pick it back up. Additionally, the school that taught me this industry has cohorts of new students going through the high pressure, high stress program. I wanted a way to be able to make some of these options open to those seeking assistance with personal webpage building or that generally just want to play around with the styles. Access is everything</p>
            </div>
        );
    }
}