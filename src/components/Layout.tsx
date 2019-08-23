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
      <div className="layout">
        <header> 
          <div className="title">
            <h1> Sudoku Board </h1>
          </div> 
        </header>
        <nav> Nav</nav>
        <main>
          <div className="game-container">
            <Board />
            <StartButton />
          </div>
        </main>
        <footer>Footer</footer>
      </div>
    );
  }
}

export default Layout;