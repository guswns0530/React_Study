import React from "react";
import { connect } from "react-redux";
import { decreaseAsync, increaseAsync } from "../modules/counter";
import Counter from "../components/Counter";

const CounterContainer = ({ number, increase, decrease }) => {
  return (
    <Counter number={number} onDecrease={decrease} onIncrease={increase} />
  );
};

export default connect(
  (state) => ({
    number: state.counter,
  }),
  {
    increase: increaseAsync,
    decrease: decreaseAsync,
  }
)(CounterContainer);
