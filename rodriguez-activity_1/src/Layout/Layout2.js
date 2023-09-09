import React from 'react';
import Component2 from '../Component/Component2'; // Import Component2

function Layout2({ children }) {
  
  const divStyle = {
    backgroundColor: 'darkred',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };
  return (

    
    <div style={divStyle}>
      <main>
        <Component2 /> 
        {children}
      </main>
      <footer>
      &copy; TexkRose
      </footer>
    </div>
  );
}

export default Layout2;
