"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import RegisterForm from "./form";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import CustomImage from "../BlogComponents/CustomeImage";

export default function PopupForm({ isOpen, onClose }) {
  if (!isOpen) return null;

  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+1", // default country code
    // send `${countryCode including +}${phone}`  like this in phone key only
    phone: "",
    interest: "",
    budget: "",
    // source: "",
    message: "",
    // otherInterest: "",  //send other interest value in interest key only
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("fullName", formData.fullName || "");
    data.append("email", formData.email || "");
    data.append(
      "phone",
      formData.phone ? `${formData.countryCode}${formData.phone}` : ""
    );
    data.append("budget", formData.budget || "");
    // data.append("source", formData.source || "");
    data.append("message", formData.message || "");
    data.append(
      "interest",
      formData.interest === "Others"
        ? formData.otherInterest || ""
        : formData.interest || ""
    );

    fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}/api/client/submitClientInterestForm`,
      {
        method: "POST",
        body: data,
      }
    )
      .then((response) => {
        if (response.ok) {
          router.push("/thank-you");
          console.log("Form submitted successfully");
        } else {
          return response.json().then((errorData) => {
            console.error("Server responded with an error:", errorData);
            Swal.fire({
              icon: "error",
              title: "Error",
              text: "Form not submitted",
            });
          });
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error.message, error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error submitting form",
        });
      })
      .finally(() => {
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          interest: "",
          budget: "",
          // source: "",
          message: "",
          otherInterest: "",
          countryCode: "+1",
        });
      });
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    let newValue = value;

    if (id === "email") {
      // No specific validation or formatting for email
    } else if (id === "fullName") {
      // Allow only alphabetic characters and spaces
      newValue = value.replace(/[^a-zA-Z\s]/g, "");
    } else if (id === "interest") {
      // Handle special case for "Others" interest
      newValue = value.replace(/[^a-zA-Z0-9\s]/g, "");
      if (value === "Others") {
        setFormData({
          ...formData,
          interest: value,
          showCustomInterestInput: true,
        });
        return;
      } else {
        setFormData({
          ...formData,
          interest: value,
          showCustomInterestInput: false,
          otherInterest: "",
        });
        return;
      }
    }

    setFormData({
      ...formData,
      [id]: newValue,
    });
  };
  const countries = [
    { code: "+1", flag: "🇺🇸" }, // USA
    { code: "+91", flag: " 🇮🇳" },

    { code: "+44", flag: "🇬🇧" }, // UK
    { code: "+86", flag: "🇨🇳" }, // China
    { code: "+81", flag: "🇯🇵" }, // Japan
    { code: "+49", flag: "🇩🇪" }, // Germany
    { code: "+33", flag: "🇫🇷" }, // France
    { code: "+39", flag: "🇮🇹" }, // Italy
    { code: "+7", flag: "🇷🇺" }, // Russia
    { code: "+55", flag: "🇧🇷" }, // Brazil
    { code: "+52", flag: "🇲🇽" }, // Mexico
    { code: "+34", flag: "🇪🇸" }, // Spain
    { code: "+61", flag: "🇦🇺" }, // Australia
    { code: "+971", flag: "🇦🇪" }, // UAE
    { code: "+234", flag: "🇳🇬" }, // Nigeria
    // Add more countries as needed
  ];

  return (
    <>
      {/* {showPopup && ( */}
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50  w-full ">
        <div className="rounded-lg w-full h-fit flex items-center justify-center">
          {" "}
          <div
            className="px-2 py-4 sm:p-4 2xl:p-12 relative max-w-[800px]  h-fit rounded-lg"
            style={{
              background: `linear-gradient(180deg, #8BABFD -10.11%, #FFFFFF 62.56%)`,
            }}
          >
            {/* Close button */}

            <div className="flex flex-col gap-[10px] lg:gap-6   md:p-6">
              {" "}
              <div className="flex items-start justify-between w-full">
                {" "}
                <div className="text-center child-text flex flex-col gap-[10px] lg:gap-6">
                  <h2 className="font-bold ">Get In Touch</h2>
                  <p className="">
                    Ready to turn your software or app idea into reality? Fill
                    out the form below to get started with our expert
                    development team.
                  </p>
                </div>
                <button className=" text-3xl font-bold" onClick={onClose}>
                  &times;
                </button>
              </div>
              <div className="grid grid-cols-[2fr_3fr] sm:grid-cols-2  gap-2 sm:gap-4 bg-white p-2 sm:p-8 rounded-lg shadow-2xl w-full">
                {/* Contact Information */}
                <div className=" h-full sm:w-full lg:w-[240px]">
                  <img
                    src="/assets/popup-form-image.png"
                    className="w-full h-full sm:w-full lg:w-[240px]"
                  />
                </div>

                {/* Register Form */}
                <div className=" flex mx-auto  ">
                  <form
                    className="flex flex-col justify-between gap-2"
                    onSubmit={handleSubmit}
                  >
                    {/* <div className="grid "> */}
                    <div className="flex flex-col  rounded-lg">
                      {/* <label
                      htmlFor="fullName"
                      className="text-base md:text-lg text-gray-600"
                    >
                      Name
                    </label> */}
                      <input
                        type="text"
                        id="fullName"
                        placeholder="Name"
                        // placeholder="Enter your name"
                        required
                        className="input bg-inherit focus:outline-none focus:none  border-b-[1px] border-[#7EB6EB] px-2 py-1 "
                        value={formData.fullName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="flex flex-col  rounded-lg">
                      <input
                        type="email"
                        id="email"
                        placeholder="Enter your valid email address"
                        required
                        className="input bg-inherit focus:outline-none focus:none  border-b-[1px] border-[#7EB6EB] px-2 py-1 "
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                    {/* </div> */}

                    <div className="flex flex-col w-full rounded-lg">
                      <div className="flex items-center  w-full border-b-[1px] border-[#7EB6EB] ">
                        <select
                          id="countryCode"
                          name="countryCode"
                          className="input w-fit h-full bg-inherit focus:outline-none focus:none px-2 py-1"
                          // style={{ minWidth: "100px" }}
                          value={formData.countryCode}
                          onChange={handleChange}
                        >
                          {countries.map((country) => (
                            <option key={country.code} value={country.code}>
                              {`${country.code} ${country.flag}`}
                            </option>
                          ))}
                        </select>

                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          placeholder="Phone Number"
                          required
                          className="w-full borderbg-inherit focus:outline-none focus:border-blue-500 border-l-[1px] border-[#7EB6EB] px-2 py-1"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                    </div>

                    {formData.showCustomInterestInput ? (
                      <div className="flex flex-col  rounded-lg">
                        <input
                          type="text"
                          id="otherInterest"
                          placeholder="Enter your interest"
                          required
                          className="input bg-inherit focus:outline-none focus:none  w-full border-b-[1px] border-[#7EB6EB]   px-2 py-1"
                          value={formData.otherInterest}
                          onChange={handleChange}
                        />
                      </div>
                    ) : (
                      <div className="flex flex-col  rounded-lg">
                        <select
                          id="interest"
                          name="interest"
                          className="input bg-inherit focus:outline-none focus:none border-[#7EB6EB]  border-b-[1px]   px-2 py-1"
                          value={formData.interest}
                          onChange={handleChange}
                        >
                          <option value="" disabled hidden className="">
                            Choose Your Interest
                          </option>

                          <option
                            value="Mobile App Development"
                            className="text-black"
                          >
                            Mobile App Development
                          </option>
                          <option
                            value="Web Development"
                            className="text-black"
                          >
                            Web Development
                          </option>
                          <option value="Others" className="text-black">
                            Others
                          </option>
                        </select>
                      </div>
                    )}

                    <div className="flex flex-col  rounded-lg">
                      <textarea
                        id="message"
                        rows="2"
                        placeholder="Message"
                        className="input  focus:outline-none border-b-[1px] border-[#7EB6EB]  px-2 py-1 bg-[C8C8C8]"
                        value={formData.message}
                        onChange={handleChange}
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="text-sm lg:text-lg xl:text-xl  px-4 py-2 bg-[#7EB6EB] w-fit text-center rounded-md  text-white"
                    >
                      Send Message
                      {/* <FontAwesomeIcon icon={faArrowRight} className="ml-3" /> */}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* )} */}
    </>
  );
}
