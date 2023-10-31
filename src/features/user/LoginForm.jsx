import { useForm } from "react-hook-form";
function LoginForm() {
  const { register,handleSubmit ,formState} = useForm();
  const {errors} =formState
  const onSubmit =(data)=> console.log(data)
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h1>Sign in</h1>
      <div>
        <span>Email</span>
        <input 
        placeholder="Enter your email" 
        type="email"
        {...register("email", {required: "Incorrect. Please try again.", pattern: /^\S+@\S+$/i})}
        />
        <span>{errors?.email?.message}</span>
      </div>
      <div>
        <span>Password</span>
        <input 
        placeholder="Enter your password" 
        type="password"
        {...register("password",{required :" invalid password "})}
        />
        <span>{errors?.password?.message}</span>
      </div>
      <button className=" bg-green-900 text-white">Sign in</button>
      <hr />
      <button className=" border">Sign in with Google</button>
    </form>
  );
}

export default LoginForm;
