import React, { useState } from "react";
import "../styles/UserLogin.css";
import loginImage from "../assets/bannerImg.png"; // Use your own image path
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { notify } from "../utils/notification";
import { useNavigate } from "react-router-dom";

const UserLogin = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <div className="auth-container">
      
      <div className="auth-left">
        <div className="auth-box" >
        <div className="FAQ">
          <button
            className="faq-link-btn"
            onClick={() => window.open("/faq", "_blank")}
          >
            FAQ
          </button>
          <span
            className="Homelogin"
            onClick={() => window.location.href = "/"}
            tabIndex={0}
            aria-label="Go to Home"
            role="button"
          >
            🏠
          </span>
        </div> 
          <h2>{isLogin ? "Welcome Back" : "Create Account"}</h2>
          <p className="subheading">
            {isLogin
              ? "Please sign in to your account"
              : "Join us by creating your account"}
          </p>

          {isLogin ? <LoginForm /> : <RegisterForm />}

          <p className="toggle-auth">
            {isLogin ? (
              <>
                <span>Create Account |</span>{" "}
                <span onClick={() => setIsLogin(false)}>Register</span>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <span onClick={() => setIsLogin(true)}>Login</span>
              </>
            )}
          </p>
        </div>
      </div>

      <div className="auth-right">
        <img src={loginImage} alt="Auth Visual" />
      </div>
    </div>
  );
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const loginMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(
        "http://localhost:5000/api/auth/userlogin",
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        notify("success", data.message);
        localStorage.setItem("usertoken", data.token);
        navigate("/");
      }
    },
    onError: (error) => {
      notify("error", error.response.data.message);
    },
  });
  const onSubmit = (data) => {
    console.log("Login Data:", data);
    loginMutation.mutate(data);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <label>Email</label>
      <input
        type="email"
        {...register("email", { required: "Email is required" })}
        placeholder="Enter your email"
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <label>Password</label>
      <input
        type="password"
        {...register("password", { required: "Password is required" })}
        placeholder="Enter your password"
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <button type="submit">Login</button>
    </form>
  );
};
const RegisterForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const signupMutation = useMutation({
    mutationFn: async (data) => {
      const response = await axios.post(
        "http://localhost:5000/api/auth/usersignup",
        data
      );
      return response.data;
    },
    onSuccess: (data) => {
      console.log(data, "responsed data");
      if (data.success == true) {
        console.log("entered", data.message);
        notify("success", data.message);
        setIsLogin(true);
      }
    },
    onError: (error) => {
      notify("error", error.response.data.message);
    },
  });
  const onSubmit = (data) => {
    console.log("Registration Data:", data);
    signupMutation.mutate(data);
  };

  return (
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <label>Name</label>
      <input
        {...register("name", { required: "Name is required" })}
        placeholder="Enter your name"
      />
      {errors.name && <p className="error">{errors.name.message}</p>}

      <label>Email</label>
      <input
        type="email"
        {...register("email", { required: "Email is required" })}
        placeholder="Enter your email"
      />
      {errors.email && <p className="error">{errors.email.message}</p>}

      <label>Password</label>
      <input
        type="password"
        {...register("password", {
          required: "Password is required",
        })}
        placeholder="Create a password"
      />
      {errors.password && <p className="error">{errors.password.message}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default UserLogin;
