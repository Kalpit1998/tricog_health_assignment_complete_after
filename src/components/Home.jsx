import React, { useEffect, useState } from "react";

export const Home = () => {
  // **********************************
  // fetching data from localstorage
  // **********************************

  let data = JSON.parse(localStorage.getItem("blogs"));

  const [localData, setLocalData] = useState(data);

  // **********************************
  // update function
  // **********************************

  const handleUpdate = (ele) => {
    let title = prompt("Enter blog title");
    let author = prompt("Enter author name");

    data[ele].title = title;
    data[ele].author = author;

    setLocalData(data);
    localStorage.setItem("blogs", JSON.stringify(data));
  };

  // **********************************
  // delete function
  // **********************************

  const handleDelete = (ele) => {
    data.splice(ele, 1);
    setLocalData(data);
    localStorage.setItem("blogs", JSON.stringify(data));
  };

  // **********************************
  // rerender component after change
  // **********************************

  useEffect(() => {
    data = JSON.parse(localStorage.getItem("blogs"));
  }, [localData]);

  return (
    <>
      {!data ? (
        <h2>No Blogs To Show</h2>
      ) : (
        <div className="container">
          <div className="row">
            {data.map((item, i) => {
              return (
                <div className="col" key={i}>
                  <div className="card" style={{ width: "18rem" }}>
                    <img
                      src={item.image}
                      className="card-img-top"
                      alt="Blog Image"
                    />
                    <div className="card-body">
                      <h5 className="card-title">Blog Title: {item.title}</h5>
                      <h5 className="card-text">Blog Author: {item.author}</h5>
                      <h5 className="card-text">
                        Created At: {item.timeStamp}
                      </h5>
                    </div>
                    <div>
                      <button
                        className="btn btn-danger"
                        onClick={() => {
                          handleDelete(i);
                        }}
                      >
                        Delete
                      </button>
                      <button
                        className="btn btn-primary"
                        onClick={() => {
                          handleUpdate(i);
                        }}
                      >
                        Update
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
};
