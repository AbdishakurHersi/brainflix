import "./Comments.scss";
import "../../App.scss";
import picturemohan from "../../assets/Images/Mohan-muruge.jpg";
const Comments = ({ comments }) => {
  function time(timestamp) {
    const date = new Date(timestamp);
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const month = date.toLocaleString("en-US", { month: "2-digit" });
    const year = date.toLocaleString("en-US", { year: "numeric" });
    return `${month}/${day}/${year}`;
  }
  return (
    <section>
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
                <p className="comments__time">
                  {time(new Date(array.timestamp))}
                </p>
              </div>
              <p className="comments__itself">{array.comment}</p>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Comments;
