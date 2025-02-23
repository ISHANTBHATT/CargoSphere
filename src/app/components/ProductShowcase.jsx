// import Image from "next/image";

// export default function ProductShowcase() {
//   return (
//     <section className="container py-20">
//       <div className="grid lg:grid-cols-2 gap-12 items-center">
//         <div className="relative">
//           <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-[#e5ff00]/20 clipHexagon"></div>
//           <div className="relative">
//             <div className="absolute z-10 flex justify-center items-center w-full h-full clipHexagon">
//               <Image
//                 src="/images/OneFact.svg"
//                 width={400}
//                 height={400}
//                 alt="Product Image"
//                 className="object-cover"
//               />
//             </div>
//             <svg viewBox="0 0 200 200" className="w-full h-full">
//               {Array.from({ length: 6 }).map((_, i) => (
//                 <polygon
//                   key={i}
//                   points="100,10 190,50 190,150 100,190 10,150 10,50"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="1"
//                   className="text-gray-200"
//                   transform={`rotate(${i * 60} 100 100) scale(${
//                     0.8 + i * 0.1
//                   })`}
//                 />
//               ))}
//             </svg>
//           </div>
//         </div>
//         <div className="space-y-6">
//           <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
//             <div className="h-6 w-12 bg-purple-500 rounded-full"></div>
//             <span>NEW PRODUCT</span>
//           </div>
//           <h2 className="text-4xl font-bold">
//             Introducing <span className="text-purple-500">HexaGear</span>
//           </h2>
//           <p className="text-muted-foreground">
//             Experience the future of wearable technology with our revolutionary
//             HexaGear smartwatch.
//           </p>
//           <ul className="space-y-4">
//             <li className="flex items-center gap-2">
//               <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
//                 1
//               </span>
//               Advanced health monitoring with AI-powered insights
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
//                 2
//               </span>
//               Seamless integration with smart home devices
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
//                 3
//               </span>
//               Extended battery life of up to 7 days
//             </li>
//             <li className="flex items-center gap-2">
//               <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
//                 4
//               </span>
//               Customizable hexagonal display for unique style
//             </li>
//           </ul>
//         </div>
//       </div>
//     </section>
//   );
// }

import Image from "next/image";

export default function ProductShowcase() {
  return (
    <section className="container py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-[#e5ff00]/20 clip-hexagon"></div>
          <div className="relative">
            <div className="absolute z-10 flex justify-center items-center w-full h-full clip-hexagon">
              <Image
                src="/images/OneFact.svg"
                width={400}
                height={400}
                alt="Flow Image"
                className="object-cover"
              />
            </div>
            {/* <svg viewBox="0 0 200 200" className="w-full h-full">
              {Array.from({ length: 6 }).map((_, i) => (
                <polygon
                  key={i}
                  points="100,10 190,50 190,150 100,190 10,150 10,50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-200"
                  strokeDasharray="4 4"
                  transform={`scale(${0.5 + i * 0.1})`}
                />
              ))}
            </svg> */}
            <svg viewBox="0 0 200 200" className="w-full h-full">
              {Array.from({ length: 10 }).map((_, i) => (
                <polygon
                  key={i}
                  points="100,0 200,50 200,150 100,200 0,150 0,50"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  className="text-gray-200"
                  strokeDasharray="4 4"
                  transform={`translate(100, 100) scale(${
                    0.5 + i * 0.1
                  }) translate(-100, -100)`}
                />
              ))}
            </svg>
          </div>
        </div>
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-gray-100 px-4 py-2 rounded-full">
            <div className="h-6 w-12 bg-[#F75F00] rounded-full"></div>
            <span>NEW PRODUCT</span>
          </div>
          <h2 className="text-4xl font-bold">
            One Factory-<span className="text-[#F75F00]"> One Platform</span>
          </h2>
          <p className="text-muted-foreground">
            Experience the future of wearable technology with our revolutionary
            HexaGear smartwatch.
          </p>
          <ul className="space-y-4">
            <li className="flex items-center gap-4">
              <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
                1
              </span>
              A no-code, platform designed to build solutions tailored to your
              specific shop floor needs.
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-[#e5ff00] text-black w-6 h-6 rounded-full flex items-center justify-center">
                2
              </span>
              Connects 600+ Processes Digitally without disrupting your existing
              setup.
            </li>
            <li className="flex items-center gap-4">
              <span className="bg-[#e5ff00] text-black w-10 h-6 rounded-full flex items-center justify-center">
                3
              </span>
              Helps you become future-ready by aligning with Industry 5.0
              standards, transforming your operations into a Lighthouse factory.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
