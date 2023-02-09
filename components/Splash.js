import styles from '../styles/Splash.module.css';
import Image from 'next/image';
import Link from 'next/link';
function Splash() {
  return (
    <div className={styles.container}>

      <div className={styles.leftPanel}></div>

      <div className={styles.rightPanel}>
        <div><Image src="/images/logo.png" alt="lgo" width={70} height={70} /></div>
        
        <div>
          <h1>See what's <br />happening</h1>
        </div>

        <div>
          <h2>Joint hacktweet today.</h2>
        </div>

        <div className={styles.btnSignUp}>
          <span>Sign up</span>  
        </div>

        <div className={styles.accountTxt}>Already have an account ?</div>

        <div className={styles.btnSignIn}>
          <span>Sign in</span> 
        </div>

      </div>

    </div>
  );
}

export default Splash;