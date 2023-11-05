import { createContext } from "react";
import io from "socket.io-client";
import { useState } from "react";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { BACKEND_URL } from "../config/env";

export const ChatContext = createContext();

export default function ChatContextProvider({ children, talkTo = null }) {
  const [chatSocket] = useState(() => io.connect(BACKEND_URL + "/chat"));
  const [chatList, setChatList] = useState([]);
  const [chatRoom, setChatRoom] = useState(null);
  const [messages, setMessages] = useState([]);
  const [otherUser, setOtherUser] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useSelector((store) => store.user);

  useEffect(() => {
    if (talkTo) {
      chatSocket.emit(
        "findRoom",
        { userId: user.id, storeId: talkTo.id },
        (data) => {
          setOtherUser(data.talkTo);
          setChatRoom(() => data.id);
          chatSocket.emit("joinRoom", { roomId: data.id });
        }
      );
    }
    chatSocket.emit("getChatList", { userId: user.id }, (chatList) =>
      setChatList(chatList)
    );
  }, [chatSocket, user.id, talkTo]);

  useEffect(() => {
    chatSocket.on("joinedRoom", (data) => setMessages(data));
    chatSocket.on("receivedMessage", (data) => {
      setMessages((messages) => [...messages, data]);
    });
  }, [chatSocket]);

  return (
    <ChatContext.Provider
      value={{
        chatList,
        chatSocket,
        setChatList,
        chatRoom,
        setChatRoom,
        messages,
        setMessages,
        otherUser,
        setOtherUser,
        searchQuery,
        setSearchQuery,
      }}
    >
      {children}
    </ChatContext.Provider>
  );
}
