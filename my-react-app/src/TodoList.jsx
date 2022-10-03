import { useState } from 'react';
import './App.css';

function App() {
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState([]);

    const handelSubmit = () => {
        setJobs(prev => [...prev,job])
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