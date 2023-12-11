import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Album from './album';
import IITLTWD from '../images/IITLTWD.jpg';
import Rex from '../tracks/Rex.mp3';
import Fireplay from '../tracks/Fireplay.mp3';

export default function If() {

    return(
<div>
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <Album image={IITLTWD} 
               description={`If it's the last thing we do Album Cover`} 
               albumTitle={`If it's the last thing we do...`}
               albumDetail1={`Recorded by Boys On Trial`}
               albumDetail2={`@ Bearfux Troy's in Chicago`}
               albumDetail3={`Top floor SW corner Kedzie & Armitage`}
               albumDetail4={`Spring 2008`}
               albumDetail5={`Masterd By Ken`}
               albumDetail6={`Michael.g/v`}
               albumDetail7={`Colin.d`}
               albumDetail8={`Ken.b`}
               albumDetail9={`Cover pic from last soundcheck, Reggie's Rock Room`}
               />
    </div>    
        <AudioPlayer src={Rex} />
        <AudioPlayer src={Fireplay} />

</div>


 )


}