import { useState, useEffect } from 'react';
import './App.css'

const tabs= ['posts', 'comments', 'albums'];

function App(){
    const [title, setTitle] = useState('');
    const [posts, setPosts] = useState([]);
    const [type, setType] = useState('posts');
    const [goToTop, setGoToTop] = useState(false);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/${type}`)
            .then(res => res.json())
            .then(post => {
                setPosts(post);
            })
    },[type]);

    useEffect(() => {

        const handelScroll = () => {
            if(window.scrollY >= 200){
                setGoToTop(true);
            }else {
                setGoToTop(false);
            }
        };

        window.addEventListener('scroll', handelScroll);

        // cleanup function
        return () =>{
            window.removeEventListener('scroll', handelScroll);
        }

    },[])

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
            {goToTop && (
            <button
                style ={{
                    position: 'fixed',
                    right: '20px',
                    bottom: '20px',
                }}
                >
                    Go to Top
            </button>)}
        </div>
    )
}

export default App;