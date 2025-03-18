// import { CircleDot, Link2, Lock, Wallet } from "lucide-react";
// import { Button } from "@/components/ui/button";

// const features = [
//   {
//     title: "CARGO AIRPORTS",
//     icon: CircleDot,
//   },
//   {
//     title: "CARGO TERMINALS",
//     icon: Link2,
//   },
//   {
//     title: "SEA PORTS",
//     icon: Lock,
//   },
//   {
//     title: "LANDS PORTS",
//     icon: Wallet,
//   },
//   {
//     title: "ICD AND CFS",
//     icon: Wallet,
//   },
//   {
//     title: "FREIGHT FORWARDERS / CHA",
//     icon: Wallet,
//   },
//   {
//     title: "LOGISTICS SERVICE PROVIDERS",
//     icon: Wallet,
//   },
//   {
//     title: "EXPORTERS",
//     icon: Wallet,
//   },
//   {
//     title: "CONSIGNEES",
//     icon: Wallet,
//   },
//   {
//     title: "BANKING / 3RD PARTY SERVICES",
//     icon: Wallet,
//   },
// ];

// export default function Features() {
//   return (
//     <section className="w-full py-20 bg-white rounded-3xl px-6">
//       <div className="flex sm:flex-row flex-col text-center space-y-4 mb-16">
//         <div className="md:w-1/2 w-full">
//           <h2 className="text-2xl md:text-4xl font-bold text-left">
//             We Tried To Provide You With All Global Banking Services
//           </h2>
//         </div>
//         <div className="flex flex-col md:w-1/2 w-full">
//           <p className="text-muted-foreground max-w-2xl text-left">
//             To craft technological solutions thatsimplify and accelerate global
//             supply chainprocesses, provide data-driven insights,enable seamless
//             collaboration, fosterinnovation and promote sustainability.
//           </p>
//           <Button
//             variant="outline"
//             className="rounded-full mt-4 w-full sm:w-40 bg-neutral-900 text-white hover:bg-neutral-900/90 hover:text-white py-6"
//           >
//             Explore More →
//           </Button>
//         </div>
//       </div>

//       <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//         {features.map((feature) => (
//           <div
//             key={feature.title}
//             className="p-6 rounded-xl hover:bg-gray-50 items-center flex flex-col px-8 text-center"
//           >
//             <h3 className="font-medium mb-2">{feature.title}</h3>
//             <feature.icon className="h-12 w-12 text-[#F75F00] mb-4" />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Plane,
  Anchor,
  Truck,
  Building2,
  Container,
  Users,
  Briefcase,
  BadgeDollarSign,
} from "lucide-react";
import { cn } from "@/lib/utils";

export default function BankingServices() {
  const [activeTab, setActiveTab] = useState("transport");

  const categories = {
    transport: {
      name: "Transport & Logistics",
      features: [
        {
          icon: Plane,
          title: "Cargo Airports",
          description: "International air freight services",
        },
        {
          icon: Anchor,
          title: "Sea Ports",
          description: "Maritime shipping solutions",
        },
        {
          icon: Truck,
          title: "Land Ports",
          description: "Ground transportation network",
        },
      ],
    },
    operations: {
      name: "Operations",
      features: [
        {
          icon: Building2,
          title: "ICD and CFS",
          description: "Inland container depots",
        },
        {
          icon: Container,
          title: "Cargo Terminals",
          description: "Efficient cargo handling",
        },
        {
          icon: Users,
          title: "Freight Forwarders",
          description: "Expert logistics partners",
        },
      ],
    },
    services: {
      name: "Financial Services",
      features: [
        {
          icon: Briefcase,
          title: "Business Services",
          description: "End-to-end solutions",
        },
        {
          icon: BadgeDollarSign,
          title: "Banking Services",
          description: "Global financial network",
        },
      ],
    },
  };

  return (
    <div className="min-h-screen mt-20 rounded-3xl bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl md:text-6xl">
            DIGITAL CARGO OPERATING SYSTEM
          </h1>
          <p className="mt-6 max-w-2xl mx-auto text-lg text-slate-600 dark:text-slate-300">
            Crafting technological solutions that simplify and accelerate global
            supply chain processes, enabling seamless collaboration and
            sustainable innovation.
          </p>
        </div>

        <div className="flex justify-center space-x-4 mb-12">
          {Object.entries(categories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setActiveTab(key)}
              className={cn(
                "px-3 py-2 sm:px-6 sm:py-3  rounded-full text-sm font-medium transition-all duration-200",
                activeTab === key
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/30"
                  : "bg-white text-slate-600 hover:bg-orange-50 dark:bg-slate-800 dark:text-slate-200 dark:hover:bg-slate-700"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {categories[activeTab].features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative group"
              >
                <div className="bg-white dark:bg-slate-800 rounded-2xl p-8 shadow-xl shadow-slate-200/50 dark:shadow-none transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/10 hover:-translate-y-1">
                  <div className="mb-6 inline-flex p-4 bg-orange-50 dark:bg-slate-700 rounded-2xl">
                    <feature.icon className="w-8 h-8 text-orange-500" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900 dark:text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
