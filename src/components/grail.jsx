import '../grail.css';
import Pic_4 from '../images/Pic_4.jpeg'

export default function Grail() {


    return (
<>
    <div className="wrapper">
        
        {/* Grail in clockwise order from topLeft */}
        
        <div id="topLeft" className="box">
        </div>

        <div id="header" className="box">
            <img style={{width: '100%', height: '100%', objectFit: 'cover' }} src={Pic_4} alt="Pic of Band downtown Chicago" />
            {/* <h1>Boys On Trial</h1> */}
            <div style={{ position: 'fixed', top: '20%', left: '35.5%', transform: 'translate(-50%, -50%)', textAlign: 'left', color: 'black'}}>
            <h1 style={{fontSize: '1rem'}}>Boys On Trial</h1>
  </div>
        </div>
       
        <div id="topRight" className="box">
        </div>

        <div id="midRightA" className="box">        
        </div>

        <div id="midRightB" className="box">
        </div>

        <div id="bottomRight" className="box">
        </div>

        <div id="bottomRightA" className="box">
        </div>

        <div id="bottomLeftA" className="box">
        </div>

        <div id="bottomLeft" className="box">
        </div>

        <div id="midLeftB" className="box">
        </div>

        <div id="midLeftA" className="box">
        </div>
        


        
        {/* <!-- Center --> */}
        <div id="center" className="column">
        </div>      

    </div>
    
    {/* Footer */}
    <div id="footer">
            <p>Contact me for comments or to discuss a project: &nbsp; <a href="https://www.linkedin.com/in/michael-edward-ross/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin-square"></i></a></p>
            <p id="copyright">©2023DadaDesigns</p>
    </div>


    </>
    )
}