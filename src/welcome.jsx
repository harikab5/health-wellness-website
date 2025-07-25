import React, { useState, useEffect } from "react";
import background from './assets/background.jpg'; 
import { useNavigate } from "react-router-dom";

// Hardcoded admin credentials
const ADMIN = {
  email: "admin@example.com",
  password: "admin123",
  firstName: "Admin",
  lastName: "User"
};

export default function Welcome() {
  // Set a default user for testing if not already set
  useEffect(() => {
    if (!localStorage.getItem("currentUser")) {
      localStorage.setItem("currentUser", JSON.stringify({ firstName: "John", lastName: "Doe" }));
    }
  }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showSignup, setShowSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showThanks, setShowThanks] = useState(false);
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate();

  // Store signup details in localStorage
  function handleSignup(e) {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    users.push({ firstName, lastName, email, password, loginDate: new Date().toISOString() });
    localStorage.setItem("users", JSON.stringify(users));
    setShowSignup(false);
    setShowThanks(true);
  }

  // Handle login
  function handleLogin(e) {
    e.preventDefault();
    // Check admin
    if (email === ADMIN.email && password === ADMIN.password) {
      localStorage.setItem("currentUser", JSON.stringify(ADMIN));
      navigate("/admin-dashboard");
      return;
    }
    // Check users
    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find(u => u.email === email && u.password === password);
    if (user) {
      localStorage.setItem("currentUser", JSON.stringify(user));
      navigate("/home");
      return;
    }
    setLoginError("Invalid credentials");
  }

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="w-full max-w-md mx-auto rounded-xl bg-white/10 backdrop-blur p-10 shadow-2xl">
        {showSignup ? (
          <>
            <h2 className="text-3xl font-bold mb-2 text-white text-center">Sign Up</h2>
            <p className="text-gray-200 mb-8 text-center">Create your account.</p>
            <form className="space-y-5" onSubmit={handleSignup}>
              {/* First Name */}
              <div>
                <label className="block mb-1 font-medium text-white">First Name</label>
                <input
                  type="text"
                  className="w-full bg-white/20 text-white border border-white/30 rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your first name"
                  value={firstName}
                  onChange={e => setFirstName(e.target.value)}
                  required
                />
              </div>
              {/* Last Name */}
              <div>
                <label className="block mb-1 font-medium text-white">Last Name</label>
                <input
                  type="text"
                  className="w-full bg-white/20 text-white border border-white/30 rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your last name"
                  value={lastName}
                  onChange={e => setLastName(e.target.value)}
                  required
                />
              </div>
              {/* Email */}
              <div>
                <label className="block mb-1 font-medium text-white">E-mail</label>
                <input
                  type="email"
                  className="w-full bg-white/20 text-white border border-white/30 rounded-lg px-4 py-3 placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-green-400"
                  placeholder="Enter your e-mail"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
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
                  onChange={e => setPassword(e.target.value)}
                  required
                />
              </div>
              {/* Signup button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold bg-black text-white text-lg hover:bg-gray-900 transition"
              >
                Sign up
              </button>
            </form>
            <p className="text-center text-white/80 text-sm mt-8">
              Already have an account?{" "}
              <a href="#" className="text-green-400 font-medium hover:underline" onClick={e => { e.preventDefault(); setShowSignup(false); }}>
                Log in
              </a>
            </p>
          </>
        ) : (
          <>
            <h2 className="text-3xl font-bold mb-2 text-white text-center">Welcome back</h2>
            <p className="text-gray-200 mb-8 text-center">Please enter your details.</p>
            <form className="space-y-5" onSubmit={handleLogin}>
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
              {/* Login button */}
              <button
                type="submit"
                className="w-full py-3 rounded-lg font-semibold bg-black text-white text-lg hover:bg-gray-900 transition"
              >
                Log in
              </button>
            </form>
            {loginError && <p className="text-red-400 text-center mt-2">{loginError}</p>}
            <p className="text-center text-white/80 text-sm mt-8">
              Don't have an account?{" "}
              <a href="#" className="text-green-400 font-medium hover:underline" onClick={e => { e.preventDefault(); setShowSignup(true); }}>
                Register here
              </a>
            </p>
          </>
        )}
        {showThanks && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white rounded-lg shadow-lg p-8 text-center">
              <h3 className="text-2xl font-bold mb-4 text-green-600">Thanks for registering!</h3>
              <button
                className="mt-4 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
                onClick={() => setShowThanks(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

