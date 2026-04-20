import { motion } from "motion/react";
const Teams = () => {
  const teamsData = [
    {
      name: "Haley Carter",
      designation: "CEO & Founder",
      image: "./employee-1.jpg",
    },
    {
      name: "James Walker",
      designation: "Ads Manager",
      image: "./employee-2.jpg",
    },
    {
      name: "Jessica Morgan",
      designation: "Vice President",
      image: "./employee-3.jpg",
    },
    {
      name: "Ashley Bennett",
      designation: "Marketing & Sales",
      image: "./employee-4.jpg",
    },
    {
      name: "Emily Parker",
      designation: "Content Marketer",
      image: "./employee-5.jpg",
    },
    {
      name: "Ryan Mitchell",
      designation: "Content Writer",
      image: "./employee-6.jpg",
    },
    {
      name: "Megan Brooks",
      designation: "Performance Manager",
      image: "./employee-7.jpeg",
    },
    {
      name: "Amber Foster",
      designation: "Senior Writer",
      image: "./employee-8.jpg",
    },
  ];
  return (
    <div className="px-10 sm:px-12 lg:px-24 xl:px-40 flex text-gray-800 flex-col overflow-hidden items-center space-y-6 py-30 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="text-5xl font-medium"
      >
        Meet the team
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
        className="text-gray-600"
      >
        A passionate team of digital experts dedicated to your brands success.
      </motion.p>
      <motion.div
        initial="hidden"
        whileInView="visible"
        transition={{ staggerChildren: 0.2 }}
        viewport={{ once: false }}
        className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mt-10  gap-6"
      >
        {teamsData.map((team, index) => (
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.5 }}
            key={index}
            className="flex flex-col sm:flex-row gap-6 items-center text-left px-3 py-5 border border-gray-100 hover:scale-103 transition-all duration-500 rounded-2xl shadow-xl shadow-gray-100"
          >
            <motion.img src={team.image} alt="" className="rounded-full w-10" />
            <div>
              <p className="font-bold text-sm">{team.name}</p>
              <p className="text-sm text-gray-500">{team.designation}</p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};
export default Teams;
