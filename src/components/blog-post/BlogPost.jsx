import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import res from '../../../data/DataService';
import './blog-post.css';
import { whileLoading, afterRecieving, postById } from '../../postSlice'
import { useSelector, useDispatch } from 'react-redux';


function BlogPost() {
    const { id } = useParams();
    // console.log(typeof id, 'here is the id');
    const idNum = Number(id)
    // const [blogDetail, setBlogDetail] = useState([]);
    const blogDetail = useSelector((state) => state.posts.value[idNum-1]);
    // console.log(blogDetail, 'what is present in thsi blogDetails');

    const dispatch = useDispatch();
    // useEffect(() => {
    //     async function fetchData() {
    //         // const rawData = await res.getOnePostData(id);
    //         // setBlogDetail(rawData);
    //         dispatch(postById(id))
    //     }
    //     fetchData();
    // }, []);
    return (
        <div className="blog-post-container">
            <h1>{blogDetail && blogDetail.title}</h1>
            <p style={{ textAlign: 'justify' }}>
                {blogDetail && blogDetail?.content}
            </p>
        </div>
    );
}
export default BlogPost;

