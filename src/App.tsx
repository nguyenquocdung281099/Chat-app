import React, { useState } from "react";
import "./App.css";
import ListMessage from "src/component/ListMessage";
import ConversationInformation from "src/component/ConversationInformation";
import ContentMessage from "src/component/ContentMessage";
import "emoji-mart/css/emoji-mart.css";

function App() {
  const [showSearchMessage, setShowSearchMessage] = useState(false);
  return (
    <div className="App">
      <ListMessage />
      <ContentMessage showSearchMessage={showSearchMessage} onCloseSearchMessage={() => setShowSearchMessage(false)} />
      <ConversationInformation onToggleSearchMessage={() => setShowSearchMessage((s) => !s)} />
    </div>
  );
}

export default App;
