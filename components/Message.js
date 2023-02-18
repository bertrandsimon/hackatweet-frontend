import { useEffect, useState } from 'react';
import styles from '../styles/Message.module.css';
import Image from 'next/image';
import Link from 'next/link';

import { newTweetTrigger, newLikeTrigger } from '../reducers/tweetStatus';
import { useDispatch, useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faTrash } from '@fortawesome/free-solid-svg-icons';


function Message(props) {

  const [likeCounter, setlikeCounter] = useState(0);
  const [isMessageLiked, setIsMessageLiked] = useState(false);
  //console.log('props.userId : ', props.userId)
  const activeUser = useSelector((state) => state.userInfos.username);
  let loggedIn = false;
  if (activeUser === props.username) {loggedIn = true}

  

  //console.log('userID by props', props)
    const dispatch = useDispatch();

    const handleMsgsByUser = (userId) => {props.displayMsgsByUser(userId)}
  
    const deleteMessageHandle = (messageId) => {
      fetch(`http://localhost:3000/messages/deleteMessage/${messageId}`, {
          method: 'DELETE'
        })
      .then(response => response.json())
      .then(
        dispatch(newTweetTrigger())
      );
     
    }

    const handleLikeMessage = (messageId) => {

      if (isMessageLiked) {
        fetch(`http://localhost:3000/messages/unlikeMessage/${messageId}?_=${Math.random()}`,)
        .then(response => response.json())
        .then (
          setlikeCounter(likeCounter - 1),
          setIsMessageLiked(!isMessageLiked),
          dispatch(newLikeTrigger()),
        )
      }
      else {
        fetch(`http://localhost:3000/messages/likeMessage/${messageId}?_=${Math.random()}`,)
        .then(response => response.json())
        .then (
          setlikeCounter(likeCounter + 1),
          setIsMessageLiked(!isMessageLiked),
          dispatch(newLikeTrigger()),
        )

      }
     
   
    };

    let heartIconStyle = { 'color': 'white', 'cursor': 'pointer' };
    if (isMessageLiked) {
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
        <div><Image src="/images/avatar.png" alt="lgo" width={70} height={70} /></div>
        <div><span className={styles.messageName} onClick={ ()=> handleMsgsByUser(props.userId)}>{props.username}</span></div>
        <div><span className={styles.messageAlias}>@{props.username}</span></div>
        <div><span className={styles.messagePoint}> . </span></div>
        <div><span className={styles.messageHour}> {timeFromNow} </span></div>
      </div>
      
      <div className={styles.messageBox}>
        <span>{props.content}</span>
        <span className={styles.hashtag}>#{props.hashtag}</span>
        
      </div>

      <div className={styles.likeContainer}>
        <div><FontAwesomeIcon icon={faHeart} style={heartIconStyle} className={styles.heart} onClick={() => handleLikeMessage(props.messageId)}/></div>
        <span className={styles.likeCounter}>{props.likes}</span>

        <div> {loggedIn ? (
          <div>
            <FontAwesomeIcon icon={faTrash} className={styles.trash} onClick={() => deleteMessageHandle(props.messageId)} />
          </div>
          ) : null}
        </div>
       
      </div>

    </div>

  );
}

export default Message;