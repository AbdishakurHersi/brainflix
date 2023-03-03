import "./Comments.scss";
import picturemohan from "../../assets/Images/Mohan-muruge.jpg";
const Comments = ({ comments }) => {
  function time(value) {
    const time = new Date().getTime();
    value.time = "Milliseconds = " + time;
    const date = new Date(time);
    return date.toDateString();
  }
  // const comment = CustomElementRegistry.map((array) => {
  //   return array.comments;
  // });
  console.log(comments);

  return (
    <>
      {/* {comment[0].map((array) => {
        return (
          <div className="comments">
            <img
              className="comments__image"
              src={picturemohan}
              alt="avatarimage"
            />
            <div className="comments__container">
              <div className="comments__header">
                <p className="comments__name">{array.name}</p>
                <p className="comments__time">{array.timestamp}</p>
              </div>
              <p className="comments__itself">{array.comment}</p>
            </div>
          </div>
        );
      })} */}
      {comments.map((array) => {
        return (
          <div className="comments">
            <img
              className="comments__image"
              src={picturemohan}
              alt="avatarimage"
            />
            <div className="comments__container">
              <div className="comments__header">
                <p className="comments__name">{array.name}</p>
                <p className="comments__time">{array.timestamp}</p>
              </div>
              <p className="comments__itself">{array.comment}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Comments;
