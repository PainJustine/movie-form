import React, { Component } from "react";
import "./App.css";
import MovieForm from "./components/MovieForm";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieForm />
      </div>
    );
  }
}

export default App;
