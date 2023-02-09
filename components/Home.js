
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


import { hideArticle } from '../reducers/hiddenArticles';

import styles from '../styles/Home.module.css';

function Home() {
  return (
    <div className={styles.container}>
      <Tweet/>
      <Trends/>
      <LastTweets/>
    </div>
  );
}

export default Home;
