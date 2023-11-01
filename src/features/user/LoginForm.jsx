import { useForm } from "react-hook-form";
import InputError from "../../components/InputError";
import Heading from "../../components/Heading";
import { FcGoogle } from "react-icons/fc";
import useModal from "../../hooks/useModal";
import { login } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";
import toast from "react-hot-toast";

function LoginForm() {
  const { dispatch: modal } = useModal();
  const dispatch = useDispatch();
  const { loading } = useSelector((store) => store.user);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data) => {
    dispatch(login(data));
    modal({ type: "close" });
  };

  if (loading.loginLoading) return toast.loading("Logging in");

  return (
    <div className="flex flex-col gap-4  p-4">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-3"
      >
        <Heading big={true}>Sign In</Heading>
        <InputError error={errors?.email?.message} label="email">
          <input
            id="email"
            type="email"
            placeholder="email"
            {...register("email", { required: "Email is required." })}
            className="w-full border border-none bg-[#F6F8FA] rounded-md placeholder-[#818B9C] px-3 py-2 font-extralight"
          />
        </InputError>
        <InputError error={errors?.password?.message} label="password">
          <input
            id="password"
            type="password"
            placeholder="password"
            {...register("password", {
              required: "Password is required.",
              pattern: {
                value: /^[a-zA-Z0-9]{6,30}$/,
                message: "Wrong password format",
              },
            })}
            className="w-full border border-none bg-[#F6F8FA] rounded-md placeholder-[#818B9C] px-3 py-2 font-extralight"
          />
        </InputError>

        <button className=" bg-green-900 text-white w-full p-2 rounded-lg">
          Sign In
        </button>
      </form>
      <div className="flex justify-between items-center">
        <div className="w-3/12 h-[1px] bg-[#E4E9EE]"></div>
        <span className="w-6/12 text-sm font-extralight text-center text-[#818B9C]">
          Or using other method
        </span>
        <div className="w-3/12 h-[1px] bg-[#E4E9EE]"></div>
      </div>
      <button className="w-full border flex justify-center items-center py-2 gap-3 rounded-lg">
        <FcGoogle />
        <span>Sign in with Google</span>
      </button>
      <span className="flex justify-center text-sm font-light">
        <span>doesn&apos;t have an account?&nbsp;</span>
        <button onClick={() => modal({ type: "signup" })}>Sign up</button>
      </span>
    </div>
  );
}

export default LoginForm;
