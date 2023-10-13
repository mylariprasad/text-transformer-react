import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React, { useState } from 'react'

import{
  BrowserRouter as Router,
  Routes,
  Route,
  Link
}from "react-router-dom";

function App(){
  const[mode,setMode] = useState('light');
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
      setAlert(null);
      },2000);
  }
  const toggleMode=()=>{
    if(mode === 'light'){
      setMode('dark')
      document.body.style.backgroundColor="#2e3338";
      showAlert("Dark mode is enabled","success")
    }
    else{
      setMode('light')
      document.body.style.backgroundColor="white";
      showAlert("Light mode is enabled","success")
    }
  }
  return (
    <>
    <Router>
    <Navbar title="TextUtils" mode={mode} toggleMode={toggleMode} About="About TextUtils"/>
    <Alert alert={alert}/>
    <div className="container my-3">
    <Routes>
        <Route path="/About" element={<About mode={mode}/>} />
        <Route path="/text-transformer-react" element= {<TextForm heading="Enter your text to analyze" showAlert={showAlert} mode={mode}/>} />
    </Routes>
    </div>
    </Router>
    </>
  );
}


export default App;