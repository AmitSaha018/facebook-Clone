import React from 'react';
import './App.css';
import Header from './header/Header';
import Sidebar from './Sidebar/Sidebar';
import Feed from './Feed/Feed';
import Widgets from './Widgets/Widgets';
import Login from './Login/Login';
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (

        <>
      <Header/>

      <div className="app__body">
        <Sidebar/>
        <Feed/>
        <Widgets/>

       {/* Widgets */}
      </div>
        </>
      )}
      
    </div>
  );
}

export default App;
