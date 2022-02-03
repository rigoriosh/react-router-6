import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NoMatch } from '../../example4/NoMatch';
import { About } from './About';
import { Home } from './Home';
import { Layout } from './Layout';

export const HomeApp = () => {
    return (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      );
};
