import React from 'react';
import Component1 from '../Component/Component1'; // Import Component1


function Layout1({ children }) {
  const divStyle = {
    backgroundColor: 'darkgreen',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  };
  return (
    <div style={divStyle}>
      <main>
        <Component1 />
        <p></p>
        {children}
      </main>
      <footer>
      &copy; Joshua Rodriguez
      </footer>
    </div>
  );
}

export default Layout1;
