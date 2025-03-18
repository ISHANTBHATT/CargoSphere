// "use client";
// import Image from "next/image";
// import {
//   Monitor,
//   Calendar,
//   Search,
//   FileText,
//   Smartphone,
//   Clock,
//   Link2,
//   House,
// } from "lucide-react";
// import { Button } from "@/components/ui/button";

// export default function Page() {
//   return (
//     <main className="min-h-screen">
//       {/* Hero Section */}
//       <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white">
//         <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-br from-purple-100/50 to-pink-100/30 rounded-bl-[100px] -z-10"></div>
//         <div className="container mx-auto px-4 py-16 md:py-24">
//           <div className="flex flex-col md:flex-row items-center gap-8">
//             <div className="flex-1">
//               <div className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-500 font-medium text-sm mb-6">
//                 Bootstrap 5 Mobile Application HTML Template
//               </div>
//               <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-purple-600 mb-6">
//                 Mobile
//                 <br />
//                 DigiClinic UIUX
//               </h1>
//               <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-6">
//                 Mobile App HTML Template
//               </h2>
//               <p className="text-gray-600 mb-8 max-w-lg">
//                 Mobile DigiClinic UIUX is a premium mobile app HTML template
//                 built on Bootstrap 5, designed specifically for healthcare and
//                 medical clinic software products. This modern, responsive
//                 template offers a clean, professional design tailored to the
//                 unique needs of the healthcare industry.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-6 items-center">
//                 <div>
//                   <Image
//                     src="/images/f1.png"
//                     alt="QR Code"
//                     width={150}
//                     height={150}
//                     className="border border-gray-200 rounded-lg"
//                   />
//                   <div className="mt-2">
//                     <h4 className="font-semibold">Preview Now</h4>
//                     <p className="text-sm text-gray-500">It's live demo</p>
//                   </div>
//                 </div>
//                 <Button className="bg-white hover:bg-gray-50 text-purple-600 border border-purple-200 rounded-full px-8">
//                   Buy now
//                 </Button>
//               </div>
//             </div>
//             <div className="flex-1 relative">
//               <div className="relative w-[300px] h-[600px] mx-auto">
//                 <div className="absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-[40px] p-2">
//                   <div className="bg-white h-full w-full rounded-[36px] overflow-hidden">
//                     <Image
//                       src="/images/f1.png"
//                       alt="Mobile App Preview"
//                       width={300}
//                       height={600}
//                       className="object-cover"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Main Heading Section */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4 text-center">
//           <div className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-500 font-medium text-sm mb-6">
//             Why DigiClinic Mobile
//           </div>
//           <h2 className="text-3xl md:text-5xl font-bold text-purple-600 mb-8 max-w-4xl mx-auto">
//             Healthcare, Medical & Clinical Appointment Booking Mobile App HTML
//             Template
//           </h2>

//           <div className="grid md:grid-cols-3 gap-8 mt-16">
//             <div className="bg-white p-8 rounded-xl shadow-sm">
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <FileText className="w-8 h-8 text-red-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">Patient Registry</h3>
//               <p className="text-gray-600">
//                 Easy to create patient and maintain records with patient's
//                 health history. Track medical precautions with medication given.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-sm">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <Monitor className="w-8 h-8 text-blue-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">Appointment Booking</h3>
//               <p className="text-gray-600">
//                 Create appointment and track booking progress with patient
//                 history and details. Chat and call with patient on the go.
//               </p>
//             </div>

