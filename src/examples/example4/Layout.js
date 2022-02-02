import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { BrandLink } from './BrandLink';
import { brands } from './snikears';

export const Layout = () => {
  return (
    <div>
        <h6>Layout</h6>
        <nav>
            <h3>Filter by brand</h3>
            <ul>
            <li>
                <Link to="/">All</Link>
            </li>
            {
                brands.map(brand => (
                    <li key={brand}>
                        <BrandLink brand={brand}>{brand}</BrandLink>
                    </li>
                ))
            }
            </ul>
        </nav>

        <hr />

      <Outlet />
    </div>
  );
};
