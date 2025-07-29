import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signIn } from "next-auth/react";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
   const handleLogin = (e) => {
    e.preventDefault();
    if (email === "admin@example.com" && password === "123456") {
      navigate("/table-view");
    } else {
      alert("Invalid credentials");
    }
  };
  return (
    <div className="grid grid-cols-12 h-screen">
      <div className="col-span-12 md:col-span-6">
        <div className="flex items-center justify-center bg-white h-screen">
          <div className="w-full max-w-sm">
            <div>
              <h2 className="text-2xl font-bold mb-3">Welcome Back!</h2>
              <form className="w-full">
                <label>Email</label>
                <input
                  className="mb-2 p-2 pt-1 border rounded w-full"
                  type="text"
                  value={email}
                  onChange={(e)=>{setEmail(e.target.value)}}
                  placeholder="Username"
                />
                <label>Password</label>
                <input
                  className="mb-2 p-2 pt-1 border rounded w-full"
                  type="password"
                  value={password}
                  autoComplete=""
                  onChange={(e)=>{setPassword(e.target.value)}}
                />
                <input type="checkbox" />
                <label className="mx-2">Remember me</label>
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded w-full cursor-pointer"
                  type="submit"
                  // onClick={() => navigate("/table-view")}
                  onClick={(e)=> handleLogin(e)}
                >
                  Sign in
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 flex items-center justify-center text-gray-500">
          @ 2024 tentwenty
        </div>
      </div>

      <div className="col-span-12 md:col-span-6 flex items-center justify-center bg-blue-500 h-full px-4 md:px-10">
        <div>
          <h2 className="text-white font-bold text-2xl md:text-4xl">
            ticktock
          </h2>
          <p className="text-white mt-2 md:mt-4">
            introducing ticktok, our cutting-edge timesheet web application
            designed to revolutionize how you manage employee work hours. With
            ticktock, you can effortlessly track and monitor employee attendance
            and productivity from anywhere, anytime, using any
            internet-connected device.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
