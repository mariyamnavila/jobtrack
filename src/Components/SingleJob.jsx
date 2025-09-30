// import { CiLocationOn } from "react-icons/ci";
import { useContext } from "react";
import { GrBriefcase } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { MdAttachMoney } from "react-icons/md";
import { JobsContext } from "../Provider/JobsProvider";
import { Navigate, useNavigate, } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { toast, ToastContainer } from "react-toastify";


const SingleJob = ({ job, logo }) => {
    const { user } = useContext(AuthContext)
    const { jobs, setJobs } = useContext(JobsContext);
    const navigate = useNavigate()
    const handleJobs = (id) => {
        if (user) {
            if (!jobs.includes(id)) {
                setJobs([...jobs, id]);
                toast.success("This job is applied", {
                    zIndex: 9999,
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    // transition: Bounce,
                });
            } else if (jobs.includes(id)) {
                toast.error("This job is already applied", {
                    zIndex: 9999,
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    // transition: Bounce,
                });
            }
        }
        else {
            navigate('/auth/login')
        }
    }
    const { title,
        bannerImage,
        location,
        salary,
        jobType,
        description,
        requirement_skill } = job;
    return (
        <div className="bg-base-100 hover:bg-white border border-base-200 p-5 rounded-lg m-3 hover:shadow-sm space-y-2 transform transition duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div>
                        <img className="md:block hidden" src={logo} alt="" />
                    </div>
                    <div className="ml-4 space-y-2">
                        <div className="flex gap-2 items-center">
                            <img className="block md:hidden" src={logo} alt="" />
                            <p className="text-2xl text-success font-semibold hover:text-secondary">{title}</p>
                        </div>
                        <div className="flex space-x-3">
                            <p className="text-[#8fae99] text-sm flex items-center"> <GrBriefcase className="mr-1" /> {jobType}</p>
                            {/* <p className="text-[#8fae99] text-sm flex items-center"> <CiLocationOn className="mr-1 text-[18px]" /> {location}</p> */}
                        </div>
                        <p className="font-semibold text-secondary">{salary}</p>
                        {/* <div className="flex md:hidden ">
                            {
                                requirement_skill?.map((skill, idx) => <p
                                    key={idx}
                                    className="ml-2 rounded-sm px-2 py-1 btn-active bg-base-200  text-[11px] hover:text-secondary"
                                >
                                    {skill}
                                </p>)
                            }
                        </div> */}
                        <div className="flex md:hidden ">
                            <button onClick={() => document.getElementById(`my_modal_${job.id}`).showModal()} className="btn btn-info text-white w-fit">Details</button>
                        </div>
                    </div>
                </div>
                <div className="flex justify-end flex-col gap-5">
                    {/* <div className=" hidden md:flex">
                        {
                            requirement_skill?.map((skill, idx) => <p
                                key={idx}
                                className="ml-2 rounded-sm px-2 py-1 btn-active bg-base-200  text-[11px] hover:text-secondary"
                            >
                                {skill}
                            </p>)
                        }
                    </div> */}
                    <div className=" justify-end hidden md:flex">
                        <button onClick={() => document.getElementById(`my_modal_${job.id}`).showModal()} className="btn btn-info text-white w-fit">Details</button>
                    </div>
                    <dialog id={`my_modal_${job.id}`} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box space-y-2 relative">
                            <div>
                                <img className="w-full h-[300px] object-cover mt-5 rounded-xl" src={bannerImage} alt="" />
                            </div>
                            <p className="font-bold text-2xl text-success hover:text-secondary">{title}</p>
                            <p className="text-neutral font-medium">{description}</p>
                            <div className="text-[#8fae99] py-2 my-3 border-secondary">
                                <p className="flex items-center"><MdAttachMoney className="mx-1 text-xl" />{salary}</p>
                                <p className="flex items-center"><IoLocationOutline className="mx-1 text-xl" />{location}</p>
                                <p className="flex items-center"> <GrBriefcase className="mr-2 ml-2" />{jobType}</p>
                            </div>
                            <div className="flex py-2">
                                {
                                    requirement_skill?.map((skill, idx) => <p
                                        key={idx}
                                        className="mr-2 rounded-sm px-2 py-1 btn-active bg-base-200  text-[11px] hover:text-secondary"
                                    >
                                        {skill}
                                    </p>)
                                }
                            </div>
                            <button onClick={() => handleJobs(job.id)} className="w-full btn btn-primary mt-1.5">Apply</button>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                                    {/* <button className="btn">Close</button> */}
                                </form>
                            </div>
                        </div>
                        <ToastContainer/>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default SingleJob;