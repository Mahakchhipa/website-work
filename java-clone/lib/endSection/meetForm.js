"use client";
// MeetingForm.js

import { useState } from "react";
import Swal from "sweetalert2";

const MeetingForm = ({ selectedDate, selectedTime, selectedTimeZone }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    guestEmails: [],
    additionalNotes: "",
  });

  const handleAddGuestClick = () => {
    setFormData({
      ...formData,
      guestEmails: [...formData.guestEmails, ""],
      showGuestInput: true,
    });
  };

  const handleGuestEmailChange = (index, value) => {
    const updatedGuestEmails = [...formData.guestEmails];
    updatedGuestEmails[index] = value;
    setFormData({
      ...formData,
      guestEmails: updatedGuestEmails,
    });
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://backend-project-dsgf.onrender.com/submitmeetingform",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Meeting form submitted successfully");
        Swal.fire({
          icon: "success",
          title: "Success",
          text: "Form submitted successfully!",
        });

        setFormData({
          fullName: "",
          email: "",
          guestEmails: [],
          additionalNotes: "",
        });
      } else {
        console.error("Failed to submit meeting form");
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Form not submitted",
        });
      }
    } catch (error) {
      console.error("Error submitting meeting form:", error);
    }
  };

  return (
    <section>
      <h2 className="font-bold text-lg mb-5">Enter Details</h2>
      <form
        autoComplete="off"
        autoCorrect="off"
        noValidate
        className="border border-gray-300 p-6 rounded-lg max-w-[600px]"
        onSubmit={handleFormSubmit}
      >
        <div>
          <fieldset>
            <div className="mb-4">
              <label htmlFor="full_name_input" className="block font-semibold">
                Name *
              </label>
              <input
                className="input border border-gray-300 rounded-md p-2 w-full"
                type="text"
                maxLength="155"
                name="full_name"
                required
                id="full_name_input"
                autoComplete="name"
                aria-invalid="false"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email_input" className="block font-semibold">
                Email *
              </label>
              <input
                className="input border border-gray-300 rounded-md p-2 w-full"
                type="email"
                maxLength="255"
                name="email"
                required
                id="email_input"
                autoComplete="email"
                aria-invalid="false"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
            </div>
          </fieldset>

          <div className={`mb-4 ${formData.showGuestInput ? "" : "hidden"}`}>
            <fieldset>
              {formData.showGuestInput && (
                <div
                  className={`mb-4 ${formData.showGuestInput ? "" : "hidden"}`}
                >
                  <fieldset>
                    <label
                      htmlFor="invitee_guest_input"
                      className="block font-semibold"
                    >
                      Guest Email(s)
                    </label>
                    {formData.guestEmails.map((guestEmail, index) => (
                      <input
                        key={index}
                        size="1"
                        autoComplete="off"
                        spellCheck="false"
                        type="email"
                        id={`invitee_guest_input_${index}`}
                        aria-invalid="false"
                        aria-expanded="true"
                        aria-controls={`invitee_guest_input_${index}`}
                        aria-label="Guest Email(s)"
                        role="combobox"
                        className={`input border border-gray-300 rounded-md p-2 w-full`}
                        value={guestEmail}
                        onChange={(e) =>
                          handleGuestEmailChange(index, e.target.value)
                        }
                      />
                    ))}
                    <small className="text-gray-500 ">
                      Notify up to 10 additional guests of the scheduled event.
                    </small>
                  </fieldset>
                </div>
              )}
            </fieldset>
          </div>
          <div className="mb-4">
            {!formData.showGuestInput && (
              <div className="mb-4">
                <button
                  type="button"
                  onClick={handleAddGuestClick}
                  className="button bg-blue-500 text-white px-4 py-2 rounded-md"
                >
                  Add Guest
                </button>
              </div>
            )}
          </div>
          <fieldset className="mb-4">
            <div>
              <label className="block font-semibold">
                Please share anything that will help prepare for our meeting.
              </label>
              <textarea
                className="textarea border border-gray-300 rounded-md p-2 w-full"
                maxLength="10000"
                name="additional_notes"
                autoComplete="off"
                aria-invalid="false"
                value={formData.additionalNotes}
                onChange={(e) =>
                  setFormData({ ...formData, additionalNotes: e.target.value })
                }
              ></textarea>
            </div>
          </fieldset>
        </div>
        <div className="text-gray-500">
          By proceeding, you confirm that you have read and agree to{" "}
          <a target="_blank" rel="related">
            Techanic Infotech Terms of Use
          </a>{" "}
          and{" "}
          <a target="_blank" rel="related">
            Privacy Notice.
          </a>
        </div>
        <button
          type="submit"
          className="mt-5 button bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Schedule Event
        </button>
      </form>
    </section>
  );
};

export default MeetingForm;
