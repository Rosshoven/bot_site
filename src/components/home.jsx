import Banner from "../images/Banner.jpg";
import Album from "./album";
import IITLTWD from "../images/IITLTWD.jpg";
import Guan from "../images/Guan.jpg";

export default function Home() {

    const footerStyle = {
        padding: '1%',
        backgroundColor: 'black',
        color: 'white', 
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
            src={Banner} className="img-fluid" alt="Boys On Trial Banner">
            </img>

            {/* ALBUMS */}
            <div style={{
                display: 'flex',
                justifyContent: 'space-around',
                flexWrap: 'wrap',
                flexDirection: "row", 
                backgroundColor: 'pink',
                // alignItems: 'center',
                border: '1px solid silver',
                // padding: '20px',
                // marginTop: '2rem'
                }}>
                <Album image={IITLTWD} 
                        title={`If it's the last thing we do...`}
                        description={'album cover for IITLTWD'}/>
                <Album image={Guan}
                        title={`¡Guantanamo Boy!`} 
                        description={'album cover for ¡Guantanamo Boy!'}
                        />

            </div>
            <div style={{backgroundColor: 'red', display: 'flex'}}>
                <h6 style={footerStyle}>©2023DADADesigns</h6> 
                <h6 style={footerStyle}>Photos by Johanna</h6> 
                <h6 style={footerStyle}>Logo by Blake</h6>
            </div>


        </div>    
    );
};