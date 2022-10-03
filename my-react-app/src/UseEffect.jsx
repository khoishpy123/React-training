import { useState, useEffect } from 'react';
import './App.css'

function App(){
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(post => {
                setPosts(post);
            })
    },[]);

    return (
        <>  
            <button>Toggle</button>
            <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post =>(
                    <li key={post.id}>{post.title}</li>
                ))} 
            </ul>
        </>
    )
}

export default App;