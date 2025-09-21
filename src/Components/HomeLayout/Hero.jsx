import heroPic from '../../assets/hero1.jpg';
import heroPic2 from '../../assets/hero-2.jpg';
import { SlBriefcase, SlLocationPin } from 'react-icons/sl';
import { CgMenuGridO } from 'react-icons/cg';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Hero = () => {
    useGSAP(() => {
        gsap.from('.hero-text', {
            duration: 1.5,
            yPercent: 100,
            opacity: 0,
            stagger: 0.1,
            ease: "back.out",
            // ease: "expo.in",
        })
        gsap.from('#heroPic', {
            y: 50,
            repeat: -1,
            yoyo: true,
            duration: 2,
            ease: 'power2.inOut'
        })
        gsap.to('#heroPic2', {
            x: 70,
            repeat: -1,
            yoyo: true,
            duration: 3.5,
            ease: 'power2.inOut'
        })
    }, [])

    return (
        <div className='container mx-auto '>
            <div className='flex justify-center items-center pt-14 pb-10'>
                <div className='lg:w-2/5 w-full px-6 space-y-5 lg:mr-36'>
                    <h2 className='text-[#1d553c] text-5xl font-bold hero-text'>The <span className='text-secondary'>Easiest Way</span> <br />to Get Your New Job</h2>
                    <p className='text-success text-xl hero-text'>Each month, more than 3 million job seekers turn to
                        website in their search for work, making over 140,000
                        applications every single day</p>
                    <div className='flex'>
                        <div className='bg-white flex flex-col md:flex-row  shadow-2xl py-6 items-center space-x-3 rounded-2xl px-5 my-3 space-y-3'>
                            <p className='flex items-center font-light text-success border-r-0 md:border-r border-[#8fae99] pr-2 mb-0'> <SlBriefcase className='text-[#8fae99] mr-3 ' />Industry  <RiArrowDropDownLine className='text-2xl ' /></p>
                            <p className='flex items-center font-light text-success border-r-0 md:border-r border-[#8fae99] pr-2  mb-0'> <SlLocationPin className='text-[#8fae99] mr-3' />Location  <RiArrowDropDownLine className='text-2xl ' /></p>
                            <div className='flex items-center'>
                                <CgMenuGridO className='text-[#8fae99] text-xl mr-3' />
                                <input className=' w-40 focus:outline-none' placeholder='Your keywords...' type="text" />
                            </div>
                        </div>
                        <div className='btn btn-primary relative -left-10 top-13 md:top-5 mt-3'>Search</div>
                    </div>
                    <div>
                        <p className=' hero-text'>
                        <span className='text-success font-bold'>Popular Searches: </span>
                        <span className='link text-secondary'>Designer, </span>
                        <span className='link text-secondary'> Web, </span>
                        <span className='link text-secondary'>IOS, </span>
                        <span className='link text-secondary'>Developer, </span>
                        <span className='link text-secondary'>PHP ,</span>
                        <span className='link text-secondary'>Senior ,</span>
                        <span className='link text-secondary'>Engineer </span>
                    </p>
                    </div>
                </div>
                <div className='hidden lg:block'>
                    <img id='heroPic' className='w-[400px] relative top-4 rounded-[40px] rounded-bl-none border-b-8 border-b-primary border-l-8 border-l-primary shadow-2xl' src={heroPic} alt="" />
                    <img id='heroPic2' className='w-[280px] relative top-1 left-20 rounded-[30px] rounded-bl-none border-b-8 border-b-primary border-l-8 border-l-primary hidden lg:block shadow-2xl' src={heroPic2} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Hero;