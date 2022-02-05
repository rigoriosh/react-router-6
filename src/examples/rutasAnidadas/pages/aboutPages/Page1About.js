import React from 'react';
import { useNavigate } from 'react-router-dom';

export const Page1About = () => {
    const navigate = useNavigate();
  return    <div id='Page1About' style={{backgroundColor:'aqua'/* , color:'blue' */}}>
                <p>Page1About</p>
                <button onClick={() => navigate("../page2About", { replace: true })}>go Page2About</button>
            </div>;
};