//             <div className="bg-white p-8 rounded-xl shadow-sm">
//               <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <Search className="w-8 h-8 text-yellow-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">Quickly Find Details</h3>
//               <p className="text-gray-600">
//                 Quickly you can find patient's history and notes, find
//                 appointments and booking. Track your staff activities.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Section */}
//       <section className="relative py-16 md:py-24 overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-100/50 to-pink-100/30 -z-10"></div>
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-center gap-12">
//             <div className="flex-1 relative">
//               <div className="relative w-[500px] h-[400px] mx-auto">
//                 <Image
//                   src="/images/f1.png"
//                   alt="Patient Profile UI"
//                   width={500}
//                   height={400}
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//             <div className="flex-1">
//               <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mb-6">
//                 Major Features
//               </div>
//               <h2 className="text-3xl md:text-5xl font-bold text-purple-600 mb-4">
//                 Ready To Use!
//                 <br />
//                 Usable & Consistence UI
//               </h2>
//               <h3 className="text-xl md:text-2xl font-semibold text-gray-800 mb-6">
//                 Mobile HTML UI Kit To Quick Start Project With DigiClinic Admin
//                 UIUX Dashboard HTML Templates
//               </h3>
//               <p className="text-gray-600 mb-8">
//                 We have many third parties integrated with style consistency
//                 like FullCalendar, DateRangePicker, DataTable, Footable,
//                 Dropzone, Chart.js, dragula, Progressbar.js and many more...
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Development Section */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="flex flex-col md:flex-row items-start gap-12">
//             <div className="flex-1">
//               <div className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-500 font-medium text-sm mb-6">
//                 Do More...
//               </div>
//               <h2 className="text-3xl md:text-5xl font-bold text-purple-600 mb-8">
//                 Streamline Development With Innovative And Consistence User
//                 Interface Designs
//               </h2>
//               <div className="relative">
//                 <Image
//                   src="/images/f1.png"
//                   alt="Dashboard UI"
//                   width={600}
//                   height={400}
//                   className="object-contain"
//                 />
//               </div>
//             </div>
//             <div className="flex-1">
//               <div className="bg-white p-8 rounded-xl shadow-sm mb-8">
//                 <p className="text-gray-700 mb-4">
//                   Our template is specifically designed to fast-track your{" "}
//                   <span className="font-semibold">healthcare appointment</span>{" "}
//                   and manage booking product development by providing
//                   ready-to-use HTML pages tailored to these industries. With
//                   pre-built pages like dashboards, calendar bookings,
//                   appointment progress, list of upcoming, documents and
//                   onboarding etc.
//                 </p>
//               </div>

//               <div className="space-y-8">
//                 <div className="flex gap-4">
//                   <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 font-bold">
//                     1
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold mb-2">
//                       Download And Quick Start
//                     </h3>
//                     <p className="text-gray-600">
//                       We have document file in folder to guide you about code
//                       structure, customization, personalization settings
//                       defaults define.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 font-bold">
//                     2
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold mb-2">
//                       Personalize Branding
//                     </h3>
//                     <p className="text-gray-600">
//                       Choose your branding assets and color scheme and define
//                       all main layouts. Currently template is using cookies for
//                       live personalize classes storage. You should run it into
//                       server/localhost.
//                     </p>
//                   </div>
//                 </div>

//                 <div className="flex gap-4">
//                   <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 font-bold">
//                     3
//                   </div>
//                   <div>
//                     <h3 className="text-xl font-bold mb-2">
//                       Finalize Ready-To-Use Pages
//                     </h3>
//                     <p className="text-gray-600">
//                       As domain specific app template it's benefit to have major
//                       commonly used screen ready. Choose page template and start
//                       development process.
//                     </p>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Features Grid */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-3 gap-6">
//             <div className="bg-yellow-50 p-8 rounded-xl">
//               <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
//                 <House className="w-6 h-6 text-yellow-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">Healthcare Projects</h3>
//               <p className="text-gray-600">
//                 Ready to use pages HTML available for healthcare, medical,
//                 clinical software development.
//               </p>
//             </div>

//             <div className="bg-blue-50 p-8 rounded-xl">
//               <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
//                 <Smartphone className="w-6 h-6 text-blue-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">Mobile Responsive</h3>
//               <p className="text-gray-600">
//                 Our template is build with mobile first framework Bootstrap 5
//                 which support major screen sizes.
//               </p>
//             </div>

//             <div className="bg-green-50 p-8 rounded-xl">
//               <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
//                 <Calendar className="w-6 h-6 text-green-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">Appointment Booking</h3>
//               <p className="text-gray-600">
//                 Our template comes with calendar appointment booking feature UI
//                 which are widely used.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Quick Start Section */}
//       <section className="relative py-16 md:py-24 overflow-hidden">
//         <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-blue-50 to-blue-100/30 -z-10"></div>
//         <div className="container mx-auto px-4 text-center">
//           <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
//             Best HTML Development
//           </div>
//           <h2 className="text-3xl md:text-5xl font-bold text-purple-600 mb-6 max-w-4xl mx-auto">
//             Quick Start Project With
//             <br />
//             Code Partials & Template Scalability
//           </h2>
//           <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
//             Convert HTML template easily with partial code and clean code
//             structure. Its very easy to compile with flat file generators.
//           </p>

