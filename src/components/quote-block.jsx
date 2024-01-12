import React from 'react';
import Logo_Pink from '../images/Logo_Pink.png';

export default function QuoteBlock ({ text, author }) {

  return (
    <div style={styles.container}>
      <blockquote style={styles.quote}>{text}</blockquote>
      {author && <p style={styles.author}>- {author}</p>}
    </div> 
  );
};

const styles = {
  container: {
    // border: '1px dashed yellow',
    border: '2px solid transparent',
    backgroundClip: 'padding-box',
    borderImage: 'linear-gradient(to right, #d48c, silver)', /* Use your gradient colors */
    borderImageSlice: '1',
    // borderRadius: '',
    padding: '1.5%',
    margin: '1rem auto',
    backgroundColor: 'black', 
    // height: '',
    fontFamily: 'RocknRoll One, sans-serif',
  },
  quote: {
    fontSize: '1.1em',
    fontStyle: 'Rock Salt',
    textAlign: 'left',
    color: '#f1df3a'
  },
  author: {
    textAlign: 'right',
    fontStyle: 'normal',
    // color: '#777',
    color: '#f1df3a',

  },
};
