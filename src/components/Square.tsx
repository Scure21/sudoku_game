import * as React from "react";

interface IProps {
  value: number;
  className: string;
}

const Square: React.SFC<IProps> = (props) => (
        <div className={"square " + props.className}>
           {props.value}
        </div>
        );

  export default Square;