import React from "react";
import { useEffect, useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import axios from "axios";
import Cookies from "js-cookie";

const ReasonsToJoinSection = () => {
  const navigate = useNavigate();
  const [userProgresses, setUserProgress] = useState(null);
  const fetchProgress = async () => {
    try {
      const token = Cookies.get("token");
      console.log(token);

      if (!token) {
        navigate("/");
        return;
      }

      const response = await axios.get("http://127.0.0.1:8000/api/progress", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(response.data.data);

      setUserProgress(response.data.data);
    } catch (error) {
      if (error.response && error.response.status === 401) {
        navigate("/");
      } else {
        console.error("Error fetching user details:", error);
      }
    }
  };

  useEffect(() => {
    fetchProgress();
  }, []);

  return (
    <section className="reasons-to-join-section bg-stone-950 py-20 px-4 md:px-8">
      <div className="reasons-container max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-[#cef15c]">
          Your Progress
        </h2>
        <div className="reasons-grid grid grid-cols-1 md:grid-cols-3 gap-8 ">
          {userProgresses &&
            userProgresses.map((userProgress) => (
              <div
                key={userProgress.id}
                className="reason-card bg-black rounded-md p-6 shadow-md shadow-[#202415]"
                style={{ boxShadow: "0px 0px 25px 0px #202415" }}
              >
                <div className="reason-icon mb-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-[#cef15c]"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-2 text-lime-200">
                  Progress {userProgress.id}
                </h3>
                <p className="text-gray-200 font-semibold">
                  Weight:
                  <span className="text-gray-300 font-normal">
                    {userProgress.weight} Kg
                  </span>
                </p>
                <p className="text-gray-200 font-semibold">
                  Height:
                  <span className="text-gray-300 font-normal">
                    {userProgress.height} m
                  </span>
                </p>
                <p className="text-gray-200 font-semibold">
                  Measurements:
                  <span className="text-gray-300 font-normal">
                    {userProgress.measurements}
                  </span>
                </p>
                <p className="text-gray-200 font-semibold">
                  Performance:{" "}
                  <span className="text-gray-300 font-normal">
                    {userProgress.performance}
                  </span>
                </p>
                <br />
                <div className="flex gap-2">
                  <button className="bg-lime-300 text-lime-800 font-bold py-2 px-4 rounded-md transition-colors duration-300">
                    Edit
                  </button>
                  <button className="bg-[#f1785c] text-red-700 font-bold py-2 px-4 rounded-md transition-colors duration-300">
                    Delete
                  </button>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ReasonsToJoinSection;
