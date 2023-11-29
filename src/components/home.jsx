import React from "react";
import Banner from "../images/Banner.jpg";

export default function Home() {
    return (
        <div>
            {/* <img style={{margin: "10% 0% 0%", width: "100%"}} src={Banner} alt="Boys On Trial Banner"/> */}
            <img style=
            // using rem and position fixed keeps the banner in place
            {{marginTop: '4.4rem', 
            width: '100%',
            position: 'fixed',
            }} 
            src={Banner} className="img-fluid" alt="Boys On Trial Banner"></img>
            {/* <h1 style={{marginTop: '10%'}} >HOME home HOME</h1> */}
        </div>    
    );
};