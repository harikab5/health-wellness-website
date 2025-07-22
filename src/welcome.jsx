import React, { useState } from "react";
import background from './assets/background.jpg'; // Use your leafy background image here

export default function Welcome() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full max-w-md mx-auto rounded-xl bg-white/10 backdrop-blur p-10 shadow-2xl">
        <h2 className="text-3xl font-bold mb-2 text-white text-center">Welcome back</h2>
        <p className="text-gray-200 mb-8 text-center">Please enter your details.</p>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block mb-1 font-medium text-white">E-mail</label>
            <input
              type="email"
              className="w-full bg-white/20 text-white border border-white/30 rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block mb-1 font-medium text-white">Password</label>
            <input
              type="password"
              className="w-full bg-white/20 text-white border border-white/30 rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Remember + Forgot */}
          <div className="flex items-center justify-between text-sm text-white/80">
            <label className="flex items-center gap-2">
              <input type="checkbox" className="accent-green-500" />
              Remember me
            </label>
            <a href="#" className="hover:underline">Forgot your password?</a>
          </div>

          {/* Login button */}
          <button
            type="submit"
            className="w-full py-3 rounded-lg font-semibold bg-black text-white text-lg hover:bg-gray-900 transition"
          >
            Log in
          </button>
        </form>

        {/* Register link */}
        <p className="text-center text-white/80 text-sm mt-8">
          Don't have an account?{" "}
          <a href="#" className="text-green-400 font-medium hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
}

