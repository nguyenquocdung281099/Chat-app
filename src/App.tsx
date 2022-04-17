import React from "react";
import "./App.css";
import ListMessage from "component/ListMessage";
import ConversationInformation from "component/ConversationInformation";
import ContentMessage from "component/ContentMessage";

function App() {
  return (
    <div className="App">
      <ListMessage />
      <ContentMessage/>
      <ConversationInformation />
    </div>
  );
}

export default App;
