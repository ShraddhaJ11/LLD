const CommentBox = ({ data }) => {
  return data.map((comment, i) => (
    <div className="pl-10 border-l-2 border-black" key={i}>
      <div className="flex py-3">
        <img
          className="h-12 w-12"
          src="https://static-00.iconduck.com/assets.00/user-icon-2048x2048-ihoxz4vq.png"
          alt="profile"
        />
        <div>
          <p className="font-bold text-left px-2">{comment.username}</p>
          <p className="px-2">{comment.comment}</p>
        </div>
      </div>
      <div>{comment.replies && <CommentBox data={comment.replies} />}</div>
    </div>
  ));
};
export default CommentBox;
