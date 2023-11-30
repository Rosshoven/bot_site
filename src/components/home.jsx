// import React from "react";
import Banner from "../images/Banner.jpg";
import Album from "./album";
import IITLTWD from "../images/IITLTWD.jpg";
import Guan from "../images/Guan.jpg";

export default function Home() {
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
                backgroundColor: 'red',
                // alignItems: 'center',
                border: '1px solid silver',
                // padding: '20px',
                // marginTop: '2rem'
                }}>
                <Album image={IITLTWD} 
                        description={'album cover for IITLTWD'}/>
                <Album image={Guan} 
                        description={'album cover for ¡Guantanamo Boy!'}
                        // title={'¡Guantanamo Boy!'}
                        />

            </div>


        </div>    
    );
};