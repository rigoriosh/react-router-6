import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { NoMatch } from '../example4/NoMatch';
import { About } from './pages/About';
import { IndexAbout } from './pages/aboutPages/IndexAbout';
import { IndexPage2About } from './pages/aboutPages/IndexPage2About';
import { Page1About } from './pages/aboutPages/Page1About';
import { Page2About } from './pages/aboutPages/Page2About';
import { Page2AboutPage1 } from './pages/aboutPages/Page2AboutPage1';
import { Page2AboutPage1WithID } from './pages/aboutPages/Page2AboutPage1WithID';
import { Layout } from './pages/Layout';

export const App = () => {
  return <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<div>
                                    <p>This is the home page.</p>
                                  </div>}
            />
            <Route path="about" element={<About/>}>
              <Route index element={<IndexAbout />} />
              <Route path="page1About" element={<Page1About />}/>
              <Route path="page2About" element={<Page2About />} >
                <Route index element={<IndexPage2About />} />
                <Route path="page2AboutPage1" element={<Page2AboutPage1/>}>
                  <Route path=":page2AboutPage1WithId" element={<Page2AboutPage1WithID />} >
                    <Route index element={<p style={{backgroundColor:'chartreuse'}}>index       page2AboutPage1WithId</p>} />
                    
                  </Route>
                </Route>
              </Route>
            </Route>
            <Route path="test" element={<div> <p>This is the test page.</p> </div>} />
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>;
};
