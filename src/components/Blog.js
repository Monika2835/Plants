import React, { Component, useState, useEffect } from 'react';
import Axios from "axios";
import "./Blog.css";
import ArticleShortcut from "./ArticleShortcut";


function Blog () {
  const [blogs, setBlogs] = useState('');
  const [search, setSearch] = useState('');

  const getAllBlogs = () => {
    localStorage.setItem('userId', localStorage.getItem('userId'));
      Axios.get('http://localhost:8080/plants/get/blogs')
          .then(response => {
              const allBlogs = response.data
              console.log(allBlogs);
              setBlogs(allBlogs);
          })
          .catch(error => console.error(`Error:  ${error}`));
  }

  const submitSearch = (e) => {
    e.preventDefault()
    Axios.get(`http://localhost:8080/plants/search/blogs/blog?title=${search}`)
      .then(response => {
        const searchBlogs = response.data;
        console.log(searchBlogs);
        setBlogs(searchBlogs);
      })
      .catch(error => console.error(`Error:  ${error}`));
  }

  

  useEffect(() => {
      getAllBlogs();
  }, []);

  return (
    <div>
      <div className="search">
        <input className="form-control" placeholder="Search" name="search" onChange={(e)=>{ setSearch(e.target.value)}}/>   
        <button style={{marginTop: '30px'}} type="submit" className="btn btn-success btn-lg btn-block" onClick={(e) => submitSearch(e)}>Search</button>
      </div>
      <div style={{ display:"flex", justifyContent: "center", alignItems: "center"}}>
        <ul className="list-unstyled">
        {Object.values(blogs).map((blog) => 
          <ArticleShortcut title={blog.title} description={blog.description} blogId={blog.idBlog}/>
          )}
        </ul>
      </div>
    </div>
  );
    
}

export default Blog;