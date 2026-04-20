import { useState } from "react";
import toast from "react-hot-toast";
import { motion } from "motion/react";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);
    formData.append("access_key", import.meta.env.VITE_ACCESS_KEY);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();
    if (data.success) {
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      toast.error("Error");
    }
  };
  return (
    <div className="px-10 sm:px-12 lg:px-24 xl:px-40 overflow-hidden flex flex-col w-full items-center py-18 space-y-6 text-gray-800 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="font-medium text-5xl"
      >
        Reach out to us
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="text-gray-600 w-70 sm:w-3/7"
      >
        From strategy to execution, we craft digital solutions that move your
        business forward.
      </motion.p>
      <motion.form
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: false }}
        onSubmit={onSubmit}
        className="text-start max-w-2xl w-full mt-8 items-center"
      >
        <div className="flex flex-col sm:flex-row gap-6 items-center justify-center">
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="w-80 sm:w-full space-y-2"
          >
            <p className="text-sm font-medium">Your name</p>
            <div className="flex relative">
              <img
                src="./user.png"
                alt=""
                className="w-6 absolute top-3 left-3"
              />
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="border p-3 px-12 text-sm rounded-lg w-full outline-0"
                required
              />
            </div>
          </motion.div>
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            className="w-80 sm:w-full space-y-2"
          >
            <p className="text-sm font-medium">Email id</p>
            <div className="flex relative">
              <img
                src="./email.png"
                alt=""
                className="w-6 absolute top-3 left-3"
              />
              <input
                type="text"
                name="email"
                placeholder="Enter your name"
                className="border p-3 text-sm px-12 rounded-lg w-full outline-0"
                required
              />
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          className="mt-4 space-y-2 items-center"
        >
          <p className="text-sm font-medium">Message</p>
          <textarea
            type="text"
            name="message"
            rows={8}
            id=""
            placeholder="Enter your message"
            className="w-full border px-4 py-2 text-sm rounded-lg outline-0"
            required
          />
        </motion.div>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: false }}
          type="submit"
          className="inline-flex mt-3 bg-blue-700 hover:bg-blue-800 cursor-pointer px-6 py-2 rounded-full gap-2 text-white/90"
        >
          Submit <img src="./arrow.png" alt="" className="w-4 h-4 mt-1" />
        </motion.button>
      </motion.form>
    </div>
  );
};
export default Contact;
