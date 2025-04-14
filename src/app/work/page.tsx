// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Header from "@/components/Header";

// const projects = [
//   {
//     id: 1,
//     title: "Redaction of Documents",
//     desc: "Developed an automated document redaction system to protect sensitive information during online sharing. Leveraging Python, machine learning, and computer vision, this solution offers flexible redaction options, enhancing privacy beyond industry standards.",
//     img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&h=1600&lazy=load",
//     link: "https://github.com/KrishnaPrakhya/project-sem4",
//   },
//   {
//     id: 2,
//     title: "Finance Advisor",
//     desc: "Created a smart financial advisory tool using Node.js and Express.js to provide personalized budgeting and investment insights. Integrated data analysis features to help users make informed financial decisions with ease.",
//     img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&h=1600&lazy=load",
//     link: "", // Add your demo link here if available
//   },
//   {
//     id: 3,
//     title: "Facial Recognition Based on Siamese Neural Network",
//     desc: "Built a facial recognition system powered by a Siamese neural network in Python. This project focused on accurate identity verification by comparing facial features, achieving robust performance for security applications.",
//     img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&h=1600&lazy=load",
//     link: "", // Add your demo link here if available
//   },
//   {
//     id: 4,
//     title: "Doctors Availability Based on Optimization",
//     desc: "Designed an optimization-based system in Java to streamline doctor scheduling and availability. This tool improves healthcare efficiency by matching patient needs with real-time doctor availability, reducing wait times.",
//     img: "https://images.pexels.com/photos/6894528/pexels-photo-6894528.jpeg?auto=compress&cs=tinysrgb&h=1600&lazy=load",
//     link: "", // Add your demo link here if available
//   },
// ];

// function Page() {
//   const ref = useRef<HTMLDivElement>(null);
//   const { scrollYProgress } = useScroll({ target: ref });
//   const x = useTransform(
//     scrollYProgress,
//     [0, 1],
//     ["0%", `-${118 * (projects.length - 1)}vw`]
//   );

//   return (
//     <motion.div ref={ref} className="h-[600vh] relative page-background">
//       <Header />
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 2, duration: 0.2 }}
//         className="w-screen h-[calc(100vh-6rem)] text-8xl text-center text-accent flex justify-center items-center flex-col"
//       >
//         <div>
//           <p>My Works</p>
//         </div>
//         <motion.div
//           className="flex justify-center  mt-10  transform -translate-x-1/2 cursor-pointer"
//           animate={{ y: [0, 10, 0] }}
//           transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
//         >
//           <svg
//             xmlns="http://www.w3.org/2000/svg"
//             fill="none"
//             viewBox="0 0 24 24"
//             strokeWidth={2}
//             stroke="currentColor"
//             className="w-12 h-12 text-accent"
//           >
//             <path
//               strokeLinecap="round"
//               strokeLinejoin="round"
//               d="M19 9l-7 7-7-7"
//             />
//           </svg>
//         </motion.div>
//       </motion.div>
//       <motion.div
//         initial={{ opacity: 0 }}
//         whileInView={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 0.1 }}
//         className="sticky top-0 h-screen overflow-hidden overflow-x-hidden"
//       >
//         <motion.div style={{ x }} className="flex">
//           <div className="min-w-[55vw] h-screen flex items-center justify-center" />
//           {projects.map((item) => (
//             <div
//               className="min-w-[100vw] h-screen flex items-center justify-center"
//               key={item.id}
//             >
//               <div className="flex flex-col gap-8 text-white text-center">
//                 <h1 className="text-5xl">{item.title}</h1>
//                 <div className="relative w-[300px] h-[300px] mx-auto">
//                   <Image
//                     src={item.img}
//                     alt={item.title}
//                     fill
//                     className="object-cover"
//                   />
//                 </div>
//                 <p>{item.desc}</p>
//                 <Link href={item.link}>
//                   <button className="px-4 py-2 bg-white text-black rounded">
//                     Github Link
//                   </button>
//                 </Link>
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </motion.div>
//     </motion.div>
//   );
// }

// export default Page;
import Header from "@/components/Header";
import Projects from "@/components/projects";

export default function WorkPage() {
  return (
    <div className="page-background">
      <Header />
      <Projects />
    </div>
  );
}
