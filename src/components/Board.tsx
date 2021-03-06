import * as React from "react";
import Square from "./Square"
import Subgrid from "./Subgrid"

interface IState {}

interface IProps {}

class Board extends React.Component<IProps, IState>{
  constructor(props: IProps){
    super(props);
  }

    render(){
      const rows = [1,2,3,4,5,6,7,8,9];
      const columns = [1,2,3,4,5,6,7,8,9];

      return(
        <div className="board-container">
              {rows.map(row => columns.map(col => <Square value={row}
              className={`square square-${row}-${col}`}
              id={`s-${row}-${col}`}
              key={col}
              />))
            }
        </div>
      );
    }
  }
  
  export default Board;