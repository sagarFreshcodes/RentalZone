import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.scss";
import App from "./App";
import "./i18n";
import reportWebVitals from "./reportWebVitals";
import "./../node_modules/rsuite/dist/rsuite.min.css";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import store from "./Redux_Store/store";
import { Provider } from "react-redux";
const Root = () => { 
  return (
    <div className="App">
      <Provider store={store}>
        <App />
      </Provider>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Root />);

// ReactDOM.createRoot(<App />, document.getElementById("root"));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
