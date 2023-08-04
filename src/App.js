import logo from "./logo.svg";
import "./App.css";
import IncrementButton from "./component/IncrementButton";
import DecrementButton from "./component/DecrementButton";
import { useState } from "react";
import { Provider, useSelector } from "react-redux";
import store from "./redux/store";

function App() {
  // const [value, updateValue] = useState(0);
  const value = useSelector((state) => state.val);
  return (
    // <Provider>
    <div className="App">
      <IncrementButton />
      {value}
      <DecrementButton />
    </div>
    // </Provider>
  );
}

const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default AppWrapper;
