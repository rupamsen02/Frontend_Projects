import { motion } from "motion/react";
const Home = () => {
  return (
    <div className="flex flex-col relative space-y-6 py-20 px-10 sm:px-12 lg:px-24 xl:px-40 items-center overflow-hidden w-full text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="inline-flex items-center gap-2 border p-1 border-slate-300 rounded-full"
      >
        <img src="./group_profile.png" alt="" className="w-20" />
        <p className="font-medium text-sm truncate text-gray-600">
          Trusted by 10k+ people
        </p>
      </motion.div>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="text-3xl sm:text-6xl lg:text-7xl xl:text-8xl text-gray-800"
      >
        Turning imagination into{" "}
        <a className="bg-linear-to-r from-blue-800 to-[#5504E5] bg-clip-text text-transparent">
          digital
        </a>{" "}
        impact.
      </motion.p>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="sm:text-lg text-gray-600 w-86 sm:w-4/8"
      >
        Creating meaningful connections and turning big ideas into interactive
        digital experience.
      </motion.p>
      <div className="relative">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          src="./home_img.jpg"
          alt=""
          className="rounded-3xl sm:max-w-6xl"
        />
        <img
          src="./bgImg.jpg"
          alt=""
          className="absolute -top-38 -right-40  sm:-top-100 sm:-right-70 lg:-right- -z-1 "
        />
      </div>
    </div>
  );
};
export default Home;
