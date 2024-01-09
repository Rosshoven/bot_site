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
    padding: '16px',
    margin: '16px 0',
    // backgroundColor: '#f9f9f9',
    backgroundColor: 'black'
  },
  quote: {
    fontSize: '1.2em',
    fontStyle: 'italic',
    marginBottom: '8px',
    textAlign: 'left',
    color: 'yellow'
  },
  author: {
    textAlign: 'right',
    fontStyle: 'normal',
    // color: '#777',
    color: 'yellow'

  },
};
