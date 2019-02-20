import * as React from "react";
import Square from "./Square"

class Board extends React.Component<{},{}>{
    render(){
      const rows = [0,1,2,3,4,5,6,7,8];
      const columns = [0,1,2,3,4,5,6,7,8];

      return(
        <div className="board-container">
              {rows.map(row => columns.map(col => <Square value={row} className={`square-${row}-${col}`} key={col}/>))}
        </div>
      );
    }
  }
  
  export default Board;