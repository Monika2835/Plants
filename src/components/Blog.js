import React, { Component, useState, useEffect } from 'react';
import Axios from "axios";
import "./Blog.css";


function Blog () {
  const [blogs, getBlogs] = useState('');
  const [search, setSearch] = useState('');

  const getAllBlogs = () => {
      Axios.get('http://localhost:8080/plants/get/blogs')
          .then(response => {
              const allBlogs = response.data
              getBlogs(allBlogs);
          })
          .catch(error => console.error(`Error:  ${error}`));
  }

  const submitSearch = (e) => {
    e.preventDefault()
    Axios.get(`http://localhost:8080/plants/search/posts/post?title=${search}`)
      .then(response => {
        const searchBlogs = response.data;
        console.log(searchBlogs);
        getBlogs(searchBlogs);
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
            <li className="media">
              <img style={{marginTop: '25px'}} className="mr-3" src={require('./images/dog.jpg').default} height={ 150} width={ 150} alt="Generic placeholder image"/>
              <div className="media-body" style={{fontFamily: 'Courier New'}}>
                <h3 style={{fontWeight: "bold"}} className = "m-3 d-flex justify-content-center">{blog.title}</h3>
                <h5 className = "m-3 d-flex justify-content-center">{blog.description}</h5>
                <p className="forgot-password text-right">
                    <a className="text-success" href="#">read more...</a>
                </p>
              </div>
            </li>
            )}
          </ul>
        </div>
      </div>
  );
    
}

export default Blog;