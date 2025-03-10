// import Link from "next/link";
// import {
//   Mail,
//   MapPin,
//   Phone,
//   MessageSquare,
//   Github,
//   Twitter,
// } from "lucide-react";

// export default function ContactPage() {
//   return (
//     <main className="min-h-screen relative overflow-hidden">
//       {/* Colorful gradient background */}
//       <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-orange-100 to-orange-100 opacity-70 z-0" />

//       <div className="relative z-10 pt-16 pb-20 px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
//         {/* Back to home link */}
//         <div className="mb-12">
//           <Link
//             href="/"
//             className="inline-flex items-center text-sm font-medium hover:underline"
//           >
//             ← Back to home
//           </Link>
//         </div>

//         {/* Contact Header */}
//         <section className="mb-16">
//           <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight">
//             Get in Touch
//           </h1>
//           <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-200">
//             Have questions about Tiptap? We're here to help you build amazing
//             editing experiences.
//           </p>
//         </section>

//         <div className="grid md:grid-cols-2 gap-12 mb-20">
//           {/* Contact Form */}
//           <section className="bg-black/30 backdrop-blur-sm p-8 rounded-xl">
//             <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
//             <form className="space-y-6">
//               <div className="space-y-2">
//                 <label htmlFor="name" className="block text-sm font-medium">
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
//                   placeholder="Your name"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="email" className="block text-sm font-medium">
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
//                   placeholder="your.email@example.com"
//                 />
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="subject" className="block text-sm font-medium">
//                   Subject
//                 </label>
//                 <select
//                   id="subject"
//                   className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
//                 >
//                   <option value="">Select a subject</option>
//                   <option value="general">General Inquiry</option>
//                   <option value="support">Technical Support</option>
//                   <option value="enterprise">Enterprise Solutions</option>
//                   <option value="feedback">Feedback</option>
//                 </select>
//               </div>

//               <div className="space-y-2">
//                 <label htmlFor="message" className="block text-sm font-medium">
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   rows={5}
//                   className="w-full px-4 py-3 bg-black/50 border border-white/20 rounded-md focus:outline-none focus:ring-2 focus:ring-white/30"
//                   placeholder="How can we help you?"
//                 ></textarea>
//               </div>

//               <button
//                 type="submit"
//                 className="w-full px-6 py-3 bg-white text-black font-medium rounded-md hover:bg-gray-100 transition-colors"
//               >
//                 Send Message
//               </button>
//             </form>
//           </section>

//           {/* Contact Information */}
//           <section className="space-y-8">
//             <div>
//               <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
//               <p className="text-gray-200 mb-8">
//                 We're always happy to hear from you. Here are the ways you can
//                 reach us.
//               </p>
//             </div>

//             <div className="space-y-6">
//               <div className="flex items-start">
//                 <div className="flex-shrink-0 bg-black/30 p-3 rounded-full mr-4">
//                   <Mail size={20} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium mb-1">Email</h3>
//                   <a
//                     href="mailto:hello@tiptap.dev"
//                     className="text-gray-200 hover:text-white"
//                   >
//                     hello@tiptap.dev
//                   </a>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="flex-shrink-0 bg-black/30 p-3 rounded-full mr-4">
//                   <MapPin size={20} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium mb-1">Office</h3>
//                   <address className="text-gray-200 not-italic">
//                     123 Editor Street
//                     <br />
//                     San Francisco, CA 94103
//                     <br />
//                     United States
//                   </address>
//                 </div>
//               </div>

//               <div className="flex items-start">
//                 <div className="flex-shrink-0 bg-black/30 p-3 rounded-full mr-4">
//                   <Phone size={20} />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-medium mb-1">Phone</h3>
//                   <a
//                     href="tel:+15551234567"
//                     className="text-gray-200 hover:text-white"
//                   >
//                     +1 (555) 123-4567
//                   </a>
//                 </div>
//               </div>
//             </div>

//             {/* Social Media */}
//             <div className="pt-6 border-t border-white/10">
//               <h3 className="text-lg font-medium mb-4">Connect with us</h3>
//               <div className="flex space-x-4">
//                 <a
//                   href="#"
//                   className="bg-black/30 p-3 rounded-full hover:bg-black/50 transition-colors"
//                   aria-label="Twitter"
//                 >
//                   <Twitter size={20} />
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-black/30 p-3 rounded-full hover:bg-black/50 transition-colors"
//                   aria-label="GitHub"
//                 >
//                   <Github size={20} />
//                 </a>
//                 <a
//                   href="#"
//                   className="bg-black/30 p-3 rounded-full hover:bg-black/50 transition-colors"
//                   aria-label="Discord"
//                 >
//                   <MessageSquare size={20} />
//                 </a>
//               </div>
//             </div>
//           </section>
//         </div>

//         {/* FAQ Section */}
//         <section className="bg-black/40 backdrop-blur-md rounded-xl p-8 md:p-12">
//           <h2 className="text-2xl font-bold mb-8">
//             Frequently Asked Questions
//           </h2>

//           <div className="space-y-6">
//             <div className="border-b border-white/10 pb-6">
//               <h3 className="text-xl font-medium mb-3">
//                 How do I get started with Tiptap?
//               </h3>
//               <p className="text-gray-200">
//                 The easiest way to get started is to check out our documentation
//                 and follow the quick start guide. We also have several examples
//                 and templates to help you get up and running quickly.
//               </p>
//             </div>

//             <div className="border-b border-white/10 pb-6">
//               <h3 className="text-xl font-medium mb-3">
//                 Is Tiptap free to use?
//               </h3>
//               <p className="text-gray-200">
//                 Yes, Tiptap is open source and free to use. We also offer
//                 premium extensions and enterprise support for teams that need
//                 additional features or assistance.
//               </p>
//             </div>

