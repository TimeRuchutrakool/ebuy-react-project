import ChatBox from "./ChatBox";
import ChatList from "./ChatList";

function ChatModal() {
  return (
    <div style={{ width: "80dvw", height: "80dvh" }} className="flex">
      <div className="w-2/6">
        <ChatList />
      </div>
      <div className="w-4/6">
        <ChatBox />
      </div>
    </div>
  );
}

export default ChatModal;
