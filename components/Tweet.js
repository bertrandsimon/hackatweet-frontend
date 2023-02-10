import styles from '../styles/Tweet.module.css';
import { useDispatch , useSelector } from 'react-redux';
import Image from 'next/image';
import Link from 'next/link';
import{useState , useEffect} from 'react'
function Tweet() {

  const dispatch = useDispatch();
  const token = useSelector((state) => state.userInfos.token)
  console.log(token)
  const [message, setMessage] = useState('')
  const addMessage = () => {
    fetch(`http://localhost:3000/messages/addMessage/${token}`,  {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        message,
      })
      })
      .then(response => response.json())
      .then(data => {
        console.log(data);
      })

    }
  return (
    <div className={styles.container}>
      
      <div className={styles.title}><span>Home</span></div>
      
      <div className={styles.inputContainer}>
        <input type="text" placeholder='Whats up ?' className={styles.inputArea} maxLength={280} onChange={(e) => setMessage(e.target.value)} value={message}/>
      </div>

  <div className={styles.tweetArea}>
    <span className={styles.nbCharac}>{message.length}/280</span >
    <div className={styles.btnTweet} onClick={() => addMessage()}><span>Tweet</span> </div>
  </div>


  </div>
  );
}

export default Tweet;