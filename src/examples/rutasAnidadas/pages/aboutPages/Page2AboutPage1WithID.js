import React from 'react';
import { Outlet } from 'react-router-dom';

export const Page2AboutPage1WithID = () => {
  return <div id='Page2AboutPage1WithID' style={{backgroundColor:'cadetblue'/* , color:'blue' */}}>
      <p>Page2AboutPage1WithID</p>
      <Outlet/>
  </div>;
};
