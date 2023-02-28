import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Data = () => {
  let url = "http://localhost:4000/user";
  const [data, setData] = useState([]);
  let navigate = useNavigate();

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data));
  }, []);

  const handleRemove = (id) => {
    axios
      .delete(url + "/" + id)
      .then((res) => axios.get(url).then((res) => setData(res.data)))
      .catch((err) => console.log(err.message));
  };

  const handleUpdate = (id, title, body) => {
    navigate(`/update/${id}`);

    localStorage.setItem("id", id);
    localStorage.setItem("title", title);
    localStorage.setItem("body", body);
  };
  return (
    <>
      {data.length < 1 ? (
        <div className="no_record">
          <h2 className="text-danger">No records found</h2>
        </div>
      ) : (
        <table className="table table-stripped table-bordered">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Body</th>
              <th>Trash</th>
            </tr>
          </thead>
          <tbody>
            {data.map((elemn) => (
              <tr key={elemn.id}>
                <td>{elemn.id}</td>
                <td>{elemn.title}</td>
                <td>{elemn.body}</td>
                <td>
                  <button
                    className="btn btn-danger rounded-0 me-2"
                    onClick={() => handleRemove(elemn.id)}
                  >
                    Remove
                  </button>
                  <button
                    onClick={() =>
                      handleUpdate(elemn.id, elemn.title, elemn.body)
                    }
                    className="btn btn-warning rounded-0"
                  >
                    Update
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </>
  );
};

export default Data;
