function City(props) {
  return (
    <div>
      <span>City : {props.name}</span>
    </div>
  );
}

const CityComponent = (props) => {
  return props.cities.map((city) => {
    return <City key={city.id} name={city.name} />;
  });
};

const FunctionComponent = (props) => {
  const cities = [
    { id: 1, name: "London" },
    { id: 2, name: "Birmingham" },
    { id: 3, name: "Manchestor" },
    { id: 4, name: "New York" },
    { id: 5, name: "Paris" },
    { id: 6, name: "Tokyo" },
    { id: 7, name: "New Delhi" },
    { id: 8, name: "Dubai" },
  ];

  return (
    <div>
      <h3 style={{ textDecorationLine: "underline" }}>
        Property Based Function Component Sample
      </h3>
      <h4>
        My First Name is {props.firstName}, Last Name is : {props.lastName} and
        My Age is {props.age}
      </h4>
      <CityComponent cities={cities} />
    </div>
  );
};

export default FunctionComponent;
