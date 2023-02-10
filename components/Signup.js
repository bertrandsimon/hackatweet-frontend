import styles from '../styles/Signup.module.css';
import Image from 'next/image';
import Link from 'next/link';

function Signup() {
  return (
    <div className={styles.container}>
     
      
     <div><Image src="/images/logo.png" alt="logo" width={60} height={60} /></div>

     <div className={styles.title}><span>Create your Hackatweet account</span></div> 

     <div className={styles.inputSpacing}> 
        <input type="text" placeholder='Firstname' className={styles.inputArea} />
      </div>

     <div className={styles.inputSpacing}>
        <input type="text" placeholder='Username' className={styles.inputArea} />
      </div>

     <div className={styles.inputSpacing}>
        <input type="text" placeholder='Password' className={styles.inputArea} />
      </div>

     <div className={styles.btnSignUp}>
        <span>Sign up</span>
     </div>

    </div>
  );
}

export default Signup;