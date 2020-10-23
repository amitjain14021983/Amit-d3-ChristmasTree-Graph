import React from "react";
import * as d3 from "d3";

class BarChart extends React.Component {
  xScale = d3
    .scaleBand()
    .domain(
      this.props.data.map((d) => {
        return d.year;
      })
    )
    .range([0, 600]);
  yScale = d3
    .scaleLinear()
    .domain([0, d3.max(this.props.data, (d) => d[this.props.value])]);

  render() {
    const data = this.props.data;
    // console.log("Barchart: ", data);
    return (
      // <h2>BarChart Component</h2>
      <g>
        {data.map((d) => {
          return (
            <text transform={`translate(${this.xScale(d.year)}, 200)`}>A</text>
          );
        })}
      </g>
    );
  }
}

export default BarChart;
