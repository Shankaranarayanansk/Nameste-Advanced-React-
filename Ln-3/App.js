import React from "react";
import ReactDOM from "react-dom/client";

const Elem = (<p>memo </p>)
const ReactElement = <h1>hello la <span>{Elem}</span> </h1>;

const Heading = () => {
  return <p>Paratag</p>;
};
const Title = () => (
  
  <h1>
    hello ala
    {7+8}
    {ReactElement}// rendering react element
    <Heading />
  </h1>
)
const Tit = <span>
    <Title/>
</span>


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Tit />);
