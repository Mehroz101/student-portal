import React from "react";
import PopupForm from "../components/PopupForm";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { notify } from "../utils/notification";

const Profile = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["getuserdetail"],
    queryFn: async () => {
      try {
        const token = localStorage.getItem("usertoken");
        const config = {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        };
        if (!token) {
          return notify("error", "User not logged in");
        }
        const response = await axios.get(
          "http://localhost:5000/api/user/getuserdetail",
          config
        );
        console.log(response.data.data);
        return response.data;
      } catch (error) {
        console.log(error.message);
      }
    },
  });
  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <PopupForm data={data} />
      )}
    </div>
  );
};

export default Profile;
