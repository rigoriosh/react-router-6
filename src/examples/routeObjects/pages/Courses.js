import React from 'react';
import { Outlet } from 'react-router-dom';

export const Courses = () => {
  return (
    <div>
      <h4>Courses</h4>
      <Outlet />
    </div>
  );
};
