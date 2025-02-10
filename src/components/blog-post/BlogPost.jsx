import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import res from '../../../data/DataService';
import './blog-post.css';

function BlogPost() {
    const { id } = useParams();
    const [blogDetail, setBlogDetail] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const rawData = await res.sendOnePostData(id);
            // console.log(JSON.stringify(rawData));
            // console.log(rawData);
            setBlogDetail(rawData);
        }
        fetchData();
    }, []);
    return (
        <div className="blog-post-container">
            <h1>{blogDetail[0] && blogDetail[0]?.title}</h1>
            <p style={{ textAlign: 'justify' }}>
                {blogDetail[0] && blogDetail[0]?.content}
            </p>
        </div>
    );
}
export default BlogPost;
