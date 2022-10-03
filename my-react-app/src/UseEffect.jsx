import { useState, useEffect } from 'react';
import './App.css'

const tabs= ['posts', 'comments', 'albums'];

function App(){
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(post => {
                setPosts(post);
            })
    },[type]);

    return (
        <div>  
            {tabs.map(tab => (
                <button
                key={tab}
                style ={type === tab ? {
                    color: '#fff',
                    backgroundColor: '#333',
                } : {}}
                onClick={() => setType(tab)}
                >
                    {tab}
                </button>
            ))}
            <input
            value={title}
            onChange={e => setTitle(e.target.value)}
            />
            <ul>
                {posts.map(post =>(
                    <li key={post.id}>{post.title || post.name}</li>
                ))} 
            </ul>
        </div>
    )
}

export default App;