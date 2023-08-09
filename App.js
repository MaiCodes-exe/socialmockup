
import React from 'react';
import SideBar from './sidebar';
import Feed from './feed';
import RightBar from './rightbar';
import Footer from './footer';



function App() {
  return (
    <div>
      <SideBar></SideBar>
      <Feed></Feed>
      <RightBar></RightBar>
      <Footer></Footer>
    </div>
  );
}

export default App;