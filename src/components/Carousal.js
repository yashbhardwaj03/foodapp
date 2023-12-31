import React from 'react'

export default function Carousal() {
    return (
        <div>
            <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-inner" id="carousel">
                    <div className="carousel-item active">
                        <img src="https://source.unsplash.com/random/900x700/?burger" className="d-block w-100" alt="https://source.unsplash.com/random/900x700/?burger"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?momos" className="d-block w-100" alt="https://source.unsplash.com/random/900x700/?burger"/>
                    </div>
                    <div className="carousel-item">
                        <img src="https://source.unsplash.com/random/900x700/?jalebi" className="d-block w-100" alt="https://source.unsplash.com/random/900x700/?burger"/>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    )
}
