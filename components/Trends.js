import styles from '../styles/Trends.module.css';

import Hashtag from './Hashtag';
import { useState } from 'react';


function Trends(props) {

  
  const hashtag = props.hashtags.map( (data,i) => {
    console.log(data)
    if(data.hashtag !== '') {
      return <Hashtag key={i} {...data}/>
    }
    
  })

  return (
    <div className={styles.container}>
      
     <h1 className={styles.title}>Trends</h1>
      
      {hashtag}

    </div>
  );
}

export default Trends;