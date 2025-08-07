import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function Login() {

   
    const [email , setEmail] = useState();
    const [password , setPassword] = useState();

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();
       axios.post("http://127.0.0.1:8000/login", {
    email,
    password
})
.then(result =>{
    console.log(result)
    if(result.data === "Success"){
        navigate("/home")
    }
})
.catch(err => console.error(err));

        
    }
  return (
   <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 p-4">
      {/* Transparent Card */}
      <div className="w-full max-w-md border-2 border-white/40 rounded-2xl p-8 backdrop-blur-md shadow-2xl transform hover:scale-105 transition-transform duration-300 relative">
        {/* Glow Border Animation */}
        <div className="absolute inset-0 rounded-2xl border-2 border-pink-400 animate-pulse pointer-events-none"></div>

        {/* Heading */}
        <h2 className="text-4xl font-extrabold mb-6 text-center text-white drop-shadow-lg">
          Login
        </h2>
        <p className="text-center text-white/90 mb-8 text-lg">
          Welcome back! Please login to continue 🚀
        </p>

        {/* Form */}
        <form onSubmit={handleSubmit} className="relative z-10">
          {/* Email */}
          <label className="block mb-2 font-semibold text-white" htmlFor="email">
            Email
          </label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            className="w-full p-3 mb-5 border border-white/50 rounded-lg bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 hover:border-pink-300 transition-all duration-300"
            type="email"
            placeholder="Enter your email"
            name="email"
          />

          {/* Password */}
          <label className="block mb-2 font-semibold text-white" htmlFor="password">
            Password
          </label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            className="w-full p-3 mb-6 border border-white/50 rounded-lg bg-transparent text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-pink-400 focus:border-pink-400 hover:border-pink-300 transition-all duration-300"
            type="password"
            placeholder="Enter your password"
            name="password"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-bold py-3 rounded-lg hover:opacity-90 shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
          >
            Login
          </button>
        </form>

        {/* Create Account Link */}
        <p className="mt-6 text-center text-white/80">Create a new account</p>
        <Link
          to="/signup"
          className="block w-full text-center bg-gradient-to-r from-blue-400 to-indigo-500 text-white font-bold py-3 rounded-lg mt-3 hover:opacity-90 shadow-md hover:shadow-blue-500/50 transition-all duration-300"
        >
          Signup
        </Link>
      </div>
    </div>
  );
}
  

export default Login