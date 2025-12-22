import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


import Card from "./Card";

function App() {



  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-900">
      <Card content = "Advance Dev Platform" btnText = "Let's Go" />
      <Card content = "Advanced DataBase Platform" btnText = "Get Ready"/>
      {/* <Card content = "Advanced DataBase Platform"/> if btnText not passed, use --> function Card({content,btnText="Visit me"}) { */}
    </div>
  );
}

export default App;

