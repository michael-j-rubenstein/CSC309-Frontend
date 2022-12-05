import Button from "../UI/Button";
import styles from "./InvoiceItem.module.css";

const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const InvoiceItem = (props) => {
  const { invoice_total, amount_paid, invoice_link, invoice_period, plan } =
    props.data;

  const period_start = new Date(invoice_period.start * 1000);
  const period_end = new Date(invoice_period.end * 1000);

  return (
    <div className={styles.invoice}>
      <div className={styles.subscription}>
        <h3 className={styles.header}>Subscription</h3>
        <div className={styles["info-wrapper"]}>
          <p className={styles.title}>Name:</p>
          <p className={styles.content}>{plan.name}</p>
        </div>
        <div className={styles["info-wrapper"]}>
          <p className={styles.title}>Type:</p>
          <p className={styles.content}>{plan.type}</p>
        </div>
      </div>

      <div className={styles.period}>
        <h3 className={styles.header}>Period</h3>
        <div className={styles["info-wrapper"]}>
          <p className={styles.title}>Start:</p>
          <p className={styles.content}>
            {period_start.getDate() +
              " " +
              months[period_start.getMonth()] +
              " " +
              period_start.getFullYear()}
          </p>
        </div>
        <div className={styles["info-wrapper"]}>
          <p className={styles.title}>End:</p>
          <p className={styles.content}>
            {period_end.getDate() +
              " " +
              months[period_end.getMonth()] +
              " " +
              period_end.getFullYear()}
          </p>
        </div>
      </div>

      <div className={styles.total}>
        <h3 className={styles["inline-header"]}>Total:</h3>
        <p className={styles.price}>{invoice_total / 100}</p>
      </div>

      <div className={styles.total}>
        <h3 className={styles["inline-header"]}>Paid:</h3>
        <p className={styles.price}>{amount_paid / 100}</p>
      </div>

      {invoice_link ? (
        <a
          className={styles["btn-wrapper"]}
          href={invoice_link}
          target="_blank"
          rel="noreferrer"
        >
          <Button
            btnColor="plain"
            className={`${styles["submit-btn"]} ${
              invoice_link ? "" : styles.disabled
            }`}
          >
            View Stripe Invoice
          </Button>
        </a>
      ) : (
        ""
      )}
    </div>
  );
};

export default InvoiceItem;
