
"use client"

import { motion } from "framer-motion";

const skills = [
  { name: "Figma", icon: "figma" },
  { name: "Illustrator", icon: "illustrator" },
  { name: "Photoshop", icon: "photoshop" },
  { name: "After Effects", icon: "aftereffects" },
  { name: "Indesign", icon: "indesign" },
  { name: "Branding", icon: "branding" },
];

const iconContainerVariants = {
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

const iconHoverVariants = {
  hover: {
    y: -10,
    scale: 1.1,
    transition: {
      type: "spring",
      stiffness: 300,
    },
  }
}

const SvgIcon = ({ iconName, className }: { iconName: string, className: string }) => {
    if (iconName === 'figma') {
        return <img src="https://img.icons8.com/ios-filled/c61aff/figma--v1.png" alt="Figma icon" className={className} />;
    }

    if (iconName === 'illustrator') {
      return <img src="https://img.icons8.com/ios-filled/c61aff/illustrator--v1.png" alt="illustrator icon" className={className} />;
  }

  if (iconName === 'photoshop') {
    return <img src="https://img.icons8.com/ios-filled/c61aff/adobe-photoshop--v1.png" alt="photoshop icon" className={className} />;
}

if (iconName === 'aftereffects') {
  return <img src="https://img.icons8.com/ios-filled/c61aff/adobe-after-effects.png" alt="aftereffects icon" className={className} />;
}

if (iconName === 'indesign') {
  return <img src="https://img.icons8.com/ios-filled/c61aff/adobe-indesign.png" alt="Indesign icon" className={className} />;
}

if (iconName === 'branding') {
  return <img src="https://img.icons8.com/ios-filled/c61aff/branding.png" alt="branding icon" className={className} />;
}

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
              variants={iconContainerVariants}
            >
              <motion.div
                className="bg-secondary p-6 rounded-lg inline-block hover:bg-primary/10 transition-colors"
                variants={iconHoverVariants}
                whileHover="hover"
              >
                <SvgIcon iconName={skill.icon} className="h-16 w-16 text-primary" />
              </motion.div>
              <p className="mt-4 font-headline text-xl font-semibold">{skill.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
