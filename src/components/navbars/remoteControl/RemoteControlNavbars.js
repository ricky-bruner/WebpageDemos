import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faThLarge, faChartBar, faTasks, faBell, faArchive, faComment, faSitemap, faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import { faTumblr } from '@fortawesome/free-brands-svg-icons';
import './remoteControlNavbars.css';

export default class RemoteCnntrolNavbars extends Component {
    state = {
    };

    render(){
        return (
            <div id="home" className={"remote-control-navbars " + this.props.settings.theme}>
                <div className={"navbar-container " + this.props.settings.theme} data-text="Navbar">
                    {
                        !this.props.settings.showAllColors &&
                        <ul className={"remote-control-navbar " + this.props.settings.theme + " " + this.props.settings.color}>
                        <li>
                            <a className='list-item' href="home">
                                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a className='list-item' href="home">
                                <FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a className='list-item' href="home">
                                <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a className='list-item' href="home">
                                <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a className='list-item' href="home">
                                <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a className='list-item' href="home">
                                <FontAwesomeIcon icon={faArchive}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a className='list-item' href="home">
                                <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a className='list-item' href="home">
                                <FontAwesomeIcon icon={faSitemap}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a className='list-item' href="home">
                                <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                            </a>
                        </li>
                        <li>
                            <a className='list-item' href="home">
                                <FontAwesomeIcon icon={faTumblr}></FontAwesomeIcon>
                            </a>
                        </li>
                    </ul>
                    }
                    {
                        this.props.settings.showAllColors &&
                        this.props.settings.colors.map(c => {
                            return (
                                <ul className={"remote-control-navbar " + this.props.settings.theme + " " + c}>
                                    <li>
                                        <a className='list-item' href="home">
                                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='list-item' href="home">
                                            <FontAwesomeIcon icon={faThLarge}></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='list-item' href="home">
                                            <FontAwesomeIcon icon={faChartBar}></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='list-item' href="home">
                                            <FontAwesomeIcon icon={faTasks}></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='list-item' href="home">
                                            <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='list-item' href="home">
                                            <FontAwesomeIcon icon={faArchive}></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='list-item' href="home">
                                            <FontAwesomeIcon icon={faComment}></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='list-item' href="home">
                                            <FontAwesomeIcon icon={faSitemap}></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='list-item' href="home">
                                            <FontAwesomeIcon icon={faThumbsUp}></FontAwesomeIcon>
                                        </a>
                                    </li>
                                    <li>
                                        <a className='list-item' href="home">
                                            <FontAwesomeIcon icon={faTumblr}></FontAwesomeIcon>
                                        </a>
                                    </li>
                                </ul>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}