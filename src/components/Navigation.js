import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap'

export class Navigation extends Component{
    render(){
        return(
            <nav class="navbar navbar-expand-sm navbar-light bg-light" data-toggle="affix">
            <div class="mx-auto d-sm-flex d-block flex-sm-nowrap" style={{ fontFamily: 'Courier New' }}>
                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample11" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse text-center" id="navbarsExample11">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link active" href="/">HOME</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/blog">BLOG</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/inspirations">INSPIRATIONS</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/forum">FORUM</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" href="/about">ABOUT</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>

        )
    }
}
export default Navigation;