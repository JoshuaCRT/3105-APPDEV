import React from 'react';
import Register from '../Component/Register';
import SkeletonComponent from "../Component/SkeletonComponent";
import { useEffect, useState } from 'react';

function Layout3({ children }) {
  
  const divStyle = {
    backgroundColor: 'black',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',

  };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timeOutId = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timeOutId);
  }, [setIsLoading]);

  return (

    
    <div style={divStyle}>
      {isLoading ? <SkeletonComponent /> : (
        <div>
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
            )}

    </div>
  );
}

export default Layout3;
