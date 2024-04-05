import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import SingIn from "./login";
import Swal from "sweetalert2";
import Cookies from "js-cookie";

import axios from "axios";

const Register = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      navigate("/home");
    }
  }, [navigate]);

  const [userField, setUserField] = useState({
    name: "",
    email: "",
    password: "",
  });

  const changeUserFieldHandler = (e) => {
    setUserField({
      ...userField,
      [e.target.name]: e.target.value,
    });
  };

  const [loading, setLoading] = useState(false);

  const onSubmitChange = async (e) => {
    e.preventDefault();
    try {
      console.log(userField);
      const response = await axios.post(
        "http://127.0.0.1:8000/api/register",
        userField
      );
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Inscription réussie!",
        text: "Vous avez été inscrit avec succès.",
      });
      setLoading(true);
    } catch (err) {
      console.log("Something Wrong");
      if (err.response && err.response.data && err.response.data.errors) {
        const errors = Object.values(err.response.data.errors).join("<br>");
        Swal.fire({
          icon: "error",
          title: "Erreur de validation",
          html: errors,
        });
      }
    }
  };

  if (loading) {
    return <SingIn />;
  }

  return (
    <div>
      <section className="py-10 bg-[#7A3E3E] sm:py-16 lg:py-24">
        <div className="max-w-6xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:items-stretch md:grid-cols-2 gap-x-12 lg:gap-x-20 gap-y-10">
            <div className="flex flex-col justify-between lg:py-5">
              <div>
                <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:leading-tight lg:text-5xl">
                  It’s time to build something exciting!
                </h2>
                <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-white">
                  Welcome to FitFusion, your one-stop destination for achieving
                  your fitness goals and leading a healthier lifestyle. Whether
                  you a seasoned gym-goer or just starting your fitness journey,
                  FitFusion offers everything you need to succeed.
                </p>

                <img
                  className="relative z-10 max-w-xs mx-auto -mb-16 md:hidden"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line-mobile.svg"
                  alt=""
                />

                <img
                  className="hidden w-full translate-x-24 translate-y-8 md:block"
                  src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/curve-line.svg"
                  alt=""
                />
              </div>

              <div className="hidden md:mt-auto md:block">
                <div className="flex items-center">
                  <svg
                    className="w-6 h-6 text-yellow-400"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                </div>
              </div>
            </div>

            <div className="lg:pl-12">
              <div className="overflow-hidden bg-white rounded-md">
                <div className="p-6 sm:p-10">
                  <h3 className="text-3xl font-semibold text-black uppercase">
                    Register{" "}
                  </h3>
                  <p className="mt-4 text-base font-semibold text-gray-600 uppercase">
                    Create Account for the platform.
                  </p>

                  <form action="#" method="POST" className="mt-4">
                    <div className="space-y-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Your name{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="text"
                            id="name"
                            placeholder="Enter your full name"
                            name="name"
                            onChange={(e) => changeUserFieldHandler(e)}
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="text-base font-medium text-gray-900"
                        >
                          {" "}
                          Email address{" "}
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="text"
                            id="email"
                            placeholder="Enter your email address"
                            name="email"
                            onChange={(e) => changeUserFieldHandler(e)}
                            required
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                          />
                        </div>
                      </div>

                      <div>
                        <label
                          htmlFor="projectBrief"
                          className="text-base font-medium text-gray-900"
                        >
                          Password
                        </label>
                        <div className="mt-2.5 relative">
                          <input
                            type="password"
                            id="password"
                            placeholder="Enter your password"
                            name="password"
                            onChange={(e) => changeUserFieldHandler(e)}
                            required
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                          />
                          <input
                            type="password"
                            id="password_confirmation"
                            placeholder="Renter your password"
                            name="password_confirmation"
                            onChange={(e) => changeUserFieldHandler(e)}
                            required
                            className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-200 rounded-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 caret-orange-500"
                          />
                        </div>
                      </div>

                      <div>
                        <button
                          type="submit"
                          onClick={(e) => onSubmitChange(e)}
                          className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 bg-[#7A3E3E] border border-transparent rounded-md focus:outline-none hover:bg-orange-600 focus:bg-orange-600"
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                        Don’t have an account yet?{" "}
                        <a
                          onClick={() => navigate("/login")}
                          className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                        >
                          Login
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div className="md:hidden">
              <div className="flex items-center">{/* Your SVGs here */}</div>

              {/* <blockquote className="mt-6">
                                <p className="text-lg leading-relaxed text-white">You made it so simple. My new site is so much faster and easier to work with than my old site. I just choose the page, make the change and click save.</p>
                            </blockquote> */}

              <div className="flex items-center mt-8">
                {/* <img className="flex-shrink-0 object-cover w-10 h-10 rounded-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/contact/4/avatar.jpg" alt="" />
                                <div className="ml-4">
                                    <p className="text-base font-semibold text-white">Jenny Wilson</p>
                                    <p className="mt-px text-sm text-gray-400">Product Designer</p>
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Register;
