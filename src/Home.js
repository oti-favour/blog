/* eslint-disable no-unused-vars */

import BlogList from './bloglist';
import useFetch from './useFetch';



const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');
     

    
    return ( 
        <div className="home">
            <div className='image-container'>

            </div>
            {error && <div>{error}</div>}
            {isPending && <div> Gentle Reader, It's Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="Dearest Gentle Reader,"/>}
        </div>
        
     ); 

}
 
export default Home;