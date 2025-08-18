
"use client"

import { motion } from "framer-motion";

const skills = [
  { name: "Figma", icon: "figma" },
  { name: "Illustrator", icon: "illustrator" },
  { name: "Photoshop", icon: "photoshop" },
  { name: "After Effects", icon: "aftereffects" },
  { name: "Webflow", icon: "webflow" },
  { name: "React", icon: "react" },
];

const iconVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: i * 0.1,
      duration: 0.5,
      ease: "easeOut",
    },
  }),
};

const SvgIcon = ({ iconName, className }: { iconName: string, className: string }) => {
    const iconPaths: Record<string, string> = {
        figma: "M15.4,12.2c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5S16.2,12.2,15.4,12.2z M10.4,12.2 c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5S11.2,12.2,10.4,12.2z M5.5,12.2c-0.8,0-1.5,0.7-1.5,1.5 s0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5S6.3,12.2,5.5,12.2z M15.4,7.2c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5 c0.8,0,1.5-0.7,1.5-1.5C16.9,7.9,16.2,7.2,15.4,7.2z M10.4,7.2c-0.8,0-1.5,0.7-1.5,1.5c0,0.8,0.7,1.5,1.5,1.5 c0.8,0,1.5-0.7,1.5-1.5C11.9,7.9,11.2,7.2,10.4,7.2z M5.5,2.3C4.7,2.3,4,3,4,3.8v3c0,0.8,0.7,1.5,1.5,1.5c0.8,0,1.5-0.7,1.5-1.5 v-3C7,3,6.3,2.3,5.5,2.3z",
        illustrator: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M8.5,18.2L6,10.8h2.1l1.2,4.3 c0.2,0.6,0.3,1.3,0.4,1.8h0.1c0.1-0.5,0.2-1.1,0.4-1.8l1.2-4.3H14l-2.5,7.3h-2L8.5,18.2z M17,17.4c-1.3,0-2.1-0.8-2.1-2.1 c0-1.3,0.8-2,2.1-2c0.5,0,0.9,0.1,1.2,0.4l0.1-1.3H19v7.3h-1.8C17.2,17.4,17.1,17.4,17,17.4z M17,14.5c-0.5,0-0.8,0.4-0.8,0.9 c0,0.5,0.3,0.8,0.8,0.8c0.5,0,0.8-0.3,0.8-0.8C17.8,14.8,17.5,14.5,17,14.5z",
        photoshop: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M9.1,17.2L6,10.8h2.2l1,3.3 c0.2,0.6,0.3,1.3,0.4,1.8h0.1c0.1-0.5,0.3-1.2,0.5-1.8l1.2-3.3H14l-3,6.4H9.1z M17.2,13.4c-0.6,0-1,0.2-1.3,0.5 c-0.3,0.3-0.5,0.7-0.5,1.2c0,0.6,0.2,1.1,0.5,1.5c0.3,0.4,0.8,0.5,1.4,0.5c0.6,0,1.1-0.2,1.4-0.5c0.3-0.3,0.5-0.8,0.5-1.5 c0-0.9-0.3-1.6-1-2.1C17.9,13.5,17.6,13.4,17.2,13.4z M17.2,14.5c0.3,0,0.5,0.1,0.6,0.3c0.2,0.2,0.2,0.5,0.2,0.8 c0,0.4-0.1,0.7-0.2,0.9c-0.2,0.2-0.4,0.3-0.6,0.3c-0.3,0-0.5-0.1-0.6-0.3c-0.1-0.2-0.2-0.5-0.2-0.9c0-0.3,0.1-0.6,0.2-0.8 C16.7,14.6,16.9,14.5,17.2,14.5z",
        aftereffects: "M19,3H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h14c1.1,0,2-0.9,2-2V5C21,3.9,20.1,3,19,3z M8.9,14.3l-2.1-4.5h2.2 l1.1,2.5c0.2,0.4,0.3,0.9,0.4,1.3h0.1c0.1-0.4,0.2-0.8,0.4-1.3l1.1-2.5h2.1l-2.1,4.5l-0.1,0.2l2.2,4.2H14l-1.2-2.6 c-0.2-0.4-0.3-0.8-0.4-1.2h-0.1c-0.1,0.4-0.2,0.8-0.4,1.2L10.8,19h-2l2.2-4.2L8.9,14.3z M17.8,17.3c-0.5,0.3-1.1,0.5-1.8,0.5 c-1.4,0-2.3-0.8-2.3-2.3c0-1.4,0.8-2.3,2.4-2.3c0.6,0,1.1,0.1,1.5,0.4L17.8,12H19v7.3h-1.2V17.3z M17.2,14.5 c-0.5,0-0.9,0.3-0.9,1.1c0,0.7,0.4,1.1,1,1.1c0.5,0,0.9-0.3,0.9-1C18.2,14.8,17.7,14.5,17.2,14.5z",
        webflow: "M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M17.7,12.8h-3.9v3.9H12v-3.9H8.1v-1.6H12V7.3h1.8v3.9 h3.9V12.8z",
        react: "M12,2C6.5,2,2,6.5,2,12s4.5,10,10,10s10-4.5,10-10S17.5,2,12,2z M12,20c-4.4,0-8-3.6-8-8s3.6-8,8-8s8,3.6,8,8 S16.4,20,12,20z M12,10.6c-0.8,0-1.5,0.7-1.5,1.5s0.7,1.5,1.5,1.5s1.5-0.7,1.5-1.5S12.8,10.6,12,10.6z M16.9,11.3 c-0.4-0.8-1.2-1.3-2.1-1.3c-1.3,0-2.3,1-2.3,2.3s1,2.3,2.3,2.3s2.3-1,2.3-2.3c0-0.1,0-0.2,0-0.3l1.8,0.8c-0.2,0.5-0.5,1-0.9,1.4 c-0.8,0.8-1.9,1.3-3.1,1.3c-2.4,0-4.3-1.9-4.3-4.3s1.9-4.3,4.3-4.3c1.2,0,2.3,0.5,3.1,1.3c0.4,0.4,0.7,0.9,0.9,1.4L16.9,11.3z",
    };
    return (
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d={iconPaths[iconName]} />
        </svg>
    )
}

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">My Skills</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            A few of the tools and technologies I excel at.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.name}
              className="text-center"
              custom={i}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              variants={iconVariants}
            >
              <div className="bg-secondary p-6 rounded-lg inline-block hover:bg-primary/10 transition-colors">
                <SvgIcon iconName={skill.icon} className="h-16 w-16 text-primary" />
              </div>
              <p className="mt-4 font-headline text-xl font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
