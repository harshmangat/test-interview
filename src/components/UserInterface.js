import React from "react";
import "./UserInterface.css";

const UserInterface = () => {
  return (
    <div className="container">
      <div className="main">
        <h1>How did we do?</h1>
        <p>
          Please let us know how we did with your support request.All feedback
          is appreciated to help us improve our offering!
        </p>
      </div>
      <div className="circle-buttons">
        <input className="buttons" type="button" value="1" />
        <input className="buttons" type="button" value="2" />
        <input className="buttons" type="button" value="3" />
        <input className="buttons" type="button" value="4" />
        <input className="buttons" type="button" value="5" />
      </div>
      <button className="btn">Submit</button>
    </div>
  );
};

export default UserInterface;
