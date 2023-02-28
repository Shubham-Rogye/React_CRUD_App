import axios from "axios";
import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const Update = () => {
  let url = "http://localhost:4000/user/";
  const [data, setData] = useState([]);
  const [id, setId] = useState();
  const [title, setTitle] = useState();
  const [body, setBody] = useState();
  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
    setId(localStorage.getItem("id"));
    setTitle(localStorage.getItem("title"));
    setBody(localStorage.getItem("body"));
  }, []);

  const updatedData = {
    id: id,
    title: title,
    body: body,
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .put(url + param.emp_id, updatedData)
      .then((res) => navigate("/showdata"))
      .catch((err) => alert(err.message));
  };

  return (
    <>
      <div className="form shadow p-4 mt-4">
        <p> Update ID: {param.emp_id}</p>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Id</label>
            <input
              name="id"
              type="number"
              onChange={(e) => setId(e.target.value)}
              value={id}
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div>
            <label>Title</label>
            <input
              name="title"
              type="text"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div>
            <label>Body</label>
            <input
              name="body"
              type="text"
              onChange={(e) => setBody(e.target.value)}
              value={body}
              className="form-control"
              autoComplete="off"
            />
          </div>
          <button type="submit" className="btn btn-success rounded-0 mt-2">
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default Update;
