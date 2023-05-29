import React from "react";
const ChatName = ({name}) => {
  if (name === "Default Name") {
    return <div className="chat-name"></div>;
  } else {
    return (
      
        <div className="chat-name">{name}</div>
      
    );
  }
};

export default ChatName;
