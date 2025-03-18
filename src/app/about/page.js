// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { ArrowRight, Mail, Github, Twitter } from "lucide-react";
// function page() {
//   return (
//     <main className="min-h-screen relative overflow-hidden">
//       {/* Colorful gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-orange-100 to-orange-100 opacity-70 z-0" />

//       {/* Hero Section */}
//       <div className="relative z-10 pt-32 pb-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-center">
//         <div className="mb-16">
//           <p className="text-xl font-medium mb-6">About Us</p>
//           <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-neutral-600">
//             Ship unique editors
//             <br />
//             <span className="font-serif italic font-normal">
//               fast with Tiptap
//             </span>
//           </h1>
//           <p className="text-xl md:text-2xl max-w-3xl mx-auto mt-8 text-neutral-400">
//             From writing blog posts, publishing news stories and collaborating
//             with AI, Tiptap helps create content around the web.
//           </p>
//         </div>
//       </div>
//       <div className="relative z-10 pt-16 pb-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
//         {/* Back to home link */}
//         <div className="mb-12">
//           <Link
//             href="/"
//             className="inline-flex items-center text-sm font-medium hover:underline"
//           >
//             ← Back to home
//           </Link>
//         </div>

//         {/* Introduction Section */}
//         <section className="mb-20">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
//             About Tiptap
//           </h1>
//           <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-400">
//             We're building the most versatile rich text editor framework for web
//             applications.
//           </p>
//           <div className="prose prose-lg prose-invert max-w-none">
//             <p>
//               Tiptap gives developers the freedom to create unique editing
//               experiences without compromising on quality or performance. Our
//               framework is built on top of ProseMirror, providing a solid
//               foundation with a more intuitive API.
//             </p>
//           </div>
//         </section>

//         {/* Purpose and Goals Section */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-bold mb-6">Our Mission</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
//               <h3 className="text-xl font-semibold mb-3">Empower Developers</h3>
//               <p className="text-gray-200">
//                 We believe that content creation should be flexible and
//                 powerful. Our goal is to provide developers with tools that make
//                 it easy to build custom editing experiences that meet their
//                 specific needs.
//               </p>
//             </div>
//             <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
//               <h3 className="text-xl font-semibold mb-3">Open Source First</h3>
//               <p className="text-gray-200">
//                 Tiptap is built on open source principles. We're committed to
//                 maintaining a robust community-driven core while offering
//                 premium extensions and support for enterprise needs.
//               </p>
//             </div>
//             <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
//               <h3 className="text-xl font-semibold mb-3">
//                 Performance Focused
//               </h3>
//               <p className="text-gray-200">
//                 We optimize for speed and reliability. Tiptap is designed to
//                 handle complex documents while maintaining a smooth user
//                 experience, even on mobile devices.
//               </p>
//             </div>
//             <div className="bg-black/30 backdrop-blur-sm p-6 rounded-lg">
//               <h3 className="text-xl font-semibold mb-3">
//                 Developer Experience
//               </h3>
//               <p className="text-gray-200">
//                 We prioritize excellent documentation, intuitive APIs, and
//                 comprehensive examples to make integration as seamless as
//                 possible for developers of all skill levels.
//               </p>
//             </div>
//           </div>
//         </section>

//         {/* Team Section */}
//         <section className="mb-20">
//           <h2 className="text-3xl font-bold mb-6">The Team</h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[1, 2, 3].map((member) => (
//               <div
//                 key={member}
//                 className="flex flex-col items-center text-center"
//               >
//                 <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-800">
//                   <Image
//                     src={`/placeholder.svg?height=128&width=128`}
//                     alt={`Team member ${member}`}
//                     width={128}
//                     height={128}
//                     className="object-cover"
//                   />
//                 </div>
//                 <h3 className="text-xl font-semibold mb-1">
//                   Team Member {member}
//                 </h3>
//                 <p className="text-gray-300 mb-3">Co-founder & Developer</p>
//                 <div className="flex space-x-3">
//                   <a href="#" className="text-gray-300 hover:text-white">
//                     <Twitter size={18} />
//                   </a>
//                   <a href="#" className="text-gray-300 hover:text-white">
//                     <Github size={18} />
//                   </a>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </section>

//         {/* Contact/CTA Section */}
//         <section className="bg-black/40 backdrop-blur-md rounded-xl p-8 md:p-12">
//           <div className="md:flex items-center justify-between">
//             <div className="mb-6 md:mb-0 md:mr-8">
//               <h2 className="text-3xl font-bold mb-3">Get in Touch</h2>
//               <p className="text-xl text-gray-200 max-w-xl">
//                 Have questions about Tiptap or need help with implementation?
//                 We'd love to hear from you.
//               </p>
//             </div>
//             <div className="flex flex-col space-y-4">
//               <Link
//                 href="mailto:hello@tiptap.dev"
//                 className="inline-flex items-center justify-center px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
//               >
//                 <Mail className="mr-2" size={18} />
//                 Contact Us
//               </Link>
//               <Link
//                 href="/docs"
//                 className="inline-flex items-center justify-center px-6 py-3 border border-white/30 rounded-md hover:bg-white/10 transition-colors"
//               >
//                 View Documentation
//                 <ArrowRight className="ml-2" size={18} />
//               </Link>
//             </div>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

