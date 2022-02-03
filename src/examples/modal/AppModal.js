import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { NoMatch } from '../example4/NoMatch';
import { Gallery } from './Gallery';
import { Home } from './Home';
import { ImageView } from './ImageView';
import { Layout } from './Layout';
import { ModalView } from './ModalView';

export const AppModal = () => {

    let location = useLocation();
    // The `backgroundLocation` state is the location that we were at when one of
    // the gallery links was clicked. If it's there, use it as the location for
    // the <Routes> so we show the gallery in the background, behind the modal.
    let state = location.state;

    return (
        <div id='AppModal' style={{width:'100%'}}>
            <Routes location={state?.backgroundLocation || location}>
               <Route path="/" element={<Layout />}>
                   <Route index element={<Home />} />
                   <Route path="gallery" element={<Gallery />} />
                   <Route path="/img/:id" element={<ImageView />} />
                   <Route path="*" element={<NoMatch />} />
               </Route>
           </Routes>

           {/* Show the modal when a `backgroundLocation` is set */}
           {state?.backgroundLocation && (
               <Routes>
                   <Route path="/img/:id" element={<ModalView />} />
               </Routes>
           )}
        </div>
    )
};
