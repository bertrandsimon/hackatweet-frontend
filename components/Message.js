import styles from '../styles/Message.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



function Message() {
  return (

    <div className={styles.container}>
      
      <div className={styles.messageHead}>
        <div><Image src="/images/avatar.jpg" alt="lgo" width={70} height={70} /></div>
        <div><span className={styles.messageName}>Antoine</span></div>
        <div><span className={styles.messageAlias}>@AntoineLeProf</span></div>
        <div><span className={styles.messagePoint}> . </span></div>
        <div><span className={styles.messageHour}> 5 hours </span></div>
      </div>
      
      <div className={styles.messageBox}>
        <span>Welcome to</span>
        <span className={styles.hashtag}>#hackatweet</span>
        <span> guys </span>
      </div>

      <div className={styles.likeContainer}>
        <div><FontAwesomeIcon icon={faHeart} className={styles.heart}/></div>
        <span className={styles.likeCounter}>1</span>
      </div>


    </div>

  );
}

export default Message;