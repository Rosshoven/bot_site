import Logo_Pink from "../images/Logo_Pink.png"
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import Pic_1 from '../images/Pic_1.jpeg';
import Pic_2 from '../images/Pic_1.jpeg';
import Pic_3 from '../images/Pic_1.jpeg';
import Pic_4 from '../images/Pic_1.jpeg';
import Pic_5 from '../images/Pic_1.jpeg';
import Pic_6 from '../images/Pic_1.jpeg';

export default function Pics() {

    const Background = {
        backgroundImage: `url(${Logo_Pink})`,
        width: '100%',
        height: '100%',
        margin: '4.5rem 0', 
        padding: '0',
      };

    return (
            <div style={Background}>
                <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
                    <div name="carousel-inner">
                        
                        <div name="carousel-item active">
                        <img src={Pic_1} className="d-block w-100" alt="Band pic downtown" />
                        </div>

                        <div className="carousel-item active">
                        <img src={Pic_2} className="d-block w-100" alt="Band pic downtown" />
                        </div>

                        <div className="carousel-item">
                        <img src={Pic_3} className="d-block w-100" alt="Band pic downtown" />
                        </div>

                        <div className="carousel-item">
                        <img src={Pic_4} className="d-block w-100" alt="Band pic downtown" />
                        </div>

                        <div className="carousel-item">
                        <img src={Pic_5} className="d-block w-100" alt="Band pic downtown" />
                        </div>

                        <div className="carousel-item">
                        <img src={Pic_6} className="d-block w-100" alt="Band pic downtown" />
                        </div>

                    </div>

                    <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
    );
};