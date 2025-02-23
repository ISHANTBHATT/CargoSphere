// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const TypewriterEffectSmooth = ({
//   words,
//   className,
//   cursorClassName,
//   children,
// }) => {
//   return (
//     <div className={cn("flex space-x-1 my-6", className)}>
//       <motion.div
//         className="overflow-hidden pb-2"
//         initial={{
//           width: "0%",
//         }}
//         whileInView={{
//           width: "fit-content",
//         }}
//         transition={{
//           duration: 2,
//           ease: "linear",
//           delay: 1,
//         }}
//       >
//         <div
//           className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
//           style={{
//             whiteSpace: "nowrap",
//           }}
//         >
//           {words.map((word, idx) => (
//             <React.Fragment key={`word-${idx}`}>
//               {children ? (
//                 children(word, idx)
//               ) : (
//                 <span
//                   className={cn("dark:text-white text-black", word.className)}
//                 >
//                   {word.text}
//                 </span>
//               )}
//               {idx < words.length - 1 && " "}
//             </React.Fragment>
//           ))}
//         </div>
//       </motion.div>
//       <motion.span
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className={cn(
//           "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
//           cursorClassName
//         )}
//       ></motion.span>
//     </div>
//   );
// };

//v0
// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const TypewriterEffectSmooth = ({
//   words,
//   className,
//   cursorClassName,
//   children,
// }) => {
//   return (
//     <div className={cn("flex space-x-1 my-6", className)}>
//       <motion.div
//         className="overflow-hidden pb-2"
//         initial={{
//           width: "0%",
//         }}
//         whileInView={{
//           width: "fit-content",
//         }}
//         transition={{
//           duration: 2,
//           ease: "linear",
//           delay: 1,
//         }}
//       >
//         <div
//           className="text-xs sm:text-base md:text-xl lg:text:3xl xl:text-5xl font-bold"
//           style={{
//             whiteSpace: "nowrap",
//           }}
//         >
//           {words.map((word, idx) => (
//             <React.Fragment key={`word-${idx}`}>
//               {children ? (
//                 children(word, idx)
//               ) : (
//                 <span
//                   className={cn("dark:text-white text-black", word.className)}
//                 >
//                   {word.text}
//                 </span>
//               )}
//               {idx < words.length - 1 && " "}
//             </React.Fragment>
//           ))}
//         </div>
//       </motion.div>
//       <motion.span
//         initial={{
//           opacity: 0,
//         }}
//         animate={{
//           opacity: 1,
//         }}
//         transition={{
//           duration: 0.8,
//           repeat: Infinity,
//           repeatType: "reverse",
//         }}
//         className={cn(
//           "block rounded-sm w-[4px] h-4 sm:h-6 xl:h-12 bg-blue-500",
//           cursorClassName
//         )}
//       ></motion.span>
//     </div>
//   );
// };

"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
  renderWord,
}) => {
  return (
    <div className={cn("flex space-x-1 my-6", className)}>
      <motion.div
        className="overflow-hidden pb-2"
        initial={{
          width: "0%",
        }}
        whileInView={{
          width: "fit-content",
        }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="sm:text-5xl text-3xl font-bold"
          style={{
            whiteSpace: "nowrap",
          }}
        >
          {words.map((word, idx) => (
            <React.Fragment key={`word-${idx}`}>
              {renderWord ? (
                renderWord(word, idx)
              ) : (
                <span
                  className={cn("dark:text-white text-black", word.className)}
                >
                  {word.text}
                </span>
              )}
              {idx < words.length - 1 && " "}
            </React.Fragment>
          ))}
        </div>
      </motion.div>
      <motion.span
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-12 bg-blue-500",
          cursorClassName
        )}
      ></motion.span>
    </div>
  );
};
