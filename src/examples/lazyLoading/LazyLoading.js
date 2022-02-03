import React, { lazy } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { NoMatch } from '../example4/NoMatch';
import { Home } from './Home';
import { Layout } from './Layout';

const About = lazy(() => import("./pages/About"));
const Dashboard = lazy(() => import("./pages/Dashboard"));

export const LazyLoading = () => {
  return <BrowserRouter>
    <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route
                path="about"
                element={
                    <React.Suspense fallback={<>...</>}>
                        <About />
                    </React.Suspense>
                }
            />
            <Route
                path="dashboard/*"
                element={
                    <React.Suspense fallback={<>...</>}>
                        <Dashboard />
                    </React.Suspense>
                }
            />
            <Route path="*" element={<NoMatch />} />
        </Route>
    </Routes>
  </BrowserRouter>;
};
