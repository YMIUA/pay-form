import React from "react";
import {kastaPay} from '../assets'
 
const ModalHeader = ({sum}) => {
  return (
    <div style={styles.wrapper}>
      <img src={kastaPay} alt="logo" height="40px" width="140px"/>
    </div>
  );
};

const styles = {
  wrapper: {
    backgroundColor: '#2a2c30',
    boxSizing: 'border-box',
    height: '60px',
    width: '500px',
    display: 'flex',
    justifyContent: 'center',
    alignitems: 'center',
    borderRadius: '0 0 10px 10px',
  },
};

export default ModalHeader;
