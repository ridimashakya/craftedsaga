import React, { useState } from "react";
import image from "../assets/art1_1.jpeg";
import { useNavigate } from "react-router-dom";
import axiosInstance from "../utils/axios";

const Register = () => {
  const [form, setForm] = useState({
    email: "",
    password: "",
    isChecked: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setForm((prevData) => ({ ...prevData, [name]: checked }));
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    
    try{
      const response = await axiosInstance.post("/auth/register", form);
      navigate("/login", {replace: true});
    } catch(error){
      console.log(error.response.message);
    }

  };

  const navigate = useNavigate();

  return (
    <div className="bg-customColor w-full h-screen pt-16 overflow-hidden">
      <div className="grid grid-cols-[6fr_6fr] ml-10 mr-10 h-[600px] ">
        <form
          onSubmit={(e) => handleSignup(e)}
          className="flex flex-col justify-center items-center gap-4 w-full bg-white relative"
        >
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-4/5">
            <h1 className="text-3xl text-amber-900 py-2">REGISTER</h1>
            <div className=" flex flex-col border-2 border-customColor rounded-md p-5 px-10 ">
              <div className="flex justify-between items-center px-1">
                <div className="flex flex-col ">
                  <label htmlFor="first_name" className="py-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="border-2 border-customColor rounded-md p-3 "
                    name="firstname"
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="flex flex-col">
                  <label htmlFor="last_name" className="py-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="border-2 border-customColor rounded-md p-3 "
                    name="lastname"
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <label htmlFor="email" className="py-1">
                Email
              </label>
              <input
                type="email"
                className="border-2 border-customColor rounded-md p-3 "
                name="email"
                onChange={handleChange}
                required
              />
              <label htmlFor="phone" className="py-1">
                Phone Number
              </label>
              <input
                type="text"
                className="border-2 border-customColor rounded-md p-3 "
                name="phone"
                onChange={handleChange}
                required
              />
              <label htmlFor="password" className="py-1">
                Password
              </label>
              <input
                type="password"
                placeholder="Type your password"
                className="border-2 border-customColor rounded-md p-3 "
                name="password"
                onChange={handleChange}
                required
              />

              <button
                type="submit"
                className=" bg-orange text-white border-2 border-orange rounded-md w-full py-2 mt-5"
              >
                Sign in
              </button>
              <hr className="w-full border-customColor border-t-2 mt-5" />
              <span className="text-center p-5">Already have an account?</span>
              <button
                className=" bg-customColor border-1 border-customColor text-black rounded-md w-full py-2 mt-[-10px]"
                onClick={() => {
                  navigate("/log");
                }}
              >
                Log in
              </button>
            </div>
          </div>
        </form>

        <img src={image} alt="image" className="h-[84dvh] object-cover" />
      </div>
    </div>
  );
};

export default Register;
