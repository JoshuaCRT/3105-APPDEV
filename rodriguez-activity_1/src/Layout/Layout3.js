import React from 'react';
import Register from '../Component/Register';

function Layout3({ children }) {
  
  const divStyle = {
    backgroundColor: 'black',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',

  };
  return (

    
    <div style={divStyle}>
        <h1>Register</h1>
        <br/>
      <main>
      <Register /> 
        {children}
      </main>
      <footer>
      &copy; TexkRose
      </footer>
    </div>
  );
}

export default Layout3;
