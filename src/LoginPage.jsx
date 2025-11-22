import { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// API Configuration - Change these endpoints as needed
const API_CONFIG = {
  LOGIN_URL: "http://localhost:5000/login",
};

function LoginPage() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isDark, setIsDark] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const resetBtn = () => {
    setUserName("");
    setPassword("");
    setErrorMsg("");
    toast.success("Fields have been reset!");
  };

  const isDarkMode = () => {
    setIsDark(!isDark);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);

    // Validate inputs
    if (!username.trim() || !password.trim()) {
      setErrorMsg("Username and password are required");
      toast.error("Please fill in all fields");
      setLoading(false);
      return;
    }

    try {
      // Test login with dummyjson API
      const response = await axios.post(
        API_CONFIG.LOGIN_URL,
        {
          username,
          password,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data && response.data.token) {
        // Store token in localStorage
        localStorage.setItem("authToken", response.data.token);
        localStorage.setItem("user", JSON.stringify(response.data));

        toast.success("Login Successful! 🎉");

        // Navigate after short delay
        setTimeout(() => {
          navigate("/dashboard");
        }, 500);
      } else {
        setErrorMsg("Invalid response from server");
        toast.error("Login failed. Invalid response");
      }
    } catch (err) {
      const errorMessage =
        err.response?.data?.message || err.message || "Invalid Credentials";
      setErrorMsg(errorMessage);
      toast.error(`Login failed: ${errorMessage}`);
      console.error("Login error:", err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <button
        onClick={isDarkMode}
        className="flex items-center justify-center w-12 h-12 rounded-lg fixed top-5 right-5 hover:bg-gray-200 dark:hover:bg-gray-700 transition-all"
        title="Toggle theme"
      >
        {isDark ? (
          <FaSun size={26} className="text-yellow-400" />
        ) : (
          <FaMoon size={26} className="text-gray-800" />
        )}
      </button>

      <div
        className={`min-h-screen flex items-center justify-center p-4 transition-colors duration-1000 ${
          isDark
            ? "bg-linear-to-br from-gray-800 to-gray-600 text-white"
            : "bg-linear-to-br from-blue-50 to-indigo-100 text-gray-900"
        }`}
      >
        <div
          className={`w-full max-w-md rounded-3xl shadow-2xl p-8 backdrop-blur-sm animate-fadeIn ${
            isDark
              ? "bg-gray-800/95 border border-gray-700"
              : "bg-white/95 border border-white/50"
          }`}
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-2">🏥</h1>
            <h2
              className={`text-3xl font-bold ${
                isDark ? "text-white" : "text-gray-900"
              }`}
            >
              ASR Hospitals
            </h2>
          </div>

          {/* Error Message */}
          {errorMsg && (
            <div className="mb-4 p-3 rounded-lg bg-red-100 text-red-700 text-sm border border-red-300 animate-slideDown">
              ⚠️ {errorMsg}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username Field */}
            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Username / Email
              </label>
              <input
                type="text"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                }`}
                placeholder="Enter username"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            {/* Password Field */}
            <div>
              <label
                className={`block text-sm font-semibold mb-2 ${
                  isDark ? "text-gray-300" : "text-gray-700"
                }`}
              >
                Password
              </label>
              <input
                type="password"
                className={`w-full px-4 py-3 rounded-lg border-2 transition-all focus:outline-none ${
                  isDark
                    ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                    : "bg-white border-gray-300 text-gray-900 placeholder-gray-500 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/30"
                }`}
                placeholder="Enter password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                required
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-2 active:scale-95 ${
                loading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-linear-to-r from-blue-600 to-indigo-600 hover:shadow-lg hover:shadow-blue-500/50"
              }`}
            >
              {loading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  Logging in...
                </>
              ) : (
                "Login"
              )}
            </button>
          </form>

          {/* Footer Links */}
          <div
            className={`text-center text-sm mt-6 pt-6 border-t ${
              isDark ? "border-gray-700" : "border-gray-200"
            }`}
          >
            <p className={isDark ? "text-gray-400" : "text-gray-600"}>
              Need to reset?{" "}
              <button
                onClick={resetBtn}
                className={`font-semibold hover:underline transition-colors ${
                  isDark
                    ? "text-blue-400 hover:text-blue-300"
                    : "text-blue-600 hover:text-blue-700"
                }`}
              >
                Clear Fields
              </button>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
