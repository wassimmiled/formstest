import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FormCreater from './components/FormCreater';
import NotFound from './components/NotFound';
import Home from './components/Home';

import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import { Routes  } from 'react-router-dom';

function App() {
  return (
    <>
    <Router>
      
        <Routes>
          <Route exact path="/" element={<Home/>}/> 
          <Route exact path="/corporate/createforml" element={<FormCreater/>}/>
          <Route path="*" element={<NotFound/>}/>

        </Routes>
      
    </Router></>)
}

export default App;
