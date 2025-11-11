"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const projects = [
    {
      title: "Superdata",
      img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071945/superdata2_afaa9i.png",
      href: "https://superdata-lime.vercel.app/",
      desc: "A data analytics dashboard with modern UI built using React & Tailwind.",
    },
    {
      title: "Tatechhub",
      img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071885/tatechub_dz83yd.png",
      href: "https://ibrahim-tech.vercel.app/",
      desc: "Tech hub landing page showcasing innovative digital solutions.",
    },
    {
      title: "Superjara",
      img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071917/superjara_lmttxv.png",
      href: "https://superjara-qi3w.vercel.app/",
      desc: "E-commerce interface focused on simplicity and intuitive shopping.",
    },
    {
      title: "Portfolio",
      img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747167076/portfolio_h8dal5.png",
      href: "https://ibrahim-portfolio-bay.vercel.app/",
      desc: "Personal portfolio website highlighting development work and skills.",
    },
    {
      title: "Jimone",
      img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071864/jimone_g5zws1.png",
      href: "https://jimone.vercel.app/",
      desc: "Responsive website for a restaurant brand with an elegant UI.",
    },
    {
      title: "Dog Project",
      img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/v1747071953/dog_xfzmrf.png",
      href: "https://dog-rosy.vercel.app/",
      desc: "Playful web app demonstrating API fetching and animations.",
    },
    {
      title: "Porda Academy",
      img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/pordaimage_pbtkp8.png",
      href: "https://porda-academy.vercel.app",
      desc: "Educational website built with modern tools and clean layout.",
    },
    {
      title: "Bekind",
      img: "https://res.cloudinary.com/dlzjjxtsd/image/upload/bekind22_q0w0je.png",
      href: "https://bekind-three.vercel.app",
      desc: "Donation platform UI designed for empathy and clarity.",
    },
  ];

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <main className="bg-black  text-white min-h-screen space-y-7 py-16 px-6 md:px-12">
      {/* HEADER */}
      <section className="text-center mt-15" data-aos="fade-up">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-5xl font-extrabold text-amber-400 mb-3"
        >
          PORTFOLIO
        </motion.h1>
        <p className="text-gray-300 text-lg">Check out my recent projects</p>
      </section>

      {/* PROJECT GRID */}
      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            whileHover={{ scale: 1.05 }}
            className="relative group overflow-hidden rounded-xl shadow-lg bg-slate-800"
            data-aos="zoom-in-up"
          >
            {/* Image */}
            <a href={project.href} target="_blank" rel="noopener noreferrer">
              <Image
                src={project.img}
                alt={project.title}
                width={800}
                height={600}
                className="w-full h-[250px] object-cover opacity-90 group-hover:opacity-60 transition-all duration-500"
              />

              {/* Overlay */}
              <motion.div
                className="absolute inset-0 flex flex-col justify-center items-center text-center p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-black/70"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <h3 className="text-2xl font-bold text-amber-400 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{project.desc}</p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  className="px-5 py-2 bg-amber-500 text-black font-semibold rounded-md hover:bg-amber-600 transition"
                >
                  View Project
                </motion.button>
              </motion.div>
            </a>
          </motion.div>
        ))}
      </motion.div>

      {/* CTA SECTION */}
      <section
        className="mt-20 text-center flex flex-col items-center justify-center"
        data-aos="fade-up"
      >
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-amber-400 mb-4"
        >
          Want to Collaborate?
        </motion.h2>
        <p className="text-gray-400 max-w-xl mb-6">
          I’m always open to exciting projects, freelance opportunities, or
          collaborations. Let’s create something remarkable together.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="px-8 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg shadow-lg transition-all duration-300"
        >
          <a href="/Contact">Get in Touch</a>
        </motion.button>
      </section>
    </main>
  );
};

export default Projects;