//           <div className="grid md:grid-cols-3 gap-8">
//             <div className="text-center">
//               <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <FileText className="w-8 h-8 text-red-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">Bootstrap 5</h3>
//               <p className="text-gray-600">
//                 Build on top of the mobile first responsive{" "}
//                 <span className="font-semibold">Bootstrap 5</span> framework. It
//                 has large community support and third parties support for style
//                 consistency.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <Clock className="w-8 h-8 text-green-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">Save Time And Money</h3>
//               <p className="text-gray-600">
//                 Our well coded validated code structure provide flexibility and
//                 transparency to re-use code blocks.{" "}
//                 <span className="font-semibold">Save time and money</span> for
//                 customization and repeated tasks.
//               </p>
//             </div>

//             <div className="text-center">
//               <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
//                 <Link2 className="w-8 h-8 text-blue-500" />
//               </div>
//               <h3 className="text-xl font-bold mb-4">Make It Like Your Own</h3>
//               <p className="text-gray-600">
//                 Our template has dedicated page where you can customize
//                 available style option for sidebar and header. Also choose style
//                 from pre-defined set of style{" "}
//                 <span className="font-semibold">personalize</span>.
//               </p>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* App Screenshots */}
//       <section className="py-16 md:py-24">
//         <div className="container mx-auto px-4">
//           <div className="mb-16">
//             <Image
//               src="/images/f1.png"
//               alt="App Screenshots"
//               width={1200}
//               height={400}
//               className="w-full object-contain"
//             />
//           </div>

//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
//             <div>
//               <h2 className="text-5xl font-bold text-gray-800 mb-2">12</h2>
//               <p className="text-gray-600">Color schemes</p>
//             </div>

//             <div>
//               <h2 className="text-5xl font-bold text-gray-800 mb-2">100</h2>
//               <p className="text-gray-600">Pages</p>
//             </div>

//             <div>
//               <h2 className="text-5xl font-bold text-gray-800 mb-2">50</h2>
//               <p className="text-gray-600">Components</p>
//             </div>

//             <div>
//               <h2 className="text-5xl font-bold text-gray-800 mb-2">∞</h2>
//               <p className="text-gray-600">Possibilities</p>
//             </div>
//           </div>
//         </div>
//       </section>
//     </main>
//   );
// }

