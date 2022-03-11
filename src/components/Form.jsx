import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const Form = () => {
  const navigate = useNavigate();

  // ******************************
  // input field states
  // ******************************

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [image, setImage] = useState("");

  // ******************************
  // blog states array
  // ******************************

  function getLocalDate() {
    let localData = localStorage.getItem("blogs");

    if (!localData) {
      return [];
    } else {
      return JSON.parse(localData);
    }
  }

  const [blog, setBlog] = useState(getLocalDate);

  // ******************************
  // handle form submit
  // ******************************

  const handleForm = (e) => {
    e.preventDefault();

    let timeStamp = new Date().toLocaleString();

    let data = {
      title,
      author,
      image,
      timeStamp
    };

    setBlog([...blog, data]);

    // window.localStorage.setItem("blogs", JSON.stringify(blog));

    // console.log(blog);

    setTitle("");
    setAuthor("");
    setImage("");
    // navigate("/");
  };

  // ***********************************************
  // useEffect for adding data to localStorage
  // ***********************************************

  useEffect(() => {
    window.localStorage.setItem("blogs", JSON.stringify(blog));
  }, [blog]);

  return (
    <>
      <form onSubmit={handleForm}>
        <div className="mb-3">
          <label htmlFor="exampleInputTitle" className="form-label">
            Blog Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputTitle"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputImage" className="form-label">
            Blog Image URL
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputImage"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAuthor1" className="form-label">
            Blog Author Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputAuthor1"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </>
  );
};
