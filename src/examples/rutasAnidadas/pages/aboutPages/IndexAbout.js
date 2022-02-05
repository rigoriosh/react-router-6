import React from 'react';
import { Link } from 'react-router-dom';

export const IndexAbout = () => {
  return <div id='IndexAbout' style={{backgroundColor:'antiquewhite'/* , color:'blue' */}}>
        <p>IndexAbout</p>
        <p><Link to="page1About">Pagina 1 About</Link></p>
        <p><Link to="page2About">Pagina 2 About</Link></p>
      </div>;
};