// export default page;

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ArrowRight, Mail, Github, Twitter } from "lucide-react";

function page() {
  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Colorful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-orange-100 to-orange-100 opacity-70 z-0" />

      {/* Hero Section */}
      <div className="relative z-10 pt-32 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto text-center">
        <div className="mb-16">
          <p className="text-xl font-medium mb-6 text-secondary">About Us</p>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 tracking-tight text-gray-800">
            CargoSphere
            <br />
            <span className="font-serif italic font-normal text-secondary">
              Technologies
            </span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto mt-8 text-gray-600">
            Accelerating Global Supply Chains with Seamless Efficiency
          </p>
        </div>
      </div>

      <div className="relative z-10 pt-16 pb-20 px-4 md:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Back to home link */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center text-sm font-medium text-secondary hover:underline"
          >
            ← Back to home
          </Link>
        </div>

        {/* Introduction Section */}
        <section className="mb-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-800">
            About CargoSphere
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-600">
            We are developing a new Cargo Operating System that would enable the
            Cargo & Logistic Industry to function seamlessly.
          </p>
          <div className="prose prose-lg prose-invert max-w-none text-gray-700">
            <p>
              Our product offers several industry new features and capability
              that would address the much needed Productivity, Visibility and
              Sustainability demands along with ease of use and one-click
              interface for a range of value added services.
            </p>
          </div>
        </section>

        {/* Purpose and Goals Section */}
        {/* <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Mission</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Empower Developers",
                text: "We believe that content creation should be flexible and powerful. Our goal is to provide developers with tools that make it easy to build custom editing experiences that meet their specific needs.",
              },
              {
                title: "Open Source First",
                text: "Tiptap is built on open source principles. We're committed to maintaining a robust community-driven core while offering premium extensions and support for enterprise needs.",
              },
              {
                title: "Performance Focused",
                text: "We optimize for speed and reliability. Tiptap is designed to handle complex documents while maintaining a smooth user experience, even on mobile devices.",
              },
              {
                title: "Developer Experience",
                text: "We prioritize excellent documentation, intuitive APIs, and comprehensive examples to make integration as seamless as possible for developers of all skill levels.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="bg-white/80  p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-xl font-semibold mb-3 text-secondary">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            ))}
          </div>
        </section> */}
        <div className="flex flex-col ">
          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Our Logo Story
            </h2>
            <div className=" gap-8">
              <div className="bg-white/80  p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 text-lg">
                  Our logo symbolizes CargoSphereTechnologies' commitment
                  toaccelerating and sustaining global supplychains. The sphere
                  represents our globalreach, while the dynamic arrows
                  illustrateseamless movement and efficiency. Thenetwork pattern
                  highlights our focus ondata-driven insights and collaboration.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Our Mission
            </h2>
            <div className=" gap-8">
              <div className="bg-white/80  p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 text-lg">
                  To craft technological solutions that simplify and accelerate
                  global supply chain processes, provide data-driven insights,
                  enable seamless collaboration, foster innovation and promote
                  sustainability
                </p>
              </div>
            </div>
          </section>

          <section className="mb-20 w-full">
            <h2 className="text-3xl font-bold mb-6 text-gray-800">
              Our VISION
            </h2>
            <div className=" gap-8">
              <div className="bg-white/80  p-6 rounded-lg shadow-lg">
                <p className="text-gray-600 text-lg">
                  Enabling accelerated and sustainable supply chain
                </p>
              </div>
            </div>
          </section>
        </div>

        {/* Team Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold mb-6 text-gray-800">The Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((member) => (
              <div
                key={member}
                className="flex flex-col items-center text-center"
              >
                <div className="w-32 h-32 rounded-full overflow-hidden mb-4 bg-gray-100">
                  <Image
                    src={`/placeholder.svg?height=128&width=128`}
                    alt={`Team member ${member}`}
                    width={128}
                    height={128}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-1 text-gray-800">
                  Team Member {member}
                </h3>
                <p className="text-gray-600 mb-3">Co-founder & Developer</p>
                <div className="flex space-x-3">
                  <a
                    href="#"
                    className="text-secondary hover:text-secondary/40"
                  >
                    <Twitter size={18} />
                  </a>
                  <a
                    href="#"
                    className="text-secondary hover:text-secondary/40"
                  >
                    <Github size={18} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact/CTA Section */}
        <section className="bg-gray-100/80  rounded-xl p-8 md:p-12 shadow-md">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0 md:mr-8">
              <h2 className="text-3xl font-bold mb-3 text-gray-800">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-700 max-w-xl">
                Discover how we can enhance your supply chain operations. We'd
                love to hear from you.
              </p>
            </div>
            <div className="flex flex-col space-y-4">
              <Link
                // href="mailto:hello@tiptap.dev"
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 bg-secondary text-white font-medium rounded-md hover:bg-orange-600 transition-colors"
              >
                <Mail className="mr-2" size={18} />
                Contact Us
              </Link>
              <Link
                href="/docs"
                className="inline-flex items-center justify-center px-6 py-3 border border-secondary text-secondary rounded-md hover:bg-orange-600 hover:text-white transition-colors"
              >
                View Documentation
                <ArrowRight className="ml-2" size={18} />
              </Link>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default page;
