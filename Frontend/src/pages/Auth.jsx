import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Input from "../components/Input";
import Button from "../components/Button";

export default function Auth() {
  const [isSignup, setIsSignup] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <motion.div 
        className="bg-white p-6 rounded-lg shadow-md w-96"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-2xl font-bold text-center mb-4">
          {isSignup ? "Sign Up" : "Login"} to LabOnGo
        </h1>
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            if (isSignup) {
              setIsSignup(false);
            } else {
              navigate("/dashboard");
            }
          }}
          className="space-y-4"
        >
          {isSignup && <Input type="text" placeholder="Full Name" />}
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Button type="submit">{isSignup ? "Sign Up" : "Login"}</Button>
        </form>
        <p className="text-center mt-4">
          {isSignup ? "Already have an account?" : "Don't have an account?"}{" "}
          <button className="text-blue-600 underline" onClick={() => setIsSignup(!isSignup)}>
            {isSignup ? "Login" : "Sign Up"}
          </button>
        </p>
      </motion.div>
    </div>
  );
}
