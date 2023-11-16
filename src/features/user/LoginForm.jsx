import { useForm } from "react-hook-form";
import InputError from "../../components/InputError";
import Heading from "../../components/Heading";
import { FcGoogle } from "react-icons/fc";
import useModal from "../../hooks/useModal";
import { login } from "../../store/slices/userSlice";
import { useDispatch, useSelector } from "react-redux";

const inputStyled =
  "w-full border border-none bg-[#F6F8FA] rounded-md placeholder-[#818B9C] px-3 py-2 font-extralight";

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

  if (loading) return modal({ type: "loading" });

  return (
    <div className="flex flex-col gap-5 p-4">
      <form
        onSubmit={handleSubmit(handleLogin)}
        className="flex flex-col gap-3"
      >
        <Heading big={true}>Sign In</Heading>
        <InputError error={errors?.email?.message} label="Email" id="email">
          <input
            id="email"
            type="email"
            placeholder="email"
            {...register("email", {
              required: "Email is required.",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Invalid email format.",
              },
            })}
            className={inputStyled}
          />
        </InputError>
        <InputError
          error={errors?.password?.message}
          label="Password"
          id="password"
        >
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
            className={inputStyled}
          />
        </InputError>

        <button className=" bg-green-900 text-white w-full p-2 rounded-lg">
          Sign In
        </button>
      </form>
      <div className="flex justify-between items-center">
       
      </div>
     
      <span className="flex justify-center text-sm font-light">
        <span className="text-[#818B9C]">
          doesn&apos;t have an account?&nbsp;
        </span>
        <button
          onClick={() => modal({ type: "signup" })}
          className="text-[#1E4C2F]"
        >
          Sign up
        </button>
      </span>
    </div>
  );
}

export default LoginForm;
