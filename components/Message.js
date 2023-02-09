import styles from '../styles/Message.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';



function Message(props) {

    const timeUntilTargetDate = (msgDate) => {
      const currentDate = new Date();
      const targetDate = new Date(msgDate);
      const difference = targetDate - currentDate;
      if (difference < 60000){
        return 'few seconds'
      }
      else if (difference > 60000){
        return `${Math.floor(Math.abs(difference / 3600000))} hours`
      }
      
    }  

    const timeFromNow = timeUntilTargetDate(props.date);

    // const targetDate = new Date('2023-02-09T13:47:20.258Z');
    // const currentDate = new Date();
    // const difference = targetDate - currentDate;
    // console.log(`${Math.floor(difference / 3600000)} hours from now.`);
    


  return (

    <div className={styles.container}>
      
      <div className={styles.messageHead}>
        <div><Image src="/images/avatar.jpg" alt="lgo" width={70} height={70} /></div>
        <div><span className={styles.messageName}>{props.username}</span></div>
        <div><span className={styles.messageAlias}>@{props.username}</span></div>
        <div><span className={styles.messagePoint}> . </span></div>
        
        <div><span className={styles.messageHour}> {timeFromNow} </span></div>
      </div>
      
      <div className={styles.messageBox}>
        <span>{props.content}</span>
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