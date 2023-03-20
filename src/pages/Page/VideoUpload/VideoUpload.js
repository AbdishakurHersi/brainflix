import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import upload from "../../../assets/Icons/publish.svg";
import uploadThumbnail from "../../../assets/Images/Upload-video-preview.jpg";
import "./VideoUpload.scss";
const VideoUpload = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [isActive, setIsActive] = useState(null);
  const [error, setError] = useState(null);
  const REACT_APP_API_URL = "http://localhost:8000";

  const handleBlur = () => {
    if (title === "") {
      setTitleError(true);
    }
    if (description === "") {
      setDescriptionError(true);
    }
    setIsActive(null);
  };

  const handleFocus = (event) => {
    setIsActive(event.target.name);
  };

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
    setTitleError(false);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
    setDescriptionError(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title === "") {
      setTitleError(true);
      alert("Failed to sign up, you have errors in your form");
    }
    if (description === "") {
      setDescriptionError(true);
      alert("Failed to sign up, you have errors in your form");
    }
    if (title !== "" && description !== "") {
      const object = {
        up: title,
        down: description,
      };
      axios.post(`${REACT_APP_API_URL}/upload`, object).catch((err) => {
        setError(err);
      });

      setTitle("");
      setDescription("");
      setTitleError(false);
      setDescriptionError(false);
      alert("Thank you for your upload");
      navigate("/");
    }
    if (error) {
      return <h1>Error from api</h1>;
    }

    setIsActive(null);
  };

  return (
    <section className="forms">
      <div className="forms__head">
        <h1 className="forms__titles">Upload Video</h1>
      </div>
      <form onSubmit={handleSubmit} className="forms__section">
        <div className="forms__box">
          <div className="forms__videoparent">
            <label className="forms__header">VIDEO THUMBNAIL</label>
            <div className="forms__picturecontainer">
              <img
                className="forms__picture"
                src={uploadThumbnail}
                alt="uploadThumbnail Logo"
              />
            </div>
          </div>

          <div className="forms__field">
            <label className="forms__header">TITLE YOUR VIDEO</label>
            <input
              onBlur={handleBlur}
              onFocus={handleFocus}
              placeholder="Add a title to your video"
              type="text"
              onChange={handleChangeTitle}
              name="title"
              value={title}
              className={`forms__inputs ${
                titleError
                  ? "forms__error"
                  : isActive === "title"
                  ? "forms__active"
                  : ""
              }`}
            ></input>
            <label className="forms__header">ADD A VIDEO DESCRIPTION</label>
            <textarea
              placeholder="Add a description to your video"
              type="text"
              onChange={handleChangeDescription}
              name="description"
              value={description}
              onBlur={handleBlur}
              onFocus={handleFocus}
              className={`forms__textarea  ${
                descriptionError
                  ? "forms__error"
                  : isActive === "description"
                  ? "forms__active"
                  : ""
              }`}
            ></textarea>
          </div>
        </div>
        <div className="forms__buttonfunction">
          <button className="forms__uploadbar">
            <div className="forms__uploadstyle">
              <img
                className="forms__uploadlogo"
                src={upload}
                alt="upload Logo"
              />
              <p className="forms__uploadtext">PUBLISH</p>
            </div>
          </button>
          <button
            type="submit"
            className="forms__uploadbar forms__uploadbar--color"
          >
            <p className="forms__uploadtext">CANCEL</p>
          </button>
        </div>
      </form>
    </section>
  );
};
export default VideoUpload;
