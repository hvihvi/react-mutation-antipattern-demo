import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return (
    <div>
      <h3>Example 1: props object mutation</h3>
      <Example1 />
      <h3>Example 2: instance mutation</h3>
      <Example2 />
    </div>
  );
};

const Example1 = () => {
  const msg = { val: "Hello World" };
  return (
    <div>
      <Display val={msg.val} />
      <Mutate msg={msg} />
    </div>
  );
};
const Display = ({ val }) => <div>{val}</div>;

const Mutate = ({ msg }) => (
  <button onClick={() => (msg.val = "lol")}>mutate</button>
);

class Message {
  val = "Hello World";

  setMessage(newVal) {
    this.val = newVal;
  }
}

const Example2 = () => {
  const instanceMsg = new Message();
  return (
    <div>
      <Display val={instanceMsg.val} />
      <MutateInstance instance={instanceMsg} />
    </div>
  );
};

const MutateInstance = ({ instance }) => (
  <button onClick={() => instance.setMessage("lol")}>mutate</button>
);

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
