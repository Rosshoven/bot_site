



export default function Album( { image, description, title }) { 

    return (
<div style={{display: 'flex', flexDirection: 'column'}}>

    {/* <div style={{display: "flex", flexDirection: "column", border: "solid hotpink 1px", backgroundColor: 'hotpink', borderRadius: "5%", marginTop: "1%"}}>
        <div>{description}</div>
        <img width={200} alt={description} src={image} />
        <a target="_blank" rel="noreferrer" href={button}>Go to Vid</a>
    </div> */}

        {/* <picture> */}
            {/* <source srcset="..." type="image/svg+xml"></source> */}
            <h2 style={{alignSelf: 'center', margin: '0'}}>{title}</h2>
            <img src={image} 
                 alt={description}
                 class="img-fluid"
                 style={{margin: '1rem', width: '350px', height: '350px', border: '3px solid silver', borderRadius: '1.5%' }}>
                 </img>
        {/* </picture> */}

</div>

    )
};
