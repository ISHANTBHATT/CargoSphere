// "use client";

// import { motion } from "framer-motion";
// import Image from "next/image";

// const logos = [
//   { name: "AMAZON", src: "/images/DFOS.svg" },
//   { name: "BOX", src: "/images/DFOS.svg" },
//   { name: "EPIC GAMES", src: "/images/DFOS.svg" },
//   { name: "GENIUS", src: "/images/DFOS.svg" },
//   { name: "GODADDY", src: "/images/DFOS.svg" },
//   { name: "HEROKU", src: "/images/DFOS.svg" },
//   { name: "BMW", src: "/images/DFOS.svg" },
//   { name: "CLOUDEBEES", src: "/images/DFOS.svg" },
//   { name: "NIKE", src: "/images/DFOS.svg" },
// ];

// export default function ClientLogos() {
//   return (
//     <div className="w-full overflow-hidden bg-[#FFE169] py-16">
//       <h2 className="text-center text-4xl font-bold mb-12 text-black">
//         1B+ requests tracked for users like...
//       </h2>
//       <div className="relative h-[400px]">
//         <LogoStrip direction="left" className="absolute top-0 left-0 right-0" />
//         <LogoStrip
//           direction="right"
//           className="absolute bottom-0 left-0 right-0"
//         />
//         {/* <LogoStrip
//           direction="up"
//           className="absolute left-0 top-0 bottom-0"
//           vertical
//         />
//         <LogoStrip
//           direction="down"
//           className="absolute right-0 top-0 bottom-0"
//           vertical
//         /> */}
//       </div>
//     </div>
//   );
// }

// function LogoStrip({ direction, className = "", vertical = false }) {
//   const isHorizontal = direction === "left" || direction === "right";
//   const start = direction === "left" || direction === "up" ? "0%" : "-100%";
//   const end = direction === "left" || direction === "up" ? "-100%" : "0%";

//   return (
//     <motion.div
//       className={`flex items-center gap-16 py-4 whitespace-nowrap ${className}`}
//       style={{
//         flexDirection: vertical ? "column" : "row",
//         [isHorizontal ? "x" : "y"]: [start, end],
//       }}
//       animate={{ [isHorizontal ? "x" : "y"]: [end, start] }}
//       transition={{
//         repeat: Infinity,
//         repeatType: "loop",
//         duration: 40,
//         ease: "linear",
//       }}
//     >
//       {[...logos, ...logos].map((logo, index) => (
//         <div
//           key={`${logo.name}-${index}`}
//           className="flex-shrink-0 bg-white px-8 py-4 rounded-lg shadow-sm"
//         >
//           <Image
//             src={logo.src}
//             alt={`${logo.name} logo`}
//             width={120}
//             height={40}
//             className="h-10 w-auto object-contain"
//           />
//         </div>
//       ))}
//     </motion.div>
//   );
// }

import React from "react";
import Client from "./Client";

function Clients() {
  return (
    <div className="">
      <Client />
    </div>
  );
}

export default Clients;
