import styles from '../styles/LastTweets.module.css';
import Image from 'next/image';
import Link from 'next/link';

import Message from './Message';



function LastTweets() {
  return (
    <div className={styles.container}>

     <Message/>
     <Message/>
     <Message/>
     <Message/>
 




    </div>
  );
}

export default LastTweets;