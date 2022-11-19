import './App.css'
import Homepage from "./components/homepage/homepage"
import Login from "./components/login/login"
import Register from "./components/register/register"
import Temp from "./components/register/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';

function App() {

  const [ user, setLoginUser] = useState({})
  return (
    <>
    
    <div className="App">
      
                  
      <Router>
                  
          <Route exact path="/">
            {
               user && user._id ? <Homepage setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
              //              user && user._id ? <Temp></Temp> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
          <Route path="/register">
            <Register />
          </Route>
        
      </Router>
    </div>
    </>
  );
}

export default App;
