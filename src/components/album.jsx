



export default function Album( { image, description, albumTitle}) { 

    return (

        <div style={{display: 'flex', flexDirection: 'row', margin: '14%'}}>
            
            <img src={image} 
                 alt={description}
                 className="img-fluid"
                 style={{margin: '1rem', width: '350px', height: '350px', border: '3px solid silver', borderRadius: '1.5%' }}>
            </img>  
            
            <h3>{albumTitle}</h3>    

        </div>

    )
};
