import React, { Component } from "react";
import { Bar } from "react-chartjs-2";

export default class ChildThree extends Component {
  constructor(props) {
    super(props);
      props.childThreeCallback(() => {
        setTimeout(() => {
            this.setState({
                chartAsBase64: this.barChartReference.chartInstance.toBase64Image()
            });
    }, 100);
    });
  }
  state = {};

  doc = {
    background: "#fff",
    width: "100%",
    minHeight: "842px",
    padding: "25px",
    letterSpacing: "1px",
    fontFamily: "Roboto, sans-serif !important"
  };
  header = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 20px"
  };
  h2 = { color: "#a4a4a4", fontWeight: 700, letterSpacing: "2px" };
  logoWrap = { width: "200px", height: "40px" };
  logo = { width: "100%", height: "100%", objectFit: "cover" };
  hr = { background: "#a4a4a4" };
  base64 = { width: "100%" };

  render() {
    const { chartAsBase64 } = this.state;
    const { reportDataSource, handleGoBack, handlePrint, visible } = this.props;
    return (
        <div className={`report-hidden ${visible && "report-visible"} `}>
            <div className="report__buttons-container">
                <button onClick={() => handleGoBack()} className="report__back-btn">Go Back</button>
                <button onClick={() => handlePrint()} className="report__print-btn">Print</button>
            </div>
            <div id="report" style={this.doc}>
            <div style={this.header}>
                <div style={this.logoWrap}>
                <img
                    style={this.logo}
                    src="./assets/placeholder.png"
                    alt="logo"
                />
                </div>
                <h2 style={this.h2}>Yearly Report</h2>
            </div>
            <hr style={this.hr} />
            <div style={this.barChartWrap} id="canvasChart">
                <Bar
                data={reportDataSource}
                ref={reference => {
                    this.barChartReference = reference;
                }}
                options={{ legend: { display: false } }}
                />
            </div>
            {chartAsBase64 && (
                <img
                src={chartAsBase64}
                alt="chart"
                className="image-for-print"
                style={this.base64}
                />
            )}
            </div>
        </div>
    );
  }
}
