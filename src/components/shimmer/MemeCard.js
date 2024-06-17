const MemeCard = ({ data }) => {
    const { url, title, author } = data;
    return (
      <div className="m-4 p-4 border border-black rounded">
        <img className="w-20 h-20" src={url} />
        <p className="text-sm">{author}</p>
      </div>
    );
  };
  
  export default MemeCard;
  