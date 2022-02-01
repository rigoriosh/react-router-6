import React from 'react';
import {Link, Route, Routes } from 'react-router-dom';
import { Expenses } from './Expenses';
import { HomePage } from './HomePage';
import { Invoice } from './Invoice';
import { Invoices } from './Invoices';

export const Explample1 = () => {
  return <div className='container'>
        
            <nav
                style={{
                borderBottom: "solid 1px",
                paddingBottom: "1rem"
                }}
            >
                <Link to="/invoices">Invoices</Link> |{" "}
                <Link to="/expenses">Expenses</Link>
            </nav>
            <Routes>
            <Route path="example1/*" element={ <HomePage/>}>
                <Route
                    index
                    element={
                    <main style={{ padding: "1rem" }}>
                        <p>index Home</p>
                    </main>
                    }
                />
                <Route path="example1/expenses" element={<Expenses />} />
                <Route path="invoices" element={<Invoices />}>
                    <Route index
                    element={
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
      </div>;
};
