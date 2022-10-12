import {useState, useEffect} from 'react';
import './App.css'

function App(){
    const [countDown, setCountDown] = useState(180)

    useEffect(() =>{
        setInterval(() =>{
            setCountDown(pre => pre -1);
        },1000)

        // return () =>{
        //     clearInterval(timeId);
        // }
    },[]);

    return (
        <div>
            <h1>{countDown}</h1>
        </div>
    )

}

export default App;