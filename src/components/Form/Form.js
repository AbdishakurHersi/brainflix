import "./Form.scss";
import "../../App.scss";
import picturemohan from "../../assets/Images/Mohan-muruge.jpg";
import comment from "../../assets/Icons/add_comment.svg";
const Form = () => {
  return (
    //form component
    <section className="form">
      <p className="form__title">3 Comments</p>
      <div className="form__subheader ">
        <div className="form__avatar">
          <img
            className="form__avatarimage"
            src={picturemohan}
            alt="Avatar Pictures "
          />
        </div>
        <div className="form__input">
          <form className="form__section">
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
    </section>
  );
};

export default Form;
