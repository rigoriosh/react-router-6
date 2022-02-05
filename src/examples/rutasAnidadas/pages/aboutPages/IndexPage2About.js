import React from 'react';
import { useNavigate } from 'react-router-dom';

export const IndexPage2About = () => {
    const navigate = useNavigate();
    return <div id='IndexPage2About' style={{backgroundColor:'beige'/* , color:'blue' */}}>
        <p>IndexPage2About</p>
        <button onClick={() => navigate("../page2AboutPage1", { replace: true })}>go page2AboutPage1</button>
      </div>;
};
