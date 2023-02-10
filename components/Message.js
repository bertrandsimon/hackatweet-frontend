import { useEffect, useState } from 'react';
import styles from '../styles/Message.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';



function Message(props) {

    
    const handleLikeMessage = () => {
      props.updateLikedMessages(props.content);
    };
    let heartIconStyle = { 'color': 'white', 'cursor': 'pointer' };
    if (props.isLiked) {
      heartIconStyle = { 'color': '#F82483', 'cursor': 'pointer' };
    }

    const timeUntilTargetDate = (msgDate) => {
      const currentDate = new Date();
      const targetDate = new Date(msgDate);
      const difference = targetDate - currentDate;
     
      return `${Math.floor(Math.abs(difference / 60000))} minutes ago`
      
      
    }  

    const timeFromNow = timeUntilTargetDate(props.date);

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
        <div><FontAwesomeIcon icon={faHeart} style={heartIconStyle} className={styles.heart} onClick={() => handleLikeMessage()}/></div>
        <span className={styles.likeCounter}>{props.isLiked === true ? `1` : `0`}</span>
        <div><FontAwesomeIcon icon={faTrash} className={styles.trash}/></div>
      </div>


    </div>

  );
}

export default Message;