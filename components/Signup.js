import styles from '../styles/Signup.module.css';
import Image from 'next/image';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function Signup() {

  const [firstname, setFirstname] = useState('')
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')


  const handleSignUp = (firstname, username, password) => {
    console.log(firstname, username, password);
  
    fetch("http://localhost:3000/users/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        firstname,
        username,
        password
      })
    })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })
      .catch(error => {
        console.error(error);
      });
  };

 
  

  return (
    <div className={styles.container}>
     
      
     <div><Image src="/images/logo.png" alt="logo" width={60} height={60} /></div>

     <div className={styles.title}><span>Create your Hackatweet account</span></div> 

     <div className={styles.inputSpacing}> 
        <input type="text" placeholder='Firstname' className={styles.inputArea} onChange={(e) => setFirstname(e.target.value)} value={firstname}/>
      </div>

     <div className={styles.inputSpacing}>
        <input type="text" placeholder='Username' className={styles.inputArea} onChange={(e) => setUsername(e.target.value)} value={username}/>
      </div>

     <div className={styles.inputSpacing}>
        <input type="password" placeholder='Password' className={styles.inputArea} onChange={(e) => setPassword(e.target.value)} value={password}/>
      </div>

     <div className={styles.btnSignUp} onClick={() => handleSignUp(firstname, username, password)}>
        <span>Sign up</span>
     </div>

    

    </div>
  );
}

export default Signup;