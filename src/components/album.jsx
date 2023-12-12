import { useState } from "react";



export default function Album( { image, description, albumTitle, albumDetail1, albumDetail2, albumDetail3, albumDetail4, albumDetail5, albumDetail6, albumDetail7, albumDetail8, albumDetail9, songTitle1, songTitle2, songTitle3, songTitle4, songTitle5, track1, track2, track3, track4, track5, backgroundColor, border}) { 


    const audioStyle = {
        margin: '0 0 .7rem',
        border: 'solid green 1.5px',
        borderRadius: '2rem',
    }

    const coverStyle = {
        width: '400px', 
        height: '400px', 
        borderRadius: '1.5%', 
        border: '.7px solid silver',
        marginRight: '1rem',
        boxShadow: '4px 4px 20px rgba(55, 24, 3, 1)',
  }

    const tracksStyle = {
        width: '330px', 
        height: '330px', 
        borderRadius: '1.5%',
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        margin: '1rem',
        backgroundColor,
        border,
        boxShadow: '2px 2px 12px rgba(55, 24, 3, 1)',
    }

    

    const [backCover, setBackCover] = useState(false);

    return (

    <div style={{display: 'flex', 
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', alignContent:'space-evenly', 
    flexWrap: 'wrap', 
    margin: '9rem auto'}}>
            

        {/* Album Front/Back */}    
        {!backCover ? (  

            <img src={image} 
                 alt={description}
                 className="img-fluid"
                 style={coverStyle}
                 onMouseEnter={() => setBackCover(true)}
                 >   
            </img>

         ) : ( 

            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center', width: '400px', height: '400px', marginRight: '1rem', backgroundColor, border, borderRadius: '1.5%', 
                boxShadow: '4px 4px 20px rgba(55, 24, 3, 1)',}} 
                onMouseLeave={() => setBackCover(false)}>

                <h4>{albumDetail1}</h4>
                <h4>{albumDetail2}</h4>
                <h4>{albumDetail3}</h4>
                <h5>{albumDetail4}</h5>
                <h5>{albumDetail5}</h5>
                <h5>{albumDetail6}</h5>
                <h6>{albumDetail7}</h6>
                <h6>{albumDetail8}</h6>
                <h6>{albumDetail9}</h6>
            </div>
           
           )}


        {/* Tracks */}
        <figure style={tracksStyle}>
            {/* <h1>{albumTitle}</h1>     */}
            <figcaption>{songTitle1}</figcaption>
            <audio controls src={track1} style={audioStyle}/>

            <figcaption>{songTitle2}</figcaption>   
            <audio controls src={track2} style={audioStyle}/>

            <figcaption>{songTitle3}</figcaption>   
            <audio controls src={track3} style={audioStyle}/>

            <figcaption>{songTitle4}</figcaption>   
            <audio controls src={track4} style={audioStyle}/>

            <figcaption>{songTitle5}</figcaption>   
            <audio controls src={track5} style={audioStyle}/>
        </figure>   

    </div>

)
};
