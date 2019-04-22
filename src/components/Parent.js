import React, { Component } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';

export default class Parent extends Component {
    render() {
        return (
            <div>
                <ChildOne />
                <ChildTwo />
            </div>
        )
    }
}