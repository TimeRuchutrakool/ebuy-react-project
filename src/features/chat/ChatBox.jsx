import { useSelector } from "react-redux";
import ProfileUserHeader from "./ProfileUserHeader";

function ChatBox() {
  const { user } = useSelector((store) => store.user);
  return (
    <div>
      <div className="border-s-[1px]">
        <ProfileUserHeader user={user} end="end" />
      </div>
    </div>
  );
}

export default ChatBox;
