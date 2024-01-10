import React from 'react';
import QuoteBlock from './quote-block';
import '../index.css'; 


export default function About() {

return (
<div className='quoteWrapper'>
    <div id="lineOne">
      <QuoteBlock text="Boys On Trial have everything that makes music matter: passion, compassion, deft playing, great sound, all delivered with attitude." author="Barb Wire, WLUW Chicago" />
    </div>

    <div id="lineTwo">
      <QuoteBlock text="They often carry a punk rock spirit without falling into a single mold. This trio deserve some credit for taking chances" author="Illinois Entertainer" />
    </div>

    <div id="lineThree">
      <QuoteBlock text="Boys On Trial are assembling an army of intricate words, blazing bass lines and heart punch drums which are filtering up through the hallways of Chicago's underground." author="Craig Turnwall, Fulcrum Press" />
    </div>

    <div id="lineFour">
      <QuoteBlock text="Listening to the Fall and '90s Dischord releases will prepare you for the onslaught of these boys. High production values along with distinct vocals make a unique listening experience." author="Punk Planet" />
    </div>

    <div id="lineFive">
      <QuoteBlock text="Imagine all the people listening to Boys On Trial" author="John Lennon, The Quarrymen" />
    </div>

</div>    
  );
};


