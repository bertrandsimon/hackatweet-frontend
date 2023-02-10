
import { useState } from 'react';
import { Button, Modal, ConfigProvider } from 'antd';
import styles from '../styles/Splash.module.css';
import Image from 'next/image';
import Link from 'next/link';

import Signup from './Signup';
import Signin from './Signin';



function Splash() {

 
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modal2Open, setModal2Open] = useState(false);

    const showModal = () => {
      setIsModalOpen(true);
    };

    const handleOk = () => {
      setIsModalOpen(false);
    };

    const handleCancel = () => {
      setIsModalOpen(false);
    };

  return (
    <div className={styles.container}>

      
      <ConfigProvider>

            
            <Modal footer={null} centered open={isModalOpen} onCancel={handleCancel} width={800} height={560} className={styles.blackBackgroundModal} >
                <div onClick={handleCancel} className={styles.closeModalCustom}> <span>X</span> </div>
                <div className={styles.modalContainer}>
                  <Signup/>
                </div>
            </Modal>

            <Modal footer={null} centered open={modal2Open} onCancel={() => setModal2Open(false)} width={800} height={560} className={styles.blackBackgroundModal} >
                <div onClick={handleCancel} className={styles.closeModalCustom}> <span>X</span> </div>
                <div className={styles.modalContainer}>
               
                  <Signin/>
                </div>
            </Modal>

            

      </ConfigProvider>

      <div className={styles.leftPanel}></div>

      <div className={styles.rightPanel}>
        <div><Image src="/images/logo.png" alt="lgo" width={70} height={70} /></div>
        
        <div>
          <h1>See what's <br />happening</h1>
        </div>

        <div>
          <h2>Joint Hackatweet today.</h2>
        </div>

        <div className={styles.btnSignUp} onClick={showModal}>
          <span>Sign up</span>  
        </div>

        <div className={styles.accountTxt}>Already have an account ?</div>

        <div className={styles.btnSignIn} onClick={() => setModal2Open(true)}>
          <span>Sign in</span> 
        </div>

      </div>

    </div>
  );
}

export default Splash;