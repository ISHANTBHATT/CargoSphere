// import React from "react";
// import { FlipWords } from "@/components/ui/flip-words";
// import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";
// export default function Banner() {
//   const words = ["better", "cute", "beautiful", "modern"];

//   const word = [
//     {
//       text: "Df-OS",
//     },
//     {
//       text: "unites",
//     },
//     {
//       text: <FlipWords words={words} />,
//       className: "text-blue-500 dark:text-blue-500",
//     },
//     {
//       text: "at",
//     },
//     {
//       text: "a",
//       //   className: "text-blue-500 dark:text-blue-500",
//     },
//     {
//       text: "single",
//     },
//     {
//       text: "platform.",
//     },
//   ];
//   //   Df-OS unites Utility at a single platform.
//   return (
//     <div className="h-[40rem] flex justify-center items-center px-4">
//       <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
//         <TypewriterEffectSmooth words={word} />
//         {/* Build
//         <FlipWords words={words} /> <br />
//         websites with Aceternity UI */}
//       </div>
//     </div>
//   );
// }

//v0
// import React from "react";
// import { FlipWords } from "@/components/ui/flip-words";
// import { TypewriterEffectSmooth } from "@/components/ui/typewriter-effect";

// export default function Banner() {
//   const flipWords = ["better", "cute", "beautiful", "modern"];

//   const typewriterWords = [
//     {
//       text: "Df-OS",
//     },
//     {
//       text: "unites",
//     },
//     {
//       text: "FlipWords",
//       isFlipWord: true,
//     },
//     {
//       text: "at",
//     },
//     {
//       text: "a",
//     },
//     {
//       text: "single",
//     },
//     {
//       text: "platform.",
//     },
//   ];

//   return (
//     <div className="h-[40rem] flex flex-col justify-center items-center px-4">
//       <div className="text-4xl mx-auto font-normal text-neutral-600 dark:text-neutral-400">
//         <TypewriterEffectSmooth words={typewriterWords}>
//           {(word, index) => {
//             if (word.isFlipWord) {
//               return (
//                 <FlipWords
//                   key={index}
//                   words={flipWords}
//                   className="inline-block text-blue-500 dark:text-blue-500"
//                 />
//               );
//             }
//             return <span key={index}>{word.text}</span>;
//           }}
//         </TypewriterEffectSmooth>
//       </div>
//     </div>
//   );
// }

"use client";
import React from "react";
import { FlipWords } from "./FlipWords";
import { TypewriterEffectSmooth } from "./TypewriterEffect";

export default function Banner() {
  const flipWords = [
    "Maintenance",
    " Safety",
    "Production",
    "Quality",
    "Utility",
  ];

  const typewriterWords = [
    {
      text: "DCOS",
    },
    {
      text: "unites",
    },
    {
      text: "FlipWords",
      isFlipWord: true,
    },
    {
      text: "at",
    },
    {
      text: "a",
    },
    {
      text: "single",
    },
    {
      text: "platform.",
    },
  ];

  const renderWord = (word, index) => {
    if (word.isFlipWord) {
      return (
        <>
          <FlipWords
            key={index}
            words={flipWords}
            className="inline-block text-secondary"
          />
          <br />
        </>
      );
    }
    return <span key={index}>{word.text}</span>;
  };

  return (
    <div className=" flex flex-col justify-center items-left">
      <div className="text-4xl font-normal text-neutral-600 dark:text-neutral-400 ">
        <TypewriterEffectSmooth
          words={typewriterWords}
          renderWord={renderWord}
        />
      </div>
    </div>
  );
}
