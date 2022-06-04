import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

const Detail = () => {
  const location = useLocation();
  const [book, setBook] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(`books/${location.state.id}`);
        setBook(data);
      } catch (e) {
        console.log(e);
      }
    })();
  }, []);

  return (
    <Wrapper>
      <h1>{book.Title}</h1>
      {book.Image != "" ? (
        <img src={book.Image} width={250} height={250} />
      ) : (
        <em>Gambar tidak tersedia</em>
      )}
      <p>{book.Description}</p>
      <p>
        Harga <b>Rp{book.Price}</b>
      </p>
      <p>
        Rating <b>{book.Rating}</b>
      </p>
    </Wrapper>
  );
};

export default Detail;
