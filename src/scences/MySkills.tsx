import React from "react";
import { motion } from "framer-motion";
import { LineGradient } from "../components/LineGradient";
import { useMediaQuery } from "../hooks";
import SkillsImage from "../assets/skills-image.png";

export const MySkills = React.memo(() => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* header and image section */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width={"w-1/3"} />
          <p className="mt-10 mb-7">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet autem
            veritatis blanditiis molestiae ex, suscipit maiores dolorem ratione
            voluptates repellendus.
          </p>
        </motion.div>
        <div className="mt-16 md:mt-0">
          {isAboveMediumScreens ? (
            <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10  before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]">
              <img className="z-10" src={SkillsImage} />
            </div>
          ) : (
            <img className="z-10" src={SkillsImage} />
          )}
        </div>
      </div>
      {/* skills */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* experience */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            accusamus ad culpa saepe impedit reprehenderit repellendus eligendi
            dignissimos dolorem. Voluptatum nostrum libero sed officia, ipsum ut
            adipisci obcaecati consequatur necessitatibus!
          </p>
        </motion.div>
        {/* innovative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            accusamus ad culpa saepe impedit reprehenderit repellendus eligendi
            dignissimos dolorem. Voluptatum nostrum libero sed officia, ipsum ut
            adipisci obcaecati consequatur necessitatibus!
          </p>
        </motion.div>
        {/* imaginative */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>
          <p className="mt-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
            accusamus ad culpa saepe impedit reprehenderit repellendus eligendi
            dignissimos dolorem. Voluptatum nostrum libero sed officia, ipsum ut
            adipisci obcaecati consequatur necessitatibus!
          </p>
        </motion.div>
      </div>
    </section>
  );
});
