import React from "react";

const PlaceComponent = (props) => {
  return (
    <div>
      <h4>Our Office is at {props.name}</h4>
    </div>
  );
};

export default class ClassComponent extends React.Component {
  constructor(props) {
    super();
  }

  render() {
    const locations = [
      { id: 1, name: "Holborn" },
      { id: 2, name: "Coventry" },
      { id: 3, name: "Manchestor" },
      { id: 4, name: "Birmigham" },
    ];

    return (
      <div>
        <h3>Property Based Class Component Sample</h3>
        <h4>
          My Name is {this.props.name} and My Age is {this.props.age}
        </h4>
        <h4>
          Message1: {this.props.messages.message1}
          <br />
          Message2: {this.props.messages.message2}
        </h4>
        {locations.map((item) => (
          <PlaceComponent {...item} />
        ))}
      </div>
    );
  }
}
