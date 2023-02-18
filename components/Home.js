
import Image from 'next/image';

import { memorizeUsername, memorizeFirstname, memorizeUserToken } from '../reducers/userInfos';

// STATES IMPORT
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Tweet from './Tweet';
import LastTweets from './LastTweets';
import Trends from './Trends';

// FONT AWESOME IMPORT EXAMPLE
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';


import styles from '../styles/Home.module.css';

function Home() {

  const username = useSelector((state) => state.userInfos.username)
  const firstname = useSelector((state) => state.userInfos.firstname)
  const token = useSelector((state) => state.userInfos.token)

  const [hashtagsList, setHashtagsList] = useState([])
  
  const dispatch = useDispatch();

  useEffect( ()=> {
    fetch('http://localhost:3000/messages/allHashtags')
    .then(response => response.json())
    .then( data => {
      console.log('data from hashtags', data.allHashtags)
      setHashtagsList(data.allHashtags)
    }

    )

  },[])

  const handleLogout = () => {
   
    dispatch(memorizeUsername(''))
    dispatch(memorizeFirstname(''))
    dispatch(memorizeUserToken(''))
    window.location.replace("http://localhost:3001/splash")
  }

  const [messageRefresh, setMessageRefresh] = useState(0);
  
  const handleRefresh = () => {setMessageRefresh(Math.random())}

  return (
    <div className={styles.container}>

      <div className={styles.leftPanel}>
        <div className={styles.logo}><Image src="/images/logo.png" alt="logo" width={60} height={60} onClick={() => handleRefresh()}/></div>
        <div></div>
        <div className={styles.leftBottomUser}>
            <div className={styles.avatar}><Image src="/images/avatar.png" alt="avatar" width={60} height={60} /></div>
            <div>
              <h3>{firstname}</h3>
              <h4>@{username}</h4>  
              <div className={styles.logout} onClick={() => handleLogout()}><span>Logout</span></div>
            </div>
            
        </div>
        
      </div>

      <div className={styles.centerPanel}>
        <div><Tweet/></div>
        <div><LastTweets messageRefresh={messageRefresh}/></div>
      </div>

      <div className={styles.rightPanel}>
        <div><Trends hashtags={hashtagsList}/></div>
      </div>

    </div>

  );
}

export default Home;
