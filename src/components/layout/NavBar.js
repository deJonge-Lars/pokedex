import React, { Component } from 'react';
import styled from 'styled-components';

const Logo = styled.img`
  height: 30px;
  width: 30px;
  margin-right: 0.5em;
`;

export default class NavBar extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
                    <a 
                        href="/#"
                        className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
                    >
                        <Logo src="./logo.svg"/>
                        React Pokedex
                    </a>
                </nav>
            </div>
        )
    }
}
