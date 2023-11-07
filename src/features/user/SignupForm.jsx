import { useForm } from "react-hook-form";
import InputError from "../../components/InputError";
import Heading from "../../components/Heading";
import useModal from "../../hooks/useModal";
import { useDispatch } from "react-redux";
import { signup } from "../../store/slices/userSlice";

const inputStyled =
  "w-full border border-none bg-[#F6F8FA] rounded-md placeholder-[#818B9C] px-3 py-2 font-extralight";

function SignUpForm() {
  const dispatch = useDispatch();
  const { dispatch: modal } = useModal();
  const { register, handleSubmit, formState, getValues } = useForm();
  const { errors } = formState;

  const handleSignup = (data) => {
    dispatch(signup(data));
    modal({ type: "close" });
  };
  return (
    <div className="flex flex-col gap-7 p-4">
      <form
        onSubmit={handleSubmit(handleSignup)}
        className="flex flex-col gap-1"
      >
        <Heading big={true}>Sign Up</Heading>
        <InputError
          error={errors?.firstName?.message}
          label="First Name"
          id="firstName"
        >
          <input
            id="firstName"
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: "First name is required." })}
            className={inputStyled}
          />
        </InputError>
        <InputError
          error={errors?.lastName?.message}
          label="Last Name"
          id="lastName"
        >
          <input
            id="lastName"
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: "Last name is required." })}
            className={inputStyled}
          />
        </InputError>
        <InputError error={errors?.email?.message} label="Email" id="email">
          <input
            id="email"
            type="email"
            placeholder="Email"
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
            placeholder="Password"
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
        <InputError
          error={errors?.confirmPassword?.message}
          label="Confirm Password"
          id="confirmPassword"
        >
          <input
            id="confirmPassword"
            type="password"
            placeholder="Confirm Password"
            {...register("confirmPassword", {
              required: "Enter password again.",
              validate: (value) =>
                value === getValues().password || "Wrong password",
            })}
            className={inputStyled}
          />
        </InputError>
        <button className=" bg-green-900 text-white w-full p-2 rounded-lg">
          Sign up
        </button>
      </form>
      <span className="flex justify-center text-sm font-light">
        <span className="text-[#818B9C]">Already have an account.&nbsp;</span>
        <button
          onClick={() => modal({ type: "login" })}
          className="text-[#1E4C2F]"
        >
          Sign In
        </button>
      </span>
    </div>
  );
}

export default SignUpForm;
