// youtube live stream chat
//  - too many message, we can't show every message
//  - Not every msg is required
//  - Near real time
//  - page size can explode if we keep pushing all msgs to chat

import ChatWindow from "./ChatWindow";
import VideoStream from "./VideoStream";

const LiveChat = () => {
  return (
    <div className="flex">
      <VideoStream />
      <ChatWindow/>
    </div>
  );
};

export default LiveChat;
