import * as React from "react";
import Square from "./Square"

interface IState {}

interface IProps {
    value: number;
    className: string;
    id: string;
    onClick?: () => void;
  }

class Subgrid extends React.Component<IProps, IState>{
  constructor(props: IProps){
    super(props);
  }

    render(){
      const rows = [1,2,3,4,5,6,7,8,9];
      const columns = [1,2,3,4,5,6,7,8,9];

      return(
        <div className="subgrid">
            {rows.map(row => columns.map(col =>
                <Square value={row}
                    className="square"
                    id={`${row}-${col}`}
                    key={col}
                />))}
        </div>
      );
    }
  }
  
  export default Subgrid;