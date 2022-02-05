import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NoMatch } from '../example4/NoMatch';
import { Home } from './pages/Home';

export const App = () => {
  return <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>;
};
