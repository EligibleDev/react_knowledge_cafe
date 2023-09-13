import { useEffect } from "react";
import { useState } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        const fetchData = async()=>{
            try {
                const res = await fetch('blogs.json');
                const data = await res.json();
                console.log(data);
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <div>
            
        </div>
    );
};

export default Blogs;