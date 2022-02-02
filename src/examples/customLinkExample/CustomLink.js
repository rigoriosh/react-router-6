import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

export const CustomLink = ({ children, to, ...props }) => {

    let resolved = useResolvedPath(to);
    console.log(resolved);
    let match = useMatch({ path: resolved.pathname, end: true });
    console.log(match);

  return (
    <div>
      <Link
        style={{ textDecoration: match ? "underline" : "none" }}
        to={to}
        {...props}
      >
        {children}
      </Link>
      {match && " (active)"}
    </div>
  );
};
