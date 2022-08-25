import { useEffect } from 'react';
import './App.css';
import Header from './components/header/Header';
import Sidebar from './components/Sidebar/Sidebar';
import Calendar from './pages/Calendar';

function App() {
 
  
  return (
    <div className="">
      <Header />
      <div className="grid grid-cols-5  ">
        <div className="col-span-1 ">
          <Sidebar />
        </div>
        <div className="col-span-4 ">
          <Calendar />
        </div>
      </div>
      </div>
      
  );
}

export default App;
