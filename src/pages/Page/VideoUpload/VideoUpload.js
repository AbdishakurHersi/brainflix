import "./VideoUpload.scss";
import upload from "../../../assets/Icons/upload.svg";
import uploadThumbnail from "../../../assets/Images/Upload-video-preview.jpg";
const VideoUpload = () => {
  return (
    <>
      <form className="form">
        <h1 className="form__titles">Upload Video</h1>
        <label className="form__header">VIDEO THUMBNAIL</label>
        <div className="form__picturecontainer">
          <img
            className="form__picture"
            src={uploadThumbnail}
            alt="uploadThumbnail Logo"
          />
        </div>
        <label className="form__header">TITLE YOUR VIDEO</label>
        <input
          className="form__inputs"
          placeholder="Add a title to your video"
        ></input>
        <label className="form__header">ADD A VIDEO DESCRIPTION</label>
        <textarea
          className="form__textarea"
          placeholder="Add a description to your video"
        ></textarea>
        <button className="form__uploadbar">
          <div className="form__uploadstyle">
            <img className="form__uploadlogo" src={upload} alt="upload Logo" />
            <p className="form__uploadtext">PUBLISH</p>
          </div>
        </button>
        <button className="form__uploadbar form__uploadbar--color">
          <p className="form__uploadtext">CANCEL</p>
        </button>
      </form>
    </>
  );
};
export default VideoUpload;
