"use client";

import Image from "next/image";

export default function Client() {
  return (
    <div className="relative flex flex-col gap-8 overflow-hidden py-20">
      <div>
        <p className="mx-4  text-center text-2xl font-medium text-neutral-600 md:text-4xl">
          1B+ requests tracked for users like...
        </p>
      </div>
      {/* Top row - moving right */}
      <div className="flex w-full -rotate-[8deg] translate-y-14 bg-black border-black border-2 overflow-hidden">
        <div className="animate-marquee-right flex min-w-full shrink-0 items-center justify-around gap-8">
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/daber.svg"
              alt="Logo 1"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/tvs.svg"
              alt="Logo 2"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/unilever.svg"
              alt="Logo 3"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/amber.svg"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/torey.svg"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/hero.svg"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="animate-marquee-right flex min-w-full shrink-0 items-center justify-around gap-8"
        >
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/daber.svg"
              alt="Logo 1"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/tvs.svg"
              alt="Logo 2"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/unilever.svg"
              alt="Logo 3"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/amber.svg"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/torey.svg"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/hero.svg"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>

      {/* Bottom row - moving left */}
      <div className="flex w-full rotate-[8deg] -translate-y-14 bg-black border-black border-2 overflow-hidden">
        <div className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-8">
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/daber.svg"
              alt="Logo 1"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/tvs.svg"
              alt="Logo 2"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/unilever.svg"
              alt="Logo 3"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/amber.svg"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/torey.svg"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/hero.svg"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
        <div
          aria-hidden="true"
          className="animate-marquee-left flex min-w-full shrink-0 items-center justify-around gap-8"
        >
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/daber.svg"
              alt="Logo 1"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/tvs.svg"
              alt="Logo 2"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/unilever.svg"
              alt="Logo 3"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/amber.svg"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/torey.svg"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <div className="flex h-20 w-48 items-center justify-center hover:bg-neutral-800">
            <Image
              src="/images/hero.svg"
              alt="Logo 4"
              width={192}
              height={80}
              className="max-h-full max-w-full object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

//working static

// import React from "react";

// function Client() {
//   const brandsGroup1 = [
//     "Nike",
//     "3M",
//     "Abstract",
//     "Adobe",
//     "Airtable",
//     "Amazon",
//     "Box",
//     "Bytedance",
//     "Chase",
//     "Cloudebees",
//   ];

//   const brandsGroup2 = [
//     "BMW",
//     "Burton",
//     "Buildkite",
//     "Couchbase",
//     "deliveroo",
//     "Epic Games",
//     "Genius",
//     "GoDaddy",
//     "Heroku",
//   ];

//   return (
//     <div
//       style={{ display: "block" }}
//       className="no-scrollbar relative w-full overflow-hidden overflow-y-scroll border border-neutral-300 bg-white"
//     >
//       <section className="bg-amber-200 py-24">
//         <p className="mx-4 mb-12 text-center text-2xl font-medium text-neutral-900 md:text-4xl">
//           1B+ requests tracked for users like...
//         </p>

//         {/* First Group */}
//         <div className="flex translate-y-[50%] rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900 bg-neutral-50">
//           {Array(3)
//             .fill(brandsGroup1)
//             .map((brands, groupIndex) => (
//               <div
//                 key={`group1-${groupIndex}`}
//                 className="flex px-2"
//                 style={{ transform: "translateX(0%) translateZ(0)" }}
//               >
//                 {brands.map((brand, index) => (
//                   <a
//                     key={`group1-${groupIndex}-${index}`}
//                     href="/"
//                     rel="nofollow"
//                     target="_blank"
//                     className="flex items-center justify-center gap-4 px-4 py-4 text-black transition-colors hover:bg-neutral-200 md:py-6"
//                   >
//                     <span className="whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl">
//                       {brand}
//                     </span>
//                   </a>
//                 ))}
//               </div>
//             ))}
//         </div>

//         {/* Second Group */}
//         <div className="flex -translate-y-[50%] -rotate-[7deg] scale-110 overflow-hidden border-y-4 border-neutral-900 bg-neutral-50">
//           {Array(2)
//             .fill(brandsGroup2)
//             .map((brands, groupIndex) => (
//               <div
//                 key={`group2-${groupIndex}`}
//                 className="flex px-2"
//                 style={{ transform: "translateX(-100%) translateZ(0)" }}
//               >
//                 {brands.map((brand, index) => (
//                   <a
//                     key={`group2-${groupIndex}-${index}`}
//                     href="/"
//                     rel="nofollow"
//                     target="_blank"
//                     className="flex items-center justify-center gap-4 px-4 py-4 text-black transition-colors hover:bg-neutral-200 md:py-6"
//                   >
//                     <span className="whitespace-nowrap text-2xl font-semibold uppercase md:text-3xl">
//                       {brand}
//                     </span>
//                   </a>
//                 ))}
//               </div>
//             ))}
//         </div>
//       </section>
//     </div>
//   );
// }

// export default Client;
