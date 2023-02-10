import styles from '../styles/Signin.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Signin() {
  return (
    <div className={styles.container}>
     
      
     <div><Image src="/images/logo.png" alt="logo" width={60} height={60} /></div>

     <div className={styles.title}><span>Connect to Hackatweet</span></div> 

    
     <div className={styles.inputSpacing}>
        <input type="text" placeholder='Username' className={styles.inputArea} />
      </div>

     <div className={styles.inputSpacing}>
        <input type="text" placeholder='Password' className={styles.inputArea} />
      </div>

     <div className={styles.btnSignIn}>
        <span>Sign in</span>
     </div>

    </div>
  );
}

export default Signin;