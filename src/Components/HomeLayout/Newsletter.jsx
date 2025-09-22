import { IoIosMail } from "react-icons/io";
import { SiTicktick } from "react-icons/si";
import heroPic from '../../assets/hero1.jpg';
import heroPic2 from '../../assets/hero-2.jpg';
import find from '../../assets/findImage.jpg';
import Newsletter2 from '../../assets/newsletter2.jpg';
import Newsletter1 from '../../assets/newsletter.jpg';
// import bg from '../../assets/image-bg.png';
const Newsletter = () => {
    return (
        <div className={`bg-[url('/src/assets/image-bg.png')] max-w-5xl rounded-xl lg:mx-auto mx-3 pt-16 pb-28 my-16 flex flex-col`}>
            <div className="relative  lg:block hidden">
                <img className="absolute w-[75px] h-[100px] object-cover -top-5 left-8 rounded-[10px] outline-2 outline-offset-2 outline-primary" src={find} alt="" />
                <img className="absolute w-[60px] h-[70px] object-cover rounded-[10px] top-15 left-40 outline-2 outline-offset-2 outline-primary" src={heroPic2} alt="" />
                <img className="absolute w-[85px] h-[55px] object-cover rounded-[10px] top-36 left-10 outline-2 outline-offset-2 outline-primary" src={Newsletter2} alt="" />
            </div>
            <div className="flex flex-col justify-center items-center space-y-7 ">
                <h3 className="text-white text-3xl font-medium lg:w-1/3 text-center">New Things Will Always Update Regularly</h3>
                <div className="flex items-center bg-white p-3 rounded-[8px] outline-2 outline-offset-2 outline-primary ">
                    <IoIosMail className="text-[#8fae99] text-3xl mr-3 ml-2"/>
                    <input className="focus:outline-none text-xs lg:mr-28 " type="email" name="" id="" placeholder="Enter your email here" />
                    <button className="btn btn-primary text-xs"><SiTicktick className="text-white"/> Subscribe</button>
                </div>
            </div>
            <div className="relative lg:block hidden"> 
                <img className="absolute w-[110px] h-[75px] object-cover -top-[185px] right-20 rounded-[10px] outline-2 outline-offset-2 outline-primary" src={heroPic} alt="" />
                <img className="absolute w-[60px] h-[70px] object-cover rounded-[10px] -top-18 right-10 outline-2 outline-offset-2 outline-primary" src={Newsletter1} alt="" />
            </div>
        </div>
    );
};

export default Newsletter;