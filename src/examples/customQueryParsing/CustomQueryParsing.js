import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NoMatch } from '../example4/NoMatch';
import { Home } from './Home';

export const CustomQueryParsing = () => {
  return <BrowserRouter>
    <div>
      <h5>Custom Query Parsing Example</h5>

      <p>
        Each time a field in the form below changes, the URL is updated with a
        serialized version of the form's values. To see the effect this has,
        manipulate some fields in the form. Then, copy the URL in the address
        bar and paste it into a new tab in your browser to see the form in the
        exact same state as when you left it!
      </p>

      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  </BrowserRouter>;
};
