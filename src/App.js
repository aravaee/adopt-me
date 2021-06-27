/* global React ReactDOM */

// ^^^ Since React is imported via a link,
// we can tell eslint to ignore React and ReactDOM

const Pet = (props) => {
  return React.createElement("div", {}, [
    React.createElement("h2", {}, props.name),
    React.createElement("h3", {}, props.animal),
    React.createElement("h3", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement("div", {}, [
    React.createElement("h1", { id: "my-brand" }, "Adopt Me!"),
    React.createElement(Pet, {
      name: "Luna",
      animal: "Dog",
      breed: "Havanese",
    }),
    React.createElement(Pet, {
      name: "Pepper",
      animal: "Bird",
      breed: "Budgie",
    }),
    React.createElement(Pet, { name: "Sudo", animal: "Dog", breed: "Husky" }),
  ]);
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
