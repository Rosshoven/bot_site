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
    // backgroundColor: '#f9f9f9',
    backgroundColor: 'black', 
    height: '80%'
  },
  quote: {
    fontSize: '1.2em',
    fontStyle: 'italic',
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
