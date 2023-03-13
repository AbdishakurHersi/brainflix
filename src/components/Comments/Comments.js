import "./Comments.scss";
import "../../pages/Page/VideoPlayer/VideoPlayer";
import picturemohan from "../../assets/Images/Mohan-muruge.jpg";

const Comments = ({ comments }) => {
  // function that takes a timestamp in milliseconds
  function time(timestamp) {
    const date = new Date(timestamp);
    const day = date.toLocaleString("en-US", { day: "2-digit" });
    const month = date.toLocaleString("en-US", { month: "2-digit" });
    const year = date.toLocaleString("en-US", { year: "numeric" });
    return `${month}/${day}/${year}`;
  }
  return (
    <section className="comments">
      {comments.map((array) => {
        return (
          //ID for each comment
          <div key={array.id} className="comments__component">
            <img
              className="comments__image"
              src={picturemohan}
              alt="Avatar Images"
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
