import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { IoIosAddCircleOutline } from 'react-icons/io';
import { FaAngleDoubleLeft, FaAngleDoubleRight } from 'react-icons/fa';
import res from '../../../data/DataService';
import './blog-list.css';

function BlogList() {
    const [bloglist, setBlogList] = useState([]);
    const [page, setPage] = useState(1);
    const [limit, setLimit] = useState(5);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await res.sendData();
                setBlogList(data);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, [bloglist]);

    return (
        <div className="blog-list">
            {/* {console.log('BlogList')} */}
            <div className="new-blog-btn">
                <h3>Want to dive deep..!</h3>
                <div className='paginate'>
                    <button>
                        <FaAngleDoubleLeft onClick={page > 1 && onIncrease()} />
                    </button>
                    {page}
                    <button>
                        <FaAngleDoubleRight
                            onClick={page < bloglist.length / 5 && onDecrease()}
                        />
                    </button>
                </div>
                <Link to="/new">
                    <IoIosAddCircleOutline />
                </Link>
            </div>
            {bloglist.length != 0
                ? bloglist
                      .filter(
                          (val) =>
                              val.id > (page - 1) * limit &&
                              val.id <= page * limit
                      )
                      .map((val) => {
                          return (
                              <Link
                                  to={`blog/${val?.id}`}
                                  className="blog"
                                  key={val?.id}
                              >
                                  <div className="blog-content">
                                      <h3>{val.title}</h3>
                                      <p>{val.content}</p>
                                  </div>
                              </Link>
                          );
                      })
                : 'Loading...'}
        </div>
    );
}
export default BlogList;
