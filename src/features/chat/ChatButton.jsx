import { HiChatBubbleLeftRight } from "react-icons/hi2";
import useModal from "../../hooks/useModal";

function ChatButton() {
  const { dispatch: modal } = useModal();
  return (
    <button
      className="p-3 rounded-full bg-[#1E4C2F] w-fit h-fit text-white text-3xl fixed bottom-2 right-2 cursor-pointer"
      onClick={() => modal({ type: "chat" })}
    >
      <HiChatBubbleLeftRight />
    </button>
  );
}

export default ChatButton;
