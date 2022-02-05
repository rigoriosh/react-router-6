import React, { useState } from 'react';
import { Link, Outlet } from 'react-router-dom';

export const Page2AboutPage1 = () => {
    const [dataToTest, setDataToTest] = useState(0);
  return <div id='page2AboutPage1' style={{backgroundColor:'bisque'/* , color:'blue' */}}>
      <p>Page2AboutPage1</p>
      <Link
        style={{ display: "block", margin: "1rem 0" }}
        to={`${dataToTest}`}
      >
      testing
    </Link>
    <Outlet/>
  </div>;
};
