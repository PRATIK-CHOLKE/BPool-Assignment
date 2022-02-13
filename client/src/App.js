import React from 'react';
import FileUpload from './Components/FileUpload';
import MockData from './Components/MockData';
import './App.css';

const App = () => (
  <div className="container mt-4">
    <h4 className='display-4 text-center mb-4'>
      <i className='fab fa-react' /> Battery Pool File Upload Assignment
    </h4>

   <FileUpload/> 
   <MockData/>
  </div>
);

export default App;
