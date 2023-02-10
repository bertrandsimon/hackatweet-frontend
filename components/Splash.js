
import { useState } from 'react';
import { Button, Modal, ConfigProvider } from 'antd';
import styles from '../styles/Splash.module.css';
import Image from 'next/image';
import Link from 'next/link';

import Signup from './Signup';
import Signin from './Signin';



function Splash() {

 
    const [isModalOpen, setIsModalOpen] = useState(false);

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

      
      <ConfigProvider
          theme={{
            token: {
              colorPrimary: '#00b96b',
            
            },
          }}
        >
            <Modal theme="dark" footer={null} centered open={isModalOpen}  width={800}  >
              <div className={styles.modalContainer}>
                <Signup/>
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
          <h2>Joint hacktweet today.</h2>
        </div>

        <div className={styles.btnSignUp} onClick={showModal}>
          <span>Sign up</span>  
        </div>

        <div className={styles.accountTxt}>Already have an account ?</div>

        <div className={styles.btnSignIn} onClick={showModal}>
          <span>Sign in</span> 
        </div>

      </div>

    </div>
  );
}

export default Splash;