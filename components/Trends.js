import styles from '../styles/Trends.module.css';

import Hashtag from './Hashtag';
import { useState } from 'react';


function Trends(props) {

  //console.log('props.allHashtags in TRENDS : ', props.hashtags)
  // const [hashtagsList, setHashtagsList] = useState(props.hashtags);

  //console.log('props.hashtags in TRENDS :', props.hashtags)
  //setHashtagsList(props.hashtags)

  const hashtag = props.hashtags.map( (data,i) => {
    return <Hashtag key={i} {...data}/>
  })

  return (
    <div className={styles.container}>
      
     <h1 className={styles.title}>Trends</h1>
      
      {hashtag}

    </div>
  );
}

export default Trends;