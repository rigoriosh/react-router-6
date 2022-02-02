import React, { useContext } from 'react';
import {BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { StoreContext } from '../../App';
import { Expenses } from './Expenses';
import { HomePage } from './HomePage';
import { Invoice } from './Invoice';
import { Invoices } from './Invoices';


export const Explample1 = () => {
    const { store } = useContext(StoreContext);
    
    
    
    return <div className='container'>
        <BrowserRouter>
            <nav
                style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
                }}
            >
                <Link to="/invoices" style={{color: store.pathName === "/invoices" ? 'red' : ''}} >Invoices</Link> |{" "}
                <Link to="/expenses" style={{color: store.pathName === "/expenses" ? 'red' : ''}} >Expenses</Link>
            </nav>
            <Routes>
            {/* <Route path="/" element={ <AppRouter/>} /> */}
            <Route path="/" element={ <HomePage/>}>
                <Route
                    index
                    element={
                        <main style={{ padding: "1rem" }}>
                        <p>index Home</p>
                        </main>
                    }
                />
                <Route path="expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />}>
                    <Route index element={
                        <main style={{ padding: "1rem" }}>
                            <p>Select an invoice</p>
                        </main>
                        }
                    />
                    <Route path=":invoiceId" element={<Invoice />} />
                </Route>
            </Route>
            
            <Route
                path="*"
                element={
                <main style={{ padding: "1rem" }}>
                    <p>There's nothing here!</p>
                </main>
                }
            />
            </Routes>
        </BrowserRouter>
      </div>;
};
