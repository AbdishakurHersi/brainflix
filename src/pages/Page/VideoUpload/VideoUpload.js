import { useState } from "react";
import "./VideoUpload.scss";
import upload from "../../../assets/Icons/publish.svg";
import uploadThumbnail from "../../../assets/Images/Upload-video-preview.jpg";
const VideoUpload = () => {
  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [confirmPassword, setConfirmPassword] = useState("");
  return (
    <section className="forms">
      <div className="forms__head">
        <h1 className="forms__titles">Upload Video</h1>
      </div>
      <form className="forms__section">
        <div className="forms__box">
          <div>
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
            ></input>
            <label className="forms__header">ADD A VIDEO DESCRIPTION</label>
            <textarea
              className="forms__textarea"
              placeholder="Add a description to your video"
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
