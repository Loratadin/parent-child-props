import React, { Component } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

export default class Parent extends Component {
    state = {
        isMapVisible: false,
    }
    toggleMap = () => {
        this.state.isMapVisible === false ? this.setState({isMapVisible: true}) : this.setState({isMapVisible: false})
    }

    render() {
        return (
            <div className="parent__container">
                <ChildOne toggleMap={this.toggleMap} />
                <ChildTwo isMapVisible={this.state.isMapVisible} />
            </div>
        )
    }
}