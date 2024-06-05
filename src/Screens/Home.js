import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import Invests from './Invests';
import Expenses from './Expenses';
import Transactions from './Transactions';
export default function Home() {
  return (
    <div className="d-flex">
       
      <Nav />
      <div className="main-content">
         
         <div>
             <h1 className='text-center'>Welcome to expenseTracker</h1>
             </div>
        
        <Routes>
          <Route path="/inv" element={<Invests />} />
          <Route path="/exp" element={<Expenses />} />
          <Route path="/transactions" element={<Transactions />} />
        </Routes>
      </div>
    </div>
  );
}
