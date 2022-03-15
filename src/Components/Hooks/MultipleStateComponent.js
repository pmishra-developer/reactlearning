import React, { useState } from "react";
import { Button } from "react-bootstrap";

//prettier-ignore

const MultipleState = (props) => {
  const [age, setAge] = useState(props.passedAge);
  const [favColour, setfavColour] = useState("Black");

  const handleAge = () => setAge(age + 1);

  const handlefavColour = () => {
    if (favColour === "Red") setfavColour("Black");
    else setfavColour("Red");
  };

  return (
    <div>
      <h3>Multiple State Vars Example:</h3>
      <p>Today I am {age} Years of Age</p>
      <p>My Favorite Colour is: {favColour}</p>
      <div>
        <Button variant="primary" onClick={handleAge}> Get older! </Button>
        <Button variant="success" style={{ width: 200, marginLeft: 10 }} onClick={handlefavColour}>
          Change Fav Colour!
        </Button>
      </div>
    </div>
  );
};

export default MultipleState;
