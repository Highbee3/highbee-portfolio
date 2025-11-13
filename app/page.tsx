"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

import { IoLogoHtml5 } from "react-icons/io";
import { SiJavascript, SiTailwindcss } from "react-icons/si";
import { DiCss3 } from "react-icons/di";
import { IoLogoGithub, IoLogoReact } from "react-icons/io5";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* HERO SECTION */}
      <section className="relative w-full h-[550px] bg-slate-900 flex justify-center items-center">
        <Image
          src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1746021876/ales-nesetril-Im7lZjxeLhg-unsplash_vneln2.jpg"
          alt="Developer Workspace"
          fill
          className="object-cover opacity-40"
        />

        <motion.div
          className="absolute text-center p-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-5xl font-extrabold bg-clip-text text-amber-500">
            Highbee
          </h1>
          <p className="text-xl mt-4 opacity-90">Front-End Developer</p>
          <p className="text-xl mt-2 opacity-80">
            Transforming Ideas Into Code
          </p>
          <p className="text-xl mt-2 opacity-80">
            Bringing Designs to Life with Code
          </p>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-6 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            <a href="/Projects">Discover My Work</a>
          </motion.button>
        </motion.div>
      </section>

      {/* ABOUT / INTRO SECTION */}
      <section className="container mx-auto py-16 px-6" data-aos="fade-up">
        <h2 className="text-4xl font-bold text-center mb-8 text-amber-400">
          About Me
        </h2>
        <p className="max-w-3xl mx-auto text-center text-lg leading-relaxed opacity-90">
          I’m a passionate Front-End Developer who loves crafting seamless, interactive, and visually engaging web experiences. My focus is on transforming creative ideas into functional designs using cutting-edge technologies like React, Tailwind, and Next.js. Whether it’s a startup project or a full-scale product, I aim to build interfaces that users love.
        </p>
      </section>

      {/* PROJECTS PREVIEW SECTION */}
      <section className="py-12" data-aos="fade-up">
        <h2 className="text-3xl text-center mb-8 font-bold text-amber-400">
          Featured Projects
        </h2>

        <div className="flex flex-wrap justify-center gap-6 px-4">
          {[
            {
              href: "https://superdata-lime.vercel.app/",
              src: "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071945/superdata2_afaa9i.png",
              alt: "Superdata",
            },
            {
              href: "https://ibrahim-tech.vercel.app/",
              src: "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071885/tatechub_dz83yd.png",
              alt: "Tatechhub",
            },
            {
              href: "https://superjara-qi3w.vercel.app/",
              src: "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071917/superjara_lmttxv.png",
              alt: "Superjara",
            },
          ].map((project, index) => (
            <motion.a
              key={index}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              className="w-full md:w-[30%] rounded-lg overflow-hidden shadow-lg hover:shadow-amber-400/40 transition-all duration-300"
            >
              <Image
                src={project.src}
                alt={project.alt}
                width={700}
                height={500}
                className="object-cover w-full h-[250px]"
              />
            </motion.a>
          ))}
        </div>

        <motion.div className="flex justify-center">
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="mt-8 px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            <a href="/Projects">See More Projects</a>
          </motion.button>
        </motion.div>
      </section>

      {/* SKILLS SECTION */}
      <section className="py-16 bg-slate-800" data-aos="fade-up">
        <h2 className="text-4xl text-center mb-8 text-amber-400 font-bold">
          My Skills
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-6 md:px-16">
          {[
            { icon: <IoLogoReact />, name: "React" },
            { icon: <SiTailwindcss />, name: "Tailwind CSS" },
            { icon: <IoLogoGithub />, name: "GitHub" },
            { icon: <IoLogoHtml5 />, name: "HTML5" },
            { icon: <SiJavascript />, name: "JavaScript" },
            { icon: <DiCss3 />, name: "CSS3" },
          ].map((skill, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-700 rounded-xl flex flex-col items-center justify-center py-8 text-white shadow-md"
            >
              <div className="text-[4rem] mb-4 text-amber-400">
                {skill.icon}
              </div>
              <span className="text-2xl font-semibold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA / FOOTER IMAGE SECTION */}
      <section
        className="relative w-full h-[400px] mt-10"
        data-aos="fade-up"
      >
        <Image
          src="https://res.cloudinary.com/dlzjjxtsd/image/upload/v1746354536/gaming-rgb-keyboard-dark-background_77190-8079_jagat3.jpg"
          alt="Keyboard"
          fill
          className="object-cover opacity-40"
        />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <motion.h2
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-bold text-amber-400 mb-4"
          >
            Let’s Build Something Amazing
          </motion.h2>
          <motion.button
            whileHover={{ scale: 1.1 }}
            className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg shadow-lg transition-all duration-300"
          >
            <a href="/Contact">Contact Me</a>
          </motion.button>
        </div>
      </section>
    </main>
  );
}
