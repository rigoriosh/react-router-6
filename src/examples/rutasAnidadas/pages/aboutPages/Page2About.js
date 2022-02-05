import React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';

export const Page2About = () => {
    const navigate = useNavigate();

  return <div id='Page2About' style={{backgroundColor:'aquamarine'/* , color:'blue' */}}>
        <p>Page2About</p>
        <Outlet/>
        <button onClick={() => navigate("/about/page1About")}>go Page1About</button>
      </div>;
};
