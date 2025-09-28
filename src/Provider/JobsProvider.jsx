import { createContext, useEffect, useState } from "react";
// import CompanyJobList from "./Components/CompanyJobList";
export const JobsContext = createContext()
const JobsProvider = ({ children }) => {
    const [jobs, setJobs] = useState(() => {
        const saved = localStorage.getItem('jobs');
        if (saved) {
            return (JSON.parse(saved));
        }
        else{
            return []
        }
    });
    useEffect(() => {
        localStorage.setItem('jobs', JSON.stringify(jobs))
    }, [jobs])
    const removeItem = (id) => {
        const removed = jobs?.filter(job => job !== id);
        setJobs(removed)
        localStorage.setItem('jobs', JSON.stringify(removed));
    }
    const jobData = {
        jobs,
        setJobs,
        removeItem
    }
    return <JobsContext.Provider value={jobData}>
        {children}
    </JobsContext.Provider>
};

export default JobsProvider;