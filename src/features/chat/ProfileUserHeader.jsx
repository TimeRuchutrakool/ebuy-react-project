import { BsFillPersonFill } from "react-icons/bs";
import { useChat } from "./useChat";

function ProfileUserHeader({ user, end = "start", chat }) {
  const { setChatRoom, chatSocket, setOtherUser, otherUser } = useChat();
  if (user)
    return (
      <div
        className={`w-full flex justify-${end} items-center gap-5 border-b-[1px] px-4 py-3 bg-white`}
      >
        {user?.profileImage ? (
          <img
            src={`${user.profileImage}`}
            alt="profile-image"
            className="w-10 h-10 object-cover rounded-full"
          />
        ) : (
          <div className="w-10 h-10 flex justify-center items-center border border-[#E4E9EE] rounded-full p-2">
            <BsFillPersonFill />
          </div>
        )}
        <p>
          {user?.firstName} {user?.lastName}
        </p>
      </div>
    );
  if (chat)
    return (
      <div
        className={`w-full flex justify-${end} items-center gap-5 border-b-[1px] px-4 py-3 cursor-pointer ${
          chat.talkTo.id === otherUser?.id ? "bg-green-100" : ""
        }`}
        onClick={() => {
          setChatRoom(() => chat.id);
          chatSocket.emit("joinRoom", { roomId: chat.id });
          setOtherUser(chat.talkTo);
        }}
      >
        {chat?.talkTo.profileImage ? (
          <img
            src={`${chat?.talkTo.profileImage}`}
            alt="profile-image"
            className="w-10 h-10 object-cover rounded-full "
          />
        ) : (
          <div className="w-10 h-10 flex justify-center items-center border border-[#E4E9EE] rounded-full p-2 bg-white">
            <BsFillPersonFill />
          </div>
        )}
        <p>
          {chat?.talkTo?.firstName} {chat?.talkTo?.lastName}
        </p>
      </div>
    );
}

export default ProfileUserHeader;
