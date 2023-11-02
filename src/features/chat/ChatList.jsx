import { useSelector } from "react-redux";
import SearchChatBox from "./SearchChatBox";
import ProfileUserHeader from "./ProfileUserHeader";

function ChatList() {
  const { user } = useSelector((store) => store.user);
  return (
    <>
      <ProfileUserHeader user={user} />
      <div className="">
        <SearchChatBox />
      </div>
    </>
  );
}

export default ChatList;
