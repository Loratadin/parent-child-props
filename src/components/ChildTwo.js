import React, { Component } from 'react';

export default class ChildTwo extends Component {
    render() {
        return (
            <div className="layout__wrapper">
                <div className="layout__map-wrap">
                    <img  className="layout__map-image" src="./assets/map.png" alt="map" />
                </div>
            </div>
        )
    }
}