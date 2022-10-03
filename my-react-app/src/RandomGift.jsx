import { useState } from "react";
import './App.css'

const gists = [
    "CPU i9",
    "RAM 32GB RGB",
    "RGB KeyBoard",
    "Không có phần thưởng !!!",
]

function Gift(){    
    const [gift, setGift] = useState();

    const handelRandomGift = () =>{
        const index = Math.floor(Math.random() * gists.length);

        setGift(gists[index]);
    }

    return (
        <div>
            <h1>{ gift || "Chưa có phần thưởng"}</h1>
            <button onClick={handelRandomGift}>Lấy thưởng</button>
        </div>
    )
}

export default Gift;