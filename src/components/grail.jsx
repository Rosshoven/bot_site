import '../grail.css';

export default function Grail() {


    return (
    <div className="wrapper">
        
        <div id="header">
            <h1>Boys On Trial</h1>
            {/* <a href="https://github.com/Rosshoven/Rosshoven.github.io.git" target="_blank" rel="noreferrer"><i id="git-logo" class="fa fa-github"></i></a> */}
"Lohi"
        </div>
       
        <div id="left" className="column">
            <img className="logo" src="./Images/Images/HTML5.jpg" alt="html logo" />
            <img  className="logo" src="./Images/Images/CSS3.jpg" alt="css5 logo" />
            <img className="logo" src="./Images/Images/JS5.jpg" alt="JavaScript logo" />
        </div>
        
        {/* <!-- EYES --> */}
        <div id="video" className="eyes">
                <div className="eye">
                    <div className="ball"></div>
                </div>
                <div className="eye">
                    <div className="ball"></div>
                </div>
        </div> 
          
        <div id="video">
            {/* <iframe style={{width: "100%", height: "100%" }}src="https://www.youtube.com/embed/S5L6WA9phKw" frameborder="0" allowfullscreen controls></iframe> */}
        </div>       

        <div id="right" className="column">
            <img className="logo" src="./Images/Images/Mongo.jpg" alt="html logo" />
            <img className="logo" src="./Images/Images/Express.jpg" alt="JavaScript logo" /> 
            <img  className="logo" src="./Images/Images/React.jpg" alt="css5 logo" />
            <img className="logo" src="./Images/Images/Node.jpg" alt="JavaScript logo" />
        </div>

        <div id="footer">
            <p>Contact me for comments or to discuss a project: &nbsp; <a href="https://www.linkedin.com/in/michael-edward-ross/" target="_blank" rel="noreferrer"><i class="fa fa-linkedin-square"></i></a></p>
            <p id="copyright">©2023DadaDesigns</p>
        </div>

    
    </div>

    )
}