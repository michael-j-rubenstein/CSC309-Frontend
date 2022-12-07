import Card from "../Layout/Card";
import InvoiceItem from "./InvoiceItem";
import axios from "axios";
import { useState, useEffect } from "react";

import styles from "./InvoiceHistory.module.css";

const InvoiceUpcoming = (props) => {
  const [invoiceUpcoming, setInvoiceUpcoming] = useState({});

  useEffect(() => {
    var bearer = localStorage.getItem("SavedToken");

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
  }, []);

  const invoice =
    Object.keys(invoiceUpcoming).length === 0 ? (
      <h2 className={styles.alert}>You do not have an upcoming invoice!</h2>
    ) : (
      <InvoiceItem data={invoiceUpcoming}></InvoiceItem>
    );

  return <Card>{invoice}</Card>;
};

export default InvoiceUpcoming;
