import * as React from 'react';
import { Link } from 'react-router-dom';
import { useUser } from '../hooks/useUser';

function Navbar() {
  const { logout } = useUser();
  return (
    <nav className="sticky top-0 py-3 z-50 right-0 left-0 bg-white border-gray-200 shadow px-2 sm:px-4 rounded dark:bg-zinc-900">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div style={{ display: 'flex' }}>
          <ul>
            <li>
              <Link to="login">Login</Link>
            </li>
            <li>
              <Link to="tools">Tools</Link>
            </li>
            <li>
              <Link to="management">Management</Link>
            </li>
            <li>
              <Link to="home">Home</Link>
            </li>
          </ul>
        </div>
        <button onClick={logout}>logout</button>
      </div>
    </nav>
  );
}

export default Navbar;
