import React, { useState } from 'react';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
    e.preventDefault();
    await signInWithEmailAndPassword(auth, email, password);
    alert("Login successful");
  };

  return (
    <div className="flex justify-center mt-20">
      <form className="bg-white p-8 shadow-lg rounded-lg" onSubmit={loginUser}>
        <h2 className="text-2xl font-bold mb-4">Login</h2>

        <input className="border p-2 w-full mb-4" type="email" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} required />

        <input className="border p-2 w-full mb-4" type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} required />

        <button className="bg-green-600 text-white px-4 py-2 rounded">Login</button>
      </form>
    </div>
  );
}
