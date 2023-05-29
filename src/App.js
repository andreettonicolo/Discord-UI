import React from "react";
import "./App.css";
import Servers from "./Components/servers-sidebar/Servers.js";
import UserLoggato from "./Components/UserLog/UserLoggato";

function App() {
  return (
    <div className="App">
      <div className="app-title">
        <div className="title">Discord</div>
      </div>
      
      <Servers />  {/*Richiamo la componente Servers per la gestione di tutti i server */}

      <UserLoggato />
      
    </div>
  );
}

export default App;
