import { useState } from "react";
import './App.css'


const courses = [
    {
        id:1,
        name:'HTML/CSS',
    },
    {
        id:2,
        name:'JavaScript',
    },
    {
        id:3,
        name:'ReactJS',
    }
]

function App() {
    const [check, setCheck] = useState([]);

    console.log(check);

    const handelCheck = (id) =>{
        setCheck(prev => {
            const isChecked = check.includes(id);
            if(isChecked) {
                return check.filter(item => item !== id);
            }else {
               return [...prev,id]
            }
        });
    }

    const handelSubmit = () => {
        //call API
        console.log({id: check});
    }
    return (
        <div>
            {courses.map(course => (
                <div key={course.id}>
                    <input 
                        type="checkbox"
                        checked={check.includes(course.id)} 
                        onChange={() => handelCheck(course.id)}
                    />
                    {course.name}
                </div>
            ))}
            <button onClick={handelSubmit}>Submit</button>
        </div>
    )
}

export default App;