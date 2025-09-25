import { createContext, useEffect, useState } from "react";
// import CompanyJobList from "./Components/CompanyJobList";
export const JobsContext = createContext()
const JobsProvider = ({ children }) => {
    const [jobs, setJobs] = useState(() => {
        const saved = localStorage.getItem('jobs');
        if (saved) {
            return (JSON.parse(saved));
        }});
    useEffect(() => {
        localStorage.setItem('jobs', JSON.stringify(jobs))
    }, [jobs])
    const jobData = {
        jobs,
        setJobs,
    }
    return <JobsContext.Provider value={jobData}>
        {children}
    </JobsContext.Provider>
};

export default JobsProvider;