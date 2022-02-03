import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppModal } from './AppModal';
import './index.css'


export const Modal = () => {

    return <BrowserRouter>
        <AppModal/>
    </BrowserRouter>;
};
