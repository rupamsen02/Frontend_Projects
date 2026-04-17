import { motion } from "motion/react";
const TrustedBy = () => {
  return (
    <div className="flex flex-col px-10 sm:px-12 lg:px-24 xl:px-40 overflow-hidden w-full items-center text-center">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        Trusted By Leading Companies
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: false }}
        className="grid grid-cols-3 sm:grid-cols-6 space-x-5 items-center"
      >
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          src="./coinbase.png"
          alt=""
          className="w-20"
        />
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          src="./rakuten.png"
          alt=""
          className="w-20"
        />
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          src="./google.png"
          alt=""
          className="w-20"
        />
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          src="./zoom.png"
          alt=""
          className="w-20"
        />
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          src="./airbnb.png"
          alt=""
          className="w-20"
        />
        <motion.img
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          src="./microsoft.png"
          alt=""
          className="w-20"
        />
      </motion.div>
    </div>
  );
};
export default TrustedBy;
