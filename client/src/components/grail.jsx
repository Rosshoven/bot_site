import '../grail.css';
import Pic_4 from '../images/Pic_4.jpeg'
import LookLeft from '../tracks/LookLeft.mp3'
import AudioPlayer from 'react-h5-audio-player';
import BOT_Logo from '../images/BOT_Logo.png';


export default function Grail() {


    return (
<>
    <div className="wrapper">
        
        {/* Grail in clockwise order from topLeft */}
        
        <div id="topLeft" className="box">
        </div>

        <div id="header" className="box">
            <img style={{width: '100%', height: '100%', objectFit: 'cover' }} src={Pic_4} alt="Pic of Band downtown Chicago" />
            {/* <h1>Boys On Trial</h1> */}
            <div style={{ position: 'absolute', top: '20%', left: '35.5%', transform: 'translate(-50%, -90%)', textAlign: 'left', color: 'black'}}>
            <h1 style={{fontSize: '1rem'}}>Boys On Trial</h1>
  </div>
        </div>
       
        <div id="topRight" className="box">
        </div>

        <div id="midRightA" className="box">        
        </div>

        <div id="midRightB" className="box">
        </div>

        <div id="bottomRight" className="box">
        </div>

        <div id="bottomRightA" className="box">
        </div>

        <div id="bottomLeftA" className="box">
        </div>

        <div id="bottomLeft" className="box">
            <a href='guan'>In all tonight's dreams believe</a>
        </div>

        <div id="midLeftB" className="box">
        </div>

        <div id="midLeftA" className="box">
        </div>
        


        
        {/* <!-- Center --> */}
        <div id="center">
            <AudioPlayer src={LookLeft} 
                         autoplay
                         style={{width: '100%', 
                                 height: '100%', 
                                 objectFit: 'cover', 
                                 backgroundColor: '#f8f8f8',
                                 backgroundImage: `url(${BOT_Logo}`,
                                 backgroundSize: '100%',
                                // height: '120vh',
                                // borderRadius: '0rem' 
                            }} 
                         onPlay={e => console.log("Listening to Rawk n Roll")}
                         />
        </div>      

    </div>
    
    {/* Footer */}
    <div id="footer">
           <p>All Songs ©BOT</p>  
           <p>Photos by Johanna</p>  
           <p>Logo by Blake</p>
    </div>


    </>
    )
}