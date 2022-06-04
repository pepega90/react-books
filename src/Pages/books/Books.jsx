import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

const Books = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("user");

      setBooks(data.Buku);
    })();
  }, []);

  const editBuku = (id) => {
    navigate("/create", { state: { id } });
  };

  return (
    <Wrapper>
      <NavLink className="btn btn-warning mt-4" to={"/create"}>
        Add Book
      </NavLink>
      <div className="table-responsive mt-4">
        <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th scope="col">No</th>
              <th scope="col">Title</th>
              <th scope="col">Description</th>
              <th scope="col">Price</th>
              <th scope="col">Rating</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody>
            {books.map((e, i) => {
              return (
                <tr key={e.ID}>
                  <td>{i + 1}</td>
                  <td>{e.Title}</td>
                  <td>{e.Description}</td>
                  <td>{e.Price}</td>
                  <td>{e.Rating}</td>
                  <td>
                    <div className="btn-group">
                      <button
                        onClick={editBuku.bind(this, e.ID)}
                        className="btn btn-success"
                      >
                        Edit
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </Wrapper>
  );
};

export default Books;
