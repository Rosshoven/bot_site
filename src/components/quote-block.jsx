import React from 'react';

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
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '1.5%',
    margin: '1rem auto',
    backgroundColor: 'black', 
    height: '80%',
    fontStyle: 'Rock Salt, cursive'

  },
  quote: {
    fontSize: '1.2em',
    fontStyle: 'Rock Salt, cursive',
    textAlign: 'left',
    color: 'yellow'
  },
  author: {
    textAlign: 'right',
    fontStyle: 'normal',
    // color: '#777',
    color: 'yellow',

  },
};
