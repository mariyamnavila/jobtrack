import { useEffect, useState } from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";
import SingleJob from "./SingleJob";
import { IoArrowBackOutline } from "react-icons/io5";

const CompanyJobList = () => {
    const companies = useLoaderData();
    const companyId = useParams();
    const [company, setCompany] = useState('')
    useEffect(() => {
        const actualCompany = companies.find(company => company.id == companyId.id);
        setCompany(actualCompany)
    }, [companies, companyId])
    const { name, location, industry, jobs,logo } = company;
    return (
        <div className="container mx-auto my-5 ">
            <div className="flex flex-col justify-center items-center space-y-1 bg-base-100 rounded-2xl py-7 mx-6">
                <h2 className="text-success text-2xl font-semibold">{name}</h2>
                <p className="text-neutral ">{industry}</p>
                <p className="text-neutral text-xs">{location}</p>
            </div>
            <div className="flex flex-col md:flex-row md:justify-between justify-center items-center space-y-3 my-3 mx-6">
                <p className="text-info font-semibold text-xl">Jobs Available Now ({jobs?.length})</p>
                <button className="btn btn-secondary text-white">Sort</button>
            </div>
            <div className="mx-3">
                {
                    jobs?.map(job =><SingleJob key={job.id} job={job} logo={logo}></SingleJob>)
                }
            </div>
            <div className="mx-6">
                {/* <Link to={'/#companies'} className="btn btn-secondary">Back to companies</Link> */}
                <a href='/#companies' className="btn btn-secondary "><IoArrowBackOutline className=" text-xl" /> Back to companies</a>
            </div>
        </div>
    );
};

export default CompanyJobList;