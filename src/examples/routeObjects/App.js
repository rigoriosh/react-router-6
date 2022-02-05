import React from 'react';
import { useRoutes } from 'react-router-dom';
import { NoMatch } from '../example4/NoMatch';
import { Course } from './pages/Course';
import { Courses } from './pages/Courses';
import { CoursesIndex } from './pages/CoursesIndex';
import { Home } from './pages/Home';
import { Layout } from './pages/Layout';

export const App = () => {

    let routes = [
        {
          path: "/",
          element: <Layout />,
          children: [
            { index: true, element: <Home /> },
            {
              path: "/courses",
              element: <Courses />,
              children: [
                { index: true, element: <CoursesIndex /> },
                { path: "/courses/:id", element: <Course /> }
              ]
            },
            { path: "*", element: <NoMatch /> }
          ]
        }
    ];
    let element = useRoutes(routes);

    return <div id='AppRouteObject'>
        {element}
    </div>;
};
