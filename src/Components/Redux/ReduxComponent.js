import React from "react";

const ReduxComponent = () => {
  // todo: select from store
  const counter = 6;

  const updateValue = (incr) => {
    const toAdd = incr ? 1 : -1;
    // todo dispatch action to update counter
  };

  return <div style={{ display: "flex" }}>I am a Redux Component</div>;
};

export default ReduxComponent;
