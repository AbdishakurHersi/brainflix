import "./Comments.scss";
import "../../App.scss";
import picturemohan from "../../assets/Images/Mohan-muruge.jpg";
const Comments = ({ comments }) => {
  function time(value) {
    console.log(value);
    const time = new Date().getTime();
    value.time = "Milliseconds = " + time;
    const date = new Date(time);
    return date.toDateString();
  }

  // console.log(time(1631273521000));
  // const comment = CustomElementRegistry.map((array) => {
  //   return array.comments;
  // });
  console.log(comments);

  return (
    <section>
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
          <div key={array.id} className="comments">
            <img
              className="comments__image"
              src={picturemohan}
              alt="avatarimage"
            />
            <div className="comments__container">
              <div className="comments__header">
                <p className="comments__name">{array.name}</p>

                {/* <p className="comments__time">
                  {() => {
                    time(array.timestamp);
                  }}
                </p> */}
                <p className="comments__time">
                  {new Date(parseInt(array.timestamp)).toLocaleDateString()}
                </p>
              </div>
              <p className="comments__itself">{array.comment}</p>
            </div>
          </div>
          // newDate(parseInt().tolocalestring())
        );
      })}
    </section>
  );
};

export default Comments;
