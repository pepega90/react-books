import axios from "axios";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Wrapper from "../components/Wrapper";

const Dashboard = () => {
  const navigate = useNavigate();
  const [books, setBooks] = useState([]);
  const [user, setUser] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("books");
        console.log(data);
        setBooks(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("user");
        setUser(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  const hapusBuku = async (id) => {
    try {
      await axios.post(`books/${id}`);
      setBooks(books.filter((e) => e.ID !== id));
    } catch (e) {
      console.log(e);
    }
  };

  let listBook = null;
  if (books) {
    listBook = books.map((e) => {
      return (
        <div key={e.ID} className="card mt-4">
          <img src={e.Image} className="card-img-top" />
          <div className="card-body">
            <h5 className="card-title">{e.Title}</h5>
            <p className="card-text">{e.Description}</p>
            <p className="card-text">{e.Price}</p>
            <p className="card-text">{e.Rating}</p>
            <div>
              <button
                onClick={() => navigate("/detail", { state: { id: e.ID } })}
                className="btn btn-primary"
              >
                Read
              </button>
              {/* hanya user yang idnya sama dengan buku id, yang bisa hapus */}
              {user.id == e.user_id && (
                <button
                  onClick={hapusBuku.bind(this, e.ID)}
                  className="btn btn-danger ms-2"
                >
                  Delete
                </button>
              )}
            </div>
          </div>
        </div>
      );
    });
  } else {
    listBook = <h1>Loading...</h1>;
  }

  return (
    <Wrapper>
      <div className="row">
        <main className="col">{listBook}</main>
      </div>
    </Wrapper>
  );
};

export default Dashboard;
