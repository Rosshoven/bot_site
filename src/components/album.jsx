



export default function Album( { image, description, albumTitle, albumDetail1, albumDetail2, albumDetail3, albumDetail4, albumDetail5, albumDetail6, albumDetail7, albumDetail8, albumDetail9, songTitle1, songTitle2, songTitle3, track1, track2, track3}) { 


    const audioStyle = {
        margin: '0 0 .5rem',
        border: 'solid green 1.5px',
        borderRadius: '2rem'
    }

    return (
<div style={{padding: '0', margin: '0 auto'}} >
    <div style={{margin: '7rem auto 1.4rem', display: 'flex', flexDirection: 'column',alignItems: 'center'}}>
        
        <h1>{albumTitle}</h1>       
       
        <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center',
        justifyContent: 'center',
        margin: '1rem auto 1.4rem', flexWrap: 'wrap'}}>
            
            <img src={image} 
                 alt={description}
                 className="img-fluid"
                 style={{marginRight: '1rem', width: '350px', height: '350px', border: '3px solid silver', borderRadius: '1.5%' }}>
            </img>  

            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'self-start'
            ,width: '350px', height: '350px'
            }}> 
                <h4>{albumDetail1}</h4>
                <h4>{albumDetail2}</h4>
                <h4>{albumDetail3}</h4>
                <h4>{albumDetail4}</h4>
                <h4>{albumDetail5}</h4>
                <h5>{albumDetail6}</h5>
                <h5>{albumDetail7}</h5>
                <h5>{albumDetail8}</h5>
                <h6>{albumDetail9}</h6>
            </div>
        </div>
    </div>   

        <figure style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
            <h1>{albumTitle}</h1>    
            <figcaption>{songTitle1}</figcaption>
            <audio controls src={track1} style={audioStyle}/>

            <figcaption>{songTitle2}</figcaption>   
            <audio controls src={track2} style={audioStyle}/>

            <figcaption>{songTitle3}</figcaption>   
            <audio controls src={track3} style={audioStyle}/>
        
        </figure>   
        
</div> )
};
