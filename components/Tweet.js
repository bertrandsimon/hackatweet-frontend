import styles from '../styles/Tweet.module.css';
import Image from 'next/image';
import Link from 'next/link';
function Tweet() {
  return (
    <div className={styles.container}>
      
      <div className={styles.title}><span>Home</span></div>
      
      <div className={styles.inputContainer}>
        <input type="text" placeholder='Whats up ?' className={styles.inputArea}/>
      </div>

      <div className={styles.tweetArea}>
        <span className={styles.nbCharac}>0/280</span >
        <div className={styles.btnTweet}><span>Tweet</span> </div>
      </div>

    </div>
  );
}

export default Tweet;