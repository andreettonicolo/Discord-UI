import React, { useReducer } from "react";
import Chat from "../Chat/Chat";


const initialChat = {
  //Imposto la home del app sul server Messaggi diretti
  name: "Nessuna chat",
  type: "text",
  messages: [],
};

function chatReducer(state, action) {
  switch (action.type) {
    case "SELECT_CHANNEL":
      return {
        ...state,
        name: action.payload.name,
        type: action.payload.type,
        messages: action.payload.messages,
      };
    default:
      return state;
  }
}

const Channels = (props) => {
  const [chatState, chatDispatch] = useReducer(chatReducer, initialChat);

  if (props.n_channels === 0) {
    return (
      <div className="channels">
        <button className="button-channel">Nessun messaggio</button>
      </div>
    );
  }

  return (
    <>
      <div className="channels">
        {props.channels.map((el) => {
          return (
            <button
              className="button-channel"
              onClick={() =>
                chatDispatch({
                  type: "SELECT_CHANNEL",
                  payload: {
                    name: el.name,
                    type: el.type,
                    messages: el.messages,
                  },
                })
              }
            >
              {el.name}
            </button>
          );
        })}
      </div>

      <Chat {...chatState} />
    </>
  );
};

export default Channels;
