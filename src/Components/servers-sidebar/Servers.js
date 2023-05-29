import React, { useReducer } from "react";
import ServersData from "./ServersData";
import Server from "./Server";
import PositionName from "../Navbar/PositionName";
import Channels from "../Channels/Channels";


const initialServer = {
  //Imposto la home del app sul server Messaggi diretti
  selectedServer: ServersData[0].server_name,
  name: ServersData[0].server_name,
  channels: ServersData[0].channels,
  n_channels: ServersData[0].channels.length,
};

function reducer(state, action) {
  //funzione reducer dove se action.type = SERVER SELECTED assegna il nome del azione al server
  //console.log(action.payload.channels.length);
  switch (action.type) {
    case "SERVER_SELECTED":
      return {
        selectedServer: action.name,
        name: action.name,
        channels: action.payload.channels,
        n_channels: action.payload.channels.length,
      };
    default:
      return state;
  }
}

const Servers = () => {
  //console.log(ServersData[0].server_name);

  const [state, dispatch] = useReducer(reducer, initialServer); //Setto uno stato iniziale

  const handleButtonClick = (name, payload) => {
    dispatch({ type: "SERVER_SELECTED", name, payload: payload }); //Ser richiamta la funzione handleButtonClick richiama reducer passando una azione SERVER_SELECTED, un nome al azione e un payload
  };

  return (
    <>
      <div className="servers">
        {ServersData.map((el) => {
          //scorre tutti i server
          return (
            <button
              key={el.id}
              onClick={() => handleButtonClick(el.server_name, el)} //Passa alla funzione handle... il nome del server e tutto ciò che riguarda ul server
            >
              <Server {...el} />
            </button> //Ogni bottone ha all'interno una componente react con l'immagine ecc del singolo server
          );
        })}
      </div>

      
      <PositionName name={state.name} />
      {/*Ritorna un div contenente PositionName a cui passa il nome del server selezionato */}

     <Channels {...state}/>
      
    </>
  );
};


export default Servers;
