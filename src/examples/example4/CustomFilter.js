import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './Layout';
import { NoMatch } from './NoMatch';
import { SneakerGrid } from './SneakerGrid';
import { SneakerView } from './SneakerView';

export const CustomFilter = () => {
  return <BrowserRouter>
    <div>
      <h6>Custom Filter Link Example</h6>

      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<SneakerGrid />} />
          <Route path="/sneakers/:id" element={<SneakerView />} />
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
    </div>
  </BrowserRouter>;
};
