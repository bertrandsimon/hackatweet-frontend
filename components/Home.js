
import Image from 'next/image';
import Link from 'next/link';

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

  return (
    <div className={styles.container}>

      <div className={styles.leftPanel}>
        <div className={styles.logo}><Link href="/splash"><Image src="/images/logo.png" alt="logo" width={60} height={60} /></Link></div>
        <div></div>
        <div className={styles.leftBottomUser}>
            <div className={styles.avatar}><Image src="/images/avatar.jpg" alt="avatar" width={60} height={60} /></div>
            <div>
              <h3>{firstname}</h3>
              <h4>@{username}</h4>
            </div>
            
        </div>
      </div>

      <div className={styles.centerPanel}>
        <div><Tweet/></div>
        <div><LastTweets/></div>
      </div>

      <div className={styles.rightPanel}>
        <div><Trends/></div>
      </div>

    </div>

  );
}

export default Home;
