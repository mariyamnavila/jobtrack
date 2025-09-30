// import { CiLocationOn } from "react-icons/ci";
import { useContext } from "react";
import { GrBriefcase } from "react-icons/gr";
import { IoLocationOutline } from "react-icons/io5";
import { MdAttachMoney, MdDeleteOutline } from "react-icons/md";
import { JobsContext } from "../Provider/JobsProvider";
import { toast } from "react-toastify";

const AppliedJob = ({ job, removeItemFromState }) => {

    const { removeItem } = useContext(JobsContext)

    const { title, salary, jobType, id } = job;
    const notify = () => {
        toast.error('This job is deleted', {
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
        })
    }
    return (
        <div className="bg-base-100 hover:bg-white border border-base-200 p-5 rounded-lg m-3  space-y-2 hover:shadow-sm transform transition duration-300 hover:-translate-y-1">
            <div className="flex justify-between items-center">
                <div className="flex items-center">
                    <div className="ml-4 space-y-2">
                        <div className="flex gap-2 items-center">
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
                        {/* <div className="flex md:hidden ">
                            <button onClick={() => document.getElementById(`my_modal_${job.id}`).showModal()} className="btn btn-info text-white w-fit">Details</button>
                        </div> */}
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
                        <button onClick={() => { removeItem(id), removeItemFromState(id),notify() }} className=" bg-info rounded-full text-white text-xl w-fit p-3 hover:shadow-md shadow-green-900 transform transition duration-300 hover:-translate-y-1"><MdDeleteOutline /></button>
                        {/* <button onClick={() => document.getElementById(`my_modal_${job.id}`).showModal()} className="btn btn-info text-white w-fit">Details</button> */}
                    </div>
                    {/* <dialog id={`my_modal_${job.id}`} className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box space-y-2">
                            <div>
                                <img className="w-full h-[300px] object-cover mt-5 rounded-xl" src={bannerImage} alt="" />
                            </div>
                            <p className="font-bold text-2xl text-success hover:text-secondary">{title}</p>
                            <p className="text-neutral font-medium">{description}</p>
                            <div className="text-[#8fae99] border-y border-dashed py-2 my-3 border-secondary">
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
                                </form>
                            </div>
                        </div>
                    </dialog> */}
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;