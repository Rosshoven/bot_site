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
               albumTitle={`If it's the last thing we do...`}/>

        <div style={{display: 'flex', flexDirection: 'column'}}>   
                 <h4></h4>     
        </div> 
    </div>    
        <AudioPlayer src={Rex} />
        <AudioPlayer src={Fireplay} />

</div>


 )


}