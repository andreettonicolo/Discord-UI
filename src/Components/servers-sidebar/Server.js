import React from "react";

const Server = (props) => {
  const { server_name, notifiche, members, img } = props;
  return (
    <>
    <div className="server">
      <img src={img} className='server-img '/>
    </div>


    
    </>
  );
};

export default Server;
