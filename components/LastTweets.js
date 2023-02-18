import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from '../styles/LastTweets.module.css';

import Message from './Message';

function LastTweets() {

  const [messagesData, setMessagesData] = useState([]);
  const [likedMessages, setLikedMessages] = useState([]);

  const newTweet = useSelector((state) => state.tweetStatus.newTweet)


  useEffect(() => {
    fetch('http://localhost:3000/messages/allMessages')
      .then(response => response.json())
      .then(data => {
       
        setMessagesData(data.allMessages);
        //console.log(data) 
      });
  }, [newTweet]);

  
  // Liked messages (inverse data flow)
  const updateLikedMessages = (messageContent) => {
    if (likedMessages.find(message => message === messageContent)) {
      setLikedMessages(likedMessages.filter(message => message !== messageContent));
    } else {
      setLikedMessages([...likedMessages, messageContent]);
    }
  };


  const message = messagesData.map( (data,i) => {
    const isLiked = likedMessages.some(message => message === data.content);
    return <Message key={i} updateLikedMessages={updateLikedMessages} isLiked={isLiked} {...data}/>
  })


  return (
    <div className={styles.container}>

      {message}
 
    </div>
  );
}

export default LastTweets;