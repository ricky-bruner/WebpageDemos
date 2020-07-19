import React, { Component } from 'react';
import CodeWindow from '../codewindows/CodeWindow';

export default class FlipHoverCardDemo extends Component {
    state = {
        html: ".flip-hover-card-demo"
    };

    render(){
        return (
            <div className="demo-section">
                <div className="flip-hover-card-demo">
                    <div className="container">
                        <div className="card">
                            <div className="imgBox">
                                <img src="https://images.unsplash.com/photo-1527684651001-731c474bbb5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="Hogwarts Express Path"></img>
                            </div>
                            <div className="details">
                                <h2>Potter Ipsum dolar</h2>
                                <p>Red hair crookshanks bludger Marauder’s Map Prongs sunshine daisies butter mellow Ludo Bagman. Beaters gobbledegook N.E.W.T., Honeydukes eriseD inferi Wormtail. Mistletoe dungeons Parseltongue Eeylops Owl Emporium expecto patronum floo powder duel. Gillyweed portkey, keeper Godric’s Hollow telescope, splinched fire-whisky silver Leprechaun O.W.L. stroke the spine. Chalice Hungarian Horntail, catherine wheels Essence of Dittany Gringotts Harry Potter.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBox">
                                <img src="https://images.unsplash.com/photo-1559559580-4814f977d18e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="Hogwarts Express Path"></img>
                            </div>
                            <div className="details">
                                <h2>Potter ipsum dolar</h2>
                                <p>Toad-like smile Flourish and Blotts he knew I’d come back Quidditch World Cup. Fat Lady baubles banana fritters fairy lights Petrificus Totalus. So thirsty, deluminator firs’ years follow me 12 inches of parchment. Head Boy start-of-term banquet Cleansweep Seven roaring lion hat. Unicorn blood crossbow mars is bright tonight, feast Norwegian Ridgeback. Come seek us where our voices sound, we cannot sing above the ground, Ginny Weasley bright red. Fanged frisbees, phoenix tears good clean match.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBox">
                                <img src="https://images.unsplash.com/photo-1565292266983-74457d481f44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" alt="Hogwarts Express Path"></img>
                            </div>
                            <div className="details">
                                <h2>Potter ipsum dolar</h2>
                                <p>Prophecies Yaxley green eyes Remembrall horcrux hand of the servant. Devil’s snare love potion Ravenclaw, Professor Sinistra time-turner steak and kidney pie. Cabbage Daily Prophet letters from no one Dervish and Banges leg.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBox">
                                <img src="https://images.unsplash.com/photo-1577493340887-b7bfff550145?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=593&q=80" alt="Hogwarts Express Path"></img>
                            </div>
                            <div className="details">
                                <h2>Potter ipsum dolar</h2>
                                <p>Squashy armchairs dirt on your nose brass scales crush the Sopophorous bean with flat side of silver dagger, releases juice better than cutting. Full moon Whomping Willow three turns should do it lemon drops. Locomotor trunks owl treats that will be 50 points, Mr. Potter.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBox">
                                <img src="https://images.unsplash.com/photo-1467646208740-18124b37eb58?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=576&q=80" alt="Hogwarts Express Path"></img>
                            </div>
                            <div className="details">
                                <h2>Potter ipsum dolar</h2>
                                <p>Witch Weekly, he will rise again and he will come for us, headmaster Erumpent horn. Fenrir Grayback horseless carriages ‘zis is a chance many would die for!Prefect’s bathroom Trelawney veela squashy armchairs, SPEW: Gamp’s Elemental Law of Transfiguration. Magic Nagini bezoar, Hippogriffs Headless Hunt giant squid petrified. Beuxbatons flying half-blood revision schedule, Great Hall aurors Minerva McGonagall Polyjuice Potion.</p>
                            </div>
                        </div>
                        <div className="card">
                            <div className="imgBox">
                                <img src="https://images.unsplash.com/photo-1554278853-12089b767e53?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=668&q=80" alt="Hogwarts Express Path"></img>
                            </div>
                            <div className="details">
                                <h2>Potter ipsum dolar</h2>
                                <p>Restricted section the Burrow Wronski Feint gnomes, quidditch robes detention, chocolate frogs. Errol parchment knickerbocker glory Avada Kedavra Shell Cottage beaded bag portrait vulture-hat. Twin cores, Aragog crimson gargoyles, Room of Requirement counter-clockwise Shrieking Shack. Snivellus second floor bathrooms vanishing cabinet Wizard Chess, are you a witch or not?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <CodeWindow html={this.state.html} ref="CodeWindow" />
            </div>
        );
    }
}