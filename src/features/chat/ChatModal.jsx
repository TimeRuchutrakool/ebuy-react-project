import ChatBox from "./ChatBox";
import ChatList from "./ChatList";

function ChatModal() {
  return (
    <div style={{ width: "80dvw", height: "80dvh" }} className="flex">
      <div className="w-2/6 h-full">
        <ChatList />
      </div>
      <div className="w-4/6 h-full border-s-[1px] flex flex-col justify-between items-center">
        <ChatBox />
      </div>
    </div>
  );
}

export default ChatModal;
