import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate hook
import Logo from "../../assets/icon/logo";
import { useAuth } from "../../context/authContext";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook to navigate programmatically

  const { signUp, googleSignIn } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await signUp(email, password);
      navigate("/"); // Navigate after successful signup
    } catch (error) {
      console.error("Error while signup: ", error.message);
    }
  };

  const signInWithGoogle = async () => {
    try {
      await googleSignIn();
      navigate("/"); // Navigate after successful Google sign-in
    } catch (error) {
      console.error("Error in google sign in: ", error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <div className="w-20 m-auto">
          <Logo color={"gray"} />
        </div>
        <h2 className="text-3xl font-semibold text-primary-700 text-center">
          Sign Up
        </h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              name="password"
              placeholder="Enter your password"
              className="mt-1 block w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-md text-sm focus:ring-primary-500 focus:border-primary-500"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary-600 text-white py-3 px-4 rounded-md text-sm hover:bg-primary-700 focus:ring-2 focus:ring-primary-500"
          >
            Sign Up
          </button>

          <div className="mt-4 text-center">
            <button
              onClick={signInWithGoogle}
              type="button"
              className="w-full bg-gray-500 text-white py-3 px-4 rounded-md text-sm hover:bg-gray-600 focus:ring-2 focus:ring-gray-500"
            >
              Continue with Google
            </button>
          </div>
        </form>
        <p className="mt-6 text-sm text-gray-600 text-center">
          Already have an account?{" "}
          <Link to={"/login"} className="text-primary-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
