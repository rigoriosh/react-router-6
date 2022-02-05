import React from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';


export const Layout = () => {
  const navigate = useNavigate();
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h5>Welcome to the Home app!</h5>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/test">Test</Link>
          </li>
        </ul>
      </nav>

      <hr />
      {
        location.pathname !== '/' && <button onClick={() => navigate(-1)}>go back</button>
      }
      <Outlet />
    </div>
  );
};
