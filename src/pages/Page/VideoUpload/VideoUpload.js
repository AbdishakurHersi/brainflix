import { useState } from "react";
import "./VideoUpload.scss";
import upload from "../../../assets/Icons/publish.svg";
import uploadThumbnail from "../../../assets/Images/Upload-video-preview.jpg";
import { useNavigate } from "react-router-dom";
const VideoUpload = () => {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (event) => {
    setTitle(event.target.value);
  };
  const handleChangeDescription = (event) => {
    setDescription(event.target.value);
  };

  const isFormValid = () => {
    // All fields are required, using state variables
    if (!title || !description) {
      return false;
    }
    return true;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (isFormValid()) {
      // This is where we would make an axios request
      // to our backend to add the user to our database.
      alert("Thank you for your upload");
      navigate("/");
    } else {
      alert("Failed to sign up, you have errors in your form");
    }
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
              className="forms__inputs"
              placeholder="Add a title to your video"
              type="text"
              onChange={handleChangeTitle}
              name="title"
              value={title}
            ></input>
            <label className="forms__header">ADD A VIDEO DESCRIPTION</label>
            <textarea
              className="forms__textarea"
              placeholder="Add a description to your video"
              type="text"
              onChange={handleChangeDescription}
              name="description"
              value={description}
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
          <button className="forms__uploadbar forms__uploadbar--color">
            <p className="forms__uploadtext">CANCEL</p>
          </button>
        </div>
        {/* </div> */}
      </form>
    </section>
  );
};
export default VideoUpload;
