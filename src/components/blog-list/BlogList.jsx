import React, { useEffect, useState } from 'react';
import res from '../../../data/DataService';
import { Link } from 'react-router';
import './blog-list.css';
function BlogList() {
    const [postData, setPostData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await res.sendData();
                const finalData = Object.values(
                    JSON.parse(JSON.stringify(data))
                );
                console.log(finalData);
                setPostData(finalData);
            } catch (error) {
                console.log(error.message);
            }
        };
        fetchData();
    }, []);
    return (
        <div className="blog-list">
            {console.log('BlogList')}
            <h4>Want to dive deep..!</h4>
            {postData.length != 0
                ? postData.map((val) => {
                      return (
                          <Link className="blog" key={val?.id}>
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
