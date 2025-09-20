import { SiTicktick } from "react-icons/si";
import hiring1 from '../../assets/hiring1.png';
import hiring2 from '../../assets/hiring2.png';
const Hiring = () => {
    return (
        <div className="border border-base-200 flex md:flex-row flex-col justify-between md:justify-evenly lg:justify-between items-center rounded-xl p-3 lg:mx-auto mx-5 space-y-5 max-w-5xl my-16 ">
            <div className="lg:block hidden">
                <img className="w-[160px]" src={hiring1} alt="" />
            </div>
            <div>
                <p className="text-neutral font-bold">We are <br /><span className="text-[#1d553c] text-5xl">Hiring</span>
                </p>
            </div>
            <div className="mt-5">
                <p className="text-neutral font-medium">
                    Let’s <span className="text-[#1d553c]">Work </span>Together <br />& <span className="text-[#1d553c]">Explore</span> Opportunities
                </p>
            </div>
            <div className="mt-5">
                <p className="btn btn-primary flex"> <SiTicktick className="text-white"/> Apply now</p>
            </div>
            <div className="lg:block hidden">
                <img className="w-[250px]" src={hiring2} alt="" />
            </div>
        </div>
    );
};

export default Hiring;