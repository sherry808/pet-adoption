const Pet = (props) => {
  // Expects parent to give some properties. Gives Flexibility.
  return React.createElement("div", {}, [
    React.createElement("h1", {}, props.name),
    React.createElement("h2", {}, props.animal),
    React.createElement("h2", {}, props.breed),
  ]);
};

const App = () => {
  return React.createElement(
    // component has to return a markup.
    "div", // What kind of element we are adding here. We give a string so it becomes a tag.
    {}, // Whatever attributes we want to add to this html element. Can be null too. Optional
    [
      React.createElement("h1", {}, "Adopt Me"), //Child Nested inside div we have an h1 tag here. Optional
      React.createElement(Pet, {
        name: "Charlie",
        animal: "Dog",
        breed: "Cocker Spaniel Indie",
      }),
      React.createElement(Pet, {
        name: "Shifu",
        animal: "Dog",
        breed: "Shitzu",
      }),
      React.createElement(Pet, {
        name: "Ice",
        animal: "Dog",
        breed: "Hmm",
      }),
    ]
  );
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(App)); // We give a component here, if we put text it renders the tag.
