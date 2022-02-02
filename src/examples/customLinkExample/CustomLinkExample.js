import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NoMatch } from '../example4/NoMatch';
import { About } from './About';
import { Home } from './Home';
import { Layout } from './Layout';

export const CustomLinkExample = () => {
  return <BrowserRouter>
    <div>
      <h4>Custom Link Example</h4>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>;
};
