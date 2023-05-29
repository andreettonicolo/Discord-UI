import React from "react";
const PositionName = ({name}) => {
  if (name === "Default Name") {
    return <div className="position-name"></div>;
  } else {
    return (
      
        <div className="position-name">{name}</div>
      
    );
  }
};

export default PositionName;
