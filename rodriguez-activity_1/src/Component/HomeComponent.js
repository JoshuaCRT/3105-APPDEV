import React from 'react';
import '../App.css';
function HomeComp({ children }) {
  return (
    <div>
      <header>
        <h1>Joshua's Website</h1>
        <div class="square-container"> 
        <img src="/Profile.jpg" alt="Joshua's Profile Picture" class="square-image" />
        </div>
      </header>
      <h3>HERE's JOSHY!</h3>
    </div>
  );
}

export default HomeComp;
