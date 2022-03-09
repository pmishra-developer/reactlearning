import React from "react";

const PlaceComponent = (props) => {
  return (
    <div>
      <label>-{props.name}</label>
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
        <h3 style={{ textDecorationLine: "underline" }}>
          Class Component Sample
        </h3>
        <h4>
          My Name is {this.props.name} and My Age is {this.props.age}
        </h4>
        <h4>
          Message1: {this.props.messages.message1}
          <br />
          Message2: {this.props.messages.message2}
        </h4>
        <span>Our Offfices are at:</span>
        {locations.map((item) => (
          <PlaceComponent {...item} />
        ))}
      </div>
    );
  }
}
