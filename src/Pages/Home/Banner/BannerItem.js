
import React from 'react';
import './BannerItem.css'

const BannerItem = ({ slide }) => {
    const { image, prev, next, id } = slide;



    return (
        <div id={`slide${id}`} className="carousel-item relative w-full">
            <div className='carousel-img'>
                <img src={image} alt="" className="w-full rounded-lg " />
            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-24  top-1/2">
                <h1 className='text-5xl text-white font-semibold'>Convenience Food
                    <br />
                    Business Plan</h1>

            </div>
            <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
                <a href={`#slide${prev}`} className="btn btn-circle mr-5">❮</a>
                <a href={`#slide${next}`} className="btn btn-circle">❯</a>
            </div>
        </div>
    );
};

export default BannerItem;