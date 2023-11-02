import { BsFillSendFill } from "react-icons/bs";
import ProfileUserHeader from "./ProfileUserHeader";
import socket from "../../socket";

function ChatBox() {
  const user = { firstName: "Johny", lastName: "Cash" };

  const send = (e) => {
    e.preventDefault();
    socket.emit("message", "message", (m) => console.log(m));
  };

  return (
    <>
      <ProfileUserHeader user={user} end="end" />
      <div className="w-full h-full overflow-scroll">
        {Array.from({ length: 40 }).map((_, index) => (
          <p key={index}>Hello</p>
        ))}
      </div>
      <form
        className=" w-5/6 bg-[#EFF5FB] px-4 py-3 rounded-full my-3 flex text-sm"
        onSubmit={send}
      >
        <input
          className="w-full bg-transparent outline-none "
          type="text"
          placeholder="Your Messages..."
        />
        <button>
          <BsFillSendFill />
        </button>
      </form>
    </>
  );
}

export default ChatBox;
