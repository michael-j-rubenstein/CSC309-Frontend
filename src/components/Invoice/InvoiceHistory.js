import Card from "../Layout/Card";
import InvoiceItem from "./InvoiceItem";

const InvoiceHistory = () => {
  return (
    <Card>
      <InvoiceItem
        data={{
          invoice_total: 1998,
          amount_paid: 0,
          invoice_link: "https://www.google.com/",
          invoice_period: {
            end: 1674196027,
            start: 1671517627,
          },
          plan: {
            active: true,
            name: "Gold plan",
            type: "month",
          },
        }}
      ></InvoiceItem>
      <InvoiceItem
        data={{
          invoice_total: 1998,
          amount_paid: 0,
          invoice_link: "https://www.google.com/",
          invoice_period: {
            end: 1674196027,
            start: 1671517627,
          },
          plan: {
            active: true,
            name: "Gold plan",
            type: "month",
          },
        }}
      ></InvoiceItem>
    </Card>
  );
};

export default InvoiceHistory;
