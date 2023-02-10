import styles from '../styles/Tweet.module.css';
import Image from 'next/image';
import Link from 'next/link';
import{useState , useSelector} from 'react'
function Tweet() {
  const [textMessage, setTextMessage] = useState('')

  return (
    <div className={styles.container}>
      
      <div className={styles.title}><span>Home</span></div>
      
      <div className={styles.inputContainer}>
        <input type="text" placeholder='Whats up ?' className={styles.inputArea} maxLength={280} onChange={(e) => setTextMessage(e.target.value)} value={textMessage}/>
      </div>

  <div className={styles.tweetArea}>
    <span className={styles.nbCharac}>{textMessage.length}/280</span >
    <div className={styles.btnTweet}><span>Tweet</span> </div>
  </div>

</div>
  );
}

export default Tweet;