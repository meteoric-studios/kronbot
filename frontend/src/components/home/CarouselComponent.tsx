import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from 'react';
import Slider from 'react-slick';

export default function CarouselComponent (){
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings}>
            <div>
                <img src="path_to_image1.jpg" alt="Image 1" />
            </div>
            <div>
                <img src="path_to_image2.jpg" alt="Image 2" />
            </div>
            <div>
                <img src="path_to_image3.jpg" alt="Image 3" />
            </div>

        </Slider>
    );

};
