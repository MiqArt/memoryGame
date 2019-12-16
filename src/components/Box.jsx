import React from 'react'

const Box = ({ boxClass, alt, onClick, color }) => {
    return (
        // <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-3 col-3 p-0">
            <div onClick={onClick} className={`thecard ${boxClass || ""}`}>
                <div className="thefront" 
                     style={{background: `linear-gradient(to right bottom, ${color.c1}, ${color.c2}), url('/unknown.svg')`}}>
                </div>
                <div className="theback">
                    <img alt={alt} src={`/${alt}.jpg`}/>
                </div>
            </div>
            </div>
        // </div>
    )
}

export default Box
