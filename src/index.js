import React from "react";
import ReactDOM from "react-dom";
import Editor from "./TextEditor/Editor";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <h1>Text Editor</h1>
      <Editor markdown={console.log} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
