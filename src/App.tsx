import React from "react";
import "./App.css";
import ListMessage from "component/ListMessage";
import ConversationInformation from "component/ConversationInformation";

function App() {
  return (
    <div className="App">
      <ListMessage />
      <ConversationInformation />
    </div>
  );
}

export default App;