import Image from "next/image";
import {
  Monitor,
  Calendar,
  Search,
  FileText,
  Smartphone,
  Clock,
  Link2,
  House,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { WaveBackground, BlobBackground } from "../components/Wave-Background";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="py-10 relative overflow-hidden bg-gradient-to-br from-gray-200 via-orange-100 to-orange-100">
        <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-br from-purple-100/50 to-pink-100/30 rounded-bl-[100px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 pt-16 md:pt-36">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-500 font-medium text-sm mb-6">
                Bootstrap 5 Mobile Application HTML Template
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-700 mb-6">
                Mobile
                <br />
                DigiClinic UIUX
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-neutral-500 mb-6">
                Mobile App HTML Template
              </h2>
              <p className="text-gray-600 mb-8 ">
                Mobile DigiClinic UIUX is a premium mobile app HTML template
                built on Bootstrap 5, designed specifically for healthcare and
                medical clinic software products. This modern, responsive
                template offers a clean, professional design tailored to the
                unique needs of the healthcare industry.
              </p>
              <div className="flex flex-col sm:flex-row gap-6 items-center">
                {/* <div>
                  <Image
                    src="/images/f1.png"
                    alt="QR Code"
                    width={150}
                    height={150}
                    className="border border-gray-200 rounded-lg"
                  />
                  <div className="mt-2">
                    <h4 className="font-semibold">Preview Now</h4>
                    <p className="text-sm text-gray-500">It's live demo</p>
                  </div>
                </div> */}
                <Button
                  size="lg"
                  className="bg-neutral-700 rounded-full text-white hover:bg-black"
                >
                  Request a Demo
                </Button>
                <Button className="bg-white hover:bg-gray-50 text-secondary border border-purple-200 rounded-full px-8">
                  Buy now
                </Button>
              </div>
            </div>
            <div className="flex-1 relative">
              <div className="relative w-full h-full mx-auto">
                {/* <div className="absolute inset-0 bg-gradient-to-br from-neutral-600 to-neutral-800 rounded-[40px] p-2">
                  <div className="bg-white h-full w-full rounded-[36px] overflow-hidden">
                    <Image
                      src="/images/d1.png"
                      alt="Mobile App Preview"
                      width={300}
                      height={600}
                      className="object-cover"
                    />
                  </div>
                </div> */}
                <Image
                  src="/images/d1.png"
                  alt="Mobile App Preview"
                  width={2000}
                  height={600}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Heading Section */}
      <section className="relative py-16 md:pt-64 ">
        <WaveBackground position="top" color="#ffedd5" className="!-top-2" />
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block px-4 py-1 rounded-full bg-orange-100 text-orange-500 font-medium text-sm mb-6">
            Why DigiClinic Mobile
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-700 mb-8 max-w-4xl mx-auto">
            Healthcare, Medical & Clinical Appointment Booking Mobile App HTML
            Template
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FileText className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Patient Registry</h3>
              <p className="text-gray-600">
                Easy to create patient and maintain records with patient's
                health history. Track medical precautions with medication given.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Monitor className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Appointment Booking</h3>
              <p className="text-gray-600">
                Create appointment and track booking progress with patient
                history and details. Chat and call with patient on the go.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg border-2 border-gray-100">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Search className="w-8 h-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Quickly Find Details</h3>
              <p className="text-gray-600">
                Quickly you can find patient's history and notes, find
                appointments and booking. Track your staff activities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-16 md:py-24 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-200 to-orange-100 -z-10"></div>
        <BlobBackground position="top-right" color="#FF0066" />
        <BlobBackground position="bottom-left" color="#9333EA" />
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 relative">
              <div className="relative flex justify-center">
                <Image
                  src="/images/f1.png"
                  alt="Patient Profile UI"
                  width={500}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="inline-block px-4 py-1 rounded-full bg-purple-100 text-purple-600 font-medium text-sm mb-6">
                Major Features
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-700 mb-4">
                Ready To Use!
                <br />
                Usable & Consistence UI
              </h2>
              <h3 className="text-xl md:text-2xl font-semibold text-neutral-600 mb-6">
                Mobile HTML UI Kit To Quick Start Project With DigiClinic Admin
                UIUX Dashboard HTML Templates
              </h3>
              <p className="text-gray-600 mb-8">
                We have many third parties integrated with style consistency
                like FullCalendar, DateRangePicker, DataTable, Footable,
                Dropzone, Chart.js, dragula, Progressbar.js and many more...
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Development Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start gap-12">
            <div className="flex-1">
              <div className="inline-block px-4 py-1 rounded-full bg-pink-100 text-pink-500 font-medium text-sm mb-6">
                Do More...
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-neutral-700 mb-8">
                Streamline Development With Innovative And Consistence User
                Interface Designs
              </h2>
              <div className="relative">
                <Image
                  src="/images/f1.png"
                  alt="Dashboard UI"
                  width={600}
                  height={400}
                  className="object-contain"
                />
              </div>
            </div>
            <div className="flex-1">
              <div className="pt-20 mb-8">
                <p className="text-gray-700 mb-4">
                  Our template is specifically designed to fast-track your{" "}
                  <span className="font-semibold">healthcare appointment</span>{" "}
                  and manage booking product development by providing
                  ready-to-use HTML pages tailored to these industries. With
                  pre-built pages like dashboards, calendar bookings,
                  appointment progress, list of upcoming, documents and
                  onboarding etc.
                </p>
              </div>

              <div className="space-y-8">
                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 font-bold">
                    1
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Download And Quick Start
                    </h3>
                    <p className="text-gray-600">
                      We have document file in folder to guide you about code
                      structure, customization, personalization settings
                      defaults define.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 font-bold">
                    2
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Personalize Branding
                    </h3>
                    <p className="text-gray-600">
                      Choose your branding assets and color scheme and define
                      all main layouts. Currently template is using cookies for
                      live personalize classes storage. You should run it into
                      server/localhost.
                    </p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center text-red-500 font-bold">
                    3
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Finalize Ready-To-Use Pages
                    </h3>
                    <p className="text-gray-600">
                      As domain specific app template it's benefit to have major
                      commonly used screen ready. Choose page template and start
                      development process.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative pb-16 md:pb-52">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-yellow-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-6">
                <House className="w-6 h-6 text-yellow-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Healthcare Projects</h3>
              <p className="text-gray-600">
                Ready to use pages HTML available for healthcare, medical,
                clinical software development.
              </p>
            </div>

            <div className="bg-blue-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Mobile Responsive</h3>
              <p className="text-gray-600">
                Our template is build with mobile first framework Bootstrap 5
                which support major screen sizes.
              </p>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                <Calendar className="w-6 h-6 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Appointment Booking</h3>
              <p className="text-gray-600">
                Our template comes with calendar appointment booking feature UI
                which are widely used.
              </p>
            </div>
          </div>
        </div>
        <WaveBackground
          position="bottom"
          color="#ffedd5"
          className="!-bottom-2"
        />
      </section>

      {/* Quick Start Section */}
      <section className="relative py-16 md:py-24 ">
        {/* <WaveBackground position="top" color="#e0f2fe" /> */}
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-orange-100 via-orange-100 to-orange-100 -z-10"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="inline-block px-4 py-1 rounded-full bg-blue-100 text-blue-600 font-medium text-sm mb-6">
            Best HTML Development
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-neutral-700 mb-6 max-w-4xl mx-auto">
            Quick Start Project With
            <br />
            Code Partials & Template Scalability
          </h2>
          <p className="text-neutral-600 mb-16 max-w-2xl mx-auto">
            Convert HTML template easily with partial code and clean code
            structure. Its very easy to compile with flat file generators.
          </p>

          <div className="grid md:grid-cols-3 gap-8 space-y-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FileText className="w-8 h-8 text-red-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Bootstrap 5</h3>
              <p className="text-gray-600">
                Build on top of the mobile first responsive{" "}
                <span className="font-semibold">Bootstrap 5</span> framework. It
                has large community support and third parties support for style
                consistency.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Clock className="w-8 h-8 text-green-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Save Time And Money</h3>
              <p className="text-gray-600">
                Our well coded validated code structure provide flexibility and
                transparency to re-use code blocks.{" "}
                <span className="font-semibold">Save time and money</span> for
                customization and repeated tasks.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Link2 className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Make It Like Your Own</h3>
              <p className="text-gray-600">
                Our template has dedicated page where you can customize
                available style option for sidebar and header. Also choose style
                from pre-defined set of style{" "}
                <span className="font-semibold">personalize</span>.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Link2 className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Make It Like Your Own</h3>
              <p className="text-gray-600">
                Our template has dedicated page where you can customize
                available style option for sidebar and header. Also choose style
                from pre-defined set of style{" "}
                <span className="font-semibold">personalize</span>.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Link2 className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Make It Like Your Own</h3>
              <p className="text-gray-600">
                Our template has dedicated page where you can customize
                available style option for sidebar and header. Also choose style
                from pre-defined set of style{" "}
                <span className="font-semibold">personalize</span>.
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Link2 className="w-8 h-8 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold mb-4">Make It Like Your Own</h3>
              <p className="text-gray-600">
                Our template has dedicated page where you can customize
                available style option for sidebar and header. Also choose style
                from pre-defined set of style{" "}
                <span className="font-semibold">personalize</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* App Screenshots */}
      {/* <section className="py-16 md:py-24 relative">
        <div className="container mx-auto px-4">
          <div className="mb-16">
            <Image
              src="/images/f1.png"
              alt="App Screenshots"
              width={1200}
              height={400}
              className="w-full object-contain"
            />
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-2">12</h2>
              <p className="text-gray-600">Color schemes</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-2">100</h2>
              <p className="text-gray-600">Pages</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-2">50</h2>
              <p className="text-gray-600">Components</p>
            </div>

            <div>
              <h2 className="text-5xl font-bold text-gray-800 mb-2">∞</h2>
              <p className="text-gray-600">Possibilities</p>
            </div>
          </div>
        </div>

      </section> */}
    </main>
  );
}
