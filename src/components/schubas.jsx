import Album from './album';

export default function Schubas() {

    return(

    <div style={{backgroundColor: 'pink', padding: '.1rem'}}>
        <Album image={} 
               description={`If it's the last thing we do Album Cover`} 
               albumTitle={`If it's the last thing we do...`}
               albumDetail1={`Recorded by Boys On Trial`}
               albumDetail2={`@ *Bearfux Troy's in Chicago`}
               albumDetail3={`Spring 2008`}
               albumDetail4={`Michael.gv`}
               albumDetail5={`Colin.d`}
               albumDetail6={`Ken.b`}
               albumDetail7={`Masterd By Ken`}
               albumDetail8={`*Top floor SW corner Kedzie/Armitage`}
               albumDetail9={`Cover from last soundcheck, Reggie's Rock Room`}
               songTitle1={`Rex`}
               songTitle2={`Fireplay`}
               songTitle3={`Look Left`}
               songTitle4={`Say Something`}
               songTitle5={`Get In Line`}
               track1={}
               track2={}
               track3={}
               track4={}
               track5={}
               backgroundColor={'silver'}
               border={'green 2px solid'}
               />
               <p style={{fontSize: '2rem', color: 'pink', display: 'flex', justifyContent: 'right', alignContent: 'top', 
            //    marginLeft: '65%', 
               marginRight: '5%'
            }} 
               onMouseEnter={(e) => e.target.style.color = 'red'}
               onMouseLeave={(e) => e.target.style.color = 'pink'}
               >...it was</p>
    </div>           
      
)
}