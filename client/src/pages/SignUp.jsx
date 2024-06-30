import { Button, Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="min-h-screen mt-20">
      <div className="flex p-3 max-w-3xl mx-auto flex-col md:flex-row md:items-center gap-5">
        {/* Left */}
        <div className="flex-1">
          <Link to="/" className="  font-bold dark:text-white text-4xl">
            {/* <span className="px-2 py-2 bg-gradient-to-r from-gray-400 via-gray-400 to-gray-400 rounded-lg text-white"> */}
            <span className="px-2 py-2 bg-gradient-to-r from-yellow-500 via-yellow-350 to-yellow-300 rounded-lg text-white">
              Inked Insights
            </span>
          </Link>
          <p className="text-sm mt-5">
            Create an account to start your blogging journey! Sign up with your
            email and password or with Google.
          </p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4">
            <div>
              <Label value="Your username" />
              <TextInput type="text" placeholder="Username" id="username" />
            </div>
            <div>
              <Label value="Your email" />
              <TextInput
                type="email"
                placeholder="namecompany.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput type="password" placeholder="Password" id="password" />
            </div>
            <Button
              className=" bg-gradient-to-r from-yellow-500 via-yellow-350 to-yellow-300"
              type="submit"
            >
              Sign Up
            </Button>
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Have an account?</span>
            <Link to="/sign-in" className="text-yellow-500">
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
