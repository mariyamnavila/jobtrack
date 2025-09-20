import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLoaderData } from "react-router-dom";
import CategoryItem from "../CategoryItem";
import { useEffect, useRef, useState } from 'react';
import { useGSAP } from '@gsap/react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './category.css'
gsap.registerPlugin(ScrollTrigger)


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", top: '93px', right: '-9px' }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    console.log(className, style);
    return (
        <div
            className={className}
            style={{ ...style, display: "block", position: 'relative', left: '-18px', top: '96px' }}
            onClick={onClick}
        />
    );
}


const Category = () => {
    const scrollRef = useRef()

    useGSAP(() => {
        const texts = gsap.utils.toArray(
            scrollRef.current.children
        );
        texts.forEach((text) => {
            gsap.from(text, {
                yPercent: 100,
                duration: 1.5,
                stagger: 0.1,
                opacity: 0,
                scrollTrigger: {
                    trigger: text,
                    start: 'top 80%',
                    toggleActions: 'restart none none none',
                    markers: false,
                    // once: true
                },
                ease: "back.out",
                // ease: "expo.in",
            })
        })
    })


    const [sliderReady, setSliderReady] = useState(false);

    useEffect(() => {
        setSliderReady(true);
    }, []);

    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    // initialSlide: 2
                }
            },
            {
                breakpoint:576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const categories = useLoaderData();
    return (
        <div className="container mx-auto my-16">
            <div className="flex flex-col justify-center items-center space-y-5 mb-12" ref={scrollRef}>
                <h3 className="text-success text-4xl font-semibold">Browse by category</h3>
                <p className="text-neutral font-medium px-5">Find the job that’s perfect for you. about 70+ new jobs everyday</p>
            </div>
            {sliderReady && (
                <Slider {...settings} className="slider-container">
                    {categories.map(item => <CategoryItem key={item.id} categoryItem={item} />)}
                </Slider>
            )}
            {/* <Slider {...settings} className='slider-container'>
                {
                    categories.map(categoryItem => {
                        return (
                            <CategoryItem key={categoryItem.id} categoryItem={categoryItem}></CategoryItem>
                        );
                    })
                }
            </Slider> */}
        </div>
    );
};

export default Category;