import Card from "../Layout/Card";
import InvoiceItem from "./InvoiceItem";
import axios from "axios";
import { useState, useEffect } from "react";

import styles from "./InvoiceHistory.module.css";

const InvoiceHistory = () => {
  const [invoicesPast, setInvoicesPast] = useState([]);

  useEffect(() => {
    var bearer =
      "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwMjkwMjI1LCJpYXQiOjE2NzAyODY2MjUsImp0aSI6IjZhNmMwOTI2YjlmZTQzYjg5MTNkNDM4OWU2YjJlMmU1IiwidXNlcl9pZCI6Nn0.vqgQ9sCxIccumDoekRLBFFIEx0MBfQR4DxiIRFafNAk";

    const config = {
      headers: {
        Authorization: `${bearer}`,
      },
    };

    // get invoice history data
    axios
      .get(
        `${process.env.REACT_APP_BACKEND_URL}subscriptions/invoice/history/`,
        config
      )
      .then((res) => {
        // console.log(res.data);
        setInvoicesPast(res.data.invoices);
      });
  }, []);

  const invoices =
    invoicesPast.length === 0 ? (
      <h2 className={styles.alert}>You do not have any previous invoices!</h2>
    ) : (
      invoicesPast.map((invoice) => {
        return <InvoiceItem key={invoice.invoice_id} data={invoice} />;
      })
    );

  return <Card className={styles.card}>{invoices}</Card>;
};

export default InvoiceHistory;
