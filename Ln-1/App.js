const parent = React.createElement(
  "div",
  { id: "parent" },
  "I'm parent",
  React.createElement("div", { id: "child" }, "I'm child", [
    React.createElement("h2", { id: "subchild" }, "I'm Sub child"),
    React.createElement("h3", { id: "subchild" }, "I'm Sub child "),
  ]),
  React.createElement("p", { id: "para" }, "I'm para"),
  [
    React.createElement("span", { id: "span1" }, "I'm span1"),
    React.createElement("li", { id: "span2" }, "I'm span2"),
  ]
);
const n1 = React.createElement("h1", { id: "head" }, "Hello la React"); //{}-is for attributes
console.log(n1);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(n1);
root.render(parent);
