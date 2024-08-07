import { Alert, Button, Label, Spinner, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  signInStart,
  signInSuccess,
  signInFailure,
} from "../redux/user/userSlice";

import { useDispatch, useSelector } from "react-redux";
import OAuth from "../components/OAuth";

const SignIn = () => {
  const [formData, setFormData] = useState({});

  const { loading, error: errorMessage } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value.trim() });
    console.log(formData);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.email || !formData.password) {
      return dispatch(signInfailure("Please fill out all the fields"));
    }

    try {
      dispatch(signInStart());
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (data.success === false) {
        dispatch(signInfailure(data.message));
      }

      if (res.ok) {
        dispatch(signInSuccess());
        navigate("/");
      }
    } catch (err) {
      dispatch(signInfailure(data.message));
    }
  };

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
            Create an account to start your blogging journey! Sign In with your
            email and password or with Google.
          </p>
        </div>
        {/* Right */}
        <div className="flex-1">
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
              <Label value="Your email" />
              <TextInput
                onChange={handleChange}
                type="email"
                placeholder="namecompany.com"
                id="email"
              />
            </div>
            <div>
              <Label value="Your password" />
              <TextInput
                onChange={handleChange}
                type="password"
                placeholder="********"
                id="password"
              />
            </div>
            <Button
              className=" bg-gradient-to-r from-yellow-500 via-yellow-350 to-yellow-300"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <>
                  <Spinner size="sm" /> <span className="pl-3">Loading...</span>
                </>
              ) : (
                "Sign In"
              )}
            </Button>
            <OAuth />
          </form>
          <div className="flex gap-2 text-sm mt-5">
            <span>Don't an account?</span>
            <Link to="/sign-up" className="text-yellow-500">
              Sign Up
            </Link>
          </div>
          {errorMessage && (
            <Alert className="mt-5" color="failure">
              {errorMessage}
            </Alert>
          )}
        </div>
      </div>
    </div>
  );
};

export default SignIn;
