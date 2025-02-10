import React, { useContext } from 'react';
import BlogList from './blog-list/BlogList';

function HomePage() {
    // const prop = useContext(Context);
    const styleAtrr = {
        width: '70%',
        margin: 'auto',
    };
    return (
        <div style={styleAtrr}>
            <BlogList />
        </div>
    );
}
export default HomePage;
