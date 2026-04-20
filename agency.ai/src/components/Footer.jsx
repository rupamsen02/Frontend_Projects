import { motion } from "motion/react";
const Footer = () => {
  return (
    <div className="px-10 sm:px-12 lg:px-24 xl:px-40 bg-slate-50 text-gray-700 flex flex-col overflow-hidden justify-between items-center">
      <div className="py-8 space-y-4 w-full">
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row xl:flex-row items-start xl:items-center justify-between sm:items-start">
          <div className=" w-80 sm:w-100 space-y-4 text-sm">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="flex gap-1 pt-1"
            >
              <img src="./ai-black.png" alt="" className="w-15" />
              <h2 className="mt-3 font-bold text-xl truncate">Agency.ai</h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className=""
            >
              From strategy to execution, we craft digital solutions that move
              your business forward.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2 }}
              viewport={{ once: false }}
              className="flex gap-6"
            >
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                Home
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                Services
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                Our work
              </motion.p>
              <motion.p
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
              >
                Contact us
              </motion.p>
            </motion.div>
          </div>
          <div className="w-80 sm:w-100 space-y-2 text-sm pt-10">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className="font-bold"
            >
              Subscribe to our newsletter
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: false }}
              className=""
            >
              The latest news, articles, and resources, sent to your inbox
              weekly.
            </motion.p>
            <motion.div
              initial="hidden"
              whileInView="visible"
              transition={{ staggerChildren: 0.2 }}
              viewport={{ once: false }}
              className="flex gap-[1%]"
            >
              <motion.input
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                type="text"
                className="border border-gray-500 rounded-sm px-2 py-3 outline-0 w-full"
              />{" "}
              <motion.button
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.5 }}
                className="bg-blue-700 text-white/90 px-5 py-3 rounded-sm"
              >
                Subscribe
              </motion.button>
            </motion.div>
          </div>
        </div>
        <motion.hr
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="border-t-gray-500 w-80 mt-8 sm:w-full"
        />
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 justify-center sm:justify-between w-full">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
            className="w-90"
          >
            Copyright 2026 - All Rights Reserved.
          </motion.p>
          <motion.div
            initial="hidden"
            whileInView="visible"
            transition={{ staggerChildren: 0.2 }}
            viewport={{ once: false }}
            className="flex gap-4"
          >
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              src="./fb.png"
              alt=""
              className="w-[25px]"
            />
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              src="./twitter.png"
              alt=""
              className="w-[25px]"
            />
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              src="./insta.png"
              alt=""
              className="w-[25px]"
            />
            <motion.img
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.5 }}
              src="./linkedin.png"
              alt=""
              className="w-[25px]"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};
export default Footer;
