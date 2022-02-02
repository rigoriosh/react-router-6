import React from 'react';
import { Link } from 'react-router-dom';
import { SNEAKERS } from './snikears';
import VisuallyHidden from "@reach/visually-hidden";

export const SneakerGrid = () => {
  return (
    <main>
      <h2>Sneakers</h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(250px, 2fr))",
          gap: "12px 24px"
        }}
      >
        {SNEAKERS.map(snkr => {
          let name = `${snkr.brand} ${snkr.model} ${snkr.colorway}`;
          console.log(name);
          return (
            <div key={snkr.id} style={{ position: "relative" }}>
              <img
                width={200}
                height={200}
                src={snkr.imageUrl}
                alt={name}
                style={{
                  borderRadius: "8px",
                  width: "100%",
                  height: "auto",
                  aspectRatio: "1 / 1"
                }}
              />
              <Link
                style={{ position: "absolute", inset: 0 }}
                to={`/sneakers/${snkr.id}`}
              >
                <VisuallyHidden>{name}</VisuallyHidden>
              </Link>
              <div>
                <p>{name}</p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};
