/* eslint-disable no-undef */
import React from 'react';
import { useHistory } from 'react-router-dom';



const Create = ()=> {
    const [title, setTitle] = React.useState('');
    const [body, setBody] = React.useState('');
    const [author, setAuthor] = React.useState('mario');
    const [isPending, setIsPending] = React.useState(false);
    const history = useHistory();

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = {title, body, author};
        
        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(blog)
        }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            // history.go(-1);
            history.push('/');

        });

    }

    return (
        <div className='create'> 
            <h2>Have something to say?</h2>
            <h3>Add a New Blog</h3>
            <form onSubmit={handleSubmit}>
                <label>Blog Title:</label>
                <input type="text" required  value={title} onChange={(e) => setTitle(e.target.value)}/>

                <label>Blog Body:</label>
                <textarea required value={body} onChange={(e) => setBody(e.target.value)}> </textarea>
                <label>Blog Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>

                {!isPending && <button>Add Blog</button>}
                { isPending && <button disabled>Adding Blog..</button>}

             
            </form>
            
            
        </div>
    );
}

export default Create;