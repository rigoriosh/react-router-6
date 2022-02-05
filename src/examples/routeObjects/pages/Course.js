import React from 'react';
import { Link, useParams } from 'react-router-dom';

function capitalizeString(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

export const Course = () => {
    let { id } = useParams();
    console.log(id);
    return (
        <div>
            <h2>
                {/* Welcome to the { id!.split("-").map(capitalizeString).join(" ") } course! */}
                Welcome to the { id } course!

            </h2>

            <p>This is a great course. You're gonna love it!</p>

            <Link to="/courses">See all courses</Link>
        </div>
    );
};
