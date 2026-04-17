import { motion } from "motion/react";
const Our_work = () => {
  return (
    <div className="flex flex-col overflow-hidden px-10 sm:px-12 text-gray-700 lg:px-24 xl:px-46 items-center text-center space-y-6 w-full py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="font-medium text-5xl"
      >
        Our latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="w-70 sm:w-3/7 text-gray-500"
      >
        From strategy to execution, we craft digital solutions that move your
        business forward.
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: false }}
        className="grid grid-cols-1 space-y-4 sm:space-y-4 md:space-y-4 lg:space-y-0 xl:space-y-0 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 w-full text-start mt-10"
      >
        <div className="space-y-2 hover:scale-103 transition-all duration-500">
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            src="./work_dashboard_management.png"
            alt=""
            className="w-[90%] max-w-5xl"
          />
          <h2 className="font-semibold mt-4 text-lg">Mobile app marketing</h2>
          <p className="text-gray-400 text-sm w-4/5">
            We turn bold ideas into powerful digital solutions that connect,
            engage...
          </p>
        </div>
        <div className="space-y-2 hover:scale-103 transition-all duration-500">
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            src="./work_fitness_app.png"
            alt=""
            className="w-[90%] max-w-5xl"
          />
          <h2 className="font-semibold mt-4 text-lg">Dashboard Management</h2>
          <p className="text-gray-400 text-sm w-4/5">
            We help you execute your plan and deliver results.
          </p>
        </div>
        <div className="space-y-2 hover:scale-103 transition-all duration-500">
          <motion.img
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            src="./work_mobile_app.png"
            alt=""
            className="w-[90%] max-w-5xl"
          />
          <h2 className="font-semibold mt-4 text-lg">Fitness app promotion</h2>
          <p className="text-gray-400 text-sm w-4/5">
            We help you create a marketing strategy that drives results.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
export default Our_work;
