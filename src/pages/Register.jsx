import React from "react";
import { useState } from "react";
import { Linkedin, LinkedinIcon, LucideLinkedin } from "lucide-react";
import img1 from "..//Images/createImage.jpg";
import "./Register.css";

const Register = () => {
  return (
    <div className="flex mt-24 justify-center">
      <div className="container text-center">
        <h2 className="font-semibold text text-2xl pt-4 pb-3">willow</h2>
        <h1 className="text-3xl font-semibold pb-2 ">Create Account</h1>
        <p className="mb-3">
          Already have an account?{" "}
          <a className="text-blue-700" href="">
            Sign in
          </a>
        </p>
        <div className="flex justify-center bg-slate-200 w-2/5">
          <LucideLinkedin className="mr-2" />
          <button className="border-2 border-slate-300 mb-3">
            Sign up with LinkedIn
          </button>
          <br />
        </div>
        <button className="border-2 border-slate-300">
          Continue with Google
        </button>
        <p>or</p>
        <input type="text" name="" id="" placeholder="First name" />
        <input type="text" name="" id="" placeholder="Last name" /> <br />
        <input type="email" name="" id="" placeholder="Email address" /> <br />
        <div className="flex">
          <input type="checkbox" name="" id="" />
          <p>
            I agree to the <a href="">Terms of Service</a> and{" "}
            <a href="">Privacy Policy</a>
          </p>
        </div>
        <button>Sign up with email</button>
      </div>
      <div className="bg-blue-950 p-36">
        <h1>hkhdkkladvlk</h1>
        <h2>hjdkklf</h2>
        <h2>jdkjfkldj</h2>
        <h2>jfhjkdhka</h2>
      </div>
    </div>
  );
};

export default Register;
