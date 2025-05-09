import React from "react";
import "../styles/Auth.css";
import CustomTextInput from "../components/FormComponents/CustomTextInput";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useMutation } from "@tanstack/react-query";
import { notify } from "../utils/notification";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const method = useForm();
  const navigate = useNavigate();
  const signupMutation = useMutation({
    mutationFn: async (data) => {
      try {
        const response = await axios.post("http://localhost:5000/api/auth/signup", data);
        if(response.data.success === false){
                 notify("error", response.data.message);
               }
               else{
                 notify("success", response.data.message);
                 localStorage.setItem("token", response.data.token);
                 navigate("/login");
               }
      } catch (error) {
        console.error("Error submitting form:", error);
        notify("error", error.response.data.message || error.message);
      }
    },
  });

  const onsubmit = (data) =>{
    signupMutation.mutate(data);
  }
  return (
    <div>
      <div class="login-container">
        <div class="screen">
          <div class="screen__content">
            <form class="auth" onSubmit={method.handleSubmit(onsubmit)}>
              <div class="auth__field">
                <i class="auth__icon fas fa-user"></i>
                <CustomTextInput
                  name="email"
                  label="Email"
                  placeHolder="Enter your email"
                  control={method.control}
                  rules={{ required: "Email is required" }}
                />
              </div>
              <div class="auth__field">
                <i class="auth__icon fas fa-lock"></i>
                <CustomTextInput
                  name="password"
                  label="Password"
                  type="password"
                  placeHolder="Enter your password"
                  control={method.control}
                  rules={{ required: "Password is required" }}
                />
                <CustomTextInput
                  name="cpassword"
                  label="Confirm Password"
                  type="password"
                  placeHolder="Confirm your password"
                  control={method.control}
                  rules={{ required: "Password is required" }}
                />
              </div>
              <button class="button auth__submit">
                <span class="button__text">Sign Up</span>
                <i class="button__icon fas fa-chevron-right"></i>
              </button>
            </form>
          </div>
          <div class="screen__background">
            <span class="screen__background__shape screen__background__shape4"></span>
            <span class="screen__background__shape screen__background__shape3"></span>
            <span class="screen__background__shape screen__background__shape2"></span>
            <span class="screen__background__shape screen__background__shape1"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
