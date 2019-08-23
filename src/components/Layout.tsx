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
            <h1> Sudoku </h1>
          </div> 
        </header>
        <nav> Nav</nav>
        <main>
          <div className="game-container">
            <Board />
            <StartButton />
          </div>
        </main>
        <footer>
          <div className="footer-text">
            Made by Stephanie Cure
          </div>
        </footer>
      </div>
    );
  }
}

export default Layout;