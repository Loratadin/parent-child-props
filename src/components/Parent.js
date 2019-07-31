import React, { Component } from 'react';
import ChildOne from './ChildOne';
import ChildTwo from './ChildTwo';
import ChildThree from './ChildThree';

export default class Parent extends Component {
    state = {
        isMapVisible: false,
        isReportVisible: false,
    }

    reportDataSource = {
        labels: ["May", "June", "July", "August", "September", "October", "November"],
        datasets: [
            {
            label: "Income Growth",
            data: [345, 654, 739, 1034, 1281, 1575, 2027],
            backgroundColor: ["#d1f542", "#96f542", "#42f5a4", "#42f5ec", "#42b9f5", "#426cf5", "#7842f5"],
            },
        ],
    }

    toggleMap = () => {
        this.setState({isMapVisible: !this.state.isMapVisible})
    }

    reportCallback = () => {};

    handleReportView = () => {
        this.reportCallback();
        this.setState({ isReportVisible: true });
    }

    render() {
        const { isMapVisible, isReportVisible } = this.state;
        return (
            <div className="parent__container">
                {isReportVisible ? (
                        <ChildThree childThreeCallback={cb => this.reportCallback = cb} reportDataSource={this.reportDataSource}/>
                ) : (
                    <React.Fragment>
                        <ChildOne toggleMap={this.toggleMap} />
                        <ChildTwo isMapVisible={isMapVisible} />
                        <div className="report__preview-container">
                            <button
                                onClick={() => this.handleReportView()}
                                className="view-button"
                            >
                                View the Report
                            </button>
                            <div className="report__thumbnail-wrap">
                            <img className="report__thumbnail" src="./assets/report.jpg" alt="thumbnail" />
                            </div>
                        </div>
                    </React.Fragment>
                )}
            </div>
        )
    }
}