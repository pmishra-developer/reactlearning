import React, { useState } from "react";
import { Button } from "react-bootstrap";
import MultipleState from "./MultipleStateComponent";

const CounterHooks = (props) => {
  const [count, setCount] = useState(0);

  //   const incrementCounter = () => {
  //     setCount(count + 1);
  //   };

  //   const decrementCounter = () => {
  //     setCount(count - 1);
  //   };

  return (
    <React.Fragment>
      <h4>Use State Example</h4>
      <Button variant="success" onClick={() => setCount(count + 1)}>
        Increment
      </Button>
      <span style={{ marginLeft: "20px", marginRight: "20px" }}>{count}</span>
      <Button variant="danger" onClick={() => setCount(count - 1)}>
        Decrement
      </Button>

      <hr />
      <MultipleState passedAge={20} />
    </React.Fragment>
  );
};

export default CounterHooks;
