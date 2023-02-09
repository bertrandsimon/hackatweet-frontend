import styles from '../styles/Splash.module.css';
import Image from 'next/image';
import Link from 'next/link';
function Splash() {
  return (
    <div className={styles.container}>

      <div className={styles.leftPanel}></div>

      <div className={styles.rightPanel}>
        <div><Image src="/images/logo.png" alt="lgo" width={250} height={250} /></div>
        
        <div className={styles.title}>
          <h1></h1>
        </div>

        <div className={styles.subtitle}>
          <h2></h2>
        </div>

        <div className={styles.btnSignUp}>
          <span>Sign up</span>  
        </div>

        <span className={styles.accountTxt}>Already have an account ?</span>

        <div className={styles.btnSignUp}>
          <span>Sign in</span> 
        </div>

      </div>

    </div>
  );
}

export default Splash;