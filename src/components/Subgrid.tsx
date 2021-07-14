import * as React from "react";
import Square from "./Square"

interface IState {}

interface IProps {
    value?: number;
    className?: string;
    id?: string;
    onClick?: () => void;
  }

class Subgrid extends React.Component<IProps, IState>{
  constructor(props: IProps){
    super(props);
  }

    render(){
      const rows = [1,2,3];
      const columns = [1,2,3];

      return(
        <div className="subgrid">
            {rows.map(row => columns.map(col => {
              let el = document.getElementById(`${row}-${col}`);
              el.className += `subgrid-${1}`
            } ))}
        </div>
      );
    }
  }
  
  export default Subgrid;