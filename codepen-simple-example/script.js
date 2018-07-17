// Example 1
function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
}

ReactDOM.render(<Person name="Andra" age="25"/>, document.querySelector("#p1"));
ReactDOM.render(<Person name="Allan" age="28"/>, document.querySelector("#p2"));

//Example 2
function Person(props) {
  return (
    <div className="person">
      <h1>{props.name}</h1>
      <p>{props.age}</p>
    </div>
  );
}
var app = (
  <div>
    <Person name="Andra" age="25" />
    <Person name="Allan" age="28"/>
  </div>
);

ReactDOM.render(app, document.getElementById("app"));
