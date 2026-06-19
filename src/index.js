import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

function Button(props) {
  return(
    <button style = {{backgroundColor: props.color, padding: "10px 20px", border: "none", borderRadius: "5px", color: "white", cursor: "pointer"}}>
      {props.label}
    </button>
  )
}


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();