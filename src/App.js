import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import AddPanel from './components/AddPanel'
import AddPost from "./components/AddPost";
import PostList from './components/PostList'
import PostPage from "./components/PostPage";

function App() {
  return (
    <BrowserRouter>
      <div className="facebook">
        <AddPanel />
        <div className="page">
          <Routes>
            <Route path="/" element={<PostList />} />
            <Route path="/posts/new" element={<AddPost />} />
            <Route path="/posts/:productId" element={<PostPage />} />
            
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App