import styles from '../styles/Trends.module.css';
import Image from 'next/image';
import Link from 'next/link';

import Hashtag from './Hashtag';

function Trends() {
  return (
    <div className={styles.container}>
      
     <h1 className={styles.title}>Trends</h1>
      
      <Hashtag/>
      <Hashtag/>
      <Hashtag/>
      <Hashtag/>

    </div>
  );
}

export default Trends;