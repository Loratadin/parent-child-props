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

    handleGoBack = () => {
        this.setState({ isReportVisible: false });
    }

    handlePrint = () => {
        const component = document.getElementById("report");
        document.getElementById("canvasChart").style.display = "none";
        const iframe = document.createElement("iframe");
        iframe.setAttribute("title", "report");
        iframe.setAttribute("id","report");
        iframe.setAttribute("style", "height: 0px; width: 0px; position: absolute;");
        document.body.appendChild(iframe);
        const content = iframe.contentWindow;
        content.document.open();
        content.document.write(component.innerHTML);
        content.document.close();
        content.focus();
        content.print();
       document.getElementById("canvasChart").style.display = "block";
    }

    render() {
        const { isMapVisible, isReportVisible } = this.state;
        return (
            <div className="parent__container">
                <ChildThree
                    visible={isReportVisible}
                    childThreeCallback={cb => this.reportCallback = cb} reportDataSource={this.reportDataSource}
                    handleGoBack={this.handleGoBack}
                    handlePrint={this.handlePrint}
                />
                {!isReportVisible && (
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