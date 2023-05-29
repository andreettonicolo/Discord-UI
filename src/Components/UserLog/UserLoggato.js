import React, { useState } from "react";
import { ReactSVG } from "react-svg";
import LoggedUser from "./LoggedUser";
import { BsFillMicFill, BsFillMicMuteFill } from "react-icons/bs";
import { MdHeadsetOff, MdHeadset } from "react-icons/md";

const UserLoggato = () => {
  const { username, img } = LoggedUser;

  const [mic, setMic] = useState(true);
  const [headset, setHeadset] = useState(true);

  console.log(username);
  return (
    <div className="user-loggato">
      <img src={img} className="user-loggato-img" />
      <p>{username}</p>

      <button className="user-loggato-btn" onClick={()=>setMic(!mic)}>
        {mic && <BsFillMicFill size={17} /> || <BsFillMicMuteFill size={17} />}
      </button>

      <button className="user-loggato-btn" onClick={()=>setHeadset(!headset)}>
        {headset && <MdHeadset size={20} /> || <MdHeadsetOff size={20}/>}
      </button>
    </div>
  );
};

export default UserLoggato;
