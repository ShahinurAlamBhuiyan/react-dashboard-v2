import React from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar';
import Topbar from './components/Topbar/Topbar';
import Home from './pages/Home/Home';

function App() {
  return (
    <div>
       <Topbar />
       <div className="container">
         <Sidebar />
         <Home />
       </div>
    </div>
  );
}

export default App;
