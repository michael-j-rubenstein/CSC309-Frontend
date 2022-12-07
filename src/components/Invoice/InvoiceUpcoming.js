import Card from "../Layout/Card";
import InvoiceItem from "./InvoiceItem";
import axios from "axios";
import { useState, useEffect } from "react";

import styles from "./InvoiceHistory.module.css";

const InvoiceUpcoming = (props) => {
  const [invoiceUpcoming, setInvoiceUpcoming] = useState({});

  var bearer = localStorage.getItem("SavedToken");

  useEffect(() => {
    if (bearer) {
      const config = {
        headers: {
          Authorization: `${bearer}`,
        },
      };

      // get upcoming invoice data
      axios
        .get(
          `${process.env.REACT_APP_BACKEND_URL}subscriptions/invoice/upcoming/`,
          config
        )
        .then((res) => {
          // console.log(res.data);
          setInvoiceUpcoming(res.data);
        });
    }
  }, []);

  const msg = bearer ? (
    <h2 className={styles.alert}>You do not have an upcoming invoice!</h2>
  ) : (
    <h2 className={styles.alert}>Please sign in to see invoice history!</h2>
  );

  const invoice =
    Object.keys(invoiceUpcoming).length === 0 ||
    Object.keys(invoiceUpcoming).includes("error") ? (
      msg
    ) : (
      <InvoiceItem data={invoiceUpcoming}></InvoiceItem>
    );

  return <Card>{invoice}</Card>;
};

export default InvoiceUpcoming;
