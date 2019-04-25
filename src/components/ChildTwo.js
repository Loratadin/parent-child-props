import React, { Component } from 'react';

export default class ChildTwo extends Component {
    render() {
        const { isMapVisible } = this.props;
        const widgetWrapper = "widget__wrapper";
        const widgetWrapperVisible = "widget__wrapper-visible";
        return (
            <div className={`${widgetWrapper} ${isMapVisible && widgetWrapperVisible} `}>
                <div className="widget__map-wrap">
                    <img  className="widget__map-image" src="./assets/map.png" alt="map" />
                </div>
            </div>
        )
    }
}