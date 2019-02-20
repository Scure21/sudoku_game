import * as React from "react";
import "../styles/index.scss";
import Board from "./Board"
import StartButton from "./StartButton";

interface IProps {
  compiler: string,
  framework: string,
  bundler: string
}

class Layout extends React.Component{
  render(){
    return(
      <div className="App">
        <div className="title">
          <h1> Sudoku Board </h1>
        </div>
        <Board />
        <StartButton />
      </div>
    );
  }
}

export default Layout;