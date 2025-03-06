"use client";
import { useRouter } from 'next/navigation';
import { useState } from "react";
import Swal from "sweetalert2";

export default function Careers() {
  const router = useRouter();
  
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    job_category: "",
    year: "",
    month: "",
    attachment: null,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Validation for name: allow only alphabetic characters and spaces
    if (name === "fullname") {
      const newValue = value.replace(/[^a-zA-Z\s]/g, "");
      setFormData({
        ...formData,
        [name]: newValue,
      });
    } else if (name === "phone") {
      const newValue = value.replace(/\D/g, "").slice(0, 10);
      setFormData({
        ...formData,
        [name]: newValue,
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    setFormData({
      ...formData,
      attachment: file,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("fullName", formData.fullname);
    data.append("email", formData.email);
    data.append("phone", formData.phone);
    data.append("jobCategory", formData.job_category);
    data.append("year", formData.year);
    data.append("month", formData.month);
    data.append("attachment", formData.attachment);

    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/api/career/submitCareerForm`, {
      method: "POST",
      body: data,
    })
      .then((response) => {
        if (response.ok) {
          document.getElementById("attachment").value = "";
          router.push('/thank-you');
        } else {
          throw new Error("Failed to submit");
        }
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Error submitting form",
        });
      })
      .finally(() => {
        setFormData({
          fullname: "",
          email: "",
          phone: "",
          job_category: "",
          year: "",
          month: "",
          attachment: null,
        });
      });
  };

  const yearOptions = Array.from({ length: 12 }, (_, index) => (
    <option key={index} value={index}>
      {index}
    </option>
  ));

  const monthOptions = Array.from({ length: 12 }, (_, index) => (
    <option key={index} value={index}>
      {index}
    </option>
  ));

  return (
    <>
      <div className="flex items-center justify-center w-full h-[550px] bg-gradient-to-r from-[#3d3e3e] via-[#707171] to-[#8d8d8f]">
        <div className="text-start lg:text-center text-white md:max-w-[1000px] m-auto p-4">
          <h1 className="text-3xl lg:text-5xl font-bold">
            Join Our Innovative Team
          </h1>
          <p className="lg:text-xl text-lg font-normal mt-4">
            At Techanic Infotech, we're always looking for passionate and
            talented individuals to join our dynamic team. If you're eager to
            work on cutting-edge app and software development projects and
            thrive in a collaborative environment, we want to hear from you.
          </p>
        </div>
      </div>

      <div className="bg-[#eeeeee] w-full lg:py-[40px] py-[20px]">
        <form
          id="applyform"
          className="p-8 bg-white shadow-xl rounded-md max-w-[650px] mx-auto"
          onSubmit={handleSubmit}
        >
          <h3 className="text-xl font-bold mb-3">Apply now</h3>
          <div className="form-group mb-4">
            <label htmlFor="fullname">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter full name"
              className="input form-control w-full p-3 border border-gray-300 rounded focus:outline-none"
              value={formData.fullname}
              onChange={handleInputChange}
              required
            />
            <div
              className="display-error text-red-500 mt-2"
              id="nameError"
              style={{ display: "none" }}
            >
              Please enter your full name.
            </div>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="email">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter email"
              className="input form-control w-full p-3 border border-gray-300 rounded focus:outline-none"
              value={formData.email}
              onChange={handleInputChange}
              required
            />
            <div
              className="display-error text-red-500 mt-2"
              id="emailError"
              style={{ display: "none" }}
            >
              Please enter a valid email.
            </div>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="phone">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              id="phone"
              name="phone"
              placeholder="Enter phone number"
              className="form-control input w-full p-3 border border-gray-300 rounded focus:outline-none"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
            <div
              className="display-error text-red-500 mt-2"
              id="phoneError"
              style={{ display: "none" }}
            >
              Please enter a valid phone number.
            </div>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="job_category">
              Job Category <span className="text-red-500">*</span>
            </label>
            <select
              id="job_category"
              name="job_category"
              className="form-control input w-full p-3 border border-gray-300 rounded focus:outline-none appearance-none text-[#4b4949]"
              value={formData.job_category}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled hidden>
                Select job category
              </option>
              <option value="nodejs-developer">Node.js Developer</option>
              <option value="seo-executive">SEO Executive</option>
              <option value="seo-intern">SEO Intern</option>
            </select>
            <div
              className="display-error text-red-500 mt-2"
              id="jobError"
              style={{ display: "none" }}
            >
              Please select a job category.
            </div>
          </div>
          <div className="row mb-4">
            <div className="col-md-12 mb-2">
              <label className="block text-gray-700 font-semibold">
                Experience <span className="text-red-500">*</span>
              </label>
            </div>
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="col-md-6 w-full">
                <label htmlFor="year">Years</label>
                <select
                  id="year"
                  name="year"
                  className="form-control input w-full p-3 border border-gray-300 rounded focus:outline-none text-[#4b4949]"
                  value={formData.year}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled hidden>
                    Select years of experience
                  </option>
                  {yearOptions}
                </select>
                <div
                  className="display-error text-red-500 mt-2"
                  id="yearError"
                  style={{ display: "none" }}
                >
                  Please select years of experience.
                </div>
              </div>
              <div className="col-md-6 w-full">
                <label htmlFor="month">
                  Months <span className="text-red-500">*</span>
                </label>
                <select
                  id="month"
                  name="month"
                  className="form-control input w-full p-3 border border-gray-300 rounded focus:outline-none text-[#4b4949]"
                  value={formData.month}
                  onChange={handleInputChange}
                  required
                >
                  <option value="" disabled hidden>
                    Select months of experience
                  </option>
                  {monthOptions}
                </select>
                <div
                  className="display-error text-red-500 mt-2"
                  id="monthError"
                  style={{ display: "none" }}
                >
                  Please select months of experience.
                </div>
              </div>
            </div>
          </div>
          <div className="form-group mb-4">
            <label htmlFor="attachment">
              Resume <span className="text-red-500">*</span>
            </label>
            <input
              type="file"
              id="attachment"
              name="attachment"
              className="form-control input w-full p-3 border border-gray-300 rounded focus:outline-none"
              onChange={handleFileInputChange}
              required
            />
            <div
              className="display-error text-red-500 mt-2"
              id="fileError"
              style={{ display: "none" }}
            >
              Please upload your resume.
            </div>
          </div>
          <div className="px-1 py-1 bg-blue-600 rounded-full w-fit   transition-transform duration-300 transform hover:scale-110 mx-auto ">
            <button
              type="submit"
              id="btnSubmit"
              className="quote-shadow text-base 2xl:text-lg  px-10 py-3 buttonGradient border-2 border-[#FFFFFF] rounded-full text-white "
            >
              APPLY
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
