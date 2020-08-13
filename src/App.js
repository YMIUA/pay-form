import React, { useState } from "react";
import Button from "./components/Button";
import Modal from "./components/Modal.jsx";
import Card from "./components/Card.jsx";
import PaySuccess from "./components/PaySuccess.jsx";
import ModalHeader from "./components/ModalHeader";
import ModalFooter from "./components/ModalFooter";
import {footerImage} from "./assets"
import "./App.css";

function App() {

  const [isShowModal, setIsShowModal] = useState(false);
  const [isShowSuccess, setisShowSuccess] = useState(false);
  const sum = 123284;

  const pay = props => {
    console.log(props)
    setisShowSuccess(true);
  }

  const toMain = () => {
    setIsShowModal(false);
    setisShowSuccess(false);
  }

  return (
    <div className="App">
      <Button title="Оплатити" onClick={() => setIsShowModal(true)} />
      <Modal isShowModal={isShowModal} onClick={() => setIsShowModal(false)}>
        <ModalHeader sum={sum}/>
        {
          isShowSuccess ? ( 
            <PaySuccess toMain={toMain}/>
          ) : (
            <>
              <Card sum={sum} pay={pay} />
              <img src={footerImage} alt="secure" height="70px" width="500px"/>
            </>
          )
        } 
        <ModalFooter/>
      </Modal>
    </div>
  );
}

export default App;
