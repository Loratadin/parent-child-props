import React, { Component } from 'react';

export default class ChildTwo extends Component {
    render() {
        const { isMapVisible } = this.props;
        return (
            <div className={`widget__wrapper ${isMapVisible && "widget__wrapper-visible"} `}>
                <div className="widget__map-wrap">
                    <img  className="widget__map-image" src="./assets/map.png" alt="map" />
                </div>
            </div>
        )
    }
}