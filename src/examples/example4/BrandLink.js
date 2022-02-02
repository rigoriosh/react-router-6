import React from 'react';
import { Link, useSearchParams } from 'react-router-dom';

export const BrandLink = ({ brand, children, ...props }) => {
  
  let [searchParams] = useSearchParams();
  let isActive = searchParams.get("brand") === brand;
  console.log(children);

  return (
    <Link
      to={`/?brand=${brand}`}
      {...props}
      style={{
        ...props.style,
        color: isActive ? "blue" : "black"
      }}
    >
      {children}
    </Link>
  );
};
