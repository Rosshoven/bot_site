



export default function Album( { image, description, albumTitle, albumDetail1, albumDetail2, albumDetail3, albumDetail4, albumDetail5, albumDetail6, albumDetail7, albumDetail8, albumDetail9}) { 

    return (

        <div style={{display: 'flex', flexDirection: 'row',alignItems: 'center', margin: '7rem auto', flexWrap: 'wrap'}}>
            
            <img src={image} 
                 alt={description}
                 className="img-fluid"
                 style={{marginRight: '1rem', width: '350px', height: '350px', border: '3px solid silver', borderRadius: '1.5%' }}>
            </img>  

            <div style={{display: 'flex', flexDirection: 'column'}}> 
                {/* <h1>{albumTitle}</h1>     */}
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

    )
};
