import React from 'react';
import { Outlet } from 'react-router-dom';

export const About = () => {
  return <div id="About" style={{backgroundColor:'aliceblue', color:'blue'}}>
      About Rigo
      <Outlet/>
  </div>;
};
