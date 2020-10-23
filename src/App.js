import React from "react";
import * as d3 from "d3";
import BarChart from "./BarChart";

import "./styles.css";

class App extends React.Component {
  state = { data: null };

  componentDidMount() {
    d3.tsv("data.tsv", ({ Year, Real_trees, Fake_trees }) => {
      return {
        year: Number(Year),
        real_trees: Number(Real_trees),
        fake_trees: Number(Fake_trees)
      };
    }).then((data) => {
      this.setState({ data: data });
      // console.log(this.state);
    });
  }

  render() {
    const data = this.state.data;
    // console.log(data);

    return (
      <div className="App">
        <h1>Amit's d3 code-1: Christmas Trees Graph</h1>
        <h2>Start editing to see some magic happen!</h2>
        {/* <BarChart data={data} key="real_trees" /> */}
        <svg width="800" height="600">
          {data ? <BarChart data={data} value="real_trees" /> : null}
        </svg>
      </div>
    );
  }
}

export default App;
