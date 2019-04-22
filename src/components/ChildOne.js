import React, { Component } from 'react';

export default class ChildOne extends Component {
    render() {
        return (
            <div className="header__wrapper">
                <div className="header__icon-wrap">
                    <img  className="header__icon-image" src="./assets/map-icon.png" alt="map-icon" />
                </div>
            </div>
        )
    }
}