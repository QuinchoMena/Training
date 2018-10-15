import React, { Component } from 'react';
import '../style/agents.scss';
const URL_JSON = "https://api.myjson.com/bins/uptto";


class Agents extends Component {
  constructor() {
    super();
    this.state = { data: {} };
  }
  componentDidMount() {
    fetch(URL_JSON)
      .then(response => response.json())
      .then(dataJson => this.setState({ data: dataJson }));
  }
  render() {
    if (this.state.data.companies) {
      return (
        <div className = "boxAgents">
          {this.state.data.companies.map((person, i) => (
            <Box key={i} data={person} />
          ))}
        </div>
      );
    }
    return <div className = "boxAgents" />;
  }
 }

export default Agents;