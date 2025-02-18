import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import res from '../../../data/DataService';
import usePaginate from '../usePaginate/usePaginate';
import './blog-list.css';
import { useSelector, useDispatch } from 'react-redux';
import { BsDisplay } from 'react-icons/bs';
import { whileLoading, afterRecieving } from '../../postSlice'

function BlogList() {
    // const [bloglist, setBlogList] = useState([]);
    const bloglist = useSelector((state) => state.posts.value);
    const dispatch = useDispatch()
    const [pageNo, noOfPages, limit, increase, decrese] = usePaginate(
        1,
        bloglist ? bloglist.length : 1
    );
    console.log(bloglist, 'bloglist');



    useEffect(() => {
        const fetchData = async () => {
            try {
                dispatch(whileLoading());
                const data = await res.getData();
                dispatch(afterRecieving(data));
                console.log("in useeffect")
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [bloglist]);


    const start = (pageNo - 1) * limit;
    const end = start + limit;
    console.log(bloglist);
    return (
        <div className="blog-list">
            <div className="new-blog-btn">
                <h3>Want to dive deep..!</h3>
                <div className="paginate">
                    <button onClick={decrese} disabled={pageNo === 1}>
                        <FaAngleDoubleLeft />
                    </button>
                    {pageNo} / {noOfPages}
                    <button onClick={increase} disabled={pageNo === noOfPages}>
                        <FaAngleDoubleRight />
                    </button>
                </div>

                <Link to="/new">
                    <IoIosAddCircleOutline />
                </Link>
            </div>

            {bloglist.length > 0
                ? bloglist.slice(start, end).map((val) => (
                    <Link
                        to={`blog/${val?.id}`}
                        className="blog"
                        key={val?.id}
                    >
                        <div className="blog-content">
                            <h3>
                                {val.title}: {val.id}
                            </h3>
                            <p>{val.content}</p>
                        </div>
                    </Link>
                ))
                : 'Loading...'}
        </div>
    );
}
export default BlogList;
