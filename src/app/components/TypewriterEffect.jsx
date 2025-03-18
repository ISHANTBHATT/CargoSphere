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

//working
// "use client";

// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const TypewriterEffectSmooth = ({
//   words,
//   className,
//   cursorClassName,
//   renderWord,
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
//           className="sm:text-5xl text-3xl font-bold"
//           style={{
//             whiteSpace: "nowrap",
//           }}
//         >
//           {words.map((word, idx) => (
//             <React.Fragment key={`word-${idx}`}>
//               {renderWord ? (
//                 renderWord(word, idx)
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
//           "block rounded-sm w-[4px] h-12 bg-blue-500",
//           cursorClassName
//         )}
//       ></motion.span>
//     </div>
//   );
// };

// "use client";
// import React from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const TypewriterEffectSmooth = ({
//   words,
//   className,
//   cursorClassName,
// }) => {
//   // Combine all words into a single string with spaces
//   const fullText = words.map((word) => word.text).join(" ");
//   // Split into individual characters
//   const characters = fullText.split("");
//   // Calculate total animation duration
//   const totalDuration = characters.length * 0.05 + 1; // 50ms per character + 1s buffer

//   return (
//     <div className={cn("flex flex-wrap", className)}>
//       {characters.map((char, index) => (
//         <motion.span
//           key={index}
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             delay: index * 0.05, // 50ms between characters
//             duration: 0.1,
//           }}
//           className="whitespace-pre-wrap" // Preserve spaces and allow wrapping
//         >
//           {char}
//         </motion.span>
//       ))}
//       <motion.span
//         initial={{ opacity: 0 }}
//         animate={{
//           opacity: [0, 1, 0],
//           transition: {
//             delay: totalDuration,
//             duration: 0.8,
//             repeat: Infinity,
//           },
//         }}
//         className={cn(
//           "ml-1 inline-block h-12 w-[4px] bg-blue-500",
//           cursorClassName
//         )}
//       />
//     </div>
//   );
// };

//working
// "use client";
// import React, { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import { cn } from "@/lib/utils";

// export const TypewriterEffectSmooth = ({
//   words,
//   className,
//   cursorClassName,
// }) => {
//   const [currentText, setCurrentText] = useState("");
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const fullText = words.map((word) => word.text).join(" ");

//   useEffect(() => {
//     if (currentIndex < fullText.length) {
//       const timeout = setTimeout(() => {
//         setCurrentText((prev) => prev + fullText[currentIndex]);
//         setCurrentIndex((prev) => prev + 1);
//       }, 100); // Adjust typing speed here

//       return () => clearTimeout(timeout);
//     }
//   }, [currentIndex, fullText]);

//   return (
//     <div className={cn("flex flex-wrap items-center", className)}>
//       <span className="whitespace-pre-wrap relative">
//         {currentText}
//         <motion.span
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{
//             duration: 0.8,
//             repeat: Infinity,
//             repeatType: "reverse",
//           }}
//           className={cn(
//             "ml-0.5 inline-block h-12 w-[4px] bg-blue-500",
//             cursorClassName
//           )}
//         />
//       </span>
//     </div>
//   );
// };

"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export const TypewriterEffectSmooth = ({
  words,
  className,
  cursorClassName,
}) => {
  const [currentText, setCurrentText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);

  // Create an array of words with their classes
  const processedWords = words.map((word) => ({
    text: word.text + " ",
    className: word.className || "",
  }));

  // Join all words into a single string for typing
  const fullText = processedWords.map((word) => word.text).join("");

  // Track which word each character belongs to
  const characterWordMap = processedWords.flatMap((word, wordIndex) =>
    word.text.split("").map(() => wordIndex)
  );

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timeout = setTimeout(() => {
        setCurrentText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, fullText]);

  return (
    <div className={cn("flex flex-wrap items-center", className)}>
      <span className="whitespace-pre-wrap relative">
        {currentText.split("").map((char, index) => {
          const wordIndex = characterWordMap[index];
          const wordClass = processedWords[wordIndex].className;

          return (
            <span key={index} className={cn(wordClass)}>
              {char}
            </span>
          );
        })}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className={cn(
            "ml-0.5 inline-block h-4 w-[2px] bg-blue-500",
            cursorClassName
          )}
        />
      </span>
    </div>
  );
};
