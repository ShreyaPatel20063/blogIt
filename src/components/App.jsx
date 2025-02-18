import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import BlogPost from './blog-post/BlogPost';
import HomePage from './HomePage';
import PostPage from './post-page/PostPage';
import Navbar from './navbar/Navbar';
import { store } from '../store'
import { Provider } from 'react-redux';

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route index path="/" element={<HomePage />} />
                    <Route path="/blog/:id" element={<BlogPost />} />
                    <Route path="/new" element={<PostPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>

    );
};

export default App;
