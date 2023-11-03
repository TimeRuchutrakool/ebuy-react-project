import { useSelector } from "react-redux";
import SearchChatBox from "./SearchChatBox";
import ProfileUserHeader from "./ProfileUserHeader";

function ChatList() {
  const { user } = useSelector((store) => store.user);
  return (
    <div className="flex flex-col h-full">
      <ProfileUserHeader user={user} />

      <SearchChatBox />
      <div className="grow overflow-scroll">
        {Array.from({ length: 15 }).map((_, index) => (
          <ProfileUserHeader key={index} />
        ))}
      </div>
    </div>
  );
}

export default ChatList;
