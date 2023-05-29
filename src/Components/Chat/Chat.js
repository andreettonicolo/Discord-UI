import React from "react";
import Message from "./Message";
import ChatName from "../Navbar/ChatName";
import TextBar from "../Navbar/TextBar";
const Chat = (chatState) => {
  //const {channels} = props;
  const { messages, name } = chatState;


    return (
      <>

        <ChatName name={name}/>


        <div className="chat">
          {messages &&
            messages.map((el) => {
              return <Message {...el} />;
            })
            
            
            
            }

          <div className="chat">
            <p>Nessun messaggio</p>
          </div>
        </div>

        <TextBar/>
      </>
    );
  
};

export default Chat;
