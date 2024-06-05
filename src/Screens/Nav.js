import React from 'react';
import { Link } from 'react-router-dom';

export default function Nav() {
  return (
    <div>
      <div className='d-flex'>
        <nav className="navbar navbar-light bg-light">
          <div className='d-flex flex-column'>
            <div className='px-5'>
              <Link className="navbar-brand" to="#">
                <img src="https://plus.unsplash.com/premium_photo-1661914978519-52a11fe159a7?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" width="100" height="100" alt="" className='rounded-circle' />
              </Link>
              <div className='d-flex pt-3'>
                <div className='me-3'>
                  <Link className='navbar-brand' to="#"><p className='fs-6'>Login</p></Link>
                </div>
                <div>
                  <Link className='navbar-brand' to="#"><p className='fs-6'>Signup</p></Link>
                </div>
              </div>
            </div>
            <div className='px-5 py-3'>
              <div className='p-2'>
                <Link to="/" className="navbar-brand"><p><strong>Home</strong></p></Link>
              </div>
              <div className='p-2'>
                <Link to="/exp" className="navbar-brand"><p><strong>Expensis</strong></p></Link>
              </div>
              <div className='p-2'>
                <Link to="/inv" className="navbar-brand"><p><strong>Invests</strong></p></Link>
              </div>
              <div className='p-2'>
                <Link to="/transactions" className="navbar-brand"><p><strong>Transactions</strong></p></Link>
              </div>
              <div className='p-2'>
                <Link to="/settings" className="navbar-brand"><p><strong>Settings</strong></p></Link>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
}