//             <div className="border-b border-white/10 pb-6">
//               <h3 className="text-xl font-medium mb-3">
//                 Can I customize Tiptap to match my brand?
//               </h3>
//               <p className="text-gray-200">
//                 Tiptap is designed to be highly customizable. You can style it
//                 to match your brand, add custom extensions, and create a unique
//                 editing experience for your users.
//               </p>
//             </div>

//             <div>
//               <h3 className="text-xl font-medium mb-3">
//                 Do you offer technical support?
//               </h3>
//               <p className="text-gray-200">
//                 We offer community support through our GitHub repository and
//                 Discord channel. For enterprise customers, we provide dedicated
//                 technical support and priority bug fixes.
//               </p>
//             </div>
//           </div>

//           <div className="mt-8 text-center">
//             <p className="text-gray-300 mb-4">Still have questions?</p>
//             <Link
//               href="/docs"
//               className="inline-flex items-center justify-center px-6 py-3 border border-white/30 rounded-md hover:bg-white/10 transition-colors"
//             >
//               Visit our Documentation
//             </Link>
//           </div>
//         </section>
//       </div>
//     </main>
//   );
// }

import Link from "next/link";
import {
  Mail,
  MapPin,
  Phone,
  MessageSquare,
  Github,
  Twitter,
} from "lucide-react";

export default function ContactPage() {
  return (
    <main className="min-h-screen relative overflow-hidden py-20">
      {/* Colorful gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-200 via-orange-100 to-orange-100 opacity-70 z-0" />

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

        {/* Contact Header */}
        <section className="mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 tracking-tight text-gray-800">
            Get in Touch
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mb-8 text-gray-600">
            Have questions about Tiptap? We're here to help you build amazing
            editing experiences.
          </p>
        </section>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <section className="bg-white/80 backdrop-blur-sm p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6 text-secondary">
              Send us a message
            </h2>
            <form className="space-y-6">
              <div className="space-y-2">
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-800"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="Your name"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-800"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="your.email@example.com"
                />
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium text-gray-800"
                >
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="support">Technical Support</option>
                  <option value="enterprise">Enterprise Solutions</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-800"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-100 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-300"
                  placeholder="How can we help you?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-orange-600 text-white font-medium rounded-md hover:bg-orange-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </section>

          {/* Contact Information */}
          <section className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-gray-800">
                Contact Information
              </h2>
              <p className="text-gray-600 mb-8">
                We're always happy to hear from you. Here are the ways you can
                reach us.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/80 p-3 rounded-full mr-4 shadow">
                  <Mail size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-800">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@tiptap.dev"
                    className="text-gray-600 hover:text-secondary"
                  >
                    hello@tiptap.dev
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/80 p-3 rounded-full mr-4 shadow">
                  <MapPin size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-800">
                    Office
                  </h3>
                  <address className="text-gray-600 not-italic">
                    123 Editor Street
                    <br />
                    San Francisco, CA 94103
                    <br />
                    United States
                  </address>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 bg-white/80 p-3 rounded-full mr-4 shadow">
                  <Phone size={20} className="text-secondary" />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-1 text-gray-800">
                    Phone
                  </h3>
                  <a
                    href="tel:+15551234567"
                    className="text-gray-600 hover:text-secondary"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="pt-6 border-t border-gray-300">
              <h3 className="text-lg font-medium mb-4 text-gray-800">
                Connect with us
              </h3>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="bg-white/80 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter size={20} className="text-secondary" />
                </a>
                <a
                  href="#"
                  className="bg-white/80 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="GitHub"
                >
                  <Github size={20} className="text-secondary" />
                </a>
                <a
                  href="#"
                  className="bg-white/80 p-3 rounded-full hover:bg-gray-200 transition-colors"
                  aria-label="Discord"
                >
                  <MessageSquare size={20} className="text-secondary" />
                </a>
              </div>
            </div>
          </section>
        </div>

        {/* FAQ Section */}
        <section className="bg-white/80 backdrop-blur-md rounded-xl p-8 md:p-12 shadow-md">
          <h2 className="text-2xl font-bold mb-8 text-gray-800">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-xl font-medium mb-3 text-gray-800">
                How do I get started with Tiptap?
              </h3>
              <p className="text-gray-600">
                The easiest way to get started is to check out our documentation
                and follow the quick start guide. We also have several examples
                and templates to help you get up and running quickly.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-xl font-medium mb-3 text-gray-800">
                Is Tiptap free to use?
              </h3>
              <p className="text-gray-600">
                Yes, Tiptap is open source and free to use. We also offer
                premium extensions and enterprise support for teams that need
                additional features or assistance.
              </p>
            </div>

            <div className="border-b border-gray-300 pb-6">
              <h3 className="text-xl font-medium mb-3 text-gray-800">
                Can I customize Tiptap to match my brand?
              </h3>
              <p className="text-gray-600">
                Tiptap is designed to be highly customizable. You can style it
                to match your brand, add custom extensions, and create a unique
                editing experience for your users.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-medium mb-3 text-gray-800">
                Do you offer technical support?
              </h3>
              <p className="text-gray-600">
                We offer community support through our GitHub repository and
                Discord channel. For enterprise customers, we provide dedicated
                technical support and priority bug fixes.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-500 mb-4">Still have questions?</p>
            <Link
              href="/docs"
              className="inline-flex items-center justify-center px-6 py-3 border border-orange-600 text-secondary rounded-md hover:bg-orange-600 hover:text-white transition-colors"
            >
              Visit our Documentation
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
