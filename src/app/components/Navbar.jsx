// // working
// "use client";
// import React, { useState } from "react";
// import {
//   HoveredLink,
//   Menu,
//   MenuItem,
//   ProductItem,
// } from "@/components/ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import Image from "next/image";
// import Link from "next/link";

// export function Navbar() {
//   return (
//     <div className="relative w-full flex items-center justify-center">
//       <NavbarDemo className="top-2" />
//       {/* <p className="text-black dark:text-white">
//         The Navbar will show on top of the page
//       </p> */}
//     </div>
//   );
// }

// function NavbarDemo({ className }) {
//   const [active, setActive] = useState(null);
//   return (
//     <div
//       className={cn(
//         "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50 ",
//         className
//       )}
//     >
//       <Menu setActive={setActive} className="text-neutral-800 ">
//         <Link href="/">
//           <Image src="/images/logo.png" width={150} height={200} />
//         </Link>
//         <Link href="/product">
//           <MenuItem
//             setActive={setActive}
//             active={null}
//             item="Product"
//           ></MenuItem>
//         </Link>
//         <Link href="/about">
//           <MenuItem setActive={setActive} active={null} item="About Us">
//             {/* <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/web-dev">Web Development</HoveredLink>
//             <HoveredLink href="/interface-design">Interface Design</HoveredLink>
//             <HoveredLink href="/seo">Search Engine Optimization</HoveredLink>
//             <HoveredLink href="/branding">Branding</HoveredLink>
//           </div> */}
//           </MenuItem>
//         </Link>
//         <Link href="/contact">
//           <MenuItem setActive={setActive} active={null} item="Contact">
//             {/* <div className="  text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//               title="Algochurn"
//               href="https://algochurn.com"
//               src="/images/test-logo.png"
//               description="Prepare for tech interviews like never before."
//             />
//             <ProductItem
//               title="Tailwind Master Kit"
//               href="https://tailwindmasterkit.com"
//               src="/images/test-logo.png"
//               description="Production ready Tailwind css components for your next project"
//             />
//             <ProductItem
//               title="Moonbeam"
//               href="https://gomoonbeam.com"
//               src="/images/test-logo.png"
//               description="Never write from scratch again. Go from idea to blog in minutes."
//             />
//             <ProductItem
//               title="Rogue"
//               href="https://userogue.com"
//               src="/images/test-logo.png"
//               description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//             />
//           </div> */}
//           </MenuItem>
//         </Link>

//         {/* <MenuItem setActive={setActive} active={null} item="Pricing">
//          <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem> */}
//       </Menu>
//     </div>
//   );
// }

"use client";
import React, { useState } from "react";
import { Menu, MenuItem } from "@/components/ui/navbar-menu"; // Adjust import paths to match your project
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Menu as MenuIcon, X } from "lucide-react";

export function Navbar() {
  const [active, setActive] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed top-2 inset-x-0 max-w-2xl mx-auto z-50">
      {/* 
        MOBILE NAVBAR
        Shown on screens smaller than md. 
      */}
      <div className="flex justify-between items-center px-6 py-4 bg-gray-50 rounded-lg shadow-md md:hidden">
        <Link href="/">
          <Image src="/images/logo2.png" width={100} height={100} alt="Logo" />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* 
        DESKTOP NAVBAR
        Hidden on screens smaller than md. 
      */}
      <Menu setActive={setActive} className="hidden md:flex text-neutral-800">
        <Link href="/">
          <Image src="/images/logo2.png" width={150} height={200} alt="Logo" />
        </Link>
        {/* <div className="hidden md:flex space-x-6"> */}
        <Link href="/product">
          <MenuItem setActive={setActive} active={null} item="Product" />
        </Link>
        <Link href="/about">
          <MenuItem setActive={setActive} active={null} item="About Us" />
        </Link>
        <Link href="/contact">
          <MenuItem setActive={setActive} active={null} item="Contact" />
        </Link>
        {/* <MenuItem setActive={setActive} active={null} item="Pricing" /> */}
        {/* </div> */}
      </Menu>

      {/* 
        MOBILE DROPDOWN MENU
        Visible when hamburger is clicked. 
      */}
      {isOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-lg rounded-md p-4 space-y-4">
          <Link
            href="/product"
            onClick={() => setIsOpen(false)}
            className="block text-center"
          >
            Product
          </Link>
          <Link
            href="/about"
            onClick={() => setIsOpen(false)}
            className="block text-center"
          >
            About Us
          </Link>
          <Link
            href="/contact"
            onClick={() => setIsOpen(false)}
            className="block text-center"
          >
            Contact
          </Link>
        </div>
      )}
    </div>
  );
}

// "use client";

// import React, { useState, useEffect } from "react";
// import {
//   HoveredLink,
//   Menu,
//   MenuItem,
//   ProductItem,
// } from "@/components/ui/navbar-menu";
// import { cn } from "@/lib/utils";
// import Image from "next/image";

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//       } else {
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <div className="fixed top-0 left-0 right-0 z-50">
//       <NavbarDemo isScrolled={isScrolled} />
//     </div>
//   );
// }

// function NavbarDemo({ isScrolled }) {
//   const [active, setActive] = useState(null);

//   return (
//     <div
//       className={cn(
//         "transition-all duration-300 ease-in-out",
//         isScrolled ? "max-w-2xl mx-auto" : "w-full"
//       )}
//     >
//       <Menu
//         setActive={setActive}
//         className={cn(
//           "bg-neutral-800 transition-all duration-300 ease-in-out",
//           isScrolled ? "rounded-full mt-4" : "rounded-none"
//         )}
//       >
//         <Image src="/images/logo.svg" width={100} height={100} alt="Logo" />
//         <MenuItem setActive={setActive} active={active} item="Product" />
//         <MenuItem setActive={setActive} active={active} item="About Us" />
//         <MenuItem setActive={setActive} active={active} item="Products">
//           <div className="text-sm grid grid-cols-2 gap-10 p-4">
//             <ProductItem
//               title="Algochurn"
//               href="https://algochurn.com"
//               src="/images/DFOS.svg"
//               description="Prepare for tech interviews like never before."
//             />
//             <ProductItem
//               title="Tailwind Master Kit"
//               href="https://tailwindmasterkit.com"
//               src="/images/DFOS.svg"
//               description="Production ready Tailwind css components for your next project"
//             />
//             <ProductItem
//               title="Moonbeam"
//               href="https://gomoonbeam.com"
//               src="/images/DFOS.svg"
//               description="Never write from scratch again. Go from idea to blog in minutes."
//             />
//             <ProductItem
//               title="Rogue"
//               href="https://userogue.com"
//               src="/images/DFOS.svg"
//               description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
//             />
//           </div>
//         </MenuItem>
//         <MenuItem setActive={setActive} active={active} item="Pricing">
//           <div className="flex flex-col space-y-4 text-sm">
//             <HoveredLink href="/hobby">Hobby</HoveredLink>
//             <HoveredLink href="/individual">Individual</HoveredLink>
//             <HoveredLink href="/team">Team</HoveredLink>
//             <HoveredLink href="/enterprise">Enterprise</HoveredLink>
//           </div>
//         </MenuItem>
//       </Menu>
//     </div>
//   );
// }
