import { useContext, useEffect, useState } from "react";
import { JobsContext } from "../Provider/JobsProvider";
import { useLoaderData } from "react-router-dom";
import AppliedJob from "../Components/AppliedJob";
import { IoArrowBackOutline } from "react-icons/io5";
// import Loading from "../Components/Loading";
const AppliedJobs = () => {
    const { jobs } = useContext(JobsContext);
    const CompanyJobs = useLoaderData();
    const [appliedJobs, setAppliedJobs] = useState([]);
    const removeItemFromState = (id) => {
        const removed = appliedJobs.filter(job => job.id !== id)
        setAppliedJobs(removed)
    }
    useEffect(() => {
        const appliedJobsArray = CompanyJobs.map(company =>
            company.jobs.filter(job => jobs.includes(job.id))
        );
        const Applied = appliedJobsArray.flat()
        setAppliedJobs(Applied);
    }, [CompanyJobs, jobs])

    return (
        <div className="container mx-auto my-5 ">
            <div className="flex flex-col justify-center items-center space-y-1 bg-base-100 rounded-2xl py-7 mx-6">
                <h2 className="text-success text-2xl font-semibold">Applied Jobs</h2>
                <p className="text-neutral ">Find Your Dream Job</p>
            </div>
            <div className="mx-3">
                {
                    appliedJobs?.map(job => <AppliedJob key={job.id} job={job} removeItemFromState={removeItemFromState}></AppliedJob>)
                }
            </div>
            <div className="py-3 flex justify-center">
                {/* <Link to={'/#companies'} className="btn btn-secondary">Back to companies</Link> */}
                <a href='/' className="btn btn-secondary "><IoArrowBackOutline className=" text-xl" /> Back to companies</a>
            </div>
        </div>
    );
};

export default AppliedJobs;