import find from '../../assets/findImage.jpg';
import image1 from '../../assets/image1.png';
import image2 from '../../assets/image2.png';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger)

const FindJob = () => {

    useGSAP(() => {
        
        gsap.from('#find-job', {
            yPercent: 100,
            duration: 1.5,
            stagger: 0.1,
            opacity: 0,
            scrollTrigger: {
                trigger: '#find-job',
                start: 'top 80%',
                toggleActions: 'restart none none none',
                markers: false,
            },
            ease: "back.out",
        })

        gsap.from('#find', {
            yPercent: 100,
            duration: 1.5,
            stagger: 0.1,
            opacity: 0,
            scrollTrigger: {
                trigger: '#find',
                start: 'top 90%',
                toggleActions: 'restart none none none',
                markers: false,
                // once: true
            },
            // ease: "back.inOut",
            // ease: "expo.inOut",
            ease: "power.inOut",
        })

    })

    return (
        <div className='container mx-auto flex md:flex-col lg:flex-row mt-50 mb-28 '>
            <div className='relative   md:mx-10 '>
                <img className='absolute hidden lg:block w-[280px] rounded-2xl shadow-lg -top-24 border border-base-200' src={image1} alt="" />
                <img className='w-[450px] hidden md:block lg:block h-[400px] object-cover rounded-4xl z-10 relative mx-[100px] shadow-md -top-12' src={find} alt="" />
                <img className='absolute hidden lg:block w-[220px] rounded-2xl shadow-lg top-44 left-100 border border-base-200 ' src={image2} alt="" />
            </div>
            <div className="space-y-2 lg:w-1/3 mx-4 md:mx-6">
                <div >
                    <p id='find-job' className="text-base-300 text-2xl font-bold" >Millions Of Jobs.</p>
                    <p id='find' className="text-[#1d553c] text-6xl font-bold">Find The One That’s <span className="text-secondary">Right</span> For You</p>
                </div>
                <p className="text-success my-10">Search all the open positions on the web. Get your own personalized salary estimate. Read reviews on over 600,000 companies worldwide. The right job is out there.</p>
                <div className="flex justify-start items-center">
                    <button className="btn btn-primary hover:bg-[#1d553c]">Search Jobs</button>
                    <button className="link px-6">Learn More</button>
                </div>
            </div>
        </div>
    );
};

export default FindJob;