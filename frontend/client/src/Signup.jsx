import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Signup() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post("http://127.0.0.1:8000/signup", formData);
      console.log("Signup Success:", res.data);
      navigate("/login");
    } catch (err) {
      console.error("Signup Error:", err);
      alert("Something went wrong! Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 p-4">
      {/* Transparent Card with Glow Border */}
      <div className="w-full max-w-md border-2 border-white/40 rounded-2xl p-8 backdrop-blur-md shadow-2xl transform hover:scale-105 transition-transform duration-300 relative">
        {/* Glowing border animation */}
        <div className="absolute inset-0 rounded-2xl border-2 border-purple-400 animate-pulse pointer-events-none"></div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-6 text-center text-white drop-shadow-lg">
          Create Account
        </h2>
        <p className="text-center text-white/90 mb-8 text-lg">
          Join us and explore amazing features 🚀
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative z-10">
          {/* Name */}
          <label className="block mb-2 font-semibold text-white" htmlFor="name">
            Name
          </label>
          <input
            name="name"
            type="text"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-3 mb-5 border border-white/50 rounded-lg bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 hover:border-pink-300 transition-all duration-300"
          />

          {/* Email */}
          <label className="block mb-2 font-semibold text-white" htmlFor="email">
            Email
          </label>
          <input
            name="email"
            type="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 mb-5 border border-white/50 rounded-lg bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 hover:border-pink-300 transition-all duration-300"
          />

          {/* Password */}
          <label className="block mb-2 font-semibold text-white" htmlFor="password">
            Password
          </label>
          <input
            name="password"
            type="password"
            placeholder="Enter your password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-3 mb-6 border border-white/50 rounded-lg bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 hover:border-pink-300 transition-all duration-300"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white font-bold py-3 rounded-lg hover:opacity-90 shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
          >
            Sign Up
          </button>
        </form>

        {/* Already have account */}
        <p className="mt-6 text-center text-white/80">Already have an account?</p>
        <Link
          to="/login"
          className="block w-full text-center bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-bold py-3 rounded-lg mt-3 hover:opacity-90 shadow-md hover:shadow-blue-500/50 transition-all duration-300"
        >
          Login
        </Link>
      </div>
    </div>
  );
}

export default Signup;
