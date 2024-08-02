import { useForm } from "react-hook-form";
import { EMAIL_REGEX } from "../constants/regex";
import { Link } from "react-router-dom";
import { signUp } from "../api/auth";
import { toast, ToastContainer } from "react-toastify";
import Spinner from "./Spinner";
import { useState } from "react";

const RegisterForm = () => {
  const [loading, setLoading] = useState(false);

  const { register, handleSubmit, formState, watch } = useForm({ mode: "all" });

  const password = watch("password");

  const { errors } = formState;

  async function submitForm(data) {
    setLoading(true);

    try {
      await signUp(data);

      toast.success("User registered successfully. Please login to continue.", {
        autoClose: 2500,
      });
    } catch (error) {
      toast.error(error.response.data, {
        autoClose: 2500,
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={handleSubmit(submitForm)} noValidate className="w-4/6">
      <div className="py-1">
        <label htmlFor="name" className="ml-1 font-semibold text-sm">
          Name
        </label>
        <input
          type="text"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("name", {
            required: "Name is required.",
          })}
        />
        <p className="text-red-500 text-sm mt-2 ml-1">{errors.name?.message}</p>
      </div>

      <div className="py-1">
        <label htmlFor="email" className="ml-1 font-semibold text-sm">
          Email
        </label>
        <input
          type="email"
          className="border w-full mt-2 px-3 py-2 rounded"
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

      <div className="py-1">
        <label htmlFor="confirmPassword" className="ml-1 font-semibold text-sm">
          Confirm Password
        </label>
        <input
          type="password"
          className="border w-full mt-2 px-3 py-2 rounded"
          {...register("confirmPassword", {
            required: "Confirm password is required.",
            validate: (value) => {
              return value == password || "Passwords do not match.";
            },
          })}
        />
        <p className="text-red-500 text-sm mt-2 ml-1">
          {errors.confirmPassword?.message}
        </p>
      </div>

      <div className="mt-5 text-center">
        <button
          type="submit"
          className="bg-blue-500 text-white rounded py-2 hover:bg-blue-600 cursor-pointer w-full flex justify-center items-center"
        >
          <span className="mr-2">Register</span>
          {loading ? <Spinner /> : null}
        </button>
      </div>
      <div className="text-center mt-5 text-sm">
        <span>Already have an account?</span>
        <Link to="/auth/login" className="ml-1 text-blue-500">
          Login
        </Link>
      </div>

      <ToastContainer />
    </form>
  );
};

export default RegisterForm;
