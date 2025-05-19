import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedUserRoute = ({ element }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("usertoken");
    if (token) {
      setIsAuthenticated(true); // User is authenticated
    } else {
      navigate("/userlogin"); // Redirect to login if no token
    }
  }, [navigate]);

  if (!isAuthenticated) {
    return null; // Don't render the protected component
  }

  return element; // Render protected component if authenticated
};

export default ProtectedUserRoute;
