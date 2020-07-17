import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

class App extends React.Component {
  ///needed if initializing state in constructor
  // constructor(props) {
  //   super(props);
  //
  // this.state = { lat: null, errorMessage: "" };
  // }

  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({ lat: position.coords.latitude }),
      (err) => this.setState({ errorMessage: err.message })
    );
  }

  renderContent() {
    let content;
    this.state.errorMessage
      ? (content = <div>Error: {this.state.errorMessage}</div>)
      : this.state.lat
      ? (content = <SeasonDisplay lat={this.state.lat} />)
      : (content = <Spinner message="Please accept location request" />);
    return content;
  }

  // /A render that let me render the latitude, an error message or loading if neither
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
