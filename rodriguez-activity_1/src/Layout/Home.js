import React from 'react';
import HomeComp from '../Component/HomeComponent';




function Home({ children }) {
 
  return (
    <div>
      <HomeComp/>
      <footer>
        &copy; Joshua Rodriguez
      </footer>
    </div>
  );
}

export default Home;
