import { BsFillSendFill } from "react-icons/bs";
import ProfileUserHeader from "./ProfileUserHeader";
import { useChat } from "./useChat";
import { useState } from "react";
import { useSelector } from "react-redux";
import { formatDateForMessage } from "../../utils/helper";
import { useRef } from "react";
import { useEffect } from "react";

function ChatBox() {
  const { user } = useSelector((store) => store.user);
  const ref = useRef(null);
  const [message, setMessage] = useState("");
  const { messages, chatSocket, chatRoom, otherUser } = useChat();

  useEffect(() => {
    if (messages.length)
      ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length]);

  const send = (e) => {
    e.preventDefault();
    chatSocket.emit("sendMessage", {
      roomId: chatRoom,
      content: message,
      senderId: user.id,
    });
    setMessage("");
  };

  if (!otherUser)
    return (
      <div className="w-full h-full flex justify-center items-center">
        <p className="font-extralight text-2xl">
          Tap user on the left to start conversation
        </p>
      </div>
    );
  if (otherUser)
    return (
      <>
        <ProfileUserHeader user={otherUser} end="end" />

        {messages.length === 0 ? (
          <p className="font-extralight">
            There is no messages in this chat yet.
          </p>
        ) : (
          <div className="w-full h-full overflow-scroll">
            {messages?.map((message) => (
              <div
                key={message.id}
                className={`flex mx-10 my-3 ${
                  message.senderId === user.id ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex flex-col gap-2 ${
                    message.senderId === user.id ? "items-end" : "items-start"
                  }`}
                >
                  <div
                    className={`${
                      message.senderId === user.id
                        ? "bg-green-300 rounded-tr-none"
                        : "bg-slate-200 rounded-tl-none"
                    } px-5 py-2 rounded-full`}
                  >
                    <span>{message.content}</span>
                  </div>
                  <p className="font-extralight text-xs">
                    {formatDateForMessage(new Date(message.sendAt))}
                  </p>
                </div>
              </div>
            ))}
            <div ref={ref}></div>
          </div>
        )}

        <form
          className=" w-5/6 bg-white px-4 py-3 rounded-full my-3 flex text-sm"
          onSubmit={send}
        >
          <input
            className="w-full bg-transparent outline-none "
            type="text"
            placeholder="Your Messages..."
            value={message}
            onChange={(e) => setMessage(() => e.target.value)}
          />
          <button>
            <BsFillSendFill />
          </button>
        </form>
      </>
    );
}

export default ChatBox;
