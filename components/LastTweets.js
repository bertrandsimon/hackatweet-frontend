import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import styles from '../styles/LastTweets.module.css';
import Image from 'next/image';
import Link from 'next/link';

import Message from './Message';



function LastTweets() {

  const [messagesData, setMessagesData] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/messages/allMessages')
      .then(response => response.json())
      .then(data => {
        setMessagesData(data.allMessages);
      });
  }, []);

  const message = messagesData.map( (data,i) => {
    return <Message key={i} {...data}/>
  })

  console.log(messagesData)

  return (
    <div className={styles.container}>

      {message}
 




    </div>
  );
}

export default LastTweets;