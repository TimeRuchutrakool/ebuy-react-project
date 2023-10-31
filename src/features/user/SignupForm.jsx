import { useForm } from "react-hook-form"
function SignUpForm (){
const {register ,handleSubmit, formState,getValues} =useForm()
const { errors }=formState 
const onSubmit =(data)=> console.log(data)
return(
    <div>
    <form onSubmit={handleSubmit(onSubmit)}>
        Signup
        <div>
        <span>First name</span>
        <input 
        placeholder="Enter your First name" 
        type="text"
        {...register("firstName", {required: "Please try again."})}
        />
        <span>{errors?.firstName?.message}</span>
      </div>
      <div>
        <span>Last name</span>
        <input 
        placeholder="Enter your Last name" 
        type="text"
        {...register("lastName", {required: "Please try again."})}
        />
        <span>{errors?.lastName?.message}</span>
      </div>
      <div>
        <span>Email</span>
        <input 
        placeholder="Enter your email" 
        type="email"
        {...register("email" , {
            required: "Please enter email.",
            pattern: {
              value: /^\S+@\S+\.\S+$/,
              message: "*Please enter your email address correctly.",
            },
          })}
        />
        <span>{errors?.email?.message}</span>
      </div>
      <div>
        <span>Password</span>
        <input 
        placeholder="Enter your password" 
        type="password"
        {...register("password",{required: "* Please enter your password.",minLength: {value: 6,message: "* Please enter a password of at least 6 characters."}})}
        />
        <span>{errors?.password?.message}</span>
      </div>
      <div>
        <span>Confirm password</span>
        <input 
        placeholder="Enter your confirmPassword" 
        type="password"
        {...register("confirmPassword", {required: "Please enter your password again.", validate: (value)=> value === getValues().password || "Password doesn't match"})}
        />
        <span>{errors?.confirmPassword?.message}</span>
      </div>
      <button className=" bg-green-800">Sign up</button>
    </form>
    </div>
)
}

export default SignUpForm