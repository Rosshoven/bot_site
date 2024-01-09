import React from 'react';
import QuoteBlock from './quote-block';
import '../index.css'; 


export default function About() {

return (
<div className='quoteWrapper'>
    <div id="lineOne">
      <QuoteBlock text="The only limit to our realization of tomorrow will be our doubts of today." author="Franklin D. Roosevelt" />
    </div>

    <div id="lineTwo">
      <QuoteBlock text="The only limit to our realization of tomorrow will be our doubts of today." author="Franklin D. Roosevelt" />
    </div>

    <div id="lineThree">
      <QuoteBlock text="The only limit to our realization of tomorrow will be our doubts of today." author="Franklin D. Roosevelt" />
    </div>

    <div id="lineFour">
      <QuoteBlock text="The only limit to our realization of tomorrow will be our doubts of today." author="Franklin D. Roosevelt" />
    </div>
</div>    
  );
};


