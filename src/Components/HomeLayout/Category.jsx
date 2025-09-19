import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useLoaderData } from "react-router-dom";
import CategoryItem from "../CategoryItem";
import { useRef } from 'react';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

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
                    start:'top 80%',
                    toggleActions: 'restart none none none',
                    markers: false,
                    // once: true
                },
                ease: "back.out",
                // ease: "expo.in",
            })
        })
    })

    const categories = useLoaderData();
    return (
        <div className="container mx-auto my-16">
            <div className="flex flex-col justify-center items-center space-y-5 mb-12" ref={scrollRef}>
                <h3 className="text-success text-4xl font-semibold">Browse by category</h3>
                <p className="text-neutral font-medium px-5">Find the job that’s perfect for you. about 70+ new jobs everyday</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 px-3">
                {
                    categories.map(categoryItem => <CategoryItem categoryItem={categoryItem}></CategoryItem>)
                }
            </div>
        </div>
    );
};

export default Category;