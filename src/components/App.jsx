import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router';

import BlogPost from './blog-post/BlogPost';
import HomePage from './HomePage';
import PostPage from './post-page/PostPage';
import Navbar from './navbar/Navbar';

const App = () => {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="/blog:id" element={<BlogPost />} />
                <Route path="/new" element={<PostPage />} />
            </Routes>
        </BrowserRouter>
    );
};

export default App;
