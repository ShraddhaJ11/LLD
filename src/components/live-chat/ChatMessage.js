const ChatMessage = ({ name, photo, message }) => {
  return (
    <div className="flex p-2">
      <img alt={name} src={photo} className="h-8 w-8 m-2 rounded-full"/>
      <p className="p-2">
        <span className="font-bold">{name} - </span>
        <span>{message}</span>
      </p>
    </div>
  );
};

export default ChatMessage;
