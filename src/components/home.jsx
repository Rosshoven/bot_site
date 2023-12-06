import Banner from "../images/Banner.jpg";
import Album from "./album";
import IITLTWD from "../images/IITLTWD.jpg";
import Guan from "../images/Guan.jpg";

export default function Home() {

    const footerStyle = {
        backgroundColor: 'black',
        color: 'white',  
        margin: '0', 
        padding: '.4%'
    }

    return (
    
    <div>
        
        {/* BANNER */}
            <img style=
            // using rem and position fixed keeps the banner in place
            {{marginTop: '4.4rem', 
            width: '100%',
            position: 'static',
            }} 
            src={Banner} className="img-fluid" alt="Boys On Trial Banner" />
           

        {/* ALBUMS */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                flexDirection: "row", 
                backgroundColor: 'pink',
                border: '1px solid silver',
                }}>

                <Album image={IITLTWD} 
                        title={`If it's the last thing we do...`}
                        description={'album cover for IITLTWD'}/>
                <Album image={Guan}
                        title={`¡Guantanamo Boy!`} 
                        description={'album cover for ¡Guantanamo Boy!'}
                        />
                <Album image={IITLTWD} 
                        title={`If it's the last thing we do...`}
                        description={'album cover for IITLTWD'}/>
                <Album image={Guan}
                        title={`¡Guantanamo Boy!`} 
                        description={'album cover for ¡Guantanamo Boy!'}
                        />        
            </div>
            
        {/* Footer */}
            <div style={{display: 'flex', justifyContent: 'left', background: 'black'}}>
                <h6 style={footerStyle}>&nbsp;©2023DADADesigns&nbsp;</h6> 
                <h6 style={footerStyle}>&nbsp;&nbsp;Photos by Johanna&nbsp;</h6> 
                <h6 style={footerStyle}>&nbsp;&nbsp;Logo by Blake&nbsp;</h6>                
            </div>


        </div>    
    );
};