import React from "react";
import SectionTitle from "./SectionTitle.jsx";
import {
  personalInfo,
  education,
  workExperience,
} from "../data/portfolioData.jsx";
import { motion } from "framer-motion";
import { FaUniversity, FaSchool } from "react-icons/fa";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
    },
  }),
};

const About = () => {
  return (
    <section id="about" className="py-20 bg-secondary-bg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle id="about-title">About Me</SectionTitle>

        <motion.div
          className="max-w-3xl mx-auto text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-text-secondary leading-relaxed text-justify">
            Hello! I'm {personalInfo.name}, a driven Full Stack Developer with a
            strong foundation in computer science and a knack for crafting
            efficient, user-centric applications. My journey into tech is fueled
            by a desire to learn, innovate, and contribute to projects that make
            a difference. I thrive in collaborative environments and am always
            excited to tackle new challenges.
          </p>
        </motion.div>
        <div className="">
          <h3 className="text-2xl font-semibold text-center text-accent-1 mb-8 font-mono">
            Work Experience
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 mb-12">
            {workExperience.map((work, index) => (
              <motion.div
                key={index}
                className="bg-primary-bg p-6 rounded-lg shadow-xl hover:shadow-accent-1/20 transition-shadow duration-300 lg:space-y-4 space-y-2 text-justify"
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                custom={index}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="flex items-center mb-3 space-x-4">
                  <img
                    src={work.image}
                    alt={work.company}
                    className=" h-10 rounded-xl"
                  />
                  <h4 className="text-xl font-semibold text-text-primary">
                    {work.company}
                  </h4>
                </div>
                <p className="text-text-secondary font-medium">
                  {work.position}
                </p>
                <p className="text-sm text-text-secondary font-mono">
                  {work.duration}
                </p>
                <p className="text-sm text-text-secondary font-mono">
                  {work.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <h3 className="text-2xl font-semibold text-center text-accent-1 mb-8 font-mono">
          Education
        </h3>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              className="bg-primary-bg p-6 rounded-lg shadow-xl hover:shadow-accent-1/20 transition-shadow duration-300"
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              custom={index}
              viewport={{ once: true, amount: 0.2 }}
            >
              <div className="flex items-center mb-3">
                {edu.institution.toLowerCase().includes("university") ? (
                  <FaUniversity className="text-accent-1 mr-3 text-2xl" />
                ) : (
                  <FaSchool className="text-accent-1 mr-3 text-2xl" />
                )}
                <h4 className="text-xl font-semibold text-text-primary">
                  {edu.institution}
                </h4>
              </div>
              <p className="text-text-secondary font-medium">{edu.degree}</p>
              <p className="text-sm text-text-secondary font-mono">
                {edu.duration}
              </p>
              <p className="text-sm text-accent-1 font-mono mt-1">
                {edu.score}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
