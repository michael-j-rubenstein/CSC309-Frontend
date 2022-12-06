import Card from "../Layout/Card";
import InvoiceItem from "./InvoiceItem";
import axios from "axios";
import { useState, useEffect } from "react";

import styles from "./InvoiceHistory.module.css";

const InvoiceHistory = () => {
  const [invoicesPast, setInvoicesPast] = useState([]);

  var bearer = localStorage.getItem("SavedToken");

  useEffect(() => {
    if (bearer) {
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
    }
  }, []);

  const msg = bearer ? (
    <h2 className={styles.alert}>You did not have any invoices!</h2>
  ) : (
    <h2 className={styles.alert}>Please sign in to see invoice history!</h2>
  );

  const invoices =
    invoicesPast.length === 0
      ? msg
      : invoicesPast.map((invoice) => {
          return <InvoiceItem key={invoice.invoice_id} data={invoice} />;
        });

  return <Card className={styles.card}>{invoices}</Card>;
};

export default InvoiceHistory;
