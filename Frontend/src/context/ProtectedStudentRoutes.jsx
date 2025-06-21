import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const ProtectedStudentRoute = ({ element }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  useEffect(() => {
    const isVerified = localStorage.getItem("isVerified");
    if (isVerified == "true") {
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

export default ProtectedStudentRoute;
