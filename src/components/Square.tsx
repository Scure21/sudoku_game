import * as React from "react";

interface IState {
  class: string;
}
interface IProps {
  value: number;
  className: string;
  id: string;
  onClick?: () => void;
}

export default class Square extends React.Component<IProps, IState>{
  constructor(props: IProps) {
    super(props);
    this.state = {
      class: "off"
    }
    this.toggleClass = this.toggleClass.bind(this);
  }
  // method to toggle on and off the square class when clicked
  toggleClass(): void {
    let css = this.state.class === "on" ? "off" : "on";
    this.setState({ class: css });
  }
  render(){
    const props = this.props;
    return (
    <div className={props.className + " " + this.state.class}
      onClick={this.toggleClass}
      id={props.id}>
      {props.value}
    </div>)
  }
}
