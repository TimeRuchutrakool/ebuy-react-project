import { useSelector } from "react-redux";
import SearchChatBox from "./SearchChatBox";
import ProfileUserHeader from "./ProfileUserHeader";
import { useChat } from "./useChat";

function ChatList() {
  const { chatList, searchQuery } = useChat();
  const { user } = useSelector((store) => store.user);

  return (
    <div className="flex flex-col h-full">
      <ProfileUserHeader user={user} />

      <SearchChatBox />
      <div className="grow overflow-scroll">
        {searchQuery
          ? chatList
              .filter(
                (chat) =>
                  chat.talkTo.firstName.toLowerCase().includes(searchQuery) ||
                  chat.talkTo.lastName.toLowerCase().includes(searchQuery)
              )
              .map((chat) => <ProfileUserHeader key={chat.id} chat={chat} />)
          : chatList.map((chat) => (
              <ProfileUserHeader key={chat.id} chat={chat} />
            ))}
      </div>
    </div>
  );
}

export default ChatList;
