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
        border: '3px solid silver', 
        borderRadius: '1.5%'
    }

    const [backCover, setBackCover] = useState(false);

    return (
<div style={{padding: '0', margin: '0 auto'}}>
    
    <div style={{margin: '7rem 0 1.2rem', display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        
            <h1>{albumTitle}</h1>       
       
        {!backCover ? (
        <div style={{display: 'flex', flexDirection: 'row',
        justifyContent: 'center', flexWrap: 'wrap'}}
                    // {{display: 'flex', flexDirection: 'row', 
                    // margin: '1rem auto 1.4rem', flexWrap: 'wrap'}}
                    >
        
            <img src={image} 
                 alt={description}
                 className="img-fluid"
                 style={coverStyle}
                 onMouseEnter={() => setBackCover(true)}
                 >   
            </img>
        </div>    
            ) : ( 
          <div style={{display: 'flex', flexDirection: 'row',
              justifyContent: 'center', flexWrap: 'wrap', backgroundColor, border}} >
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-evenly', alignItems: 'center'
                    ,width: '400px', height: '400px', border: '3px solid silver', 
                    borderRadius: '1.5%'}} onMouseLeave={() => setBackCover(false)}
            > 
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
          </div> )}

        </div>   

        <figure style={{display: 'flex', flexDirection: 'column', alignItems: 'center', border: '2px solid silver', backgroundColor: 'silver', borderRadius: '1rem'}}>
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

</div> )
};
