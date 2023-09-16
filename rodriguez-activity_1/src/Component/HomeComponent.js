import React from "react";
import "../App.css";

function HomeComp() {
  return (
    <div style={{ background: "#333", color: "#fff", padding: "20px" }}>
      <h1>Joshua's React Website</h1>
      <div className="square-container">
        <img
          src="/Profile.jpg"
          alt="Joshua's Profile"
          className="square-image"
        />
      </div>

      <h3>HERE's JOSHY!</h3>
    </div>
  );
}

export default HomeComp;
