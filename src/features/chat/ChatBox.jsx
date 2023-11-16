import { BsFillSendFill } from "react-icons/bs";
import { FaImage } from "react-icons/fa6";
import ProfileUserHeader from "./ProfileUserHeader";
import { useChat } from "./useChat";
import { useState } from "react";
import { useSelector } from "react-redux";
import { formatDateForMessage } from "../../utils/helper";
import { IoIosCloseCircle } from "react-icons/io";

import { useRef } from "react";
import { useEffect } from "react";
import toast from "react-hot-toast";

function ChatBox() {
  const { user } = useSelector((store) => store.user);
  const ref = useRef(null);
  const [message, setMessage] = useState("");
  const [image, setImage] = useState("");
  const [file, setFile] = useState(null);
  const imageRef = useRef(null);
  const { messages, chatSocket, chatRoom, otherUser } = useChat();

  useEffect(() => {
    if (messages.length)
      ref.current?.scrollIntoView({ behavior: "smooth", block: "end" });
  }, [messages.length]);

  const sendMessage = () => {
    if (file) {
      chatSocket.emit("sendMessage", {
        roomId: chatRoom,
        content: file,
        senderId: user.id,
        type: "IMAGE",
      });
    } else {
      chatSocket.emit("sendMessage", {
        roomId: chatRoom,
        content: message,
        senderId: user.id,
        type: "STRING",
      });
    }
    setMessage("");
    setImage("");
    setFile(null);
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
                    }  ${
                      message.type === "IMAGE" ? "p-3" : "px-5 py-2"
                    } rounded-3xl`}
                  >
                    {message.type === "IMAGE" ? (
                      <img
                        src={message.content}
                        alt="image"
                        className="h-52 rounded-3xl"
                      />
                    ) : (
                      <span>{message.content}</span>
                    )}
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

        <div className=" w-5/6 bg-white px-4 py-3 rounded-full my-3 text-sm gap-5 flex justify-between items-center">
          {image ? (
            <div className="w-fit h-fit relative">
              <button
                className="absolute -right-2 -top-2 text-2xl"
                onClick={() => {
                  setFile(null);
                  setImage("");
                }}
              >
                <IoIosCloseCircle />
              </button>
              <img src={image} className="h-24 ms-10" />
            </div>
          ) : (
            <input
              className="w-full bg-transparent outline-none "
              type="text"
              placeholder="Your Messages..."
              value={message}
              onChange={(e) => setMessage(() => e.target.value)}
            />
          )}

          <input
            type="file"
            accept="image/*"
            className="hidden"
            ref={imageRef}
            onChange={(e) => {
              if (e.target.files[0].size < 1048576) {
                setFile(() => e.target.files[0]);
                setImage(() => URL.createObjectURL(e.target.files[0]));
              } else toast.error("ขนาดไฟล์ใหญ่เกินไป");
            }}
          />
          <div className={`h-full flex gap-6 text-lg self-end`}>
            <button onClick={() => imageRef.current.click()}>
              <FaImage />
            </button>
            <button
              onClick={() => {
                if (message || file) sendMessage();
              }}
            >
              <BsFillSendFill />
            </button>
          </div>
        </div>
      </>
    );
}

export default ChatBox;
