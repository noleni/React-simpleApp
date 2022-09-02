import Card from "./Card";
import Button from "./Button";
import styles from "./ErrorModal.module.css";
import React from "react";
import ReactDOM from "react-dom";

const BackDrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onClick}></div>
};

const ModalOverlay = (props) => {
  return (
  <Card className={styles.modal}>
    <header className={styles.header}>
      <h2>{props.header}</h2>
    </header>
    <p className={styles.content}>{props.message}</p>
    <footer className={styles.actions}>
      <Button>Okay !</Button>
    </footer>
  </Card>
  );
}

const ErrorModal = (props) => {
  return (
    <React.Fragment >
      {ReactDOM.createPortal(
        <BackDrop onClick={props.onClick}></BackDrop>,
        document.getElementById("backdrop-root")
      )};
      {ReactDOM.createPortal(
        <ModalOverlay header={props.header} message={props.message}></ModalOverlay>,
        document.getElementById("overlay-root")
      )};
    </React.Fragment>
  );
}

export default ErrorModal;
