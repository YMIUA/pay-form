import React from "react";
import {logo} from '../assets'
 
const ModalHeader = ({sum}) => {
  return (
    <div style={styles.wrapper}>
      <img src={logo} alt="logo" height="40px" width="120px"/>
      <div>
        <p style={styles.toPay}>До оплати</p>
        { sum &&
          <p style={styles.sum}>{`${sum} грн`}</p>
        }
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#2a2c30',
    boxSizing: "border-box",    
    height: "60px",
    width: "500px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    borderRadius: "10px 10px 0 0",
  },        
  toPay: {
    color: "#6e6e6e",
    fontSize: "14px",
    margin: "10px",
    textAlign: "end",
  },
  sum: {
    color: "#cdd1d5",
    margin: "10px",
  }
}

export default ModalHeader;
