import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { deleteInvoice, getInvoice } from '../../constants/data';

export const Invoice = () => {

  let navigate = useNavigate();
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));

  return (
    <main style={{ padding: "1rem" }}>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.number}
      </p>
      <p>Due Date: {invoice.due}</p>
      <p>
        <button
          onClick={() => {
            deleteInvoice(invoice.number);
            navigate("/invoices");
          }}
        >
          Delete
        </button>
      </p>
    </main>
  );
};
