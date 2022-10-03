import { useState } from 'react';
import './App.css';

function App() {
    const storageJobs = JSON.parse(localStorage.getItem('job'));

    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState(() => {
        const storageJobs = JSON.parse(localStorage.getItem('job'));
        return storageJobs ?? [];
    });

    const handelSubmit = () => {
        setJobs(prev => {
            const newJobs = [...prev,job]

            //save local storage
            const jsonJobs = JSON.stringify(newJobs);
            localStorage.setItem('job', jsonJobs);

            return newJobs;
        })
        setJob('')
    }
    return (
        <>
            <input 
            value={job}
            onChange={e => setJob(e.target.value)} 
            />
            <button onClick={handelSubmit}>Add</button>

            <ul>
                {jobs.map((job, index) =>(
                    <li key={index}>{job}</li>
                ))}
            </ul>
        </>
    )
}

export default App;