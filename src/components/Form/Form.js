import "./Form.scss";
import picturemohan from "../../assets/Images/Mohan-muruge.jpg";
import comment from "../../assets/Icons/add_comment.svg";
const Form = () => {
  return (
    <>
      <p className="input__title">3 Comments</p>
      <div className="conversation">
        <div className="conversation__avatar">
          <img
            className="conversation__mohan"
            src={picturemohan}
            alt="picture of a person"
          />
        </div>
        <div className="input">
          <form className="form">
            <label className="form__header">JOIN THE CONVERSATION</label>
            <textarea
              className="form__textarea"
              placeholder="Add a new comment"
            ></textarea>
          </form>
          <button className="navigation__uploadbar">
            <div className="navigation__uploadstyle">
              <img
                className="navigation__uploadlogo"
                src={comment}
                alt="upload Logo"
              />
              <p className="navigation__uploadtext">COMMENT</p>
            </div>
          </button>
        </div>
      </div>
    </>
  );
};

export default Form;
