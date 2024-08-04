"use client";
import React, { useState } from "react";
import axios from "axios";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export default function ContactPage() {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await axios.post("/api", formData);

      if (res.status === 200) {
        setFormSubmitted(true);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleFormSubmit = () => {
    setFormSubmitted(!formSubmitted);
  };

  return (
    <div>
      {/*overlay*/}
      <div className="items-center justify-center bg-inherit bg-center bg-cover h-full">
        <div className="text-black">
          <h2 className="text-5xl font-bold">Contact</h2>
        </div>

        {formSubmitted ? (
          <div className="popup absolute p-14 text-xl rounded-lg bg-white z-20 shadow-lg">
            <h1 className="mb-4">Thank you for contacting us!</h1>
            <button onClick={handleFormSubmit} className="border-[2px] px-2">
              Exit
            </button>
          </div>
        ) : null}

        {/*Desktop Form*/}
        <div className="text-xl z-0">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl shadow-xl flex flex-col px-[2rem] py-[1rem] bg-[#301e0e] opacity-50 mt-8"
          >
            {/*Full Name */}
            <label htmlFor="name" className="text-white font-light dark:text-gray-50">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-gray-50 mb-5"
            />

            {/*Email */}
            <label htmlFor="email" className="text-white font-light mt-5">
              E-mail<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-gray-50 mb-5"
            />

            {/*Subject */}
            <label htmlFor="subject" className="text-white font-light mt-5 dark:text-gray-50">
              Subject<span className="text-red-500">*</span>
            </label>
            <input
              type="subject"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              required
              className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-gray-50 mb-5"
            />

            {/*Message */}
            <label htmlFor="message" className="text-white font-light mt-5 dark:text-gray-50">
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-transparent border-b py-3 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-white font-light text-gray-50 mb-5"
            ></textarea>

            <div className="flex flex-row items-center justify-start">
              <button
                type="submit"
                className="px-10 mt-8 py-2 ring-2 ring-white text-white rounded-md text-lg flex flex-row items-center"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
