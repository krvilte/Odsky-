import React from "react";
import { Link } from "react-router";
import Logo from "../../assets/icon/logo";
const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="w-20 m-auto">
          <Logo color={"gray"} />
        </div>
        <h2 className="text-3xl font-semibold text-primary-700 text-center">
          Login
        </h2>
        <form className="mt-8 space-y-6">
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-sm focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-sm focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 px-4 rounded-md text-sm hover:bg-primary-700 focus:ring-2 focus:ring-primary-500"
          >
            Login
          </button>

          <div className="mt-4 text-center">
            <button
              type="button"
              className="w-full bg-gray-500 text-white py-3 px-4 rounded-md text-sm hover:bg-gray-600 focus:ring-2 focus:ring-gray-500"
            >
              Continue with Google
            </button>
          </div>
        </form>
        <p className="mt-6 text-sm text-gray-600 text-center">
          Don't have an account?{" "}
          <Link to={"/signup"} className="text-primary-600 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
