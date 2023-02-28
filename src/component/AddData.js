import axios from "axios";
import React, { useState } from "react";

const AddData = () => {
  let url = "http://localhost:4000/user";
  const [data, setData] = useState([]);
  const [addData, setAddData] = useState({
    id: "",
    title: "",
    body: "",
  });
  const [valid, setValid] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAddData({ ...addData, [name]: value });

    if (!addData.id || !addData.title || !addData.body) {
      setValid(false);
    } else {
      setValid(true);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setAddData({
      id: "",
      title: "",
      body: "",
    });

    axios
      .post(url, addData)
      .then((res) =>
        axios
          .get(url)
          .then(
            (res) => setData(res.data),
            alert(`Data has been successfully added with id:${res.data.id}`)
          )
      );
  };
  return (
    <>
      <div className="form shadow p-4 mt-4">
        <form onSubmit={handleSubmit}>
          <div>
            <label>Id</label>
            <input
              name="id"
              type="number"
              onChange={handleChange}
              value={addData.id}
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div>
            <label>Title</label>
            <input
              name="title"
              type="text"
              onChange={handleChange}
              value={addData.title}
              className="form-control"
              autoComplete="off"
            />
          </div>
          <div>
            <label>Body</label>
            <input
              name="body"
              type="text"
              onChange={handleChange}
              value={addData.body}
              className="form-control"
              autoComplete="off"
            />
          </div>
          <button
            disabled={!valid}
            type="submit"
            className="btn btn-success rounded-0 mt-2"
          >
            submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddData;
