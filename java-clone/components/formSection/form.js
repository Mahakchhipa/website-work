"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";

export default function RegisterForm() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    countryCode: "+1 🇺🇸", // default country code
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
          countryCode: "+1 🇺🇸",
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
    { code: "+91", flag: "🇮🇳" }, // India
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
    { code: "+20", flag: "🇪🇬" }, // Egypt
    { code: "+27", flag: "🇿🇦" }, // South Africa
    { code: "+54", flag: "🇦🇷" }, // Argentina
    { code: "+64", flag: "🇳🇿" }, // New Zealand
    { code: "+65", flag: "🇸🇬" }, // Singapore
    { code: "+63", flag: "🇵🇭" }, // Philippines
    { code: "+60", flag: "🇲🇾" }, // Malaysia
    { code: "+66", flag: "🇹🇭" }, // Thailand
    { code: "+82", flag: "🇰🇷" }, // South Korea
    { code: "+46", flag: "🇸🇪" }, // Sweden
    { code: "+47", flag: "🇳🇴" }, // Norway
    { code: "+41", flag: "🇨🇭" }, // Switzerland
    { code: "+90", flag: "🇹🇷" }, // Turkey
    { code: "+351", flag: "🇵🇹" }, // Portugal
    { code: "+48", flag: "🇵🇱" }, // Poland
    { code: "+31", flag: "🇳🇱" }, // Netherlands
    { code: "+32", flag: "🇧🇪" }, // Belgium
    { code: "+30", flag: "🇬🇷" }, // Greece
    { code: "+351", flag: "🇵🇹" }, // Portugal
    { code: "+47", flag: "🇳🇴" }, // Norway
    { code: "+64", flag: "🇳🇿" }, // New Zealand
    { code: "+64", flag: "🇦🇹" }, // Austria
    { code: "+962", flag: "🇯🇴" }, // Jordan
    { code: "+1", flag: "🇨🇦" }, // Canada
    { code: "+27", flag: "🇿🇦" }, // South Africa
    { code: "+351", flag: "🇲🇴" }, // Macao
  
    // Add more countries as needed
  ];
  
  // const countries = [
  //   { code: "+1", flag: "🇺🇸 USA" },
  //   { code: "+44", flag: "🇬🇧 UK" },
  //   { code: "+91", flag: "🇮🇳 India" },
  //   { code: "+86", flag: "🇨🇳 China" },
  //   { code: "+81", flag: "🇯🇵 Japan" },
  //   { code: "+49", flag: "🇩🇪 Germany" },
  //   { code: "+33", flag: "🇫🇷 France" },
  //   { code: "+39", flag: "🇮🇹 Italy" },
  //   { code: "+7", flag: "🇷🇺 Russia" },
  //   { code: "+55", flag: "🇧🇷 Brazil" },
  //   { code: "+52", flag: "🇲🇽 Mexico" },
  //   { code: "+34", flag: "🇪🇸 Spain" },
  //   { code: "+61", flag: "🇦🇺 Australia" },
  //   { code: "+971", flag: "🇦🇪 UAE" },
  //   { code: "+234", flag: "🇳🇬 Nigeria" },
  //   // Add more countries as needed
  // ];

  return (
    <div className=" flex mx-auto lg:basis-[45%]">
      <div className=" page-text rounded-xl py-3  w-full flex flex-col gap-[10px] md:gap-4">
        <h3 className="font-bold   text-[#5C5C5C]">
          Request A Quote — let’s work together.
        </h3>
        <p className="font-normal   text-[#363636]">
          Got a project? Drop me a line if you want to work together on
          something exciting. Or do you need our help? Feel free to contact us.
        </p>
        <form className="space-y-4" onSubmit={handleSubmit}>
          {/* <div className="grid "> */}
            <div className="flex flex-col  rounded-lg">
              <label
                htmlFor="fullName"
                className="text-base md:text-lg text-gray-600"
              >
                Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="fullName"
                // placeholder="Enter your name"
                required
                className="input bg-inherit focus:outline-none focus:none  border-[1px] border-[#B7B7B7] px-2 py-1 rounded-[3px]"
                value={formData.fullName}
                onChange={handleChange}
              />
            </div>
            <div className="flex flex-col  rounded-lg">
              <label
                htmlFor="email"
                className="text-base md:text-lg text-gray-600"
              >
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter your valid email address"
                required
                className="input bg-inherit focus:outline-none focus:none  border-[1px] border-[#B7B7B7] px-2 py-1 rounded-[3px]"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
          {/* </div> */}

          <div className="flex flex-col w-full rounded-lg">
            <label
              htmlFor="phone"
              className="text-base md:text-lg text-gray-600"
            >
              Phone Number <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border-[1px] w-full border-[#B7B7B7]  rounded-[3px]">
              <select
                id="countryCode"
                name="countryCode"
                className="input w-fit h-full bg-inherit focus:outline-none focus:none px-2 py-1"
                style={{ minWidth: "100px" }}
                value={formData.countryCode}
                onChange={handleChange}
              >
                {countries.map((country,index) => (
                  <option  key={`${country.code}-${index}`} value={country.code}>
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
                className="w-full borderbg-inherit focus:outline-none focus:border-blue-500 border-l-[1px] border-[#B7B7B7] px-2 py-1"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
          </div>

          {formData.showCustomInterestInput ? (
            <div className="flex flex-col  rounded-lg">
              <label
                htmlFor="customInterest"
                className="text-base md:text-lg text-gray-600"
              >
                Interest <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                id="otherInterest"
                placeholder="Enter your interest"
                required
                className="input bg-inherit focus:outline-none focus:none  w-full border-[#B7B7B7]  border-[1px]  rounded-[3px] px-2 py-1"
                value={formData.otherInterest}
                onChange={handleChange}
              />
            </div>
          ) : (
            <div className="flex flex-col  rounded-lg">
              <label
                htmlFor="interest"
                className="text-base md:text-lg text-gray-600"
              >
                Interest <span className="text-red-500">*</span>
              </label>
              <select
                id="interest"
                name="interest"
                className="input bg-inherit focus:outline-none focus:none border-[#B7B7B7]  border-[1px]  rounded-[3px] px-2 py-1"
                value={formData.interest}
                onChange={handleChange}
              >
                <option value="" disabled hidden className="">
                  Choose Your Interest
                </option>

                <option value="Mobile App Development" className="text-black">
                  Mobile App Development
                </option>
                <option value="Web Development" className="text-black">
                  Web Development
                </option>
                <option value="Others" className="text-black">
                  Others
                </option>
              </select>
            </div>
          )}

          <div className="flex flex-col  rounded-lg">
            <label
              htmlFor="budget"
              className="text-base md:text-lg text-gray-600"
            >
              Budget
            </label>
            <input
              id="budget"
              name="budget"
              placeholder="Enter your interest"
              className="input bg-inherit focus:outline-none   border-[#B7B7B7]  border-[1px]  rounded-[3px] px-2 py-1"
              value={formData.budget}
              onChange={handleChange}
            />
          </div>

          {/* <div className="flex flex-col  rounded-lg">
            <label
              htmlFor="source"
              className="text-base md:text-lg text-gray-600"
            >
              How Did You Find Us
            </label>
            <input
              type="text"
              id="source"
              className="input bg-inherit focus:outline-none focus:border-transparent "
              value={formData.source}
              onChange={handleChange}
            />
          </div> */}

          <div className="flex flex-col  rounded-lg">
            <label
              htmlFor="message"
              className="text-base md:text-lg text-gray-600"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="2"
              placeholder="Message"
              className="input bg-[#F7F7F7] focus:outline-none  border-[#B7B7B7]  border-[1px]  rounded-[3px] px-2 py-1 bg-[C8C8C8]"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>

          <button
            type="submit"
            className="text-sm lg:text-lg xl:text-xl  px-4 py-2 bg-[#1049DB] w-full text-center rounded-md  text-white"
          >
            Submit
            {/* <FontAwesomeIcon icon={faArrowRight} className="ml-3" /> */}
          </button>
        </form>
      </div>
    </div>
  );
}

{
  /* <FormControl fullWidth  sx={{height: '50px'}}>
<InputLabel id="interest-label" sx={{height: '30px'}}>
  Choose Your Interest
</InputLabel>
<Select
  labelId="interest-label"
  id="interest"
  value={formData.interest}
  label="Choose Your Interest"
  onChange={handleChange}
  sx={{
    fontSize: { xs: "12px", md: "16px" }, // Responsive font size
  }}
>
  <MenuItem value="" disabled>
    <em>Choose Your Interest</em>
  </MenuItem>
  <MenuItem value="Mobile App Development">
    Mobile App Development
  </MenuItem>
  <MenuItem value="Web Development">Web Development</MenuItem>
  <MenuItem value="Others">Others</MenuItem>
</Select>
</FormControl> */
}
