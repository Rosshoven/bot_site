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
                                //  backgroundImage: `url(${BOT_Logo}`,
                                 backgroundSize: '20%',
                                // height: '120vh',
                                borderRadius: '1rem' 
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



// BELOW IS FIRST ATTEMOT AT HOME...TURNED INTO WILD LOOKING ALBUMS PAGE
// import Banner from "../images/Banner.jpg";
// import Album from "./album";
// import IITLTWD from "../images/IITLTWD.jpg";
// import GuanCov from "../images/GuanCov.jpg";
// import Player from "./player";

// export default function Home() {

//     const footerStyle = {
//         backgroundColor: 'black',
//         color: 'white',  
//         margin: '0', 
//         padding: '.4%'
//     }

//     return (
    
//     <div>
        
//         {/* BANNER */}
//             <img style=
//             // using rem and position fixed keeps the banner in place
//             {{marginTop: '4.4rem', 
//             width: '100%',
//             position: 'static',
//             }} 
//             src={Banner} className="img-fluid" alt="Boys On Trial Banner" />
           

//         {/* ALBUMS */}
//             <div style={{
//                 display: 'flex',
//                 justifyContent: 'space-around',
//                 flexWrap: 'wrap',
//                 flexDirection: "row", 
//                 backgroundColor: 'pink',
//                 border: '1px solid silver',
//                 }}>

//                 <Album image={IITLTWD} 
//                         title={`If it's the last thing we do...`}
//                         description={'album cover for IITLTWD'}/>
//                 <Album image={GuanCov}
//                         title={`¡Guantanamo Boy!`} 
//                         description={'album cover for ¡Guantanamo Boy!'}
//                         />
//                 <Album image={IITLTWD} 
//                         title={`If it's the last thing we do...`}
//                         description={'album cover for IITLTWD'}/>
//                 <Album image={GuanCov}
//                         title={`¡Guantanamo Boy!`} 
//                         description={'album cover for ¡Guantanamo Boy!'}
//                         />        
//             </div>

//         {/* Player */}
//         <Player />

            
//         {/* Footer */}
//             <div style={{display: 'flex', justifyContent: 'left', background: 'black'}}>
//                 <h6 style={footerStyle}>&nbsp;©2023DADADesigns&nbsp;</h6> 
//                 <h6 style={footerStyle}>&nbsp;&nbsp;Photos by Johanna&nbsp;</h6> 
//                 <h6 style={footerStyle}>&nbsp;&nbsp;Logo by Blake&nbsp;</h6>                
//             </div>


//         </div>    
//     );
// };