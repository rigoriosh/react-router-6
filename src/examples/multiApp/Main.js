import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HomeApp } from './homeApp/HomeApp';

export const Main = () => {
  return <BrowserRouter>
        <HomeApp />
    </BrowserRouter>;
};
