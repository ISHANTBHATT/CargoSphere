// import React from "react";
// import Banner from "./Banner";
// import Image from "next/image";
// export default function Banner2() {
//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-200 to-orange-100 py-20">
//       <main className="max-w-7xl mx-auto px-6 pt-12">
//         <div className="grid gap-16">
//           {/* <div className="space-y-4">
//             <h2 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900 max-w-2xl">
//               The Basics of
//               <br />
//               Central Bank Digital
//               <br />
//               Currency
//             </h2>
//           </div> */}
//           <div className="flex justify-between items-center ">
//             <Banner />
//             <div className="relative">
//               <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-[#e5ff00]/20 rounded-3xl transform rotate-6"></div>
//               <Image
//                 src="/images/d3.jpg"
//                 alt="Modern Bank Card"
//                 width={400}
//                 height={400}
//                 className="relative z-10 transform -rotate-12 rounded-[50px]"
//               />
//               {/* <Image
//                 src="/images/banner.gif"
//                 alt="Modern Bank Card"
//                 width={400}
//                 height={400}
//                 className="relative z-10 transform "
//               /> */}
//             </div>
//           </div>
//           <div className="grid md:grid-cols-3 gap-20 relative w-full h-full">
//             <div className="space-y-4 w-full h-full border-t-2 border-r-2 border-white py-20 rounded-tr-[100px]">
//               <div className="text-sm text-gray-500">.01</div>
//               <h3 className="text-xl font-semibold">About</h3>
//               <p className="text-gray-600">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry.
//               </p>
//             </div>

//             <div className="space-y-4 w-full h-full border-t-2 border-r-2 border-white py-20 rounded-tr-[100px]">
//               <div className="text-sm text-gray-500">.02</div>
//               <h3 className="text-xl font-semibold">Storing</h3>
//               <p className="text-gray-600">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s
//               </p>
//             </div>

//             <div className="space-y-4 w-full h-full border-t-2 border-r-2 border-white py-20 rounded-tr-[100px]">
//               <div className="text-sm text-gray-500">.03</div>
//               <h3 className="text-xl font-semibold">Functions</h3>
//               <p className="text-gray-600">
//                 Lorem Ipsum is simply dummy text of the printing and typesetting
//                 industry. Lorem Ipsum has been the industry's standard dummy
//                 text ever since the 1500s, It has survived not only five
//                 centuries.
//               </p>
//             </div>

//             {/* Abstract shape overlay - represented as a semi-transparent gradient */}
//             <div className="absolute inset-0 pointer-events-none">
//               <div className="w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent rounded-full blur-3xl transform rotate-45" />
//             </div>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }

// Banner2.jsx
import React from "react";
import Banner from "./Banner";
import Image from "next/image";

export default function Banner2() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-200 to-orange-100 py-20">
      <main className="max-w-7xl mx-auto px-6 pt-12">
        <div className="grid gap-12">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
            <Banner />
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-[#e5ff00]/20 rounded-3xl transform rotate-6"></div>
              <Image
                src="/images/d3.jpg"
                alt="Modern Bank Card"
                width={400}
                height={400}
                className="relative z-10 w-full max-w-[300px] sm:max-w-[350px] md:max-w-[400px] transform -rotate-12 rounded-[30px] md:rounded-[50px]"
              />
            </div>
          </div>

          <div className="grid gap-10 sm:grid-cols-1 lg:grid-cols-2 relative w-full">
            {[
              {
                id: "01",
                title: "MISSION",
                text: "To craft technological solutions that simplify and accelerate global supply chain processes, provide data-driven insights, enable seamless collaboration, foster innovation and promote sustainability.",
              },
              {
                id: "02",
                title: "VISION",
                text: "Enabling accelerated and sustainable supply chain.",
              },
              // {
              //   id: "03",
              //   title: "Functions",
              //   text: "It has survived not only five centuries.",
              // },
            ].map((item) => (
              <div
                key={item.id}
                className="space-y-4 p-6 sm:p-10 border-t-2 border-r-2 border-white rounded-tr-[50px] sm:rounded-tr-[100px]"
              >
                <div className="text-sm text-gray-500">.{item.id}</div>
                <h3 className="text-lg sm:text-xl font-semibold">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}
