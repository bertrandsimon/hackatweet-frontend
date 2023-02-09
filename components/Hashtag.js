import styles from '../styles/Hashtag.module.css';
import Image from 'next/image';
import Link from 'next/link';
function Hashtag() {

  

  return (
    <div className={styles.container}>
      
      <div>
      <span className={styles.hashtagTxt}>hackatweet</span>
      </div>

      <div className={styles.tweetCount}>
        <span>2</span>
        <span>Tweet(s)</span>
      </div>



    </div>
  );
}

export default Hashtag;