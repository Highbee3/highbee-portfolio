"use client";

import { useState, useEffect } from "react";
import { IoHome } from "react-icons/io5";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";
import emailjs from "emailjs-com";
import React from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSent(false);

    emailjs
      .send(
        "service_4681fep", // 🔁 Replace this
        "template_g9k4elv", // 🔁 Replace this
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          subject: formData.subject,
          message: formData.message,
        },
        "-TbH74A12g5Ur5Xoj" // 🔁 Replace this
      )
      .then(
        () => {
          setSent(true);
          setLoading(false);
          setFormData({
            name: "",
            email: "",
            phone: "",
            subject: "",
            message: "",
          });
        },
        (err) => {
          console.error(err);
          setError("❌ Something went wrong. Please try again.");
          setLoading(false);
        }
      );
  };

  return (
    <div
      className="w-full overflow-hidden flex flex-col md:flex-row justify-center items-start gap-8 p-8 bg-black text-white"
      id="contact" 
    >
      {/* Left: Form */}
      <motion.div
        className="w-full md:w-1/2"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        data-aos="fade-up"
      >
        <h1 className="text-4xl font-light mb-6">GET IN TOUCH</h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Enter Message"
            className="w-full h-[120px] p-3 rounded-lg bg-transparent border border-gray-400 focus:border-purple-500 focus:outline-none resize-none"
            required
          ></textarea>

          <div className="flex flex-col md:flex-row gap-4">
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your Name"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-400 focus:border-purple-500 focus:outline-none"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your Email"
              className="w-full p-3 rounded-lg bg-transparent border border-gray-400 focus:border-purple-500 focus:outline-none"
              required
            />
          </div>

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Enter your Phone Number"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-400 focus:border-purple-500 focus:outline-none"
          />

          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Enter Subject"
            className="w-full p-3 rounded-lg bg-transparent border border-gray-400 focus:border-purple-500 focus:outline-none"
            required
          />

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            type="submit"
            disabled={loading}
            className="w-full mt-2 p-3 bg-purple-600 hover:bg-purple-700 transition-all duration-300 rounded-lg font-medium tracking-wide disabled:opacity-60"
          >
            {loading ? "Sending..." : "SEND MESSAGE"}
          </motion.button>

          {sent && (
            <p className="text-green-400 mt-2">
              ✅ Message sent successfully!
            </p>
          )}
          {error && <p className="text-red-400 mt-2">{error}</p>}
        </form>
      </motion.div>

      {/* Right: Contact Info */}
      <motion.div
        className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:pl-8"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        data-aos="fade-up"
      >
        <h2 className="text-4xl font-light">CONTACT INFO</h2>

        <div className="flex flex-col gap-5 mt-2 text-lg">
          <div className="flex flex-col">
            <span className="flex items-center gap-2 text-purple-400">
              <IoHome /> OSUN, NIGERIA
            </span>
            <p className="text-gray-400 ml-6">Agunbelewo Area, Osogbo</p>
          </div>

          <div className="flex flex-col">
            <span className="flex items-center gap-2 text-purple-400">
              <FaPhoneAlt /> +234 806 535 1087
            </span>
            <p className="text-gray-400 ml-6">Mon - Fri, 9am - 8pm</p>
          </div>

          <div className="flex flex-col">
            <span className="flex items-center gap-2 text-purple-400">
              <FaEnvelope /> ibrahimademola145@gmail.com
            </span>
            <p className="text-gray-400 ml-6">Send your query anytime</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contact;
