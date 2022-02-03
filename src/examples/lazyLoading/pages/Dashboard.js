import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { DashboardIndex } from './DashboardIndex';
import { DashboardLayout } from './DashboardLayout';
import { Messages } from './Messages';

const Dashboard = () => {
  // These routes are defined when this component is loaded on demand via
  // dynamic import() on the home page!
  return (
    <Routes>
      <Route path="/" element={<DashboardLayout />}>
        <Route index element={<DashboardIndex />} />
        <Route path="messages" element={<Messages />} />
      </Route>
    </Routes>
  );
};

export default Dashboard;
