import { useState } from "react";
import "./VideoUpload.scss";
import upload from "../../../assets/Icons/publish.svg";
import uploadThumbnail from "../../../assets/Images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
const VideoUpload = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [descriptionError, setDescriptionError] = useState(false);
  const [isActive, setIsActive] = useState(null);

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
    console.log(event.target.name);
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
      // Handle form submission here
      setTitle("");
      setDescription("");
      setTitleError(false);
      setDescriptionError(false);
      alert("Thank you for your upload");
      navigate("/");
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
                titleError ? "error" : isActive === "title" ? "active" : ""
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
                  ? "error"
                  : isActive === "description"
                  ? "active"
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
