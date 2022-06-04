import axios from "axios";
import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Wrapper from "../../components/Wrapper";

const CreateBook = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [img, setImg] = useState("");
  const [edit, setEdit] = useState(false);

  useEffect(() => {
    setEdit(location.state ? true : false);

    (async () => {
      try {
        const { data } = await axios.get(`books/${edit && location.state.id}`);

        if (data) {
          setTitle(data.Title);
          setPrice(data.Price);
          setDesc(data.Description);
          setRating(data.rating);
          setImg(data.Image);
        }
      } catch (e) {
        console.log(e);
      }
    })();
  }, [edit]);

  const submit = async (e) => {
    e.preventDefault();

    if (edit) {
      const { data } = await axios.put(`books/${edit && location.state.id}`, {
        Title: title,
        Description: desc,
        Price: parseInt(price),
        Rating: parseInt(rating),
        Image: img,
      });
      if (data) navigate("/books");
    } else {
      const { data } = await axios.post("books", {
        Title: title,
        Description: desc,
        Price: parseInt(price),
        Rating: parseInt(rating),
        Image: img,
      });

      if (data) navigate("/books");
    }
  };

  const uploadImage = async (files) => {
    if (files === null) return;
    const formData = new FormData();
    formData.append("img", files[0]);

    try {
      const { data } = await axios.post("upload", formData);
      setImg(data.url);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Wrapper>
      <h1 className="mt-4">{edit ? "Edit Buku" : "Tambah Buku"}</h1>
      <form onSubmit={submit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            value={title || ""}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            onChange={(e) => setDesc(e.target.value)}
            type="text"
            className="form-control"
            value={desc || ""}
            id="description"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="img" className="form-label">
            Image
          </label>
          <input
            onChange={(e) => setImg(e.target.value)}
            type="text"
            className="form-control"
            value={img || ""}
            id="img"
            name="img"
          />
          <label className="btn btn-primary">
            Upload Image
            <input
              hidden
              onChange={(e) => uploadImage(e.target.files)}
              type="file"
              className="form-control"
            />
          </label>
        </div>
        <div className="mb-3">
          <label htmlFor="price" className="form-label">
            Price
          </label>
          <input
            value={price || ""}
            onChange={(e) => setPrice(e.target.value)}
            type="number"
            className="form-control"
            id="price"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="rating" className="form-label">
            Rating
          </label>
          <input
            value={rating || ""}
            onChange={(e) => setRating(e.target.value)}
            type="number"
            className="form-control"
            id="rating"
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {edit ? "Edit" : "Add"}
        </button>
      </form>
    </Wrapper>
  );
};

export default CreateBook;
