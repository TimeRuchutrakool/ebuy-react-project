import { BsFillPersonFill } from "react-icons/bs";

function ProfileUserHeader({ user, end = "start" }) {
  return (
    <div
      className={`flex justify-${end} items-center gap-5 border-b-[1px] px-4 py-3`}
    >
      {user?.profileImage ? (
        <img
          src={`${user.profileImage}`}
          alt="profile-image"
          className="w-10 h-10 object-cover rounded-full"
        />
      ) : (
        <div className="border border-[#E4E9EE] rounded-full p-2">
          <BsFillPersonFill />
        </div>
      )}
      <p>
        {user?.firstName} {user?.lastName}
      </p>
    </div>
  );
}

export default ProfileUserHeader;
