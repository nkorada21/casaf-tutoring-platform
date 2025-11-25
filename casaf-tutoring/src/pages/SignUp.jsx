import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../firebase";
import { doc, setDoc } from "firebase/firestore";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();
    
    if(password.length < 6){
      alert("Password must be at least 6 characters.");
      return;
    }

    const userCredential = await createUserWithEmailAndPassword(auth, email, password);

    await setDoc(doc(db, "users", userCredential.user.uid), {
      email: email,
      role: "student"
    });

    alert("Account created successfully!");
  };

  return (
    <div className="flex justify-center mt-20">
      <form className="bg-white p-8 shadow-lg rounded-lg" onSubmit={handleSignup}>
        <h2 className="text-2xl font-bold mb-4">Create Account</h2>

        <input className="border p-2 w-full mb-4" type="email" placeholder="Email"
          onChange={(e) => setEmail(e.target.value)} required />

        <input className="border p-2 w-full mb-4" type="password" placeholder="Password"
          onChange={(e) => setPassword(e.target.value)} required />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Sign Up
        </button>
      </form>
    </div>
  );
}
