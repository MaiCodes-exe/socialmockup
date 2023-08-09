
import React from 'react';
import SideBar from './sidebar';
import Feed from './feed';
import RightBar from './rightbar';
import Footer from './footer';
import NavBar from './navbar';



function App() {
  return (
    <div>
      <NavBar></NavBar>
      <SideBar></SideBar>
      <Feed></Feed>
      <RightBar></RightBar>
      <Footer></Footer>
    </div>
  );
}

export default App;