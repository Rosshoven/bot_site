import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import Album from './album';
import IITLTWD from '../images/IITLTWD.jpg';
import Rex from '../tracks/Rex.mp3';
import Fireplay from '../tracks/Fireplay.mp3';
import LookLeft from '../tracks/LookLeft.mp3'

export default function If() {

    return(
<div style={{ backgroundColor: 'pink'}}>
    <div style={{display: 'flex', flexDirection: 'row'}}>
        <Album image={IITLTWD} 
               description={`If it's the last thing we do Album Cover`} 
               albumTitle={`If it's the last thing we do...`}
               albumDetail1={`Recorded by Boys On Trial`}
               albumDetail2={`@ *Bearfux Troy's in Chicago`}
               albumDetail3={`Spring 2008`}
               albumDetail4={`Michael.gv`}
               albumDetail5={`Colin.d`}
               albumDetail6={`Ken.b`}
               albumDetail7={`Masterd By Ken`}
               albumDetail8={`*Top floor SW corner Kedzie/Armitage`}
               albumDetail9={`Cover from last soundcheck, Reggie's Rock Room`}
               songTitle1={`Rex`}
               track1={Rex}
               songTitle2={`Fireplay`}
               track2={Fireplay}
               songTitle3={`Look Left`}
               track3={LookLeft}
               />
    </div>    
        {/* <AudioPlayer src={Rex} /> 
        <AudioPlayer src={Fireplay} />  */}

</div>


 )


    }