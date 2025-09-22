import { useLoaderData } from "react-router-dom";
import Company from "../Company";
import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger)

const Companies = () => {
    const { jobList } = useLoaderData()

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

    return (
        <div className="container mx-auto my-16">
            <div className="flex flex-col justify-center items-center space-y-5 mb-12"
            ref={scrollRef}
            >
                <h3 className="text-success text-4xl font-semibold">Company of the day</h3>
                <p className="text-neutral font-medium px-5">Search and connect with the right job faster.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-3">
                {
                    jobList.map(company => <Company company={company}></Company>)
                }
            </div>
        </div>
    );
};

export default Companies;