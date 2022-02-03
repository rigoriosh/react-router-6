import React, { useRef } from 'react';
import { Dialog } from "@reach/dialog";
import "@reach/dialog/styles.css";

import { useNavigate, useParams } from 'react-router-dom';
import { getImageById } from './assets/images';

export const ModalView = () => {
  let navigate = useNavigate();
  let { id } = useParams();
  let image = getImageById(Number(id));
  let buttonRef = useRef(null);

  function onDismiss() {
    navigate(-1);
  }

  if (!image) return null;

  return (
    <Dialog
      aria-labelledby="label"
      onDismiss={onDismiss}
      initialFocusRef={buttonRef}
    >
      <div
        style={{
          display: "grid",
          justifyContent: "center",
          padding: "8px 8px"
        }}
      >
        <h1 id="label" style={{ margin: 0 }}>
          {image.title}
        </h1>
        <img
          style={{
            margin: "16px 0",
            borderRadius: "8px",
            width: "100%",
            height: "auto"
          }}
          width={400}
          height={400}
          src={image.src}
          alt=""
        />
        <button
          style={{ display: "block" }}
          ref={buttonRef}
          onClick={onDismiss}
        >
          Close
        </button>
      </div>
    </Dialog>
  );
};
