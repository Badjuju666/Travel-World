import React from 'react'
import './App.css';
import Navbar from './pages/components/Navbar/Navbar'
import SignIn from './pages/components/Sign/in'
import SignUp from './pages/components/Sign/up'
import Delete from './pages/components/Sign/delete'
import LA from './pages/components/Cities/LA'
import SF from './pages/components/Cities/SF'
import LV from './pages/components/Cities/LV'
import All from './pages/components/Cities/All'

function App() {
  return (
    <div className="App">
      <Navbar />
      <SignIn />
      <SignUp />
      <Delete />
      <All />
      <LA />
      <SF />
      <LV />
    </div>
  );
}

export default App;
