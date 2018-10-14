import * as React from "react";
import { connect } from "react-redux";
import CounterControl from "../../components/CounterControl/CounterControl";
import CounterOutput from "../../components/CounterOutput/CounterOutput";
import * as actionTypes from "../../store/actions";

class Counter extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
  }
  public counterChangedHandler = (action: any, value?: any) => {
    switch (action) {
      case "inc":
        this.setState((prevState: any) => {
          return { counter: prevState.counter + 1 };
        });
        break;
      case "dec":
        this.setState((prevState: any) => {
          return { counter: prevState.counter - 1 };
        });
        break;
      case "add":
        this.setState((prevState: any) => {
          return { counter: prevState.counter + value };
        });
        break;
      case "sub":
        this.setState((prevState: any) => {
          return { counter: prevState.counter - value };
        });
        break;
    }
  };

  public render() {
    return (
      <div>
        <CounterOutput value={this.props.ctr} />
        <CounterControl
          label="Increment"
          clicked={this.props.onIncrementCounter}
        />
        <CounterControl
          label="Decrement"
          clicked={() => this.counterChangedHandler("dec")}
        />
        <CounterControl
          label="Add 5"
          clicked={() => this.counterChangedHandler("add", 5)}
        />
        <CounterControl
          label="Subtract 5"
          clicked={() => this.counterChangedHandler("sub", 5)}
        />
      </div>
    );
  }
}
const mapStateToProps = (state: any) => {
  return {
    ctr: state.counter
  };
};
const mapDispatchToProps = (dispatch: any) => {
  return {
    onIncrementCounter: () => dispatch({ type: actionTypes.INCREMENT })
  };
};

export default connect<any, any>(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
