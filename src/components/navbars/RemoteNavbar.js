import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faThLarge, faChartBar, faTasks, faBell, faArchive, faComment, faSitemap, faThumbsUp } from '@fortawesome/free-solid-svg-icons'
import { faTumblr } from '@fortawesome/free-brands-svg-icons'

export default class RemoteNavbar extends Component {
    render(){
        return (
            <div id="home" className="remote-navbar-demo">
                <ul>
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
            </div>
        );
    }
}