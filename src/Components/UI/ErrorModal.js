import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";

const ErrorModal = (props) => {

  return (

    <div className={styles.backdrop} onClick={props.onClick}>
      <Card className={styles.modal}>
        <header className={styles.header}>
          <h2>{props.header}</h2>
        </header>
        <p className={styles.content}>{props.message}</p>
        <footer className={styles.actions}>
          <Button>Okay !</Button>
        </footer>
      </Card>
    </div>
  );
}

export default ErrorModal;
