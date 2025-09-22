import { useLoaderData } from "react-router-dom";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from 'swiper/react';
import Review from "../Review";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
gsap.registerPlugin(ScrollTrigger)

const ClientReviews = () => {
    const scrollRef = useRef()
    
    const { reviews } = useLoaderData()

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

    return (
        <div className="container mx-auto ">
            <div className="flex flex-col justify-center items-center space-y-5 mb-12"
            ref={scrollRef}
            >
                <h3 className="text-success text-4xl font-semibold text-center">What Our <span className="text-secondary">Customers Are Saying</span></h3>
                <p className="text-neutral font-medium px-5 text-center">See how professionals across different fields are sharing their journeys with us.</p>
            </div>
            <div className="">
                <Swiper
                    slidesPerView={1}
                    spaceBetween={10}
                    // pagination={{
                    //     clickable: true,
                    // }}
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 10,
                        },
                        1024: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                    }}
                    // modules={[Pagination]}
                    modules={[Autoplay]}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    className="mySwiper"
                >
                    {reviews.map(singleReview => <SwiperSlide key={singleReview.id} ><Review singleReview={singleReview}></Review></SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    );
};

export default ClientReviews;