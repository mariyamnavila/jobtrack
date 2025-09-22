import { CiLocationOn } from "react-icons/ci";

const Company = ({company}) => {
    const {logo,name,location,website,industry,jobs} = company;
    return (
        <div className="bg-base-100 border border-base-200 flex flex-col justify-center items-center rounded-xl space-y-2 p-5 hover:shadow-md">
            <img className="rounded-xl pb-1.5" src={logo} alt="" />
            <p className="text-2xl font-semibold text-success">{name}</p>
            <p className="text-neutral">{industry}</p>
            <p className="text-[#8fae99] text-xs">{website}</p>
            <p className="text-xs flex text-[#8fae99]"> <CiLocationOn className="" /> {location}</p>
            <button className="btn btn-secondary mt-2">{jobs.length} Jobs Open</button>
        </div>
    );
};

export default Company;