import '../grail.css';
import Pic_4 from '../images/Pic_4.jpeg';
import LookLeft from '../tracks/LookLeft.mp3';
import AudioPlayer from 'react-h5-audio-player';
import BOT_Logo from '../images/BOT_Logo.png';
import Rex from '../tracks/Rex.mp3';
import BOT_Gun from '../images/BOT_Gun.png';
import Dog_Motorcycle from '../images/Dog_Motorcycle.png';


export default function Grail() {

    const inputStyle = {
                        width: '90%',
                        backgroundColor: 'pink',
                        borderRadius: '.5rem',
                        overflow: 'auto',                           
                        alignItems: 'center',
                        margin: '4%',
                        padding: '0',
                        autocomplete: 'off',
                        border: '1px solid black'
    }

    return (
<>
    <div className="wrapper">
        
        {/* Grail in clockwise order from topLeft */}
        
        <div id="topLeft" className="box">
        <img src={BOT_Gun} alt="Boys On Trial T-Shirt Logo" 
              style={{
                maxHeight: '100%'
              }} 
              />
        </div>

        <div id="header" className="box">
            <img style={{width: '100%', height: '100%', objectFit: 'cover' }} src={Pic_4} alt="Pic of Band downtown Chicago" />
            {/* <h1>Boys On Trial</h1> */}
            <div style={{ position: 'absolute', top: '15%', left: '35.5%', transform: 'translate(-50%, -90%)', textAlign: 'left', color: 'black'}}>
            {/* <h1 style={{fontSize: '1rem'}}>Boys On Trial</h1> */}
  </div>
        </div>
       
        <div id="topRight" className="box">
        <img src={BOT_Gun} alt="Boys On Trial T-Shirt Logo" 
              style={{
                maxHeight: '100%'
              }} />
        </div>

    <form id="midRightA" className="box">     
        <button style={{marginTop: '2%'}} type="button" class="btn btn-outline-dark">Login</button> 
             {/* <label htmlFor="userName">Username</label> */}
                        <input
                            style={inputStyle}
                            id="userName"
                            type="userName"
                            placeholder="Username"
                            // autocomplete="off"
                            // value={values.email}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // className={errors.email && touched.email ? "input-error form-control" : "form-control"} 
                            />
                        {/* {errors.email && touched.email && <p className="error">{errors.email}</p>} */}

                        {/* <label htmlFor="password">Password</label> */}
                        <input
                            style={inputStyle}
                            id="password"
                            type="password"
                            placeholder="Password"
                            autocomplete="off"
                            // text="Enter Password"
                            name="password" 
                            // value={values.password}
                            // onChange={handleChange}
                            // onBlur={handleBlur}
                            // className={errors.password && touched.password ? "input-error form-control" : "form-control"} 
                            />
                        {/* {errors.password && touched.password && <p className="error">{errors.password}</p>} */}
    </form>

        <div id="midRightB" className="box">
            <button style={{margin: '4%'}} type="button" class="btn btn-outline-dark">Create Account</button> 
        </div>

        <div id="bottomRight" className="box">
            <a href='if'>You are safe today</a>
        </div>

        <div id="bottomRightA" className="box">
            <img src={Dog_Motorcycle} alt="Man riding motorcycle with his Dog"
            style={{ 
                width: '100%',
                height: '100%',
                // transform: 'scaleX(-1)' //FLIPS IMAGE HORIZONTALLY
             }}  />
        </div>

        <div id="bottomLeftA" className="box">
        </div>

        <div id="bottomLeft" className="box">
            <a href='guan'>In all tonight's dreams believe</a>
        </div>

        <div id="midLeftB" className="box">
           <h6 style={{margin: '1% auto', color: 'white'}}>Rex</h6>
        <AudioPlayer src={Rex} 
                         autoplay
                         style={{width: '90%',
                                 height: '90%', 
                                 objectFit:'cover', 
                                 backgroundColor: 'white',
                                 borderRadius: '1rem',
                                 display: 'flex',
                                // margin: '0',
                                overflow: 'auto',
                                alignItems: 'center',
                                margin: '1rem 0rem',
                                padding: '0'
                            }} 
                         onPlay={e => console.log("Listening to Rawk n Roll")}
                         />
        </div>

        <div id="midLeftA" className="box">
        </div>
        


        
        {/* <!-- Center --> */}
        {/* <div id="center"> */}
             <img id="center" src={BOT_Logo} 
                 style={{ 
                    width: '100%',
                    height: '100%'
                 }} 
                 alt="Boys On Trial Logo" 
                 />
            {/* <AudioPlayer src={LookLeft} 
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
                         /> */}
        {/* </div>       */}

    </div>
    
    {/* Footer */}
    <div id="footer">
           <p>All Songs ©BOT</p>  
           <p>Photos by Johanna Claudette</p>  
           <p>Logos by Blake Calovic</p>
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