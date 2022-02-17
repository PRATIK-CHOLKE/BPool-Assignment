import React from 'react';
import FileUpload from './Components/FileUpload';
// import MockData from './Components/MockData';
 import Login from './Components/Login';
// import { Route ,Routes, Router} from 'react-router-dom'

import './App.css';

const App = () => (
  
  <div className="container mt-4">
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> Battery Pool File Upload Assignment
    </h4>

   <FileUpload/>
   
  </div>
);

export default App;
