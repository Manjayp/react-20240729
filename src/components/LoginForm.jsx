import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../constants/regex";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const { register, handleSubmit, formState } = useForm({ mode: "all" });

  const { errors } = formState;

  function submitForm(data) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} noValidate className="w-4/6">
      <div className="py-1">
        <label htmlFor="email" className="ml-1 font-semibold text-sm">
          Email
        </label>
        <input
          type="email"
          className="border w-full mt-2 px-3 py-2 rounded"
          // shortcut => spread operator
          {...register("email", {
            required: "Email address is required.",
            pattern: {
              value: EMAIL_REGEX,
              message: "Invalid email address.",
            },
          })}
        />
        <p className="text-red-500 text-sm mt-2 ml-1">
          {errors.email?.message}
        </p>
      </div>

      <div className="py-1">
        <label htmlFor="password" className="ml-1 font-semibold text-sm">
          Password
        </label>
        <input
          type="password"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("password", {
            required: "Password is required.",
            minLength: {
              value: 6,
              message: "Password length must be greater than 6.",
            },
          })}
        />
        <p className="text-red-500 text-sm mt-2 ml-1">
          {errors.password?.message}
        </p>
      </div>

      <div className="mt-5 text-center">
        <input
          type="submit"
          value={"Login"}
          className="bg-blue-500 text-white rounded py-2 hover:bg-blue-600 cursor-pointer w-full"
        />
      </div>
      <div className="text-center mt-5 text-sm">
        <span>Do not have an account?</span>
        <Link to="/auth/register" className="ml-1 text-blue-500">
          Register
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
