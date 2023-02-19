import styles from '../styles/Hashtag.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag } from '@fortawesome/free-solid-svg-icons';
function Hashtag(props) {


  return (
    <div className={styles.container}>
      
      <div>
      <span className={styles.hashtagTxt}>  <FontAwesomeIcon icon={faHashtag}/> {props.hashtag} </span>
      </div>
      

      <div className={styles.tweetCount}>
        <span>{props.count}</span>
        <span> </span>
        <span>Tweet(s)</span>
      </div>



    </div>
  );
}

export default Hashtag;