import { useRef, useState } from "react";
import { motion } from "motion/react";
const Services = () => {
  // const [position, setPosition] = useState({ x: 0, y: 0 });
  // const [visible, setVisible] = useState(false);
  // const divRef = useRef(null);
  // const handleMouseMove = (event) => {
  //   const bounds = divRef.current.getBoundingClientRect();
  //   setPosition({
  //     x: event.clientX - bounds.left,
  //     y: event.clientY - bounds.top,
  //   });
  // };
  return (
    <motion.div
      className="flex flex-col relative text-gray-800 space-y-6 py-10 items-center text-center w-full px-10 sm:px-12 lg:px-24 xl:px-40 overflow-hidden"
      // onMouseEnter={() => setVisible(true)}
      // onMouseLeave={() => setVisible(false)}
      // ref={divRef}
      // onMouseMove={handleMouseMove}
    >
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="text-5xl font-medium"
      >
        How can you help?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="w-70 sm:w-3/7"
      >
        From strategy to execution, we craft digital solutions that move your
        business forward.
      </motion.p>
      {/* <div
        className={`pointer-events-none blur-2xl w-20 h-20 absolute transition-opacity duration-500 z-0 rounded-full bg-linear-to-r from-blue-800 to-violet-500 ${visible ? "opacity-70" : "opacity-0"}`}
        style={{ top: position.y - 150, left: position.x - 150 }}
      /> */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: false }}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 text-left xl:grid-cols-2 py-12 gap-8"
      >
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="border border-slate-200 p-8 rounded-2xl"
        >
          <motion.div className="grid grid-cols-2 sm:flex gap-0 sm:gap-8 items-center">
            <img
              src="./ads_icon.svg"
              alt=""
              className="rounded-full border-8 border-gray-200"
            />
            <div className="space-y-2">
              <p className="font-bold text-gray-800">Advertising</p>
              <p className="text-sm">
                We turn bold ideas into powerful digital solutions that connect,
                engage...
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="border border-slate-200 p-8 rounded-2xl "
        >
          <motion.div className="grid grid-cols-2 sm:flex gap-0 sm:gap-8 items-center">
            <img
              src="./marketing_icon.svg"
              alt=""
              className="rounded-full border-8 border-gray-200"
            />
            <div className="space-y-2">
              <p className="font-bold text-gray-800">Content Marketing</p>
              <p className="text-sm">
                We help you execute your plan and deliver results.
              </p>
            </div>
          </motion.div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          className="border border-slate-200 p-8 rounded-2xl "
        >
          <div className="grid grid-cols-2 sm:flex gap-0 sm:gap-8 items-center">
            <img
              src="./content_icon.svg"
              alt=""
              className="rounded-full border-8 border-gray-200"
            />
            <div className="space-y-2">
              <p className="font-bold text-gray-800">Content Writing</p>
              <p className="text-sm">
                We help you create a marketing strategy that drives results.
              </p>
            </div>
          </div>
        </motion.div>
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.8 }}
          className="border border-slate-200 p-8 rounded-2xl"
        >
          <div className="grid grid-cols-2 sm:flex gap-0 sm:gap-8 items-center">
            <img
              src="./social_icon.svg"
              alt=""
              className="rounded-full border-8 border-gray-200"
            />
            <div className="space-y-2">
              <p className="font-bold text-gray-800">Social Media</p>
              <p className="text-sm ">
                We help you build a strong social media presence and engage with
                your audience.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default Services;
