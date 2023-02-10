import styles from '../styles/Signin.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { useDispatch } from 'react-redux';
import { memorizeUsername, memorizeFirstname, memorizeUserToken } from '../reducers/userInfos';
import { useState, useEffect } from 'react';


function Signin() {

  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch();


  const handleSignIn = (username, password) => {

    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        username,
        password
      })
    })
      .then(response => response.json())
      .then(data => {
       
        dispatch(memorizeUsername(data.username))
        dispatch(memorizeFirstname(data.firstname))
        dispatch(memorizeUserToken(data.token))
        window.location.replace("http://localhost:3001/");

      })
      .catch(error => {
        console.error(error);
      });
  };

  return (
    <div className={styles.container}>
     
      
     <div><Image src="/images/logo.png" alt="logo" width={60} height={60} /></div>

     <div className={styles.title}><span>Connect to Hackatweet</span></div> 

    
     <div className={styles.inputSpacing}>
        <input type="text" placeholder='Username' className={styles.inputArea} onChange={(e) => setUsername(e.target.value)} value={username}/>
      </div>

     <div className={styles.inputSpacing}>
        <input type="password" placeholder='Password' className={styles.inputArea} onChange={(e) => setPassword(e.target.value)} value={password}/>
      </div>

     <div className={styles.btnSignIn} onClick={() => handleSignIn(username, password)}>
        <span>Sign in</span>
     </div>

    </div>
  );
}

export default Signin;