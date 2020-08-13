import React from "react";
import { close } from "../assets/index";

const Modal = ({ onClick, isShowModal, children }) => {
  const wrapperStyle = isShowModal
    ? { ...styles.modal, ...styles.show }
    : { ...styles.modal, ...styles.hide };

  return (
    <div style={wrapperStyle}>
      <div style={styles.modalMain}>
        <div style={styles.closeButtonWrapper}>
          <button onClick={onClick} style={styles.closeButton}>
            <img src={close} alt="close" style={styles.close} />
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

const styles = {
  modal: {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    background: "rgba(0,0,0,0.6)",
  },

  modalMain: {
    borderRadius: "10px",
    position: "fixed",
    background: "white",
    width: "500px",
    height: "auto",
    top: "50%",
    left: "50%",
    transform: "translate(-50%,-50%)",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#eee",
  },

  show: {
    display: "flex",
  },

  hide: {
    display: "none",
  },

  closeButtonWrapper: {
    position: "fixed",
    left: "500px",
    top: "10px",
    height: "30px",
    width: "30px",
  },

  closeButton: {
    backgroundColor: "transparent",
    border: "none",
  },

  close: {
    width: "20px",
    height: "20px",
  },
};

export default Modal;
