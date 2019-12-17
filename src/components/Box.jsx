import React from 'react';
import fruit1 from '../images/1.jpg';
import fruit2 from '../images/2.jpg';
import fruit3 from '../images/3.jpg';
import fruit4 from '../images/4.jpg';
import fruit5 from '../images/5.jpg';
import fruit6 from '../images/6.jpg';
import fruit7 from '../images/7.jpg';
import fruit8 from '../images/8.jpg';
import unknown from '../images/unknown.svg';

const images = {fruit1, fruit2, fruit3, fruit4, fruit5, fruit6, fruit7, fruit8};

const Box = ({ boxClass, alt, onClick, color }) => {
    return (
        // <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 p-0">
            <div onClick={onClick} className={`thecard ${boxClass || ""}`}>
                <div className="thefront" 
                     style={{background: `linear-gradient(to right bottom, ${color.c1}, ${color.c2}), url(${unknown})`}}>
                </div>
                <div className="theback">
                    <img alt={alt} src={images[`fruit${alt}`]}/>
                </div>
            </div>
            </div>
        // </div>
    )
}

export default Box
