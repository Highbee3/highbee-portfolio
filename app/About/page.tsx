"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-black text-white min-h-screen py-12">
      {/* ABOUT SECTION */}
      <div
        className="w-full flex flex-col-reverse md:flex-row-reverse items-center justify-between gap-10 px-6 md:px-16"
        data-aos="fade-up"
      >
        {/* IMAGE */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1746354536/gaming-rgb-keyboard-dark-background_77190-8079_jagat3.jpg"
            alt="Highbee developer"
            width={400}
            height={400}
            className="rounded-xl shadow-lg object-cover w-[80%] h-[80%] hover:scale-105 transition-transform duration-500"
          />
        </motion.div>

        {/* TEXT CONTENT */}
        <motion.div
          className="w-full md:w-1/2 flex flex-col gap-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-amber-400 text-3xl font-bold mb-2 tracking-wide">
            ABOUT ME
          </span>
          <p className="opacity-80 leading-8 text-lg">
            Hi, I am <span className="text-amber-400 font-semibold">Highbee</span> — a passionate Front-End Developer on a mission to
            transform ideas into elegant, interactive, and high-performing
            digital experiences. I specialize in creating beautiful, responsive
            user interfaces using modern frameworks like{" "}
            <span className="text-blue-400 font-medium">React</span>,{" "}
            <span className="text-sky-400 font-medium">Next.js</span>, and{" "}
            <span className="text-teal-400 font-medium">Tailwind CSS</span>.
          </p>

          <p className="opacity-70 leading-8 text-lg">
            My work is driven by creativity, curiosity, and a desire to turn
            static designs into dynamic, living web applications. From concept
            to deployment, I value clean code, smooth animations, and meaningful
            user interactions that elevate every project I touch.
          </p>

          <p className="opacity-70 leading-8 text-lg">
            When I’m not coding, you’ll find me exploring new tech trends,
            refining my design sense, or learning new frameworks. I believe in
            lifelong learning and the power of building impactful digital
            experiences that connect people and ideas.
          </p>

          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg shadow-lg w-fit transition-all duration-300"
          >
            <a href="/Contact">Let’s Connect</a>
          </motion.button>
        </motion.div>
      </div>

      {/* SKILLS SUMMARY SECTION */}
      <section
        className="mt-20 px-6 md:px-16 flex flex-col items-center text-center"
        data-aos="fade-up"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-amber-400 mb-6"
        >
          What I Bring to the Table
        </motion.h2>

        <p className="max-w-3xl opacity-80 text-lg leading-8 mb-10">
          I combine design intuition with strong technical foundations to create
          seamless, performant, and accessible interfaces. My key focus areas
          include:
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {[
            {
              title: "Responsive Design",
              desc: "I build layouts that look stunning and perform flawlessly across all devices.",
            },
            {
              title: "Clean & Maintainable Code",
              desc: "I write modular, scalable, and reusable components with clear architecture.",
            },
            {
              title: "UI/UX Precision",
              desc: "I care deeply about usability and how design choices impact user experience.",
            },
            {
              title: "Performance Optimization",
              desc: "I use efficient coding practices and lazy-loading to keep apps fast.",
            },
            {
              title: "Collaboration",
              desc: "I enjoy working in teams, sharing knowledge, and bringing ideas to life together.",
            },
            {
              title: "Continuous Learning",
              desc: "Every project is an opportunity to grow, learn, and refine my craft.",
            },
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 p-6 rounded-lg shadow-md hover:shadow-amber-400/30 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-amber-400 mb-2">
                {skill.title}
              </h3>
              <p className="opacity-75 leading-7">{skill.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FINAL CTA */}
      <section
        className="mt-20 flex flex-col items-center justify-center text-center"
        data-aos="zoom-in"
      >
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-amber-400 mb-4"
        >
          Ready to Collaborate?
        </motion.h3>
        <p className="opacity-75 mb-6 text-lg max-w-2xl">
          I’m always open to discussing new projects, creative ideas, or
          opportunities to bring your vision to life. Let’s make something
          impactful together.
        </p>

        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg shadow-lg transition-all duration-300"
        >
          <a href="/Contact">Get In Touch</a>
        </motion.button>
      </section>
    </main>
  );
};

export default About;
