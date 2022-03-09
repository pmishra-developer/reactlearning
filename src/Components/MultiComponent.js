function Address(props) {
  return <>I Live at {props.address}</>;
}

function Car(props) {
  return <>I own a {props.brand} Car.</>;
}

function Person(props) {
  const carName = "Mercedes Benz C Class";
  const address = "84, Green Lane, Coventry, CV36DE";
  return (
    <h4>
      My Name is: {props.name}. <Address address={address} />
      <br />
      <Car brand={carName} />
    </h4>
  );
}

function MultiComponent(params) {
  return (
    <div>
      <h3 style={{ textDecorationLine: "underline" }}>
        Multi Component Sample
      </h3>
      <Person name={"Pankaj Mishra"} />
    </div>
  );
}

export default MultiComponent;
