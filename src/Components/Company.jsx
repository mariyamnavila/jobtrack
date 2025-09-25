import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const Company = ({company}) => {
    const {id,logo,name,location,website,industry,jobs} = company;
    return (
        <div className="bg-base-100 border border-base-200 flex flex-col justify-center items-center rounded-xl space-y-2 p-5 hover:shadow-md transform transition duration-300 hover:-translate-y-1">
            <img className="rounded-xl pb-1.5" src={logo} alt="" />
            <p className="text-2xl font-semibold text-success">{name}</p>
            <p className="text-neutral">{industry}</p>
            <p className="text-[#8fae99] text-xs">{website}</p>
            <p className="text-xs flex text-[#8fae99]"> <CiLocationOn className="" /> {location}</p>
            <Link to={`/company/${id}`} className="btn btn-secondary mt-2">{jobs.length} Jobs Open</Link>
        </div>
    );
};

export default Company;